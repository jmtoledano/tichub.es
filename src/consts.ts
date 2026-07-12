export const SITE = {
  name: "TicHub",
  tagline: "Gestión de material para centros educativos",
  description:
    "Centraliza inventario, préstamos, incidencias, consumibles, compras y documentación técnica en una plataforma clara, trazable y pensada para el día a día de un centro educativo.",
  url: "https://tichub.es",
}

// Datos del titular del sitio (art. 10 LSSI), usados en Aviso Legal, Política
// de Privacidad y Política de Cookies.
export const COMPANY = {
  legalName: "BAUDES S.L.",
  cif: "B86975372",
  address: "Calle Castilla la Nueva, 37, 3º B, Fuenlabrada (Madrid)",
  registry:
    "Registro Mercantil de Madrid, Tomo 32158, Folio 61, Sección 8, Hoja M-578687, Inscripción 1",
  rgpdEmail: "RGPD@BAUDES.ES",
}

// Umami Cloud (analítica sin cookies). El script se sirve como
// type="text/plain" y solo se activa cuando se acepta la categoría
// "analytics" del consentimiento — ver components/Analytics.astro.
export const UMAMI_WEBSITE_ID = "15552168-dd40-4d0c-9517-2b594d6aac20"

// Los enlaces de navegación se usan tanto en la portada como en las páginas
// legales, así que apuntan siempre a "/#ancla" en vez de "#ancla".
export const NAV_LINKS = [
  { label: "Funcionalidades", href: "/#funcionalidades" },
  { label: "Capturas", href: "/#capturas" },
  { label: "Precios", href: "/#precios" },
  { label: "Documentación", href: "/#documentacion" },
]

export const LEGAL_LINKS = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-privacidad" },
  { label: "Política de cookies", href: "/politica-cookies" },
]

// Content for the "Capturas" section — each title maps to a hand-built mockup
// component in Screenshots.astro (not an actual image file).
export const SCREENSHOTS = [
  {
    title: "Inventario",
    description:
      "Cada equipo con su referencia, categoría, ubicación y estado (disponible, en préstamo o desaparecido), más catálogos de categorías, ubicaciones y proveedores.",
  },
  {
    title: "Incidencias",
    description:
      "Averías con prioridad, equipo afectado, departamento, persona asignada y estado (abierta o asignada), con el tiempo transcurrido desde la apertura.",
  },
  {
    title: "Préstamos",
    description:
      "Préstamos multiartículo con prestatario, período, fecha de devolución y estado (activo, devolución parcial o vencido) resaltando lo que se pasa de plazo.",
  },
  {
    title: "Compras",
    description:
      "Peticiones con presupuestos de varios proveedores, pedidos, recepción del material y cierre con factura, todo trazado desde que alguien pide algo hasta que llega.",
  },
  {
    title: "Consumibles",
    description:
      "Material fungible con tipo, stock disponible y aviso automático cuando algo se está agotando, con historial completo de entradas y salidas.",
  },
  {
    title: "Auditoría",
    description:
      "Quién hizo qué y cuándo en cada módulo, con filtros por usuario, módulo y fecha, y exportación a CSV.",
  },
]

// Modules shown in the stylized dashboard mockup in the hero
export const MODULES = [
  {
    title: "Inventario",
    icon: "box",
    badges: [] as { label: string; tone: string }[],
  },
  {
    title: "Préstamos",
    icon: "loan",
    badges: [
      { label: "5 activos", tone: "blue" },
      { label: "3 vencidos", tone: "red" },
    ],
  },
  {
    title: "Incidencias",
    icon: "alert",
    badges: [
      { label: "13 pendientes", tone: "blue" },
      { label: "1 cerrada", tone: "green" },
    ],
  },
  {
    title: "Consumibles",
    icon: "package",
    badges: [
      { label: "2 en préstamo", tone: "blue" },
      { label: "6 con stock bajo", tone: "amber" },
    ],
  },
  {
    title: "Compras",
    icon: "cart",
    badges: [
      { label: "5 pendientes", tone: "blue" },
      { label: "2 vencidas", tone: "red" },
    ],
  },
  {
    title: "Usuarios",
    icon: "users",
    badges: [{ label: "128 activos", tone: "blue" }] as { label: string; tone: string }[],
  },
]
// Nota: Base de conocimiento y Auditoría no aparecen en este mockup a propósito —
// con 8 módulos la rejilla pasaba a 3 filas y descompensaba el Hero. Los 8 siguen
// presentes en FEATURES y SCREENSHOTS; aquí solo se cura una muestra de 6.

