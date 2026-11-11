# PAGE BLUEPRINT — LA LOCURA BAR V2

**Proyecto:** Rediseño web de La Locura Bar  
**Dirección artística congelada:** La noche es del barrio / Street Editorial Nocturno  
**Versión:** 1.0 — especificación funcional y editorial de secciones  
**Fecha:** 10 de noviembre de 2026  
**Estado:** Blueprint listo para implementar un prototipo y auditarlo contra los mockups; publicación supeditada a validación comercial y técnica.  
**Documento visual rector:** `DESIGN_SYSTEM_LA_LOCURA_BAR_V2.md`  
**Documento de textos definitivo previsto:** `FINAL_COPY_LA_LOCURA_BAR_V2.md` (por crear)

> **Contrato de ejecución:** no volver a diseñar la web desde cero. Implementar en HTML/CSS/componentes reales los nueve diseños desktop/mobile congelados. Conservar su jerarquía, ritmo, identidad y composición, sustituyendo únicamente los datos o imágenes ficticias que introdujo la generación por fuentes auténticas. Los PNG de mockups **son referencia, nunca un fondo que simula la interfaz**.

---

## 0. Jerarquía documental y criterios de verdad

1. **Identidad, oferta y restricciones del negocio:** `01_La_Locura_Bar_Identidad_Voz_y_Oferta.md` y documentos de fuentes del proyecto; los hechos deben validarse con el responsable del bar cuando cambien.
2. **Diseño transversal:** `DESIGN_SYSTEM_LA_LOCURA_BAR_V2.md` (tokens, familia tipográfica propuesta, espaciado, componentes, accesibilidad y variantes).
3. **Este Blueprint:** arquitectura, relaciones de secciones, diseño responsive, estados, datos, enlaces, lógica y criterios de aceptación.
4. **Final Copy:** texto público y microcopy final, cuando se cree. Sustituye los textos aquí etiquetados como *propuesta de maqueta* sin cambiar la jerarquía visual aprobada.
5. **Mockups congelados:** orientación compositiva para desktop y mobile. No son fuente confiable para productos, tarifas, horarios, ratings, fachadas, mapa, logo ni enlaces.

**Regla de resolución:** en caso de conflicto, preservar hechos verificables, seguridad, accesibilidad y finalidad comercial; mantener la intención visual y elevar a revisión cualquier cambio compositivo sustancial. No inventar la información ausente. En fase de prototipo se permiten datos claramente marcados en el entorno de desarrollo, **nunca** placeholders o notas internas visibles en producción.

### 0.1. Hechos de negocio que el Blueprint puede usar

- **Nombre:** La Locura Bar.
- **Ciudad:** Villavicencio, Meta, Colombia.
- **Dirección documentada:** Cra. 30A #10B-81, barrio Embudo.
- **Experiencia habitual:** cerveza y aguardiente, música variada, solicitud de canciones, bolirrana, conversación y baile.
- **Actividad condicionada:** transmisiones deportivas anunciadas; no prometer todos los partidos ni programación permanente.
- **Servicios digitales:** carta, calculadora de total estimado, solicitudes de reserva por WhatsApp, ubicación/contacto.
- **No forma parte de la oferta actual:** comida, cócteles, domicilios, torneos permanentes, música en vivo permanente ni actividades para menores de edad.

### 0.2. Campos pendientes de verificación prepublicación

| Dato | Estado | Responsable / acción |
|---|---|---|
| Logotipo original en formato web utilizable | Pendiente de entrega/selección final | Recuperar archivo oficial, no redibujarlo con IA |
| Fotografías reales de hero, bolirrana, música, pantalla y bebidas | Pendiente de curaduría de producción | Reemplazar assets ficticios y comprobar permisos de personas visibles |
| Carta real: referencias, presentaciones, grupos, precios y destacados | Pendiente de validación vigente | Utilizar una sola fuente de datos para carta y calculadora |
| Horarios efectivos, atención por día y horarios que cruzan medianoche | Pendiente de validar | No copiarlos de mockups por apariencia |
| Enlace/perfil Google Maps y pin preciso | Pendiente de comprobar | Confirmar ficha oficial; no usar screenshot de mapa IA |
| WhatsApp Business y URL de contacto | Pendiente de verificar | Una sola URL/número central; no inventar |
| URLs de redes sociales oficiales | Pendiente de verificar | Vincular Instagram, TikTok y Facebook existentes |
| Páginas legales, privacidad y cookies si procede | Pendiente de auditar | Enlazar únicamente páginas existentes y correctas |
| Capacidad, política de reserva, fechas y horas solicitables | Pendiente de validar | No tratar solicitud como confirmación |
| Reseñas autorizadas | No incorporadas sin evidencia | Módulo condicional, no testimonios fabricados |

---

# 1. Arquitectura global y navegación

## 1.1. Recorrido de la página — orden congelado

```text
HEADER GLOBAL (superpuesto al Hero; permanece como navegación)
  01. HERO — El parche empieza aquí
  02. MANIFIESTO — El plan no necesita excusa
  03. EXPERIENCIAS — Entre canciones y revanchas
  04. CARTA — ¿Qué se va a tomar?
  05. CALCULADORA — ¿Cuánto sale el parche?
  06. RESERVAS — ¿Ya armaron el parche?
  07. FAQ — Antes de caer
  08. UBICACIÓN — Aquí nos vemos
  09. FOOTER — La última firma
```

**Importante:** algunas imágenes muestran FAQ y ubicación con el mismo número 07. La numeración normativa es FAQ = **07**, ubicación = **08**, footer = **09**. La numeración puede existir como eyebrow de diseño; no es obligatoria para navegación asistiva.

## 1.2. Identificadores estables y navegación sugerida

| Destino | ID del DOM | Rotulado de navegación |
|---|---|---|
| Hero | `#inicio` | Inicio (logo) |
| Manifiesto | `#esencia` | No es necesario en header |
| Experiencias | `#experiencias` | Experiencias |
| Carta | `#carta` | Carta |
| Calculadora | `#calculadora` | Calculadora |
| Reservas | `#reservas` | Reservar mesa |
| FAQ | `#preguntas` | Preguntas frecuentes |
| Ubicación | `#ubicacion` | Ubicación |
| Footer | `#footer` | Enlaces y redes |

**Cabecera desktop:** logo oficial a la izquierda; enlaces breves de navegación; CTA ámbar «Reservar mesa» anclado a `#reservas`. No convertir el header en una lista interminable; ítems secundarios disponibles en footer.  
**Cabecera mobile:** logo, acceso a reservas si cabe sin comprometer la legibilidad y botón «Abrir menú» accesible. El panel desplegado usa estos mismos anchors.  
**Estados scroll:** transparente sobre Hero cuando hay contraste; pasa a carbón sólido/semisólido cuando hace falta; altura estable para evitar salto. `scroll-margin-top` compensa header fijo.  
**No incluir el header como parte repetida de ninguna sección**: en los mockups aislados pueden aparecer cabeceras ilustrativas, pero el sistema tiene un único header compartido.

