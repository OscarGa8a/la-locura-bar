# FINAL COPY — LA LOCURA BAR V2

**Proyecto:** Rediseño web de La Locura Bar  
**Dirección artística:** La noche es del barrio · Street Editorial Nocturno  
**Versión:** 1.0 — contrato editorial para implementación  
**Fecha:** 10 de noviembre de 2026  
**Documentos vinculados:** `DESIGN_SYSTEM_LA_LOCURA_BAR_V2.md`, `PAGE_BLUEPRINT_LA_LOCURA_BAR_V2.md`, `01_La_Locura_Bar_Identidad_Voz_y_Oferta.md`  
**Estado:** Redacción pública definida para la arquitectura congelada. **Publicación condicionada** a datos operativos, URL oficiales y activos reales enumerados en §16.

> **Contrato de copy:** este documento es la única fuente de texto público del rediseño. No volver a improvisar titulares ni CTA durante la programación. El Design System gobierna la apariencia y el Blueprint la estructura. Si un mockup contiene texto inventado o contradictorio, prevalecen los hechos del negocio y este documento. Las variables como `{producto}` son **instrucciones para renderizar datos**, nunca textos visibles en producción.

---

## 0. Reglas editoriales y de veracidad

### 0.1. Posicionamiento y voz

**Qué somos:** La Locura Bar, un bar de barrio en Villavicencio para compartir, tomar cerveza o aguardiente, escuchar música, pedir canciones y jugar bolirrana. Los eventos deportivos se comunican cuando están anunciados.

**Cómo hablamos:** como un anfitrión cercano, claro y respetuoso; colombiano sin jerga forzada; frases cortas; humor moderado. Una idea dominante por bloque. **No** sonar como discoteca de lujo, e-commerce, servicio de domicilios ni marca corporativa.

**Promesas permitidas:** bolirrana, música variada, posibilidad de pedir canciones, cerveza, aguardiente, reservas sujetas a confirmación, carta y calculadora orientativa, eventos deportivos anunciados, ubicación en Barrio Embudo.

**Afirmaciones prohibidas sin respaldo:** «el mejor», «el más barato», «siempre lleno», «todos los partidos», «mesa garantizada», «reserva confirmada» al abrir WhatsApp, «pedido realizado», «envío a domicilio», promociones, premios, testimonios, aforo oficial y horarios no validados. No inventar cócteles, comida, coctelería, música en vivo habitual o torneos permanentes.

### 0.2. Convenciones de redacción

- **Nombre oficial:** `La Locura Bar`, sin numerales ni modificaciones del logo.
- **Ciudad:** `Villavicencio`; **barrio:** `Embudo`; **dirección escrita:** `Cra. 30A #10B-81, barrio Embudo, Villavicencio, Meta.`
- Titulares visuales en mayúsculas por CSS (`text-transform`) cuando corresponda. En fuentes de datos conservar ortografía, signos y tildes.
- Botones: verbos claros, sin punto final. No utilizar más de un CTA principal visual por sección.
- Priorizar `reserva` como sustantivo y `solicitar` para la acción. La acción **no confirma** disponibilidad.
- El resultado de la calculadora siempre es un `estimado`, **no** precio comprometido, factura o pedido.
- COP: usar el catálogo único para importes; moneda formateada en `es-CO`, sin valores hardcodeados en la UI.
- No abusar de emojis en interfaz; los iconos reales pertenecen al sistema de diseño.
- No colocar «pendiente de validar», «texto de ejemplo», `lorem ipsum` ni notas internas en producción.

### 0.3. Decisiones tomadas para evitar ambigüedad

1. El CTA del **Hero «Cómo llegar»** navega internamente a `#ubicacion`. El CTA de la sección Ubicación abre la **URL oficial verificada de Google Maps**.
2. En la FAQ de horarios se publica, **mientras no haya verificación operativa**, una respuesta de consulta por WhatsApp, **sin cifras horarias**. Al validar horario, se sustituirá por horas confirmadas en una actualización controlada de este documento y del dato central.
3. Los nombres, presentaciones, categorías, fotografías, precios y destacados se renderizan desde el **catálogo verificado** que alimenta carta y calculadora. No existen productos inventados en este copy.
4. Los enlaces de redes, Maps, WhatsApp y páginas legales se habilitan **solo tras comprobar su destino**. Los nombres de enlace aquí definidos no autorizan URLs inventadas.
5. Los mockups son referencia estética, **no prueba** de reseñas, rating, fachada, horario, productos ni aforo.