export const PROBLEMS = [
  {
    title: "Préstamos sin control",
    description: "Material apuntado en hojas sueltas, mensajes o de memoria, sin saber qué está fuera ni desde cuándo.",
    icon: "loan",
  },
  {
    title: "Incidencias dispersas",
    description: "Averías repartidas entre correos, chats y conversaciones de pasillo que se pierden sin resolver.",
    icon: "alert",
  },
  {
    title: "Consumibles sin stock claro",
    description: "Nadie sabe cuánto tóner, cable o material fungible queda hasta que se agota en el peor momento.",
    icon: "package",
  },
  {
    title: "Compras sin seguimiento",
    description: "Peticiones, presupuestos y pedidos repartidos entre correos y hojas de cálculo, sin saber en qué punto está cada uno.",
    icon: "cart",
  },
  {
    title: "Inventario desactualizado",
    description: "Equipos que cambian de aula, se prestan o desaparecen sin quedar reflejado en ningún sitio.",
    icon: "box",
  },
  {
    title: "Documentación repartida",
    description: "Manuales, soluciones y configuraciones técnicas guardadas en carpetas personales imposibles de encontrar.",
    icon: "book",
  },
]

export const FEATURES = [
  {
    title: "Inventario",
    description: "Material inventariable, ubicaciones, proveedores, facturas, fotos e historial completo de cada equipo.",
    icon: "box",
  },
  {
    title: "Préstamos",
    description: "Préstamos multiartículo, devoluciones parciales, control de vencimientos y trazabilidad de cada movimiento.",
    icon: "loan",
  },
  {
    title: "Incidencias",
    description: "Comunicación, asignación, comentarios, reapertura y relación con el material afectado.",
    icon: "alert",
  },
  {
    title: "Consumibles",
    description: "Stock, entradas, salidas, préstamos, devoluciones y avisos automáticos de stock bajo.",
    icon: "package",
  },
  {
    title: "Compras",
    description: "Peticiones con presupuestos de varios proveedores, pedidos, recepción del material y cierre con factura.",
    icon: "cart",
  },
  {
    title: "Base de conocimiento",
    description: "Documentos internos, soluciones recurrentes, adjuntos y visibilidad segmentada por roles.",
    icon: "book",
  },
  {
    title: "Auditoría",
    description: "Registro de acciones clave del sistema: quién hizo qué y cuándo, sin ambigüedades.",
    icon: "clipboard",
  },
  {
    title: "Copias de seguridad",
    description:
      "Copias diarias cifradas y deduplicadas, con retención de hasta un año y restauración con doble confirmación cuando hace falta.",
    icon: "database",
  },
  {
    title: "Etiquetas imprimibles",
    description: "Códigos de barras en hojas A4 configurables, con impresión individual o masiva desde el propio inventario.",
    icon: "tag",
  },
  {
    title: "Libro de inventario oficial",
    description: "Exportación en Excel y PDF con altas, bajas y su motivo, lista para firmar y presentar ante la administración.",
    icon: "spreadsheet",
  },
  {
    title: "Resguardo de préstamo",
    description: "Justificante en PDF para firmar en la entrega, con el material prestado, los consumibles y hueco para material adicional.",
    icon: "receipt",
  },
]

export const PHILOSOPHY = [
  "Interfaz pensada para profesorado y personal técnico, no para especialistas.",
  "Permisos por rol para que cada persona vea solo lo que necesita.",
  "Importaciones CSV/XLSX para arrancar sin teclear equipo por equipo.",
  "Trazabilidad completa sin complicar el uso diario.",
  "Nos ocupamos del alojamiento: el centro recibe sus credenciales y empieza a trabajar.",
  "Sin instalar ni mantener nada: todo funciona sobre nuestra infraestructura.",
]

export const PRICING = [
  {
    name: "Demo",
    price: "Gratis",
    period: "acceso temporal",
    description: "Para conocer la plataforma sin compromiso.",
    features: ["Acceso temporal de prueba", "Datos de ejemplo precargados", "Todos los módulos activos"],
    cta: "Solicitar demo",
    featured: false,
  },
  {
    name: "Centro gestionado",
    price: "34,99 €",
    period: "por centro / mes",
    description: "Todo incluido y alojado por nosotros. El centro solo recibe sus credenciales.",
    features: [
      "Usuarios ilimitados",
      "Alojamiento gestionado en nuestra infraestructura",
      "Todos los módulos activos",
      "Actualizaciones incluidas",
      "Copias de seguridad diarias, cifradas y deduplicadas",
      "Soporte por correo",
    ],
    cta: "Empezar ahora",
    featured: true,
  },
  {
    name: "Red de centros",
    price: "A medida",
    period: "desde 199,99 € / mes",
    description: "Para agrupaciones de centros o administraciones con varios espacios.",
    features: [
      "Todo lo del plan Centro",
      "Alta de varios centros",
      "Monitorización activa",
      "Copias externas adicionales",
      "Soporte prioritario",
    ],
    cta: "Hablar",
    featured: false,
  },
]

export const DOCS = [
  { title: "Primeros pasos", icon: "book" },
  { title: "Roles y permisos", icon: "users" },
  { title: "Importaciones CSV/XLSX", icon: "csv" },
  { title: "Inventario y préstamos", icon: "box" },
  { title: "Incidencias y consumibles", icon: "alert" },
  { title: "Copias de seguridad", icon: "database" },
]