## 1.3. Jerarquía de conversión

1. **Visita física / «Cómo llegar»:** acción principal del Hero y de Ubicación.
2. **Reserva / WhatsApp:** CTA de header y sección 06, solicitud que requiere confirmación humana.
3. **Consulta de carta:** enlace en Hero, header, footer y sección 04.
4. **Calculadora orientativa:** acceso desde carta o navegación; no compra ni pedido.

La página debe ser útil incluso sin que el visitante haga scroll hasta el final. Los anchors no deben desviar a destinos inexistentes.

## 1.4. Layout y comportamiento global

- Idioma `es-CO`; único `h1` en Hero; `h2` por sección y `h3` internos.
- Contenedor general hasta `1280px` salvo Hero de ancho completo y recursos full bleed según mockup.
- Desktop 12 columnas; tablet 8; mobile 4; valores exactos según Design System §6–§7.
- Fondos por sección: 01 oscuro/foto → 02 crema → 03 carbón → 04 crema → 05 carbón → 06 crema → 07 crema → 08 carbón → 09 carbón profundo.
- Fotografías reales, AVIF/WebP responsivos, tamaños reservados, `alt` significativo y decoraciones `aria-hidden` o `alt=""`.
- Interacciones con teclado y lector de pantalla; foco visible; soporte `prefers-reduced-motion`.
- Sin audio autoplay, scroll-jacking, parallax pesado, bloqueo de scroll ni transiciones prolongadas.
- No añadir una nueva sección a la arquitectura congelada sin aprobación expresa.

---

# 2. Especificación por sección

## SECTION 01 — HERO / EL PARCHE EMPIEZA AQUÍ

**ID:** `inicio`  
**Referencia del Reference Board:** `REF-HERO-01` + `REF-HERO-02`; sistema de navegación `REF-NAV-01`.

**PURPOSE:** captar atención inmediatamente, decir qué es La Locura y ubicarla en Villavicencio; ofrecer dos caminos claros para seguir. No enumerar todo el inventario.

**BACKGROUND:** fotografía real del establecimiento de noche, con gradiente carbón en área de lectura; negro/gris cálido y acentos magenta/ámbar. No reutilizar la fotografía comercial ficticia del mockup en producción.

**DESKTOP:**
1. Un solo `section` de hero, full bleed, imagen a todo el ancho.
2. Header global superpuesto, sin segunda cabecera dibujada.
3. Bloque de texto a la izquierda o en región de mayor contraste; espacio fotográfico protagonista centro/derecha.
4. Eyebrow local (`Barrio Embudo · Villavicencio`), titular condensado grande de dos líneas según composición V2 y apoyo breve.
5. Fila de dos CTA: primario «Cómo llegar» y secundario «Ver la carta».
6. No mostrar tarjetas con características, estadísticas, rasgados de transición ni un fragmento artificial de la sección 02.
7. Altura de primera pantalla aproximada, pero contenido nunca debe cortarse si el viewport es bajo o aumenta el zoom.

**MOBILE:** imagen/recorte vertical auténtico y diseñado para móvil; texto en 2–3 líneas según ancho, CTA visibles en el primer recorrido, posibilidad de apilar botones a ancho completo. Header minimalista y zona segura para notch y barras. No trasladar el layout panorámico con `background-size: cover` sin controlar el foco.

**CONTENT — copy provisional de maqueta:**
- Eyebrow: «BARRIO EMBUDO · VILLAVICENCIO».
- `h1`: «EL PARCHE EMPIEZA AQUÍ.».
- Apoyo: «Cerveza fría, bolirrana, música y buena compañía. Sin tanta vuelta.».
- CTA 1: «Cómo llegar» → `#ubicacion` o, de acuerdo con decisión UX final, Google Maps oficial; debe existir ruta a Maps desde Ubicación.
- CTA 2: «Ver la carta» → `#carta`.

**VISUAL / ASSET:** `IMAGE-01-HERO-DESKTOP`, `IMAGE-01B-HERO-MOBILE` (pueden provenir de la misma sesión fotográfica, con recortes distintos); `LOGO-01-OFFICIAL` (no arte AI).

**INTERACTION:** transiciones suaves de contenido si se aprueban; CTAs interactivos; header cambia fondo en scroll; nada del copy vive dentro de la imagen. Puede prescindirse de video; no hacerlo obligatorio.

**STATES:** foto sin cargar (fondo carbón legible); preferencias de movimiento reducido; header en scroll; 320 px y zoom 200%; tiempo de carga lento.

**WHAT NOT TO DO:** no inventar fachada, clientes, logos, letreros o bolirrana; no poner cuatro cajas de beneficios; no utilizar tipografías 3D neón ni duplicar CTA con la misma jerarquía.

**ACCEPTANCE:** un `h1`, dos CTA funcionales, foto real, texto siempre legible, sin overflow ni mostrar sección extra dentro del mockup de referencia, coherencia desktop/mobile.

---

## SECTION 02 — MANIFIESTO / EL PLAN NO NECESITA EXCUSA

**ID:** `esencia`  
**Referencia:** `REF-INTRO-01` + `REF-INTRO-02`.

**PURPOSE:** explicar el carácter cercano y sin pretensiones del bar después del impacto del Hero; cambio de ritmo visual sin insistir en promoción o conversiones.

**BACKGROUND:** crema/papel `--color-paper`; títulos carbón, acento magenta y pequeñas pinceladas/firmas de arte gráfico autorizadas.

**DESKTOP:** composición editorial de dos columnas asimétricas: izquierda titular de enorme presencia (aprox. 58%); derecha párrafo de apoyo (aprox. 42%), con separador o recurso gráfico discreto. Buen espacio negativo; altura natural. La versión visual congelada puede contener una corona o numeral decorativo; tratarlo como asset decorativo, no dato.

**MOBILE:** una columna, encabezado/eyebrow → titular en 2–4 líneas → separador horizontal → párrafo; sin imagen gigante, CTA innecesarios o columna de texto comprimida.

**CONTENT — copy provisional:**
- Eyebrow: «LA ESENCIA DEL PARCHE».
- `h2`: «EL PLAN NO NECESITA EXCUSA.».
- Cuerpo: «Con amigos, en pareja o por tu cuenta. Aquí puedes llegar sin formalidades, pedir tu música y armar el parche a tu ritmo.».
- Cierre contextual opcional: «LA LOCURA BAR · VILLAVICENCIO».
- Sin CTA obligatorio.

**VISUAL:** textura clara muy sutil, pincelada magenta pequeña, titular y letras grandes; **sin fotografía necesaria**. Assets: `GFX-PAPER-01`, `GFX-BRUSH-01` solo si aportan y son consistentes.