---

## 1. Navegación global y microcopy común

### 1.1. Header — Desktop

| Elemento | Texto exacto | Destino |
|---|---|---|
| Logotipo (texto alternativo) | La Locura Bar — ir al inicio | `#inicio` |
| Navegación | Experiencias | `#experiencias` |
| Navegación | Carta | `#carta` |
| Navegación | Calculadora | `#calculadora` |
| Navegación | Ubicación | `#ubicacion` |
| CTA | Reservar mesa | `#reservas` |

Si falta espacio, reducir enlaces visibles, **no** reducir la legibilidad ni cambiar el texto arbitrariamente. Las secciones secundarias siguen en el menú móvil y footer.

### 1.2. Menú móvil

| Elemento | Texto exacto / etiqueta accesible |
|---|---|
| Botón cerrado | Abrir menú |
| Botón abierto | Cerrar menú |
| Título del panel (si se muestra) | Explora La Locura |
| Enlaces | Inicio · Experiencias · Carta · Calculadora · Reservas · Preguntas frecuentes · Ubicación |
| CTA | Reservar mesa |
| Etiqueta de navegación | Navegación principal |

El botón hamburguesa tiene un nombre accesible aunque no se muestre visualmente. Al elegir un enlace se cierra el panel.

### 1.3. Textos generales

| Estado | Texto público |
|---|---|
| Carga general | Cargando información… |
| Reintento | Intentar de nuevo |
| Error de carga genérico | No pudimos cargar esta información. Inténtalo de nuevo. |
| Enlace externo (solo lector de pantalla cuando aporte) | Se abre en una nueva pestaña |
| Volver arriba | Volver al inicio |
| Confirmación de copiado | Resumen copiado |
| Acción no disponible por configuración | Esta opción no está disponible en este momento. |

No mostrar toasts de «enviado», «confirmado» o «recibido» cuando solo se abrió una aplicación externa.

---

# 2. Copy definitivo por sección

## SECTION 01 — HERO · `#inicio`

**Eyebrow:** `BARRIO EMBUDO · VILLAVICENCIO`  
**H1:** `EL PARCHE EMPIEZA AQUÍ.`  
**Descripción:** `Cerveza fría, bolirrana, música y buena compañía. Sin tanta vuelta.`  
**CTA primario:** `Cómo llegar` → `#ubicacion`  
**CTA secundario:** `Ver la carta` → `#carta`

**Copy alternativo para lector de pantalla del CTA:** usar el mismo texto visible; no duplicar rótulos.  
**Foto hero:** `alt` concreto según el archivo auténtico elegido; si es imagen de fondo decorativa detrás de un texto suficiente, no duplicar el titular en el `alt`.

**No incluir aquí:** horarios, cifras de reseñas, promociones no confirmadas, lista de productos ni tarjetas adicionales.

## SECTION 02 — MANIFIESTO · `#esencia`

**Eyebrow:** `LA ESENCIA DEL PARCHE`  
**H2:** `EL PLAN NO NECESITA EXCUSA.`  
**Párrafo:** `Con amigos, en pareja o por tu cuenta. Aquí puedes llegar sin formalidades, pedir tu música y armar el parche a tu ritmo.`  
**Firma pequeña opcional:** `LA LOCURA BAR · VILLAVICENCIO`

**CTA:** ninguno. Esta es una pausa editorial, no otra invitación a reservar.

## SECTION 03 — EXPERIENCIAS · `#experiencias`

**Eyebrow:** `ASÍ SE VIVE LA LOCURA`  
**H2:** `ENTRE CANCIONES Y REVANCHAS.`  
**Párrafo:** `Un lugar para jugar, escuchar tu música y compartir el parche.`

