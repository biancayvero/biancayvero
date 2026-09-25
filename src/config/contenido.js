/*
 * EDITA EL CONTENIDO DE TODA LA WEB AQUÍ.
 * Los números siguen el orden de la portada, de arriba abajo.
 * Cambia el texto entre comillas; conserva las comas y las llaves.
 * Imágenes: guarda el archivo en public/imagenes y escribe '/imagenes/nombre.jpg'.
 * También puedes usar una URL completa https://... para una imagen.
 * Cada párrafo es independiente. Las líneas se ajustan al tamaño de pantalla.
 * Guarda para ver cambios con npm run dev. Para publicar, ejecuta npm run build.
 */
export const CONTENIDO = {
  // 0.- COLORES Y TONOS DE LA WEB
  // Elige 'actual' o 'fucsiaMoradoClaro'. Luego ajusta los colores de esa paleta.
  // Todos los fondos, textos, botones, bordes y sombras derivan de estos valores.
  // Usa colores hexadecimales de 6 cifras (#rrggbb). No cambia el color de las fotos.
  colores: {
    paleta: 'fucsiaMoradoClaro',
    paletas: {
      actual: {
        fondo: '#100f12',          // Fondo central y barra del navegador
        fondoSuperior: '#1a1415',  // Inicio del degradado de la página
        fondoInferior: '#09090b',  // Final del degradado
        superficie: '#221b1c',     // Tarjetas, preguntas y paneles
        superficieElevada: '#291b1c', // Presentación, contacto y aviso de edad
        texto: '#f7ecde',          // Títulos y texto principal
        textoSecundario: '#ccb8a2', // Párrafos y pie
        principal: '#df8f67',      // Destellos y bordes destacados
        principalClaro: '#efab7d', // Inicio del degradado de los botones
        principalFuerte: '#c97359', // Final del degradado de los botones
        acento: '#6f8f89',         // Segundo tono decorativo
        acentoTexto: '#9bc0bb',    // Iconos y foco de preguntas
        textoBoton: '#241718',     // Texto sobre los botones principales
        borde: '#daac80',          // Bordes de las secciones
        brillo: '#ffffff',        // Reflejos y detalles sutiles
        sombra: '#000000',         // Sombras de tarjetas y botones
        fondoVisor: '#060607',     // Fondo que rodea una foto ampliada
        superficieVisor: '#0c0e12', // Botones y etiquetas sobre las fotos
        textoVisor: '#ffffff',     // Texto sobre las fotos
      },
      // Ejemplo listo para usar: cambia arriba paleta a 'fucsiaMoradoClaro'.
      fucsiaMoradoClaro: {
        fondo: '#f8d9ee',
        fondoSuperior: '#efb8dd',
        fondoInferior: '#ede7ff',
        superficie: '#fff3fb',
        superficieElevada: '#f2cbe7',
        texto: '#361344',
        textoSecundario: '#694573',
        principal: '#a91b87',
        principalClaro: '#e77ac5',
        principalFuerte: '#c4a4f4',
        acento: '#9966d4',
        acentoTexto: '#7431a5',
        textoBoton: '#361344',
        borde: '#b779cd',
        brillo: '#ffffff',
        sombra: '#713b86',
        fondoVisor: '#251333',
        superficieVisor: '#361344',
        textoVisor: '#ffffff',
      },
    },
  },

  // 1.- NÚMERO DE WHATSAPP PARA TODA LA WEB
  // Cambia solo numero: se aplica a presentación, galería, contacto final y botón flotante.
  whatsapp: {
    numero: '34650347741', // Prefijo internacional, sin +, espacios ni guiones.
    mensaje: '¡Hola, Vero y Bianca! He visto vuestra web y me apetece conoceros.',
    textoFlotante: 'WhatsApp',
    descripcionFlotante: 'Hablar con nosotras por WhatsApp',
    icono: '/imagenes/whatsapp.svg',
  },

  // 2.- IMAGEN PRINCIPAL — foto, descripción y etiquetas del botón de ampliación
  cabecera: {
    imagen: '/imagenes/mainImage.jpg',
    descripcion: 'Imagen principal de la cabecera',
    ampliar: 'Ampliar imagen principal',
    reducir: 'Reducir imagen principal',
  },

  presentacion: {
    // 3. Frase de presentación
    saludo: 'Hola, somos Vero y Bianca',
    // 4. Título principal
    titulo: 'Dos amigas, muchas risas y buen rollo',
    // 5. Párrafos de presentación (puedes añadir o quitar elementos)
    parrafos: [
      'Nos gusta conocer gente, reírnos y compartir buenos momentos. ¿Te apuntas?',
    ],
    // 6. Botón de contacto / 7. Botón de galería
    botonContacto: 'Habla con nosotras por WhatsApp',
    botonGaleria: 'Ver galería',
    tarjetas: [
      // 8. Primera tarjeta: etiqueta y frase
      { etiqueta: 'SOBRE NOSOTRAS', texto: 'Dos amigas con ganas de reír y conocer gente.' },
      // 9. Segunda tarjeta
      { etiqueta: 'NUESTROS PLANES', texto: 'Un café, un paseo y una buena conversación.' },
      // 10. Tercera tarjeta
      { etiqueta: 'QUÉ BUSCAMOS', texto: 'Nuevas amistades con buen humor y buen rollo.' },
    ],
  },

  galeria: {
    // 11. Etiqueta / 12. Título de la galería
    etiqueta: 'Galería',
    titulo: 'Algunos de nuestros momentos y aventuras juntas',
    // Puedes añadir, quitar o reordenar fotos. La primera ocupa el lugar destacado.
    imagenes: [
      // 13. Primera foto: archivo, descripción accesible y texto sobre la foto
      { src: '/imagenes/poster-1.jpg', alt: 'Imagen de nuestra galería 1', tone: 'Madrid' },
      // 14. Segunda foto
      { src: '/imagenes/poster-2.jpg', alt: 'Imagen de nuestra galería 2', tone: 'Nieve' },
      // 15. Tercera foto
      { src: '/imagenes/poster-3.jpg', alt: 'Imagen de nuestra galería 3', tone: 'Montaña' },
      // 16. Cuarta foto
      { src: '/imagenes/poster-4.jpg', alt: 'Imagen de nuestra galería 4', tone: 'Ciudad' },
      // 17. Quinta foto
      { src: '/imagenes/poster-5.jpg', alt: 'Imagen de nuestra galería 5', tone: 'Barcelona' },
      // 18. Sexta foto
      { src: '/imagenes/poster-6.jpg', alt: 'Imagen de nuestra galería 6', tone: 'Parque' },
    ],
    // 19. Botón bajo la galería
    botonContacto: 'Habla con nosotras por WhatsApp',
    controles: {
      abrir: 'Abrir {imagen} en grande', // Conserva {imagen}: se sustituye por la descripción.
      cerrar: 'Cerrar imagen',
      anterior: 'Imagen anterior',
      siguiente: 'Imagen siguiente',
    },
  },

  preguntas: {
    // 20. Título de preguntas frecuentes
    titulo: 'Preguntas frecuentes',
    items: [
      // 21. Primera pregunta y respuesta
      { q: '¿Qué buscáis?', a: 'Nuevas amistades mayores de edad y buen rollo.' },
      // 22. Segunda pregunta y respuesta
      { q: '¿Qué planes os gustan?', a: 'Cafés, paseos y unas buenas risas.' },
      // 23. Tercera pregunta y respuesta
      { q: '¿Dónde estáis?', a: 'Estamos en Madrid.' },
      // 24. Cuarta pregunta y respuesta
      { q: '¿Cómo os contactamos?', a: 'Escríbenos por WhatsApp y hablamos.' },
    ],
  },

  contactoFinal: {
    // 25. Título / 26. Párrafo / 27. Botón final
    titulo: '¿Hacemos un plan?',
    parrafo: 'Estamos en Madrid y nos apetece hacer nuevas amistades. ¡Escríbenos y nos conocemos!',
    boton: 'Habla con nosotras por WhatsApp',
  },

  pie: {
    // 28. Texto del pie / 29. Nombre / 30. Ciudad
    texto: 'Dos amigas, nuevas amistades y buenos momentos. Solo para mayores de 18 años.',
    nombre: 'Vero y Bianca',
    ciudad: 'Madrid',
    etiquetaEnlaces: 'Enlaces informativos',
  },

  // 31. PANTALLA DE CONFIRMACIÓN DE EDAD
  edad: {
    etiqueta: 'Acceso restringido',
    titulo: 'Esta web es solo para personas adultas',
    pregunta: 'Confirma que tienes 18 años o más para continuar.',
    aceptar: 'Entrar en la web',
    rechazar: 'Soy menor de edad',
    denegado: 'Has indicado que eres menor de edad, así que no puedes acceder a esta web.',
    notaDenegado: 'Si has respondido por error, borra los datos de este sitio en tu navegador para volver a comprobarlo.',
    etiquetaEnlaces: 'Información legal',
  },

  // 32. BUSCADORES, PESTAÑA DEL NAVEGADOR Y VISTA PREVIA AL COMPARTIR
  // Se insertan en el HTML durante desarrollo y compilación, también sin JavaScript.
  seo: {
    idioma: 'es',
    locale: 'es_ES',
    nombre: 'Vero y Bianca',
    titulo: 'Vero y Bianca | Nuevas amistades en Madrid',
    descripcion: 'Somos Vero y Bianca, dos amigas en Madrid con ganas de conocer gente, compartir planes y hacer nuevas amistades.',
    url: 'https://muestralanding1.netlify.app/',
    favicon: '/imagenes/mainImage.jpg',
    iconoApple: '/imagenes/mainImage.jpg',
    imagenSocial: '/imagenes/mainImage.jpg',
    descripcionImagenSocial: 'Vero y Bianca: dos amigas que buscan nuevas amistades en Madrid',
  },
  // 33. ENLACES Y PÁGINAS LEGALES — cada párrafo se edita por separado.
  legal: {
    "volver": "Volver a la portada",
    "etiqueta": "Información legal",
    "etiquetaActualizacion": "Última actualización:",
    "actualizacion": "25 de septiembre de 2026",
    "enlaces": [
      {
        "ruta": "/aviso-legal",
        "texto": "Aviso legal"
      },
      {
        "ruta": "/privacidad",
        "texto": "Privacidad"
      },
      {
        "ruta": "/cookies",
        "texto": "Cookies"
      }
    ],
    "aviso": {
      "titulo": "Aviso legal",
      "secciones": [
        {
          "titulo": "Naturaleza de la página",
          "parrafos": [
            "Esta web presenta a Vero y Bianca, dos amigas que buscan nuevas amistades entre personas mayores de edad. Permite conocer sus intereses e iniciar contacto voluntario por WhatsApp.",
            "El objetivo es conocer gente y compartir planes de amistad de forma respetuosa."
          ]
        },
        {
          "titulo": "Sin contratación online",
          "parrafos": [
            "La página no incorpora tienda, sistema de reservas, medios de pago ni contratación automatizada de productos o servicios."
          ]
        },
        {
          "titulo": "Uso permitido",
          "parrafos": [
            "El acceso está reservado a mayores de edad. Queda prohibido el uso del sitio para fines ilícitos, invasivos o contrarios a la buena fe."
          ]
        },
        {
          "titulo": "Imágenes y contenido",
          "parrafos": [
            "Las imágenes y textos mostrados forman parte de la presentación de Vero y Bianca. No está permitida su reproducción, distribución o reutilización sin autorización expresa."
          ]
        },
        {
          "titulo": "Canal de contacto",
          "parrafos": [
            "El único canal previsto desde esta web es el acceso voluntario a WhatsApp mediante los enlaces visibles en la página."
          ]
        }
      ]
    },
    "privacidad": {
      "titulo": "Privacidad",
      "secciones": [
        {
          "titulo": "Datos recogidos en la web",
          "parrafos": [
            "Esta web no incluye formularios de registro, compra ni suscripción. Tampoco solicita datos personales de forma directa dentro de la propia página.",
            "La página no realiza perfiles publicitarios, seguimiento comercial ni tratamiento masivo de datos personales."
          ]
        },
        {
          "titulo": "Verificación de mayoría de edad",
          "parrafos": [
            "La web puede guardar en el navegador la respuesta dada en la comprobación de mayoría de edad con una finalidad exclusivamente técnica de control de acceso."
          ]
        },
        {
          "titulo": "Contacto por WhatsApp",
          "parrafos": [
            "Si una persona decide escribir por WhatsApp, ese contacto se produce de forma voluntaria y bajo las condiciones de privacidad de dicha plataforma, ajena a esta web."
          ]
        },
        {
          "titulo": "Finalidad",
          "parrafos": [
            "El objetivo de esta página es presentar a Vero y Bianca y facilitar el contacto voluntario para conocer gente y hacer nuevas amistades."
          ]
        },
        {
          "titulo": "Conservación y control",
          "parrafos": [
            "La información técnica almacenada en el navegador puede eliminarse desde la configuración del propio navegador en cualquier momento."
          ]
        }
      ]
    },
    "cookies": {
      "titulo": "Cookies",
      "secciones": [
        {
          "titulo": "Uso actual",
          "parrafos": [
            "Esta web no utiliza paneles de analítica, publicidad comportamental ni formularios con seguimiento comercial."
          ]
        },
        {
          "titulo": "Almacenamiento local",
          "parrafos": [
            "La página puede usar almacenamiento local del navegador para recordar la comprobación de mayoría de edad y evitar repetirla en cada visita."
          ]
        },
        {
          "titulo": "Gestión",
          "parrafos": [
            "Puedes borrar este almacenamiento desde la configuración de tu navegador. Si lo haces, la web volverá a mostrar la verificación de edad en una visita posterior."
          ]
        },
        {
          "titulo": "Enlaces externos",
          "parrafos": [
            "Al abrir WhatsApp desde esta web, el tratamiento técnico posterior depende de la política y condiciones de esa plataforma."
          ]
        }
      ]
    }
  },
}