**INTERACTION:** reveal discreto al entrar al viewport, opcional y desactivable por preferencia reducida. Ningún clic simulado.

**STATES:** ancho estrecho, texto aumentado, sin motion.

**WHAT NOT TO DO:** no colocar una segunda foto de bar, reseñas, cifras inventadas, tarjetas de servicios ni elementos táctiles falsos.

**ACCEPTANCE:** la sección respira, contrasta con Hero, se lee sin dificultad y se adapta a una sola columna sin crear scrolling horizontal.

---

## SECTION 03 — EXPERIENCIAS / ENTRE CANCIONES Y REVANCHAS

**ID:** `experiencias`  
**Referencia:** `REF-EXP-01` + `REF-EXP-02` + `REF-GALLERY-01`.

**PURPOSE:** demostrar visualmente tres razones concretas para visitar el bar sin repetir seis cards idénticas: bolirrana, música y eventos deportivos anunciados.

**BACKGROUND:** carbón nocturno; fotos ocupan gran parte de la composición, con overlays oscuros graduales para textos.

**DESKTOP:**
1. Eyebrow pequeño + titular + apoyo en encabezado amplio.
2. Mosaico asimétrico: bolirrana protagonista a la izquierda (~60%), música y pantalla a la derecha en dos módulos (~40%) apilados.
3. Titulares integrados al pie de cada foto, legibles, sin tapar el motivo principal.
4. Mantener aire entre tarjetas y proporciones distintas; no repetir tratamiento de catálogo.
5. Las fotos deben pertenecer al establecimiento real y mostrar tres experiencias diferenciables.

**MOBILE:** mosaico se convierte en tres bloques apilados; bolirrana mayor, música y deportes más compactos, pero nunca miniaturas ilegibles. Desplazamiento natural, **sin carrusel automático**.

**CONTENT — copy provisional:**
- Eyebrow: «ASÍ SE VIVE LA LOCURA».
- `h2`: «ENTRE CANCIONES Y REVANCHAS.».
- Apoyo: «Un lugar para jugar, escuchar tu música y compartir el parche.».
- Bolirrana: «LA REVANCHA SE JUEGA AQUÍ.» (subetiqueta «Bolirrana con amigos»).
- Música: «TÚ PIDES LA CANCIÓN.».
- Pantalla: «EL DEPORTE SE VIVE EN GRANDE.»; contexto de eventos **anunciados**, no constantes.

**VISUAL / ASSETS:** `IMAGE-03-BOLIRRANA`, `IMAGE-03-MUSICA`, `IMAGE-03-PANTALLA`; preferir fotos originales, sin rostros no autorizados. Fotos diferentes, no reusar la misma escena con filtros distintos.

**INTERACTION:** zoom de imagen muy leve en desktop, sin afectar overlay del texto; solo enlaces si existe un destino útil, por ejemplo evento anunciado concreto. Las cards no deben aparentar ser enlaces si no lo son.

**STATES:** foto faltante (fondo sólido y contenido textual), evento deportivo no anunciado (copy genérico sin prometer transmisión), mobile 320 px.

**WHAT NOT TO DO:** no inventar personas, premios, torneos o programación; no abrir cards que no tengan contenido; no utilizar fotos de un bar distinto como prueba del establecimiento.

**ACCEPTANCE:** tres experiencias claramente distintas; bolirrana dominante; texto legible en contraste; sin falsas promesas deportivas.

---

## SECTION 04 — CARTA / ¿QUÉ SE VA A TOMAR?

**ID:** `carta`  
**Referencia:** `REF-MENU-01` + `REF-MENU-02`.

**PURPOSE:** permitir consultar bebidas, presentaciones y precios reales; orientar al visitante hacia la calculadora de manera natural. **No es e-commerce.**

**BACKGROUND:** crema/papel; titulares carbón y magenta; productos destacados con contraste oscuro/cinematográfico; listado editorial.

**DESKTOP:**
1. Eyebrow + titular + breve texto de orientación.
2. Selector de tres categorías principales (nombres definitivos ligados al catálogo real): personales, para compartir, licores.
3. Si hay dos destacados reales de la categoría, mostrar dos cards con foto, nombre, presentación y precio. Si no existen dos fotos válidas, ajustar la distribución sin inventar productos ni romper jerarquía: alternativa editorial con lista más protagonista.
4. Resto de productos en filas compactas con nombre y presentación a izquierda, precio a derecha; fotografías pequeñas opcionales únicamente si son reales y consistentes.
5. CTA «Calcula tu cuenta» → `#calculadora`.
6. Mantener alineación numérica y separación visual que facilite escaneo de precios.

**MOBILE:** título y descripción arriba; tabs desplazables horizontalmente si no caben (no encoger letra), cards destacadas una debajo de otra o composiciones de menor altura, lista vertical con precios alineados, CTA visible después del listado. Mantener área táctil cómoda.

**CONTENT — copy provisional:**
- Eyebrow: «04 / LA CARTA».
- `h2`: «¿QUÉ SE VA A TOMAR?».
- Apoyo: «Conoce nuestras bebidas y arma tu plan sin sorpresas.».
- CTA: «CALCULA TU CUENTA».
- `nombre`, `presentación`, `precio`: **inyectados de un catálogo verificado**, jamás copiados de los mockups.

**VISUAL / ASSETS:** `IMAGE-04-PRODUCTO-A`, `IMAGE-04-PRODUCTO-B` solo si corresponden exactamente a referencias reales; `MENU-DATA-01` central. El contenido real es prioritario sobre el deseo de llenar dos cards con ejemplos.

**INTERACTION:** tabs de categorías con teclado y estado seleccionado; al cambiar categoría, renderizar lista y destacados correspondientes sin recargar ni perder foco. Enlace a calculadora. Puede persistir la categoría seleccionada en la navegación local si resulta coherente, pero no se requieren URLs complejas.

**STATES:** categoría sin productos (mensaje útil, no card vacía); precio no validado (no publicar referencia/precio sin revisión; para prototipo usar contenido marcado solo en entorno interno); foto faltante (diseño tipográfico); carga de datos si aplica.

**WHAT NOT TO DO:** no incluir cocteles, comida, descuentos falsos, carrito, botón «Comprar», orden en línea, domicilios ni marcas de bebida inexistentes; no anunciar «más vendido» sin evidencia.

**ACCEPTANCE:** cada artículo y COP corresponden a fuente confirmada; filtros operan; los precios coinciden exactamente con calculadora; toda la sección se consulta en móvil sin desbordes.

---

## SECTION 05 — CALCULADORA / ¿CUÁNTO SALE EL PARCHE?

**ID:** `calculadora`  
**Referencia:** `REF-CALC-01`; interpretación gráfica de «ticket de bar» aprobada para diseño.

