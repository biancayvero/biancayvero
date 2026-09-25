# Landing de Vero y Bianca

## Un único sitio para editar

Abre **`src/config/contenido.js`**. Todo el contenido editable está ahí.
Los comentarios numerados siguen la portada de arriba abajo:

| Número | Contenido |
| --- | --- |
| 0 | Paleta de colores y tonos de toda la web |
| 1 | Número, mensaje, icono y botón flotante de WhatsApp |
| 2 | Imagen principal y descripción |
| 3–7 | Saludo, título, párrafos y botones |
| 8–10 | Tarjetas de presentación |
| 11–19 | Títulos, fotos, etiquetas y botón de la galería |
| 20–24 | Preguntas y respuestas |
| 25–27 | Título, párrafo y botón final |
| 28–30 | Pie de página, nombre y ciudad |
| 31 | Aviso de mayoría de edad |
| 32 | Título de pestaña, buscadores, iconos y vista previa social |
| 33 | Enlaces, títulos y párrafos de las páginas legales |

### 0. Cambiar los colores de toda la web

El primer bloque de `contenido.js` es `colores`. La propiedad `paleta` elige
qué conjunto de colores utilizar. Actualmente está seleccionada `fucsiaMoradoClaro`.
Para probar los tonos claros de fucsia y morado, cambia esa línea a:

```js
paleta: 'fucsiaMoradoClaro',
```

Debajo están los colores de ambas paletas, con comentarios que explican cada uno.
Puedes editar fondos, superficies, texto, tonos principales, acentos, texto de botones,
bordes, brillos, sombras y colores del visor de fotos. Usa valores de seis cifras
como `#fff5fd`. Los degradados, transparencias y estados al pasar el ratón se
calculan a partir de esos colores, sin editar los CSS. El fondo también controla
el color de la barra del navegador. Las fotografías e iconos cargados como archivos
conservan sus colores originales.

Para crear otra paleta, copia una completa dentro de `paletas`, dale otro nombre
y selecciónalo en `paleta`. Mantén contraste entre textos y fondos; aclarar el fondo
normalmente requiere oscurecer el texto, como en el ejemplo incluido.

### 1. Cambiar el número de WhatsApp

En el bloque 1 de `contenido.js`, edita `whatsapp.numero`. Ese único número
controla todos los botones de WhatsApp. Incluye el prefijo internacional,
sin `+`, espacios ni guiones. El mensaje inicial se cambia en `whatsapp.mensaje`.

### Cambiar una frase

Modifica únicamente el texto entre comillas y conserva las comas y llaves.
Si necesitas un apóstrofo dentro de comillas simples, escribe `\'`.
Los párrafos están separados en una lista: puedes añadir o quitar elementos.
El navegador ajusta las líneas según el ancho de pantalla.
Cambiar el nombre o la ciudad del pie no reescribe las frases de otras secciones:
cada texto es independiente y se controla desde este mismo archivo.

### Cambiar una imagen

1. Guarda tu nueva foto en `public/imagenes`, por ejemplo `retrato.jpg`.
2. En el bloque correspondiente de `contenido.js`, escribe `/imagenes/retrato.jpg`.
3. Edita también su descripción (`descripcion` o `alt`) y, en la galería, su etiqueta (`tone`).

La ruta no lleva `public`. También se admiten URLs completas `https://...`.
Para añadir fotos, copia un objeto de la lista `galeria.imagenes` y cambia sus datos.
Para quitarlas o reordenarlas, elimina o mueve esos objetos. La primera es la destacada.
Las fotografías originales en `src/images/editorial` se conservan como referencia;
la web utiliza ahora las de `public/imagenes`.

### Ver y publicar cambios

- `npm install`: instalar dependencias.
- `npm run dev`: abrir la web en desarrollo; guardar el contenido actualiza la página.
- `npm run lint`: comprobar el código.
- `npm run build`: generar la web publicable en `dist`.
- `npm run preview`: revisar la compilación localmente.

Los metadatos se generan desde el bloque `seo` mediante Vite, por lo que están
en el HTML publicado sin depender de que el visitante ejecute JavaScript.
Usa una URL pública absoluta en `seo.url`. Los enlaces de las páginas legales
deben mantener sus rutas actuales salvo que también se cambien las rutas de la aplicación.

Esto es edición de contenido en un archivo; no incluye un panel de administración.
Después de editar hay que volver a compilar y publicar para actualizar la web alojada.

## Estructura técnica

React 19, React Router y Vite. Estilos globales y CSS Modules.
`src/config/siteConfig.js` construye los enlaces de WhatsApp a partir del contenido.
`src/sections` renderiza las secciones; `src/layout` compone cabecera, cuerpo y pie.
La confirmación de edad utiliza almacenamiento local. Las rutas legales siguen
disponibles sin aceptar el aviso. `public/_redirects` permite las rutas SPA en Netlify.
