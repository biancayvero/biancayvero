// Conexión técnica entre la paleta de contenido.js y los estilos de la web.
// Para cambiar colores, edita únicamente el bloque 0 de contenido.js.
const VARIABLES = {
  fondo: 'color-bg', fondoSuperior: 'page-top', fondoInferior: 'page-bottom',
  superficie: 'color-surface', superficieElevada: 'color-surface-strong',
  texto: 'color-text', textoSecundario: 'color-muted',
  principal: 'color-primary', principalClaro: 'color-primary-hover',
  principalFuerte: 'button-end', acento: 'color-accent', acentoTexto: 'accent-text',
  textoBoton: 'color-ink', borde: 'border-base', brillo: 'shine',
  sombra: 'shadow-base', fondoVisor: 'viewer-bg',
  superficieVisor: 'viewer-surface', textoVisor: 'viewer-text',
}

export const obtenerPaleta = (colores) => {
  const paleta = colores.paletas[colores.paleta]
  if (!paleta) throw new Error(`La paleta "${colores.paleta}" no existe en el bloque 0 de contenido.js.`)
  for (const key of Object.keys(VARIABLES)) {
    if (!/^#[\da-f]{6}$/i.test(paleta[key])) {
      throw new Error(`Color incorrecto en el bloque 0: ${key}. Usa el formato #rrggbb.`)
    }
  }
  return paleta
}

export const generarTema = (colores) => {
  const paleta = obtenerPaleta(colores)
  const variables = Object.entries(VARIABLES).map(([key, variable]) => `--${variable}:${paleta[key]};`)
  return `:root{${variables.join('')}color-scheme:${esClaro(paleta.fondo) ? 'light' : 'dark'};}`
}

const esClaro = (hex) => {
  const [r, g, b] = hex.slice(1).match(/../g).map((value) => parseInt(value, 16))
  return r * 0.299 + g * 0.587 + b * 0.114 > 150
}