| Bloque | Etiqueta accesible/categoría | Titular visual | Texto de apoyo opcional |
|---|---|---|---|
| Bolirrana | Bolirrana | LA REVANCHA SE JUEGA AQUÍ. | Bolirrana con amigos. |
| Música | Música | TÚ PIDES LA CANCIÓN. | Música para disfrutar el parche a tu ritmo. |
| Pantalla | Eventos deportivos | EL DEPORTE SE VIVE EN GRANDE. | Transmisiones deportivas anunciadas. |

**Regla de evento:** nunca presentar la pantalla como transmisión de todos los partidos. En ausencia de programación específica, mantener la fórmula «Transmisiones deportivas anunciadas.»

**Fotografías:** describir **solo lo que se ve realmente**; evitar `alt` genéricos como «experiencia inolvidable» o frases que asuman participantes/rostros sin evidencia.

## SECTION 04 — CARTA · `#carta`

**Eyebrow:** `04 / LA CARTA`  
**H2:** `¿QUÉ SE VA A TOMAR?`  
**Párrafo:** `Conoce nuestras bebidas y arma tu plan sin sorpresas.`

**Categorías visibles:**

| ID interno | Etiqueta de interfaz | Descripción secundaria (si la UI la requiere) |
|---|---|---|
| `personal` | Cervezas personales | Presentaciones individuales |
| `compartir` | Para compartir | Presentaciones para el parche |
| `licores` | Licores | Consulta las opciones disponibles |

**Subtítulo del listado:** `OTRAS OPCIONES` (solo cuando haya destacados **y** productos adicionales).  
**CTA de salida:** `Calcula tu cuenta` → `#calculadora`.

### Texto de datos, sin inventar producto

La UI muestra, desde `MENU-DATA-01`, `{nombre}`, `{presentacion}` y `{precioCOPFormateado}`. Cuando falte alguno de estos datos en un producto, **no** publicar una tarjeta con texto de reemplazo.

| Estado | Texto público |
|---|---|
| Sin productos en una categoría válida | Por ahora no hay bebidas para mostrar en esta categoría. |
| Catálogo temporalmente no disponible | No pudimos cargar la carta. Inténtalo de nuevo. |
| Sin foto validada | **Sin texto en pantalla:** usar composición tipográfica del producto con sus datos reales. |
| Etiqueta de tabs para accesibilidad | Categorías de bebidas |

No mostrar `Comprar`, `Agregar al carrito`, `Pedir ahora`, `Domicilio`, `Más vendido` ni `Oferta` si no existe un flujo o dato que respalde cada afirmación.

## SECTION 05 — CALCULADORA · `#calculadora`

**Eyebrow:** `05 / ARMA TU PARCHE`  
**H2:** `¿CUÁNTO SALE EL PARCHE?`  
**Descripción:** `Escoge las bebidas, ajusta las cantidades y calcula cuánto podrían gastar.`

| Elemento | Texto exacto |
|---|---|
| Selector de categorías | Cervezas personales · Para compartir · Licores |
| Etiqueta del ticket | LA LOCURA BAR |
| Título del ticket | TU CUENTA |
| Subtítulo del ticket | RESUMEN ESTIMADO |
| Encabezado de columna | Producto |
| Encabezado de columna | Cantidad |
| Encabezado de columna | Subtotal |
| Estado vacío | Agrega bebidas para ver tu cuenta. |
| Total | TOTAL ESTIMADO |
| CTA principal (con selección) | Compartir estimado por WhatsApp |
| CTA secundario | Limpiar cuenta |
| Nota bajo el ticket | Valores sujetos a la carta vigente. Esta es una estimación, no un pedido. |
| Resumen móvil colapsado | Ver resumen |
| Resumen móvil expandido | Ocultar resumen |
| Título de barra de total móvil | Total estimado |

### Comportamiento y estado textual