**PURPOSE:** estimar una cuenta de bebidas a partir de productos y cantidades. Diferenciación útil y memorable; **no procesa pedidos, pagos, facturas ni domicilios**.

**BACKGROUND:** carbón; lista funcional oscura a izquierda; recibo/ticket crema a derecha; ámbar en controles y categoría activa; total en magenta con contraste y tamaño apropiados.

**DESKTOP:**
1. Encabezado con eyebrow, titular y breve instrucción.
2. Cuerpo 65/35 aprox.: a izquierda selector de categoría y filas de bebidas; derecha ticket con estado y total.
3. Cada fila muestra nombre, presentación, precio vigente y controles `−`, cantidad, `+`; imagen de botella **opcional** y siempre correcta.
4. Ticket visible dentro de la sección (sticky cuando sea seguro, sin invadir footer ni móvil), nombre del bar, lista seleccionada, cantidad, precio/subtotal y total.
5. Botones «Compartir estimado por WhatsApp» (solo si hay selección) y «Limpiar cuenta».
6. Microcopy que deja claro que es una **estimación, no un pedido**.
7. Estética de recibo (papel/ticket) es tratamiento visual, no exportación de factura fiscal.

**MOBILE:** encabezado compacto; tabs horizontales o en filas legibles según ancho; productos en una columna; controles no menores de 44×44px; resumen/ticket debajo o panel expandible. Barra inferior flotante con total es **opción de implementación por validar**: si se usa, no puede tapar botones, navegación ni contenido. No debe reproducirse un mini-ticket en lateral.

**CONTENT — copy provisional:**
- Eyebrow: «05 / ARMA TU PARCHE».
- `h2`: «¿CUÁNTO SALE EL PARCHE?».
- Ayuda: «Escoge las bebidas, ajusta las cantidades y calcula cuánto podrían gastar.».
- Resumen: «TU CUENTA» / «RESUMEN ESTIMADO».
- Vacío: «Agrega bebidas para ver tu cuenta.».
- Total: «TOTAL ESTIMADO».
- Compartir: «COMPARTIR ESTIMADO POR WHATSAPP».
- Secundaria: «LIMPIAR CUENTA».
- Disclaimer: «Valores sujetos a la carta vigente. Esta es una estimación, no un pedido.».

**VISUAL / ASSETS:** `UI-TICKET-01` se construye con CSS y, como mucho, textura autorizada `GFX-PAPER-01`. Los productos usan `MENU-DATA-01`; el logotipo usa `LOGO-01-OFFICIAL`. No incrustar un recibo estático como foto.

**INTERACTION — reglas funcionales:**
- `quantity` por `product.id`; enteros >= 0; `+` incrementa y `−` decrementa hasta 0. Límite superior configurable si se requiere proteger UI, sin tratarlo como límite real de compra.
- `subtotal_i = unitPriceCOP_i × quantity_i`; `totalCOP = Σ subtotal_i`. Precios como enteros COP sin flotantes.
- No duplicar el catálogo: la carta y la calculadora consultan la **misma** fuente de productos.
- El ticket se actualiza inmediatamente; orden estable; artículos con cantidad 0 se omiten del desglose; si todos están en 0, mostrar estado vacío y total `$0`.
- Cambiar de categoría **no borra cantidades** de otras categorías; el ticket suma todas las selecciones.
- `Limpiar cuenta` resetea todas las cantidades y selección derivada; sin borrado de datos personales porque no se guardan.
- Compartir: abrir WhatsApp oficial mediante URL prellenada con productos, cantidades, subtotales y total, más aviso «estimación»; el usuario decide si envía. Sin mensaje de pedido confirmado, sin pedido a domicilio ni promesa de precio fijo.
- Compartir deshabilitado en 0; manejar WhatsApp no disponible con alternativa de copiar resumen si es viable; no asumir que abrir WhatsApp implica envío.
- Actualizaciones de total accesibles sin anunciar cada pulsación de manera excesiva.

**STATES:** vacío; selección 1+; categoría cambiada con selección en otra categoría; reset; producto inactivo; datos no disponibles; teléfono/enlace de WhatsApp no configurado (ocultar/degradar acción hasta corregir); 320 px, zoom 200%.

**WHAT NOT TO DO:** no reutilizar ejemplos del mockup como precios reales (incluido el total `$19.000`), no introducir cargos/propinas/impuestos ficticios ni botones de checkout.

**ACCEPTANCE:** total consistente con ítems, cero cantidades negativas, al cambiar categoría conserva cuenta, en móvil no pierde controles, CTA compartir solo aparece habilitado con selección y destino oficial válido.

---

## SECTION 06 — RESERVAS / ¿YA ARMARON EL PARCHE?

**ID:** `reservas`  
**Referencia:** `REF-BOOK-01`.

**PURPOSE:** convertir intención en **solicitud de mesa** sin prometer confirmación inmediata ni crear un sistema de disponibilidad artificial.

**BACKGROUND:** crema con texto editorial negro y magenta a izquierda; formulario carbón a derecha; ámbar en CTA.

**DESKTOP:**
1. Composición dividida ~45/55.
2. Izquierda: eyebrow, titular poderoso, párrafo orientativo, posible escena auténtica discreta del bar (solo si añade valor y no reemplaza la instrucción).
3. Derecha: panel carbón con título «Solicita tu mesa» y cuatro datos: nombre completo, número de personas, fecha y hora.
4. Nombre y personas en filas completas; fecha/hora pueden compartir fila si caben.
5. CTA prominente ámbar, microcopy de confirmación humana visible. Los recursos gráficos quedan lejos de etiquetas/inputs.

**MOBILE:** orden: eyebrow y mensaje → formulario de una columna → CTA ancho completo → microcopy. Fecha y hora pueden pasar a filas separadas; no comprimir inputs en espacios minúsculos. Evitar foto grande que aleje el formulario.

**CONTENT — copy provisional:**
- Eyebrow: «06 / RESERVAS».
- `h2`: «¿YA ARMARON EL PARCHE?».
- Ayuda: «Dinos cuándo vienen y cuántas personas son. Solicita tu mesa por WhatsApp y confirma la disponibilidad con nosotros.».
- Form title: «SOLICITA TU MESA».
- Labels: «Nombre completo», «Número de personas», «Fecha», «Hora».
- CTA: «SOLICITAR POR WHATSAPP».
- Microcopy: «La reserva queda sujeta a confirmación.».

**VISUAL / ASSETS:** `FORM-RESERVA-01` interfaz HTML real, `IMAGE-06-AMBIENTE` opcional solo si auténtica. No dibujar los campos sobre una fotografía.

