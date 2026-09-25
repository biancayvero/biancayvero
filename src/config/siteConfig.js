import { CONTENIDO } from './contenido'

// El contenido se edita exclusivamente en contenido.js.
export const getWhatsAppHref = () => {
  const { numero, mensaje } = CONTENIDO.whatsapp
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
}
