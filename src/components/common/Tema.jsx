import { useEffect } from 'react'
import { CONTENIDO } from '../../config/contenido'
import { generarTema, obtenerPaleta } from '../../config/tema'

const Tema = () => {
  const colorNavegador = obtenerPaleta(CONTENIDO.colores).fondo
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', colorNavegador)
  }, [colorNavegador])
  return <style data-tema-web>{generarTema(CONTENIDO.colores)}</style>
}

export default Tema