**INTERACTION:**
1. Validar nombre (no vacío; trim; límites razonables) y cantidad de personas (entero positivo).
2. Fecha no anterior al día local del bar (`America/Bogota`), con lógica exacta de fechas y turnos; **no** inventar disponibilidad.
3. Hora seleccionable según horario de atención **validado**, con manejo explícito de turnos después de las 00:00. Si no hay horario operativo confirmado, no forzar catálogo horario inventado en producción.
4. Al enviar, ensamblar mensaje: «Hola, quiero consultar disponibilidad para una mesa en La Locura Bar. Nombre: … Personas: … Fecha: … Hora: …».
5. Abrir WhatsApp oficial con mensaje prellenado; usuario debe enviarlo. La interfaz no debe mostrar «Reserva confirmada» al abrir la app.
6. Indicar errores junto a cada campo y enfocar el primer error. No almacenar nombre/fecha en analytics ni URL pública fuera del enlace hacia WhatsApp.
7. Si el visitante cancela WhatsApp, la solicitud no ha sido recibida; ofrecer reintento, no éxito ficticio.

**STATES:** inicial; errores; campos válidos; CTA ocupado/abriendo cuando proceda; WhatsApp no configurado (no presentar un CTA muerto); horario pendiente; mobile teclado visible.

**WHAT NOT TO DO:** no añadir pago, calendario de mesas ocupadas o disponibilidad en tiempo real; no declarar aforo inventado, «mesa garantizada» ni mensajes automáticos de confirmación.

**ACCEPTANCE:** todos los campos son accesibles, el mensaje se construye correctamente, contacto oficial correcto, ninguna confirmación falsa, panel y CTA sin cortes mobile.

---

## SECTION 07 — FAQ / ANTES DE CAER

**ID:** `preguntas`  
**Referencia:** `REF-FAQ-01`.

**PURPOSE:** resolver objeciones de visita de manera breve, sin reconstruir toda la página; redirigir a WhatsApp si queda una duda.

**BACKGROUND:** crema claro sin fotografías; texto negro, divisor fino y magenta en indicadores; estética editorial más reposada que reservas.

**DESKTOP:** 35/65 aprox. Columna izquierda: eyebrow «Preguntas frecuentes», titular «ANTES DE CAER.», cuerpo breve y pequeño contacto secundario. Derecha: seis filas de acordeón (líneas finas y `+`/`−`), con una respuesta expandida como estado de muestra. Evitar seis tarjetas negras grandes.

**MOBILE:** encabezado arriba, lista de seis preguntas en una sola columna, respuestas expandibles; cierre compacto de WhatsApp después de la lista. Botones de fila amplios con palabras que puedan envolver dos líneas. No crear scroll horizontal.

**PREGUNTAS propuestas (respuestas definidas finalmente en `FINAL_COPY`):**
1. «¿Cuál es el horario de La Locura Bar?» — requiere horario **validado**. Si falta, sustituir la respuesta por una indicación honesta de consulta en el canal oficial, hasta validar.
2. «¿Cómo puedo reservar una mesa?» — solicitud web/WhatsApp, sujeta a confirmación.
3. «¿Se puede jugar bolirrana?» — sí, actividad habitual.
4. «¿Transmiten partidos y otros eventos deportivos?» — sí, **cuando se anuncien**; remitir a redes para programación.
5. «¿Puedo pedir música y bailar?» — música variada, posibilidad de pedir canciones, ambiente flexible.
6. «¿Qué bebidas tienen disponibles?» — cerveza y aguardiente reales, enlace a `#carta`.

**VISUAL / ASSETS:** sin fotografía; `FAQ-ACCORDION-01` construido en HTML; `GFX-BRUSH` opcional muy discreto; iconos `+`/`−` o chevron, consistentes.

**INTERACTION:** un panel abierto a la vez (patrón acordado como propuesta funcional), el resto cerrados; `button` en todo el encabezado con `aria-expanded`, `aria-controls`, región semántica y foco visible; `Enter`/`Space` abren; transición de altura suave que respete movimiento reducido.

**STATES:** todos cerrados (estado inicial preferente), uno abierto, navegación teclado, texto largo, horario pendiente, 320px. **No** usar la imagen expandida para implicar que el primero debe abrirse automáticamente.

**WHAT NOT TO DO:** no preguntar de nuevo dónde queda si lo resuelve ubicación; no añadir afirmaciones no verificadas sobre parqueadero, entrada gratis, mascotas, seguridad garantizada o promociones.

**ACCEPTANCE:** seis preguntas útiles, respuestas veraces, cero acordes no accesibles, la sección no parece un listado de tarjetas promocionales.

---

## SECTION 08 — UBICACIÓN / AQUÍ NOS VEMOS

**ID:** `ubicacion`  
**Referencia:** `REF-LOCATION-01`.

**PURPOSE:** cerrar la incertidumbre geográfica y facilitar la visita real. Es el cierre comercial del scroll, antes de la firma de marca.

**BACKGROUND:** carbón con acento cálido, titulares crema y magenta; mapa nítido y claro. La fachada de fondo representada por algunas imágenes generadas es **conceptual y ficticia**; evitarla como prueba del local. La revisión V2 favorece composición más limpia.

**DESKTOP:** 40/60 aproximado: columna izquierda etiqueta «Encuéntranos», titular «AQUÍ NOS VEMOS.», dirección completa, horarios solo cuando estén verificados, CTA ámbar «Cómo llegar en Google Maps», WhatsApp secundario. A derecha mapa auténtico dentro de marco simple. El mapa NO debe tapar la dirección ni competir con el CTA.

**MOBILE:** encabezado, dirección y CTA **antes** del mapa; mapa ancho completo con altura práctica y botón alternativo; enlace WhatsApp secundario al final. No repetir dirección en tres tarjetas o usar enormes espacios decorativos.

**CONTENT — copy provisional:**
- Eyebrow: «08 / ENCUÉNTRANOS».
- `h2`: «AQUÍ NOS VEMOS.».
- Apoyo: «Estamos en el barrio Embudo, Villavicencio. Consulta la ruta antes de salir y nos vemos en el parche.».
- Dirección: «Cra. 30A #10B-81, barrio Embudo, Villavicencio, Meta.».
- CTA principal: «CÓMO LLEGAR EN GOOGLE MAPS».
- CTA secundario: «CONSULTAR POR WHATSAPP».
- Horarios: **solamente si han sido confirmados**; no copiar «Jueves a sábado» ni cifras de una imagen sin verificación.

**VISUAL / ASSETS:** `MAP-01` embedding real vinculado a ficha oficial o coordenadas verificadas; `IMAGE-08-FACHADA` opcional y **solo auténtica**. Las imágenes generadas de mapas y puntuaciones (p. ej., `4.8`) son referencias de layout, no contenido factual ni captura válida de Google Maps.

**INTERACTION:** abrir ruta hacia ubicación oficial; `iframe` o mapa integrado con `title` accesible, `loading="lazy"` y alternativa textual. Si se usa Maps Embed/API, cumplir condiciones de Google y restricciones de uso; no falsificar control, atribución o pin. Contacto oficial. Si iframe no carga, texto y CTA siguen disponibles.

