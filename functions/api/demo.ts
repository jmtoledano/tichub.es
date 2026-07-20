// Cloudflare Pages Function — recibe el formulario "Solicitar demo" y lo reenvía
// al Worker independiente "tichub-email-worker" (ver /worker-email), que es quien
// realmente envía el email. Esta indirección existe porque el binding nativo
// "Send Email" no está disponible para Pages Functions, solo para Workers.
interface Env {
  EMAIL_WORKER: { fetch(request: Request): Promise<Response> }
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const { request, env } = context

  if (!env.EMAIL_WORKER) {
    return new Response(
      JSON.stringify({ ok: false, error: "El formulario no está configurado todavía. Inténtalo más tarde." }),
      { status: 500, headers: { "content-type": "application/json; charset=utf-8" } },
    )
  }

  return env.EMAIL_WORKER.fetch(request)
}
