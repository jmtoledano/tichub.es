export const SITE = {
  name: "TicHub",
  tagline: "Gestión de material para centros educativos",
  description:
    "TicHub centraliza el inventario, los préstamos, las incidencias, los consumibles y la documentación técnica de un centro educativo en una plataforma clara, trazable y fácil de usar.",
  url: "https://tichub.es",
}

export const NAV_LINKS = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Capturas", href: "#capturas" },
  { label: "Precios", href: "#precios" },
  { label: "Documentación", href: "#documentacion" },
]

// Real product screenshots shown in the Features section
export const SCREENSHOTS = [
  {
    src: "/images/captura-inventario.png",
    alt: "Listado de inventario de TicHub con artículos, referencias, categorías, ubicaciones y estados",
    title: "Inventario",
    description:
      "Cada equipo con su referencia, categoría, ubicación y estado (disponible, en préstamo o desaparecido), más catálogos de categorías, ubicaciones y proveedores.",
  },
  {
    src: "/images/captura-incidencias.png",
    alt: "Listado de incidencias de TicHub con prioridad, departamento, asignación y estado",
    title: "Incidencias",
    description:
      "Averías con prioridad, equipo afectado, departamento, persona asignada y estado (abierta o asignada), con el tiempo transcurrido desde la apertura.",
  },
  {
    src: "/images/captura-prestamos.png",
    alt: "Listado de préstamos de TicHub con prestatario, artículos, período y estado",
    title: "Préstamos",
    description:
      "Préstamos multiartículo con prestatario, período, fecha de devolución y estado (activo, devolución parcial o vencido) resaltando lo que se pasa de plazo.",
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
    title: "Base de conocimiento",
    icon: "book",
    badges: [] as { label: string; tone: string }[],
  },
  {
    title: "Auditoría",
    icon: "clipboard",
    badges: [] as { label: string; tone: string }[],
  },
]

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
    title: "Backups",
    description: "Copias de seguridad y recuperación documentada para no depender de la memoria de nadie.",
    icon: "database",
  },
  {
    title: "Configuración",
    description: "Ajustes del centro, correo, sesión y parámetros operativos del día a día.",
    icon: "settings",
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
    name: "Centro",
    price: "Desde consulta",
    period: "por centro / año",
    description: "Todo incluido y alojado por nosotros. El centro solo recibe sus credenciales.",
    features: [
      "Alojamiento gestionado en nuestra infraestructura",
      "Todos los módulos activos",
      "Actualizaciones incluidas",
      "Copias de seguridad automáticas",
      "Soporte por correo",
    ],
    cta: "Consultar precio",
    featured: true,
  },
  {
    name: "Red de centros",
    price: "A medida",
    period: "varios centros",
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