**STATES:** iframe bloqueado/errores de red, usuario sin ubicación compartida, sin horario validado, texto largo, alto contraste sobre fondo, viewport estrecho.

**WHAT NOT TO DO:** no inventar rating, calles, destinos, estacionamiento, distancias, fachada o programación; no forzar una captura artificial como mapa funcional.

**ACCEPTANCE:** dirección exacta verificada, enlace de ruta correcto, mapa real legible, CTA primario accesible antes de mapa en mobile, alternativa disponible cuando iframe falla.

---

## SECTION 09 — FOOTER / LA ÚLTIMA FIRMA

**ID:** `footer`  
**Referencia:** síntesis del sistema editorial de marca y Reference Board; navegación secundaria.

**PURPOSE:** cerrar la historia, reforzar identidad local, ofrecer redes, navegación secundaria y obligaciones legales; sin repetir secciones completas.

**BACKGROUND:** carbón más profundo que ubicación con textura discreta, crema + magenta; ámbar en detalles; sin fotografía nueva obligatoria.

**DESKTOP:** tres bandas:
1. **Superior:** mensaje editorial/CTA social a izquierda; columna de Instagram/TikTok/Facebook; columna de anchors del sitio.
2. **Central:** gran composición tipográfica «LA LOCURA BAR» como firma independiente; el logo oficial se utiliza cuando corresponde y no puede sustituirse por una recreación IA; ciudad debajo.
3. **Inferior:** línea fina; copyright dinámico, privacidad y términos cuando los enlaces existan y hayan sido validados.

**MOBILE:** mensaje primero; tres redes en cards compactas apilables/adaptables según espacio; menú de exploración vertical o dos columnas con áreas táctiles cómodas; firma de marca escalada sin cortes; información legal legible en dos o más líneas si es necesario. No fijar altura 100vh.

**CONTENT — copy provisional:**
- Eyebrow: «EL PARCHE SIGUE EN REDES».
- Titular: «LA NOCHE ES DEL BARRIO.».
- Apoyo: «Síguenos y entérate de lo que se arma en La Locura.».
- Social links: Instagram, TikTok, Facebook (URLs verificadas).
- Navegación: Experiencias, Carta, Calculadora, Reservas, Preguntas frecuentes, Ubicación.
- Firma: «LA LOCURA BAR · VILLAVICENCIO · COLOMBIA».
- Legal: «© {añoActual} La Locura Bar · Todos los derechos reservados.».
- «Política de privacidad» y «Términos de uso» solo con rutas legales auténticas.

**VISUAL / ASSETS:** `LOGO-01-OFFICIAL`; `GFX-BRUSH`, `GFX-CROWN`, tipografía display y textura de pared dosificada; iconos sociales con SVG oficiales o lucide apropiados cuando legal/visualmente proceda.

**INTERACTION:** social links externos en destino real con etiquetas accesibles; navegación interna anclada; hovers discretos; sin scroll-jacking ni una segunda cabecera. Contemplar target externo seguro `rel="noopener noreferrer"` según patrón de enlaces.

**STATES:** URLs no confirmadas (bloquear publicación hasta validar o suprimir el elemento, no enlazar a `#`); texto aumentado; firma en 320 px; año dinámico; política legal inexistente (resolver previamente, no botón muerto).

**WHAT NOT TO DO:** no repetir mapa, formulario completo, preguntas ni menú en otra apariencia; no inventar redes ni documentos legales; no convertir la firma en un logo oficial modificado.

**ACCEPTANCE:** cierre visual distinguible de ubicación, sin overflow horizontal en mobile, todas las rutas funcionan, legales y año correctos, marca oficial preservada.

---

# 3. Componentes transversales reutilizables

| Componente lógico | Donde se usa | Responsabilidad | Aspecto normativo |
|---|---|---|---|
| `SiteHeader` | Global | Navegación, CTA a reserva, menú móvil | DS §15; header único |
| `SectionEyebrow` | 01–08 | Rótulo pequeño de sección | Magenta/ámbar según fondo; no semántica principal |
| `DisplayHeadline` | 01–09 | Tipografía editorial y fragmentos cromáticos | DS §4–5; texto real, no imagen |
| `ActionLink` | Hero, Carta, Reserva, Ubicación, Footer | Anchor interno o URL externa | DS §14; CTA primario ámbar |
| `ExperienceTile` | 03 | Foto real + overlay de título | No clickable falso |
| `CategoryTabs` | 04 y 05 | Selección de categoría real | Estado visible, teclado, conservar selecciones calculadora |
| `MenuFeaturedItem` | 04 | Imagen, nombre, presentación y precio | No e-commerce; producto auténtico |
| `MenuProductRow` | 04 | Listado claro y escaneable | Fuente `products` común |
| `QuantityControl` | 05 | Ajuste `+` / `−` / valor | Enteros >= 0, target >= 44px |
| `ReceiptSummary` | 05 | Desglose y total estimado | Derivado de cantidades, nunca hardcode |
| `BookingInquiryForm` | 06 | Validación y creación de mensaje WhatsApp | Solicitud, no confirmación |
| `FAQAccordion` | 07 | Un panel abierto a la vez | `aria-expanded`, botón real |
| `LocationMap` | 08 | Ubicación real + alternativa | Maps verificable; lazy loading |
| `SocialLinks` | 09 | Acceso a redes | Destinos oficiales |
| `SiteFooter` | 09 | Firma, navegación secundaria, legales | Sin links muertos |

**Arquitectura:** nombres orientativos, no imponen framework. Si la implementación usa Astro + Tailwind, preferir componentes Astro estáticos y pequeños módulos JS/TypeScript para calculadora, FAQ, navegación y formulario; no agregar SPA o dependencias grandes únicamente por estas cuatro interacciones.

---

# 4. Contrato de datos y vínculos

## 4.1. Fuente central — sugerencia de modelado

```ts
type BusinessInfo = {
  name: 'La Locura Bar';
  city: 'Villavicencio';
  region: 'Meta';
  country: 'Colombia';
  streetAddress: string;
  neighborhood: string;
  officialLogoSrc: string; // validado
  mapsUrl: string;        // validado
  mapsEmbedUrl?: string;  // validado y permitido
  whatsappNumberE164: string; // validado
  social: { instagram?: string; tiktok?: string; facebook?: string };
  openingHours?: Array<{ weekday: number; opens: string; closes: string; nextDayClose: boolean }>;
};

type MenuCategory = 'personal' | 'compartir' | 'licores';
type MenuProduct = {
  id: string;
  category: MenuCategory;
  name: string;
  presentation: string;
  priceCOP: number; // entero >= 0; precio vigente verificado
  photoSrc?: string; // foto real del producto correcto
  featured?: boolean;
  active: boolean;
  lastVerifiedAt: string;
};

type FAQItem = { id: string; question: string; answer: string; active: boolean };
type ReservationInquiry = { name: string; partySize: number; localDate: string; localTime: string };
```