- **Sin selección:** ticket vacío, total `$0` formateado según el sistema; compartir deshabilitado y acompañado de la descripción accesible `Agrega al menos una bebida para compartir el estimado.`
- **Con selección:** mostrar `{cantidad} × {nombre}` y `{subtotalCOPFormateado}`; el total se recalcula inmediatamente.
- **Botón + accesible:** `Aumentar cantidad de {nombre}`.
- **Botón − accesible:** `Reducir cantidad de {nombre}`.
- **Cantidad accesible:** `Cantidad de {nombre}: {cantidad}`.
- **Limpiar cuando está vacío:** botón deshabilitado o ausente; sin acción ficticia.
- **Feedback tras limpiar:** `La cuenta quedó en cero.`
- **Catálogo no disponible:** `No pudimos cargar las bebidas para calcular tu cuenta.`
- **WhatsApp no disponible:** ocultar acción de compartir y, si existe mecanismo confiable de copiado, usar `Copiar resumen`.

### Plantilla final del resumen para compartir

Construir con datos reales y solo líneas con cantidad mayor que cero:

```text
Hola, quiero compartir este estimado de La Locura Bar:

{lineasProductos}

Total estimado: {totalCOPFormateado}

Este cálculo es orientativo y no es un pedido. Los valores pueden cambiar según la carta vigente.
```

**Formato de una línea de producto:** `{cantidad} × {nombre} ({presentacion}) — {subtotalCOPFormateado}`.

**No escribir:** «Quiero realizar este pedido», «Confirmen mi compra» ni «Pagar ahora».

## SECTION 06 — RESERVAS · `#reservas`

**Eyebrow:** `06 / RESERVAS`  
**H2:** `¿YA ARMARON EL PARCHE?`  
**Descripción:** `Dinos cuándo vienen y cuántas personas son. Solicita tu mesa por WhatsApp y confirma la disponibilidad con nosotros.`  
**Título del panel:** `SOLICITA TU MESA`  
**Apoyo del panel:** `Completa estos datos para enviar tu solicitud.`

| Campo | Etiqueta | Texto de ayuda / placeholder |
|---|---|---|
| Nombre | Nombre completo | Tu nombre completo |
| Personas | Número de personas | Selecciona el número de personas |
| Fecha | Fecha | Selecciona una fecha |
| Hora | Hora | Selecciona una hora |

**CTA principal:** `Solicitar por WhatsApp`  
**Aviso permanente:** `La reserva queda sujeta a confirmación.`  
**Ayuda adicional discreta:** `Te confirmaremos la disponibilidad por WhatsApp.`

### Validaciones y errores exactos

| Condición | Mensaje |
|---|---|
| Nombre vacío | Escribe tu nombre. |
| Nombre con solo espacios | Escribe tu nombre. |
| Nombre demasiado largo | Revisa el nombre: es demasiado largo. |
| Número no elegido | Selecciona cuántas personas vienen. |
| Número inválido/no positivo | Ingresa un número válido de personas. |
| Fecha no seleccionada | Selecciona una fecha. |
| Fecha anterior a hoy (hora de Villavicencio) | Elige una fecha de hoy en adelante. |
| Hora no seleccionada | Selecciona una hora. |
| Hora incompatible con horario confirmado | Elige una hora dentro de nuestro horario de atención. |
| Error global con datos incompletos | Revisa los campos señalados para continuar. |
| Sin número oficial configurado | No podemos abrir WhatsApp en este momento. Inténtalo más tarde. |
| Error técnico al abrir | No pudimos abrir WhatsApp. Inténtalo de nuevo. |

**No implementar mensajes sobre «sin cupos» o «disponibilidad agotada» si no hay información real de capacidad.** Hasta confirmar horas válidas, el selector de hora no debe presentar opciones inventadas; es un bloqueo de lanzamiento funcional, no una invitación a publicar opciones falsas.

### Mensaje prellenado de solicitud de reserva

```text
Hola, quiero consultar disponibilidad para una mesa en La Locura Bar.

Nombre: {nombre}
Personas: {cantidadPersonas}
Fecha: {fechaLocalLegible}
Hora: {horaLocalLegible}

Quedo atento a la confirmación. ¡Gracias!
```

**Estado posterior a pulsar el CTA:** no mostrar una página ni un toast de «Reserva enviada». Si es necesario orientar al usuario, utilizar: `Revisa el mensaje en WhatsApp y envíalo para completar tu solicitud.` La interfaz **no puede saber** si lo envió, si fue recibido o si quedó confirmado.

