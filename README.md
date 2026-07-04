# TiCHub Website

Landing corporativa de TiCHub construida con Astro y Tailwind CSS v4.

## Stack

- Astro 5
- Tailwind CSS 4 (plugin para Vite)
- TypeScript (config strict de Astro)

## Requisitos

- Node.js 20+
- npm 10+ (o pnpm)

## Desarrollo local

Instalar dependencias:

```bash
npm install
```

Arrancar servidor de desarrollo (segun flujo del proyecto):

```bash
astro dev --background
```

Gestion del servidor en background:

```bash
astro dev status
astro dev logs
astro dev stop
```

Alternativa con scripts npm:

```bash
npm run dev
```

## Build de produccion

```bash
npm run build
```

Salida generada en la carpeta dist.

Preview local del build:

```bash
npm run preview
```

## Estructura principal

```text
.
|- public/
|  |- images/
|- src/
|  |- components/
|  |  |- mockups/
|  |- layouts/
|  |- pages/
|  |- styles/
|- astro.config.mjs
|- package.json
|- tsconfig.json
```

## Despliegue en Cloudflare Pages

Configuracion recomendada:

- Build command: npm run build
- Build output directory: dist
- Node version: 20
- Framework preset: Astro

Con el repositorio conectado a Cloudflare Pages, cada push a la rama de produccion (por ejemplo, main) dispara deploy automatico.

## Scripts disponibles

- npm run dev
- npm run build
- npm run preview
- npm run astro

## Documentacion

- Astro docs: https://docs.astro.build