**No copiar literalmente los valores TypeScript si están sin completar**: se trata del esquema requerido, no del dataset entregado. La validación de `priceCOP`/categoría ocurre antes de renderizar. `lastVerifiedAt` es trazabilidad interna, no texto de marketing.

## 4.2. Fuente única de catálogo

- `MENU-DATA-01` alimenta las secciones 04 y 05; producto desactivado deja de mostrarse en ambas.
- Precio como COP entero; visualización con `Intl.NumberFormat('es-CO', { style:'currency', currency:'COP', maximumFractionDigits:0 })`, revisando espacio y símbolos según diseño.
- Evitar desalineación por productos destacados y por filtros: `product.id` estable, categoría consistente, no duplicación de textos.
- Para cambios de precio, actualizar una sola fuente e invalidar versiones desfasadas en compilación/caché cuando aplique.

## 4.3. Enlaces y acciones — matriz contractual

| UI | Tipo | Destino | Condición |
|---|---|---|---|
| Logo header | Interno | `#inicio` | Siempre |
| Hero «Cómo llegar» | Interno/externo | `#ubicacion` o `business.mapsUrl` | Definir una única opción final para no confundir analytics |
| Hero «Ver la carta» | Interno | `#carta` | Siempre |
| Menú desktop/mobile | Interno | IDs existentes de sección | Siempre |
| Carta «Calcula tu cuenta» | Interno | `#calculadora` | Siempre |
| Calculadora «Compartir» | Externo | WhatsApp oficial con resumen generado | Selección > 0 y teléfono válido |
| Reservas «Solicitar» | Externo | WhatsApp oficial con solicitud generada | Campos válidos y teléfono válido |
| FAQ «¿Otra pregunta?» | Externo | WhatsApp oficial | Teléfono válido |
| Ubicación «Cómo llegar» | Externo | URL Google Maps oficial | Destino verificado |
| Ubicación «WhatsApp» | Externo | WhatsApp oficial | Teléfono válido |
| Footer sociales | Externo | URL de perfil oficial | Perfil verificado |
| Footer privacidad/términos | Interno | Página legal vigente | URL y contenido existentes |

**Importante:** no componer rutas Google Maps arbitrarias a partir de un pin generado. El sistema debe incorporar el destino verificado del bar. No colocar CTA aparentemente funcional con `href="#"`.

## 4.4. WhatsApp, privacidad y seguridad básica

- Generar link con `encodeURIComponent(message)` y número `E.164` verificado; nunca poner un número ficticio en el repo.
- Dejar que la persona inspeccione y envíe el mensaje; abrir la app **no equivale** a reserva confirmada o pedido recibido.
- No enviar nombre de reserva ni otros datos personales a plataformas de analytics; revisar política de privacidad y aviso cuando se recopilen.
- Proteger contra inyección de HTML al renderizar nombres o datos; datos de usuario siempre como texto, no `innerHTML`.
- Si el formulario no envía a un servidor propio, no conservar datos personales localmente por defecto.
- Evitar rastreo de acciones personales en una URL compartida que permanezca en el navegador o logs internos si no es necesario.

---

# 5. Inventario de recursos requerido

| Asset ID | Sección | Tipo | Uso y condición |
|---|---|---|---|
| `LOGO-01-OFFICIAL` | Global / footer / ticket | SVG/PNG oficial | No recrear con IA |
| `IMAGE-01-HERO-DESKTOP` | 01 | Fotografía real horizontal | Noche, espacio para copy, alta calidad |
| `IMAGE-01B-HERO-MOBILE` | 01 | Fotografía vertical/crop real | Sujeto visible, zona de lectura segura |
| `IMAGE-03-BOLIRRANA` | 03 | Fotografía real | Juego propio; escena convincente |
| `IMAGE-03-MUSICA` | 03 | Fotografía real | Ambiente real, música y luces |
| `IMAGE-03-PANTALLA` | 03 | Fotografía real | Pantalla/proyector real, evento no falso |
| `IMAGE-04-PRODUCTO-A` | 04 | Fotografía real | Producto y presentación exactos, si se destaca |
| `IMAGE-04-PRODUCTO-B` | 04 | Fotografía real | Segundo destacado, si existe foto válida |
| `IMAGE-06-AMBIENTE` | 06 | Fotografía real opcional | Mesa/ambiente auténtico, no obligatoria |
| `IMAGE-08-FACHADA` | 08 | Fotografía real opcional | Solo si ayuda a reconocer la entrada |
| `MAP-01` | 08 | Embed/URL Google Maps | Pin oficial verificable; no mapa IA |
| `GFX-PAPER-01` | 02/04/05/06/07 | Textura optimizada | Usarla con moderación |
| `GFX-BRUSH-01` | Distintas | SVG gráfico autorizado | Reutilizar, sin inventar mil variantes |
| `GFX-CROWN-01` | Distintas | SVG decorativo | No confundir con logotipo |

**Criterio de economía:** las texturas se pueden compartir; no convertir en obligatoria una fotografía en cada sección. El inventario real y las variantes de recorte se desarrollarán en la Fase 10 del Concept Demo.

**Archivos de mockup:** los PNG de la conversación sirven como comparadores, no como assets finales. Su asociación exacta con cada versión congelada debe validarse visualmente en la revisión de fidelidad, porque hay variantes exploratorias y algunas contienen errores de datos.

---

# 6. Módulos condicionales y elementos deliberadamente excluidos

### Eventos confirmados

Puede existir un pequeño módulo dentro de experiencias o cerca de ellas **solo** cuando haya evento real, fecha, horario, descripción, condiciones y canal de reserva verificados. Sin evento, no mostrar tarjeta «Próximo evento» vacía. Esta opción **no** crea una décima sección permanente.

### Reseñas y prueba social

No crear testimonios, estrellas ni promedio de calificación a partir de capturas generadas. Si se obtienen reseñas auténticas, con atribución y permisos necesarios, proponer una integración que no rompa la arquitectura; requerirá validación previa.

### Signature Section (Fase 07)

El componente singular puede ser el **ticket dinámico de calculadora** o una interacción visual de bolirrana que se integre en sección 03. **No hay aprobación explícita para insertar una décima sección.** Si se explora otra interacción, presentar impacto visual, accesibilidad, rendimiento y valor real antes de modificar el Blueprint.

### Header abierto mobile

Los mockups de página no representan el menú expandido. Su especificación funcional se encuentra en §1.2 y Design System §15. El estado visual abierto queda pendiente de prueba en el prototipo; no es una sección faltante.

### Páginas legales