## SECTION 07 — FAQ · `#preguntas`

**Eyebrow:** `07 / PREGUNTAS FRECUENTES`  
**H2:** `ANTES DE CAER.`  
**Descripción:** `Resolvemos lo básico para que llegues sin tanta vuelta y disfrutes el parche.`

### Las seis preguntas y respuestas públicas

**01. ¿Cuál es el horario de La Locura Bar?**  
`Escríbenos por WhatsApp antes de venir y te confirmamos nuestro horario de atención.`

> **Regla de despliegue:** esta respuesta prudente es la **versión publicable ahora** porque las fuentes aportadas no permiten confirmar que el horario de la captura siga vigente. Cuando el responsable valide los horarios por día, reemplazar esta respuesta por los días y horas exactos, coherentes con la ficha del negocio y el selector de reservas. No trasladar cifras del mockup por su apariencia.

**02. ¿Cómo puedo reservar una mesa?**  
`Puedes solicitar tu mesa desde la página o por WhatsApp. Nuestro equipo te confirmará la disponibilidad.`

**03. ¿Se puede jugar bolirrana?**  
`¡Claro! Puedes jugar bolirrana con tus amigos mientras disfrutas de la música y el ambiente del bar.`

**04. ¿Transmiten partidos y otros eventos deportivos?**  
`Sí, contamos con pantalla gigante para transmisiones deportivas anunciadas. Consulta nuestras redes para conocer los próximos eventos.`

**05. ¿Puedo pedir música y bailar?**  
`Sí. Tenemos música variada, puedes pedir canciones y disfrutar del ambiente a tu ritmo.`

**06. ¿Qué bebidas tienen disponibles?**  
`Tenemos cervezas personales, presentaciones para compartir y aguardiente. Consulta las opciones y precios en nuestra carta.`

### Contacto complementario

**Título:** `¿TE QUEDÓ ALGUNA DUDA?`  
**Texto:** `Escríbenos por WhatsApp y te ayudamos.`  
**CTA:** `Consultar por WhatsApp`

### Accesibilidad del acordeón

- Grupo: `Preguntas frecuentes de La Locura Bar`.
- Icono/cabecera abierto: `Ocultar respuesta: {pregunta}`.
- Icono/cabecera cerrado: `Mostrar respuesta: {pregunta}`.
- **Estado inicial:** todas cerradas; la primera abierta en el PNG es una ilustración de estado, no una obligación funcional.

## SECTION 08 — UBICACIÓN · `#ubicacion`

**Eyebrow:** `08 / ENCUÉNTRANOS`  
**H2:** `AQUÍ NOS VEMOS.`  
**Descripción:** `Estamos en el barrio Embudo, Villavicencio. Consulta la ruta antes de salir y nos vemos en el parche.`  
**Rótulo de dirección:** `DIRECCIÓN`  
**Dirección:** `Cra. 30A #10B-81, barrio Embudo, Villavicencio, Meta.`  
**CTA principal:** `Cómo llegar en Google Maps` → URL real verificada.  
**CTA secundario:** `Consultar por WhatsApp` → canal oficial verificado.  
**Título accesible del mapa:** `Mapa de ubicación de La Locura Bar en el barrio Embudo, Villavicencio.`

**No mostrar por defecto un bloque de horas** hasta confirmar los horarios. Si se validan, la etiqueta sería `HORARIOS` y los datos se renderizarían desde `business.openingHours`; nunca copiar «Jueves a sábado» ni otra cifra de la imagen generada.

**Si el mapa no carga:** `No pudimos mostrar el mapa. Puedes abrir la ubicación en Google Maps.` El CTA externo debe seguir funcionando.

**No publicar en ningún estado:** valoraciones numéricas generadas por IA, «120 reseñas», calles falsas, distancias, estacionamientos, iconos de Google inventados ni fotografías ficticias de la fachada.

## SECTION 09 — FOOTER · `#footer`

