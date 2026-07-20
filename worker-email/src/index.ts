// Worker independiente — solo se encarga de enviar el email de "Solicitar demo".
// Vive aparte de tichub.es (que es un proyecto Pages) porque el binding nativo
// "Send Email" de Cloudflare únicamente está disponible para Workers, no para
// Pages Functions. El Pages Function (functions/api/demo.ts) llama a este Worker
// a través de un Service Binding.
import { createMimeMessage } from "mimetext"
// @ts-expect-error — módulo virtual que solo existe en el runtime de Cloudflare
import { EmailMessage } from "cloudflare:email"

export interface Env {
  EMAIL: { send(message: unknown): Promise<void> }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const FROM_ADDRESS = "noreply@tichub.es"
const TO_ADDRESS = "contacto@tichub.es"

function jsonResponse(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "POST") {
      return jsonResponse({ ok: false, error: "Método no permitido." }, 405)
    }

    let data: Record<string, unknown>
    try {
      data = await request.json()
    } catch {
      return jsonResponse({ ok: false, error: "Formulario inválido." }, 400)
    }

    const nombre = String(data.nombre ?? "").trim()
    const email = String(data.email ?? "").trim()
    const centro = String(data.centro ?? "").trim()
    const mensaje = String(data.mensaje ?? "").trim()
    // Honeypot: campo oculto para personas, que los bots de spam suelen rellenar.
    const honeypot = String(data.web ?? "").trim()

    if (honeypot) {
      // No delatamos la trampa: respondemos éxito sin enviar nada.
      return jsonResponse({ ok: true }, 200)
    }

    if (!nombre || !email || !centro) {
      return jsonResponse({ ok: false, error: "Faltan campos obligatorios." }, 400)
    }
    if (!EMAIL_RE.test(email)) {
      return jsonResponse({ ok: false, error: "El email no parece válido." }, 400)
    }

    const msg = createMimeMessage()
    msg.setSender({ addr: FROM_ADDRESS, name: "TicHub — Formulario web" })
    msg.setRecipient(TO_ADDRESS)
    msg.setSubject(`Solicitud de demo — ${nombre} (${centro})`)
    msg.addMessage({
      contentType: "text/plain",
      data:
        `Nueva solicitud de demo desde tichub.es\n\n` +
        `Nombre: ${nombre}\n` +
        `Email: ${email}\n` +
        `Centro educativo: ${centro}\n` +
        `Mensaje: ${mensaje || "(sin mensaje)"}\n`,
    })

    try {
      const message = new EmailMessage(FROM_ADDRESS, TO_ADDRESS, msg.asRaw())
      await env.EMAIL.send(message)
    } catch (err) {
      console.error("Error enviando email de solicitud de demo:", err)
      return jsonResponse({ ok: false, error: "No se pudo enviar el mensaje. Inténtalo de nuevo." }, 500)
    }

    return jsonResponse({ ok: true }, 200)
  },
}