Política de privacidad y términos son rutas/páginas de apoyo, no bloques dentro del scroll de nueve secciones. Auditar la implementación actual, recopilar su contenido real y asegurar los enlaces antes de publicar.

---

# 7. Matriz resumen exigida por la Fase 09

| # | SECTION | PURPOSE | LAYOUT DESKTOP → MOBILE | ASSET PRINCIPAL | INTERACTION |
|---:|---|---|---|---|---|
| 01 | Hero | Despertar deseo de visitar | Foto full bleed + copy → crop vertical y CTA visibles | Hero foto real + logo | CTA y header sticky |
| 02 | Manifiesto | Comunicar identidad de barrio | Editorial 58/42 → una columna | Textura ligera | Reveal opcional |
| 03 | Experiencias | Mostrar motivos para ir | Mosaico 60/40 → tres bloques | Tres fotos reales | Zoom sutil, no clicks falsos |
| 04 | Carta | Consultar bebidas y precios | Destacadas + listado → cards apiladas | Fotos productos + datos | Filtro categorías, salto a calculadora |
| 05 | Calculadora | Estimar gasto orientativo | Lista 65% + ticket 35% → lista + resumen | UI ticket + catálogo | Cantidades, total, limpiar, compartir |
| 06 | Reservas | Solicitar mesa | Texto 45% + form 55% → una columna | Form real, foto opcional | Validación y WhatsApp |
| 07 | FAQ | Despejar dudas | Editorial 35/65 → acordeón en columna | Sin foto | Expandir/cerrar |
| 08 | Ubicación | Facilitar llegar | Texto 40% + mapa 60% → CTA antes de mapa | Maps real | Abrir ruta y contacto |
| 09 | Footer | Cerrar marca y navegar | Tres grupos + firma → pila vertical | Logo + grafismos | Sociales, anchors, legales |

---

# 8. Plan de implementación y criterios de aceptación

## 8.1. Orden recomendado

1. Cargar Design System y configurar tokens globales, tipografía, contenedor, iconos y estructura semántica.
2. Montar header + nueve secciones con **contenido provisional no publicado** y componentes reales, respetando composiciones desktop/mobile.
3. Implementar fuente central `BusinessInfo` + `MenuProduct` y validar los enlaces.
4. Programar interacciones de carta/calculadora/solicitud WhatsApp/FAQ/menú móvil.
5. Sustituir imágenes generadas por assets auténticos, comprobar recortes por viewport y contraste.
6. Integrar `FINAL_COPY`, revisar horarios, preguntas, legales, SEO y metadatos.
7. Comparar capturas 1440×900 y 390×844 (y otras resoluciones) contra las variantes congeladas; ajustar con evidencias, no rediseñar arbitrariamente.
8. Ejecutar QA funcional, accesibilidad, rendimiento y revisión de datos antes de publicar.

## 8.2. QA de diseño transversal

- [ ] Un solo header y un solo `h1`; nueve secciones en orden acordado.
- [ ] Todos los fondos y transiciones corresponden al mapa cromático del Design System.
- [ ] Titulares con jerarquía, tipografía y saltos de línea coherentes con los mockups.
- [ ] Fotografía real, logo oficial y assets gráficos limitados; sin duplicados inventados.
- [ ] 320, 360, 375, 390, 430, 768, 1024, 1280, 1440 y 1920 px sin overflow horizontal.
- [ ] Zoom de navegador 200% y navegación completa con teclado.
- [ ] CTA y enlaces funcionan; no hay botones decorativos falsos ni href vacíos.
- [ ] FAQ abre/cierra correctamente y tiene estados accesibles.
- [ ] Filtro de carta muestra las referencias y categorías correctas.
- [ ] Calculadora comparte exactamente la misma fuente de datos y suma correctamente.
- [ ] Reservas prepara solicitud real, no promete disponibilidad ni confirmación automática.
- [ ] Mapa y link geográfico conducen al lugar real.
- [ ] Horarios, precios y ofertas son vigentes y están revisados.
- [ ] Ninguna valoración/reseña es inventada.
- [ ] Footer y política legal llevan a destinos auténticos; copyright utiliza año actual.
- [ ] Las transiciones respetan movimiento reducido, targets táctiles y foco visible.
- [ ] No hay capturas de mockups colocadas como sustituto de UI funcional.

## 8.3. Pruebas manuales críticas

| Flujo | Acción | Resultado esperado |
|---|---|---|
| Descubrimiento | Hero «Ver la carta» | Scroll a categoría / contenido real de Carta |
| Explorar carta | Cambiar personales → compartir → licores | Productos correctos y precios consistentes |
| Calcular | Sumar 2 ítems y cambiar de tab | Cantidades persisten; total correcto |
| Reiniciar | Limpiar cuenta | Todo a 0; CTA compartir deshabilitado |
| Compartir | Abrir mensaje WhatsApp | Resumen legible, sin confirmación ni pedido |
| Reservar | Enviar formulario inválido | Mensajes claros por campo, no abre WhatsApp |
| Reservar | Enviar formulario válido | Mensaje prellenado de solicitud, no éxito falso |
| FAQ | Abrir una respuesta y luego otra | Solo una abierta; teclado y lectores de pantalla |
| Ubicación | Abrir ruta en Google Maps | Destino oficial de La Locura Bar |
| Enlaces | Header, footer, redes y legales | Todas las rutas existentes y correctas |

---

# 9. Dependencias para el documento FINAL_COPY

El tercer documento deberá reemplazar de manera explícita las propuestas textuales por la versión final de:

- Textos de Hero, manifiesto, experiencias, carta, calculadora, reservas, FAQ, ubicación y footer.
- Navegación, CTA, mensajes de carga/vacío/error/éxito condicionado y textos de accesibilidad.
- FAQ con horario verificado o respuesta prudente, reserva y eventos condicionados.
- Títulos SEO, metadescripciones, Open Graph, textos alternativos y políticas relacionadas si corresponden.
- Avisos de cuenta estimada, de reserva no confirmada y de presentación del precio.
- Descripciones públicas que **no** inventen atributos del negocio.

La aprobación del Blueprint no supone la aprobación del texto de todos los mockups. `FINAL_COPY` será el contrato final de redacción y datos textuales de interfaz.

---

## 10. Declaración de cierre de la Fase 09

**El diseño de las nueve secciones queda especificado para prototipo fiel**, bajo «La noche es del barrio», con estructura, estados, assets y navegación determinados. Las áreas de color, datos reales y componentes obedecen a `DESIGN_SYSTEM_LA_LOCURA_BAR_V2.md`; no hay autorización para alterar la propuesta visual o publicar información no confirmada.

**Siguiente documento:** `FINAL_COPY_LA_LOCURA_BAR_V2.md`. Tras su redacción y la verificación comercial, se completarán inventario de recursos definitivo, prototipo/QA y prompt maestro de implementación en el orden del Concept Demo.