**Eyebrow:** `EL PARCHE SIGUE EN REDES`  
**Titular:** `LA NOCHE ES DEL BARRIO.`  
**Descripción:** `Síguenos y entérate de lo que se arma en La Locura.`

**Encabezado redes:** `SÍGUENOS`  
**Nombres de enlaces:** `Instagram` · `TikTok` · `Facebook` (mostrar solo los perfiles oficiales validados).  
**Encabezado navegación:** `EXPLORA`  
**Enlaces:** `Experiencias` · `Carta` · `Calculadora de parche` · `Reservas` · `Preguntas frecuentes` · `Ubicación`.  
**Firma visual:** `LA LOCURA BAR` (nombre en texto editorial, **no** sustituto del logotipo oficial).  
**Localización:** `VILLAVICENCIO · COLOMBIA`.

**Línea legal dinámica:** `© {añoActual} La Locura Bar · Todos los derechos reservados.`  
**Enlace legal si existe página vigente:** `Política de privacidad`.  
**Enlace legal si existe página vigente:** `Términos de uso`.

Si un documento legal no existe, **no colocar un enlace vacío**; resolver la necesidad legal antes del lanzamiento según el tratamiento real de datos. No crear texto legal ficticio dentro de este documento.

---

# 3. Copy de estados transversales

## 3.1. Botones y controles

| Área | Texto/aria-label |
|---|---|
| CTA de dirección hero | Cómo llegar |
| CTA de dirección ubicación | Cómo llegar en Google Maps |
| Compartir WhatsApp | Compartir estimado por WhatsApp |
| Reserva WhatsApp | Solicitar por WhatsApp |
| Menú | Abrir menú / Cerrar menú |
| Tabs carta | Mostrar categoría: {categoria} |
| Tabs calculadora | Seleccionar categoría: {categoria} |
| Cambio a categoría sin productos | Por ahora no hay bebidas para mostrar en esta categoría. |
| Selección de bebidas | Agrega bebidas para ver tu cuenta. |
| Reset calculadora | La cuenta quedó en cero. |
| Reintentar carga | Intentar de nuevo |
| Mapa no disponible | No pudimos mostrar el mapa. Puedes abrir la ubicación en Google Maps. |

Los mensajes accesibles son funcionales; no agregarlos como subtítulos visibles en cada control si el diseño ya comunica el significado.

## 3.2. Vacíos, errores y conexiones

| Condición | Mensaje |
|---|---|
| Catálogo no cargó | No pudimos cargar la carta. Inténtalo de nuevo. |
| Categoría sin productos | Por ahora no hay bebidas para mostrar en esta categoría. |
| Calculadora sin productos | No pudimos cargar las bebidas para calcular tu cuenta. |
| Falta WhatsApp configurado | Esta opción no está disponible en este momento. |
| Contacto en error | No pudimos abrir WhatsApp. Inténtalo de nuevo. |
| Evento sin programación | **No renderizar módulo de evento.** |
| Reseñas no verificadas | **No renderizar módulo de reseñas.** |
| Fotografías no verificadas | **No publicar una foto ficticia como real.** |

## 3.3. Textos sociales / enlaces externos

- Para enlaces que abran otra pestaña, el ícono debe tener descripción accesible si el texto no identifica suficiente la acción.
- Los enlaces oficiales nunca apuntan a `#` ni URLs de muestra.
- WhatsApp abre un canal externo con una consulta o estimado; **no confirma** una transacción.

---

# 4. SEO — títulos, descripciones y metadatos

## 4.1. Página principal

| Campo | Contenido final |
|---|---|
| `html lang` | `es-CO` |
| `title` | `La Locura Bar en Villavicencio | Bolirrana y música` |
| `meta description` | `Ven a La Locura Bar, en el barrio Embudo de Villavicencio. Bolirrana, cerveza fría, música y eventos deportivos anunciados. Mira la carta y cómo llegar.` |
| `og:title` | `La Locura Bar · El parche empieza aquí` |
| `og:description` | `Bolirrana, música, cerveza fría y parche en el barrio Embudo, Villavicencio. Descubre la carta, calcula tu cuenta y conoce cómo llegar.` |
| `og:type` | `website` |
| `twitter:card` | `summary_large_image` (si existe imagen social real y autorizada) |
| `og:locale` | `es_CO` |
| H1 | `El parche empieza aquí.` |
| Canonical | URL canónica **real**, verificada con el despliegue; no asumir dominio a partir de imagen |
| `og:image` | Imagen promocional del local real, con derechos y dimensiones adecuadas; no mockup completo con UI falsa |

