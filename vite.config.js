import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { CONTENIDO } from './src/config/contenido.js'
import { generarTema, obtenerPaleta } from './src/config/tema.js'

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character])

const contenidoHtml = () => ({
  name: 'contenido-html',
  transformIndexHtml: {
    order: 'pre',
    handler(html) {
      const seo = {
        ...CONTENIDO.seo,
        colorNavegador: obtenerPaleta(CONTENIDO.colores).fondo,
        imagenSocialAbsoluta: new URL(CONTENIDO.seo.imagenSocial, CONTENIDO.seo.url).href,
      }
      const pagina = html.replace(/\{\{(\w+)\}\}/g, (_, key) => {
        if (!(key in seo)) throw new Error(`Contenido SEO desconocido: ${key}`)
        return escapeHtml(seo[key])
      })
      return { html: pagina, tags: [{ tag: 'style', attrs: { 'data-tema-inicial': '' }, children: generarTema(CONTENIDO.colores), injectTo: 'head' }] }
    },
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contenidoHtml()],
})