**Importante:** la descripción de SEO no promete programación deportiva permanente; es «eventos deportivos anunciados».

## 4.2. Búsqueda local y datos estructurados

Si se implementa `BarOrPub` / `LocalBusiness` en JSON-LD, usar exclusivamente: `name = La Locura Bar`, dirección verificada, localidad Villavicencio, región Meta, país Colombia, URL oficial real, teléfono oficial real y horario **solo después de validarlo**. No publicar `aggregateRating`, `review`, `priceRange`, `sameAs` ni `openingHoursSpecification` inventados. Las redes en `sameAs` se agregan al verificar sus perfiles.

**Meta robots:** `index,follow` únicamente cuando el dominio sea el productivo y el contenido se haya revisado; demos/staging siguen su política real de noindex. La configuración del servidor y Search Console son tareas técnicas, no copy visible.

## 4.3. Textos de enlaces para SEO y accesibilidad

Preferir `Ver la carta`, `Cómo llegar en Google Maps`, `Reservar mesa` y `Preguntas frecuentes` antes que `Ver más`, `Haz clic aquí` o `Conoce más`. Conservar un solo H1 y encabezados en orden lógico por sección.

## 4.4. Ejemplos de texto alternativo: requieren foto auténtica coincidente

Estos son **patrones para redactar** después de seleccionar las fotografías; no afirman que esas tomas ya existan:

| Asset | Texto alternativo si coincide con lo que aparece en la foto |
|---|---|
| Hero | Interior de La Locura Bar en Villavicencio durante la noche. |
| Bolirrana | Mesa de bolirrana de La Locura Bar. |
| Música | Zona de mesas de La Locura Bar con iluminación nocturna. |
| Pantalla | Pantalla del bar durante una transmisión deportiva anunciada. |
| Bebida | {nombre} en presentación {presentacion}. |
| Logotipo | La Locura Bar. |
| Mapa integrado | Usar `title`: Mapa de ubicación de La Locura Bar en Villavicencio. |

Si una foto no permite confirmar ese contenido, escribir un `alt` que describa lo que sí se ve o, si es puramente decorativa, usar `alt=""`. No repetir el titular como texto alternativo decorativo.

---

# 5. Contenido condicional (no aprobado como bloque permanente)

## 5.1. Evento deportivo confirmado

**Solo cuando exista evento validado con fecha, hora, cobertura y condiciones verificadas.** Campos de datos: nombre del evento, fecha local, hora local, fuente/confirmación de transmisión. El texto de ese módulo se construirá sobre esos datos; **no se redacta un evento ficticio** para llenar el diseño.

**Título condicional corto:** `PRÓXIMO EVENTO`  
**CTA permitido:** `Consultar por WhatsApp` o `Ver detalles` **si existe destino real**.  
**Estado sin evento:** el módulo **no aparece**.

## 5.2. Reseñas

No se aprueban estrellas, número de reseñas ni testimonios sin evidencia verificable y autorización cuando corresponda. Sin reseñas válidas, **no se monta** el módulo. El texto de una reseña debe preservar la cita original y su atribución permitida; no escribir reseñas sintéticas.

## 5.3. Signature Section y menú móvil desplegado

No agregar nuevos claims ni sección adicional por entusiasmo visual. La decisión de Signature Section y el diseño específico del menú móvil abierto continúan sujetos a revisión separada; el texto base de marca y navegación ya está listo aquí.

---

# 6. Política de publicación y QA editorial

## 6.1. Comprobaciones obligatorias

- [ ] Nombre «La Locura Bar» correcto en todos los componentes, SEO y elementos accesibles.
- [ ] Nueve secciones en orden Blueprint, con FAQ antes de Ubicación.
- [ ] Hero con H1 único, CTA con destinos consistentes.
- [ ] Nada de productos y precios escritos a mano desde mockups IA; catálogo único real.
- [ ] Sin cócteles, comida, domicilios, promociones o «más vendido» sin respaldo.
- [ ] FAQ y reserva describen **solicitud**, no confirmación automática.
- [ ] Horarios publicados solo tras validación en el bar y sincronización con selector y Google Maps cuando aplique.
- [ ] Enlaces de Maps, WhatsApp, redes y legales reales, activos y verificados.
- [ ] Fotografías auténticas y textos alternativos ajustados a lo que muestran.
- [ ] Sin rating inventado, reseñas falsas, aforo de 50 como oficial ni promesa de todos los partidos.
- [ ] Copys mobile no se cortan a 320 px, zoom 200% y localización `es-CO`.
- [ ] Estados vacíos y de error conservan el tono cercano y no prometen operaciones inexistentes.
- [ ] Año del footer dinámico, sin errores de enlaces legales.
- [ ] Meta title/description comprobados en despliegue productivo, con canonical final.
- [ ] No quedan placeholders, corchetes técnicos ni texto para diseñador en la interfaz pública.

## 6.2. Dependencias comerciales bloqueantes

| Dato | Acción necesaria | Cómo se gestiona mientras falta |
|---|---|---|
| Horario vigente por día | Confirmar con negocio | FAQ de consulta; ocultar horas detalladas; no permitir horas falsas en reserva |
| Carta, presentaciones y precios | Confirmar lista actualizada | No renderizar datos ficticios; usar catálogo validado para ambas secciones |
| Número WhatsApp Business | Confirmar teléfono oficial | No activar enlaces WhatsApp con número inventado |
| Ubicación y enlace Maps | Verificar ficha oficial y pin | Dirección textual visible, CTA solo al destino verificado |
| Instagram, TikTok y Facebook | Comprobar perfiles oficiales | Mostrar solo enlaces correctos |
| Fotografías y logo | Recuperar assets reales aprobados | No reemplazar con escenarios de IA como prueba factual |
| Textos legales | Auditar privacidad y términos reales | No añadir rutas inexistentes; resolver antes de publicar cuando sean exigibles |
| Políticas de reservas | Verificar restricciones y horarios | Conservar solicitud humana, sin afirmar disponibilidad automática |

---

# 7. Matriz de correspondencia con el Blueprint

| ID | Sección | Titular contractual | Conversión o siguiente paso |
|---|---|---|---|
| 01 | Hero | EL PARCHE EMPIEZA AQUÍ. | Cómo llegar / Ver la carta |
| 02 | Manifiesto | EL PLAN NO NECESITA EXCUSA. | Comprender la personalidad |
| 03 | Experiencias | ENTRE CANCIONES Y REVANCHAS. | Descubrir actividades reales |
| 04 | Carta | ¿QUÉ SE VA A TOMAR? | Calcula tu cuenta |
| 05 | Calculadora | ¿CUÁNTO SALE EL PARCHE? | Compartir estimado opcional |
| 06 | Reservas | ¿YA ARMARON EL PARCHE? | Solicitar por WhatsApp |
| 07 | FAQ | ANTES DE CAER. | Resolver dudas / WhatsApp |
| 08 | Ubicación | AQUÍ NOS VEMOS. | Abrir Google Maps |
| 09 | Footer | LA NOCHE ES DEL BARRIO. | Redes y navegación |

---

# 8. Regla final de ejecución

**Este archivo congela la redacción del Concept Demo V2**, con una salvedad fundamental: los datos comerciales variables no se sustituyen por inventos. Productos, precios, horarios, redes, WhatsApp, mapa y condiciones deben provenir de fuentes reales verificadas. Si falta un dato, usar la alternativa segura aquí definida, ocultar el componente condicionado o bloquear únicamente la acción afectada.

No rediseñar titulares, botones o personalidad del texto durante el desarrollo. Cualquier cambio posterior de copy público se registra como nueva versión de `FINAL_COPY_LA_LOCURA_BAR_V2.md` y se revisa contra el Design System y el Blueprint.
