# DESIGN SYSTEM — LA LOCURA BAR V2

**Proyecto:** Rediseño web de La Locura Bar  
**Dirección artística:** La noche es del barrio  
**Descripción del lenguaje visual:** Street Editorial Nocturno  
**Versión del documento:** 1.0 — consolidación de mockups  
**Fecha:** 10 de noviembre de 2026  
**Estado:** Especificación de implementación basada en composición visual congelada. Los tokens cuantificados son normalizaciones técnicas propuestas, sujetas a una prueba de fidelidad contra los mockups; no son códigos oficiales extraídos de un archivo Figma ni de fuentes vectoriales.

> **Principio rector:** el agente implementador debe reproducir el sistema aprobado, **no rediseñarlo**. Los mockups son referencias de composición, estilo y jerarquía; **nunca** deben incrustarse como capturas completas de la interfaz. Se construyen componentes semánticos, responsive, accesibles y funcionales.

---

## 0. Alcance, jerarquía de fuentes y estado de decisiones

### 0.1. Fuentes utilizadas

1. Mockups desktop y mobile congelados en la conversación (nueve secciones, dieciocho vistas principales; existen versiones exploratorias adicionales).  
2. `Prompt Concept Demo.md`, especialmente **Fase 08 — Design System**.  
3. `01_La_Locura_Bar_Identidad_Voz_y_Oferta.md`: oferta confirmada, tono, prohibiciones, uso de imágenes y objetivo comercial.  
4. `00_La_Locura_Bar_Indice_Maestro_y_Reglas_de_Uso.md`: verificación de afirmaciones y prioridad de fuentes.  
5. Análisis de la Fase 08 aprobado como punto de partida dentro de la conversación.

### 0.2. Qué está congelado y qué no

| Categoría | Estado | Regla |
|---|---|---|
| Dirección «La noche es del barrio» | **Aprobada** | No cambiar concepto sin autorización. |
| Arquitectura principal de nueve secciones | **Congelada a nivel conceptual** | Mantener orden lógico señalado en §18. |
| Composición desktop/mobile de cada sección | **Referencia congelada** | Conservar intención, jerarquía y proporciones; ajustar solo para responsividad y contenido real. |
| Colores exactos HEX | **Normalización V2** | Usar tokens de este documento y comprobar fidelidad al montar prototipo. |
| Fuente concreta | **Decisión técnica seleccionada para pruebas** | Anton + Manrope; si la similitud visual falla, ajustar con evidencia, no arbitrariamente. |
| Texturas, pinceladas, coronas | **Lenguaje aprobado; assets pendientes** | Consolidar pocos SVG/AVIF reutilizables y fieles, sin inventar elementos en cada sección. |
| Logotipo | **El original es obligatorio** | Las recreaciones de IA no son fuente oficial. |
| Productos, precios, horarios, reseñas y enlaces | **Sujetos a verificación** | Nunca copiar datos inventados por una imagen generada. |
| Menú móvil abierto / sticky states | **No congelados visualmente** | Definir siguiendo este sistema y validar contra el flujo real. |

### 0.3. Objetivo de producto

Aumentar visitas reales al establecimiento de barrio ubicado en **Cra. 30A #10B-81, Barrio Embudo, Villavicencio, Colombia**. La web debe facilitar descubrimiento del ambiente, consulta de bebidas y precios, cálculo orientativo, solicitud de reserva y navegación al local; sin plantearse como e-commerce ni como plataforma de domicilios.

---

## 1. DIRECTION NAME

**La noche es del barrio.**  
**Expresión operativa:** Street Editorial Nocturno.

**Visual formula:** fotografía documental nocturna + titulares condensados y grandes + fondos carbón y crema alternados + magenta identitario + ámbar funcional + detalles gráficos urbanos dosificados + información comercial muy clara.

**Se siente como:** un bar real, cercano, social y con carácter propio; una identidad editorial de cultura de barrio, no una discoteca de lujo ni una tienda digital.

**No se siente como:** neón futurista, rave, casino, restaurante premium, campaña de lujo, startup SaaS o flyer saturado en cada scroll.

## 2. BRAND ATTRIBUTES

**Núcleo:** cercano, auténtico, descomplicado, energético, urbano, acogedor, social y reconocible.

**Atributos contextuales:** competitivo en bolirrana; deportivo en eventos anunciados; musical en experiencias; humorístico de manera moderada en comunicación social.

**Regla de personalidad:** la marca debe invitar como anfitrión local, no presumir de exclusividad. Un solo mensaje dominante por bloque.

## 3. COLORS — tokens y roles

### 3.1. Paleta núcleo normalizada

| Token | HEX | Uso |
|---|---|---|
| `--primary` | `#E60068` | Magenta vivo de marca: lettering grande, trazos y elementos gráficos, no texto pequeño sobre crema. |
| `--secondary` | `#FFB936` | Ámbar funcional: CTA principal, controles seleccionados, enfoque de acción. |
| `--background` | `#171315` | Fondo general oscuro. |
| `--surface` | `#24201F` | Panel o tarjeta sobre fondo oscuro. |
| `--dark` | `#171315` | Fondo profundo y texto sobre ámbar. |
| `--accent` | `#B72B69` | Magenta accesible para texto pequeño o iconos sobre crema. |
| `--muted` | `#C9BFB6` | Texto secundario sobre carbón. |
| `--line` | `#625852` | Bordes estructurales oscuros, sin pretender que por sí solos comuniquen estados. |
| `--text` | `#F5EBDD` | Texto principal sobre oscuro. |

### 3.2. Tokens extendidos

| Token | HEX | Uso |
|---|---|---|
| `--color-paper` | `#F5EBDD` | Fondo claro editorial. |
| `--color-paper-2` | `#EEE2D1` | Variación de papel/ticket. |
| `--color-ink` | `#211C1A` | Titular y texto principal sobre crema. |
| `--color-ink-muted` | `#6B615A` | Texto secundario sobre crema. |
| `--color-surface-raised` | `#342C29` | Campos y controles oscuros. |
| `--color-line-light` | `#B8AD9F` | Divisores sobre crema. |
| `--color-pink-strong` | `#E60068` | Acento expresivo de alta energía. |
| `--color-pink-text` | `#B72B69` | Pequeño texto magenta sobre crema. |
| `--color-gold` | `#FFB936` | Acción principal. |
| `--color-gold-soft` | `#E7AE6C` | Indicadores secundarios cálidos (no texto pequeño en crema). |
| `--color-success` | `#138A43` | Confirmaciones de estado; no sustituye la identidad WhatsApp. |
| `--color-error` | `#B52731` | Error y validación. |
| `--color-focus` | `#FFB936` | Anillo de foco oscuro; en fondo ámbar usar doble anillo con carbón. |
| `--color-white` | `#FFFFFF` | Blanco puro solo cuando se necesite. |

### 3.3. Contraste comprobado para combinaciones clave

- Crema `#F5EBDD` sobre carbón `#171315`: **15,62:1**.
- Ámbar `#FFB936` sobre carbón `#171315`: **10,74:1**.
- Texto secundario `#C9BFB6` sobre carbón: **10,18:1**.
- Magenta accesible `#B72B69` sobre crema: **5,00:1**.
- Magenta vivo `#E60068` sobre crema: **3,90:1**: **no** usar como texto normal pequeño.
- Magenta vivo `#E60068` sobre carbón: **4,00:1**: reservar para tipografía grande y elementos decorativos; no usar en pequeño.
- Ámbar suave `#E7AE6C` sobre crema: **1,67:1**: no usar como texto.

**Norma:** WCAG AA: mínimo **4,5:1** para texto ordinario y **3:1** para texto grande; los elementos no textuales necesarios deben tener contraste suficiente. Si un token falla en contexto, cambiar el **token semántico del componente**, no alterar los colores globales al azar.

### 3.4. Asignaciones semánticas

- **Principal sobre oscuro:** fondo `--background`, texto `--text`, secundario `--muted`.
- **Principal sobre claro:** fondo `--color-paper`, texto `--color-ink`, secundario `--color-ink-muted`.
- **CTA primario:** fondo `--secondary`, texto `--dark`.
- **CTA secundario oscuro:** transparente o `--surface`, texto crema y borde legible.
- **CTA secundario claro:** texto carbón, borde carbón atenuado, hover con superficie cálida.
- **Word accent grande:** `--primary`; en tamaño pequeño sobre claro `--accent`.
- **WhatsApp:** se permite verde identificable solo en acción que **realmente** abre WhatsApp; no como color decorativo global.

### 3.5. Lo que no debe hacerse

No introducir azul eléctrico, cian neón, violeta ni degradados multicolor solo porque la página V1 los usaba. Esa paleta antigua está documentada como base previa de marca; este rediseño web **aprobó** una evolución carbón/crema/magenta/ámbar sin autorizar cambios al logo original fuera de la web.

## 4. TYPOGRAPHY

### 4.1. Familias seleccionadas para implementación de prueba

- `--font-display: 'Anton', 'Arial Narrow', Impact, sans-serif;`
- `--font-body: 'Manrope', Arial, sans-serif;`

Son familias **normalizadas para reproducir** el aspecto de los mockups. No se afirma que la IA haya utilizado exactamente esas familias. Se realizará comparación visual en el prototipo antes de dar por cerrada su correspondencia.

### 4.2. Roles y pesos

| Rol | Fuente | Peso | Reglas |
|---|---|---|---|
| Hero, H1, H2 y rótulos expresivos | Anton | 400 (display naturalmente pesada) | Mayúsculas, interlineado compacto, tracking ajustado. |
| Subtítulos, categorías llamativas y precios | Anton o Manrope | 400 / 700 | Usar display solo donde beneficie a la jerarquía. |
| Párrafos, navegación, formularios | Manrope | 400 / 500 / 600 | Priorizar legibilidad. |
| CTA | Manrope 800 o Anton según mockup | 700–800 / 400 | Mantener misma familia y altura por variante. |
| Precio total / número | Manrope | 800 | `font-variant-numeric: tabular-nums`. |

### 4.3. Cursivas y lettering

No usar *italic* para todos los textos decorativos. Lettering manual tipo «La noche es del barrio» o pinceladas de la marca se representan con assets vectoriales autorizados; no añadir una tercera fuente UI por un único detalle de marca. No simular el logotipo con texto CSS.

### 4.4. Reglas generales

- Titulares cortos, preferentemente en altas; `text-wrap: balance` donde esté soportado.
- Párrafos en mayúsculas/minúsculas, nunca todo en mayúsculas.
- Interlineados display aproximadamente `0.92–1.02`, body `1.45–1.65`.
- Longitud de línea para lectura: preferible entre `45ch` y `65ch`.
- Evitar deformación artificial de letras, `scaleX()` de todo el bloque y sombras gruesas en texto funcional.

## 5. TYPE SCALE

Los valores responden a un **mapeo técnico aproximado** de los mockups y deben afinarse en contraste con las capturas congeladas:

| Token | CSS fluido | Desktop típico | Mobile típico |
|---|---|---|---|
| `--fs-hero` | `clamp(3rem, 7.2vw, 7rem)` | 88–112 px | 48–64 px |
| `--fs-h2` | `clamp(2.5rem, 5.5vw, 5.5rem)` | 64–88 px | 40–54 px |
| `--fs-h3` | `clamp(1.625rem, 2.8vw, 2.5rem)` | 30–40 px | 26–32 px |
| `--fs-body-xl` | `clamp(1.125rem, 1.55vw, 1.5rem)` | 20–24 px | 18–20 px |
| `--fs-body` | `clamp(1rem, 1.15vw, 1.125rem)` | 16–18 px | 16 px |
| `--fs-small` | `0.875rem` | 14 px | 14 px |
| `--fs-micro` | `0.75rem` | 12 px | 12 px |

**Nota de pantalla pequeña:** en anchos alrededor de 320 px, permitir `--fs-hero` y `--fs-h2` reducirse mediante un override medido; nunca forzar overflow. Las etiquetas decorativas no deben ser inferiores a 12 px en la versión real del sitio. Las unidades de CSS son rem, y el zoom del navegador debe seguir funcionando.

## 6. GRID

- **Desktop ≥1200 px:** grid de 12 columnas, gutter 24 px, contenedor máximo 1280 px, padding lateral entre 48 y 80 px según viewport.
- **Tablet 768–1199 px:** grid de 8 columnas, gutter 20 px, padding lateral 32 px.
- **Mobile <768 px:** grid de 4 columnas, gutter 16 px, padding lateral 20–24 px (mínimo 16 px en pantallas estrechas).
- **Ancho máximo de contenido:** `min(1280px, calc(100% - 2 * var(--page-gutter)))`.
- **Columnas especiales:** Hero ocupa todo el viewport visual; Experiencias usa mosaico asimétrico; Carta tiene dos productos destacados; Calculadora 65/35; Reservas ~45/55; FAQ ~35/65; Ubicación ~40/60; Footer tres grupos con firma independiente.

Los porcentajes son intenciones compositivas, no reglas rígidas para tablets. Si el contenido se estrecha, apilar.

## 7. SPACING

Escala base en múltiplos de 4 y 8 px:

`--space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-5:20px; --space-6:24px; --space-8:32px; --space-10:40px; --space-12:48px; --space-16:64px; --space-20:80px; --space-24:96px; --space-30:120px;`

- Padding vertical de sección: desktop `88–120px`, tablet `64–80px`, mobile `56–72px`.
- Espacio entre encabezado y contenido: `32–56px` desktop; `24–36px` mobile.
- Tarjeta funcional: `20–32px` padding desktop, `16–24px` mobile.
- Entre filas densas: `8–12px`, sin sacrificar altura táctil.
- Un título no debe pegarse al borde, fotografía, formulario o mapa.
- Nunca agregar altura vacía para simular una captura 9:16.

## 8. BORDER RADIUS

| Token | Valor | Uso |
|---|---:|---|
| `--radius-xs` | 4 px | Etiquetas pequeñas |
| `--radius-sm` | 8 px | Botones compactos y tabs |
| `--radius-md` | 12 px | Inputs, cards, acordeones |
| `--radius-lg` | 16 px | Formularios, tickets, mapa |
| `--radius-xl` | 20 px | Superficie especial si aparece en mockup |

**Excepción:** bordes de papel rasgado del ticket mediante imagen/SVG decorativo; no generar polígonos distintos en cada componente. No utilizar píldoras en todo el sistema.

## 9. BORDERS

- Bordes estructurales base: 1 px `solid`.
- Superficies oscuras: `--line` a opacidad visual moderada; en focos y errores usar colores y cambios más claros que un borde tenue.
- Crema: divisor `--color-line-light`, sin grandes cajas alrededor de cada pregunta de FAQ.
- Cards de productos y formulario pueden tener borde fino definido, pero las fotografías no deben llevar marcos neón.
- Nunca usar el borde como única forma de comunicar error, selección o foco.

## 10. SHADOWS

- `--shadow-soft: 0 8px 24px rgba(0,0,0,.12)` para elevación suave sobre claro.
- `--shadow-dark: 0 16px 44px rgba(0,0,0,.28)` para formulario o ticket sobre fondo oscuro.
- `--shadow-focus: 0 0 0 3px rgba(255,185,54,.45)` solo como apoyo visual, con outline adecuado.
- En la mayoría de bloques editoriales, **sin sombra**.
- No emplear `box-shadow` fosforescente ni resplandor constante en CTAs o cards.

## 11. ICONOGRAPHY

**Familia base:** Lucide u otra biblioteca coherente de líneas sencillas, con tamaño 18–24 px y trazos 1.75–2 px.

- Mantener proporciones y estilo uniforme.
- Iconos concretos: mapa, flecha externa, calendario, reloj, personas, sumar/restar, más/menos, WhatsApp, redes.
- Los pictogramas de bolirrana deben dibujarse a medida cuando se necesite fidelidad; no sustituir con un símbolo incorrecto.
- Los logotipos de Instagram/TikTok/Facebook/WhatsApp deben ser assets correctos, no imitaciones ambiguas.
- Nunca agregar iconos decorativos a cada frase por costumbre.

## 12. PHOTOGRAPHY DIRECTION

- **Fuente principal:** fotografías reales del establecimiento, sus productos y sus experiencias.
- **Ambiente:** nocturno, cálido, luz práctica, textura real; no hacer el local más grande ni lujoso de lo que es.
- **Encuadres:** hero panorámico con espacio de lectura; bolirrana a escala real; música/ambiente; pantalla cuando haya transmisión anunciada; cervezas correctas según carta real.
- **Personas:** requieren autorización si son identificables; evitar presentar públicos generados como clientes reales.
- **Producto:** nombre, marca y presentación deben coincidir con los inventarios del negocio; no bebidas ficticias, cócteles ni comida no confirmada.
- **Color:** grading cálido moderado y magenta ambiental cuando sea auténtico; evitar filtros que falsifiquen colores de productos.
- **Tratamiento técnico:** AVIF/WebP con responsive `srcset`, dimensionado explícito, `object-position` distinto para desktop/mobile cuando corresponda, imágenes no críticas lazy-load, hero prioritario.

### Relación de imágenes por sección

| Sección | Material |
|---|---|
| 01 Hero | Fotografía auténtica del bar, horizontal y recorte vertical. |
| 02 Manifiesto | Sin fotografía necesaria: composición tipográfica. |
| 03 Experiencias | Bolirrana, ambiente/música, pantalla gigante, cada una real. |
| 04 Carta | Dos fotografías destacadas del producto correcto; el resto puede ir en lista. |
| 05 Calculadora | UI protagonista; producto miniatura opcional y auténtico. |
| 06 Reservas | Imagen ambiental opcional, secundaria al formulario. |
| 07 FAQ | Sin fotografía. |
| 08 Ubicación | Mapa real de Google Maps; fachada real solo si se aporta y aporta orientación. |
| 09 Footer | Sin fotografía necesaria. |

## 13. GRAPHIC LANGUAGE

**Biblioteca controlada de recursos:**

- `brush-pink-01.svg`: pincelada magenta para subrayado/énfasis. Máximo un gesto principal por sección.
- `brush-dark-01.svg`: trazo carbón ocasional en fondos crema y microcopys importantes.
- `crown-outline-01.svg`: corona de trazo manuscrito usada solo en lugares seleccionados, no en cada card.
- `paper-grain-01.avif`: textura muy tenue para secciones crema, preferiblemente con CSS de respaldo sin textura.
- `charcoal-grain-01.avif`: textura oscura de bajo contraste sin afectar legibilidad.
- `ticket-edge-01.svg`: borde de recibo si se justifica en la calculadora.

**Reglas:**

1. Recursos gráficos siempre decorativos y con `aria-hidden="true"`.
2. Respetar caja del título y CTAs; no invadir el área táctil.
3. No crear un nuevo lenguaje gráfico en cada sección.
4. El logotipo oficial **no** se reconstruye combinando brush fonts y coronas.
5. Mantener posibilidad de apagar texturas con CSS por rendimiento o accesibilidad sin romper la estructura.
6. Pinceladas no deben llevar información imprescindible; el texto se representa como texto HTML.

## 14. BUTTON SYSTEM

### 14.1. Jerarquías

| Variante | Fondo | Texto | Uso |
|---|---|---|---|
| Primary | Ámbar `--secondary` | Carbón `--dark` | Cómo llegar, solicitar reserva, principal de cada flujo. |
| Secondary dark | Transparente/`--surface` | Crema | Ver carta, contactos y acciones secundarias sobre oscuro. |
| Secondary light | Transparente | Carbón | Acciones secundarias sobre crema. |
| Text/link | Sin fondo | Según contexto | Navegación textual, redes y enlaces de ayuda. |
| WhatsApp-context | Verde de WhatsApp, solo si se reconoce mejor | Blanco con contraste válido | Compartir estimado o abrir conversación; no usar en todo el sitio. |
| Destructive/clear | Neutro con indicación textual | Según contexto | Limpiar cuenta; nunca protagonista de color. |

### 14.2. Tamaños

- Altura `48–52px` desktop en CTA prominente; en móvil mínimo `48px`, objetivo táctil al menos `44×44px`.
- Padding horizontal `20–28px`, gap icono-texto `8–12px`, radio `8–12px`.
- No mostrar más de una acción primaria compitiendo en el mismo bloque.
- Icono de flecha es auxiliar; el texto del botón comunica el destino real.

### 14.3. Estados obligatorios

`default`, `hover`, `focus-visible`, `active`, `disabled`, `loading`, `error/success` cuando aplique. Hover sin desplazamientos que salten la composición; `focus-visible` de alto contraste.

**Microcopy legal:** "Solicitar por WhatsApp" no es "Reserva confirmada". "Compartir estimado" no es "Realizar pedido".

## 15. NAVIGATION

### 15.1. Desktop

- Header global superpuesto y transparente en Hero, con contraste protegido por una capa oscura ligera; al hacer scroll pasa a carbón sólido/traslúcido legible.
- Mostrar logo original y los anclajes estratégicos (Experiencias, Carta, Calculadora, Ubicación) con la acción prioritaria de reservar si cabe sin saturar.
- Altura aproximada `72–84px`; mantener padding alineado al contenedor.
- Sticky opcional, pero nunca debe ocultar titulares cuando se navega por anclas (`scroll-margin-top`).

### 15.2. Mobile

- Logo real, menú desplegable accesible y, si cabe en el ancho, CTA de reserva reducido; no saturar 320–375 px.
- Menú abierto **aún no congelado**: diseñar panel de alto contraste bajo la misma paleta, con cerrar, navegación vertical y control de foco.
- Al abrir menú: `aria-expanded`, bloqueo razonable del scroll de fondo si es modal, retorno del foco al activador al cerrar, Escape y tap fuera.
- Anclajes con foco y scroll correcto; no duplicar un header como parte de cada mockup de sección.

### 15.3. Footer

El footer incluye enlaces secundarios y de redes; no sustituye la navegación principal ni repite toda la experiencia de reserva.

## 16. ANIMATION SYSTEM

| Tipo | Duración base | Easing | Regla |
|---|---:|---|---|
| Hover/foco de botón | 150–220 ms | ease-out | Cambio de color/borde, sin saltos. |
| Expansión FAQ | 200–300 ms | ease-in-out | Evitar animar altura de forma pesada. |
| Entrada de bloque visible | 250–450 ms | ease-out | Desplazamiento máximo 8–16 px; solo si mejora lectura. |
| Zoom fotográfico en hover | 250–350 ms | ease-out | Escala máxima cercana a 1.03. |
| Header sobre scroll | 180–250 ms | ease-out | Cambios suaves de fondo. |

- Obedecer `@media (prefers-reduced-motion: reduce)`: eliminar animaciones no esenciales y scroll suave obligatorio.
- No autoplay de audio, scroll-jacking, parallax pesado ni texto letra-por-letra.
- Evitar Layout Shift: reservar alturas de imágenes, video y mapa.

## 17. HOVER SYSTEM

- **Links:** cambio de color o subrayado visible; mismo efecto accesible por teclado.
- **Cards fotográficas:** ligero zoom en imagen sin mover textos.
- **Filas de carta:** resaltado sutil o fondo contextual para facilitar lectura; no sugerir click si la fila no tiene acción.
- **Botones:** sutil variación de luminosidad y borde, `cursor:pointer` solo si realmente son interactivos.
- **Calculadora:** `+` y `−` responden con foco y estado táctil; cantidad refleja valor real.
- **FAQ:** toda la fila es botón, con estado abierto comprensible por texto e icono.
- **Mapa:** no se usa falsa interacción sobre una captura; el mapa debe ser embebido real o tener link funcional.

## 18. COLOR RHYTHM THROUGH PAGE

La numeración de referencia final corrige la duplicación de «07» que apareció en algunos mockups:

| # | Sección | Fondo dominante | Protagonista | Tratamiento |
|---:|---|---|---|---|
| 01 | Hero — El parche empieza aquí | Fotografía nocturna/carbón | Foto real, titular y 2 CTA | Full bleed, header superpuesto. |
| 02 | El plan no necesita excusa | Crema | Titular editorial | Composición asimétrica, pocos adornos. |
| 03 | Entre canciones y revanchas | Carbón | 3 experiencias visuales | Mosaico asimétrico. |
| 04 | ¿Qué se va a tomar? | Crema | 2 productos + listado | No e-commerce. |
| 05 | ¿Cuánto sale el parche? | Carbón | Controles y ticket crema | Layout funcional 65/35. |
| 06 | ¿Ya armaron el parche? | Crema | Texto y formulario carbón | Layout ~45/55. |
| 07 | Antes de caer | Crema | Acordeón editorial | Sin fotos, separación por líneas. |
| 08 | Aquí nos vemos | Carbón | Mapa real y dirección | Layout ~40/60, navegación primaria. |
| 09 | Footer — La última firma | Carbón profundo | Redes + firma tipográfica | Cierre con marca, legal y enlaces. |

**Transición 06→07 (clara/clara):** distinguir por densidad y forma; no inventar otro color para separar.  
**Transición 08→09 (oscura/oscura):** fondo/textura y línea divisoria sutil; no crear un segundo Hero.  
**No añadir una sección extra solo para alternar colores.** La Signature Section de Fase 07, si se define, exige decisión expresa para integrarse a la arquitectura congelada.

## 19. RESPONSIVE PRINCIPLES

### 19.1. Reglas globales

- Diseñar `mobile-first`, expandir a tablet y desktop sin reducir toda la interfaz proporcionalmente.
- No fijar altura `100vh` en cada sección; solo Hero puede aproximarse a una pantalla como recurso, respetando contenido/teclado móvil.
- `max-width:100%`, sin overflow horizontal; títulos condensados que puedan partirse donde se aprobó visualmente.
- Controles táctiles mínimo `44×44px` (ideal 48 px).
- Textos de botón sin truncar; en mobile pueden ocupar todo el ancho.
- El footer y FAQ no necesitan fotografías ni encabezado global duplicado.

### 19.2. Comportamiento por sección

1. **Hero:** fotografía vertical recortada, titular 2–3 líneas, CTA claramente visible; `object-position` específico. Evitar contenido de la sección 02 asomando dentro del mockup del hero.
2. **Manifiesto:** columnas pasan a una, etiqueta→titular→cuerpo; línea divisora horizontal.
3. **Experiencias:** bolirrana primero y dominante, música y pantalla en cards verticales siguientes; sin carrusel obligatorio.
4. **Carta:** categorías navegables horizontalmente con scroll accesible si requieren espacio; dos destacadas pasan a una por fila; precios visibles sin desbordes.
5. **Calculadora:** lista vertical y ticket; barra inferior resumen opcional, **si se implementa**, sin tapar contenido ni CTA. Los mockups no prueban su comportamiento interactivo.
6. **Reservas:** campos en columna, fecha/hora pueden dividirse solo si hay espacio real; CTA full width.
7. **FAQ:** título encima de acordeón; filas amplias; un panel abierto a la vez como regla funcional propuesta.
8. **Ubicación:** etiqueta, título, dirección y CTA antes del mapa; mapa de tamaño práctico, WhatsApp secundario.
9. **Footer:** redes y navegación apiladas, firma de marca escalable, enlaces legales legibles.

### 19.3. Puntos de prueba

Comprobar al menos `320`, `360`, `375`, `390`, `430`, `768`, `1024`, `1280`, `1440` y `1920px` de ancho. Verificar también zoom al 200% y orientación horizontal móvil.

## 20. ACCESSIBILITY RULES

- WCAG 2.2 AA como **objetivo de aceptación** para interfaces implementadas, no como certificación previa de los mockups.
- Contraste de texto y componentes según §3; texto magenta pequeño usa variante accesible.
- Estructura semántica: un solo `h1` en Hero y jerarquía `h2` de sección, `h3` internos.
- `lang="es-CO"`, precios en COP con formato local correcto y fechas comprensibles.
- Formularios con etiquetas persistentes, `autocomplete`, mensajes de error asociados y estados claros; no confiar solo en placeholders.
- Botones accesibles por teclado, foco visible, etiquetas de icon-only, regiones de actualización del total con anuncio razonable (sin spam de lector de pantalla).
- FAQ con `<button aria-expanded>` y región asociada mediante `aria-controls`.
- Animación reducida cuando lo solicite el sistema.
- `alt` describe imágenes informativas; decorativas `alt=""`; jamás incluir párrafos importantes solo en imágenes.
- Reserva: informar que WhatsApp abre una solicitud y que el establecimiento debe confirmar disponibilidad.
- Mapa: título accesible del iframe, enlace textual alternativo y no depender del mapa para conocer dirección.
- Política de privacidad y consentimientos que correspondan antes de activar herramientas de medición o recoger datos.

## 21. COPY / VOICE

**Regla de voz:** anfitrión cercano, claro y respetuoso. Frases cortas, expresiones de barrio sin abuso, una acción dominante por bloque.

### 21.1. Voces apropiadas

- «El parche empieza aquí».
- «El plan no necesita excusa».
- «Entre canciones y revanchas».
- «¿Qué se va a tomar?».
- «¿Cuánto sale el parche?».
- «¿Ya armaron el parche?».
- «Antes de caer».
- «Aquí nos vemos».
- «La noche es del barrio».

Los anteriores son **copy de maqueta aprobado en concepto**; el documento `FINAL_COPY.md` será la fuente final para texto público y estados.

### 21.2. Información y afirmaciones

- Es correcto describir cerveza, aguardiente, bolirrana, música y eventos deportivos **anunciados**.
- La página debe decir *solicitar reserva* cuando el flujo abre WhatsApp y depende de respuesta humana.
- La calculadora muestra **total estimado**, no pedido, pago, factura o compromiso comercial.
- Para eventos deportivos no prometer todos los partidos, ni horarios de transmisión permanente.
- Evitar «mejor bar», «más barato», «siempre lleno», descuentos permanentes, música en vivo fija, torneos constantes y domicílios, sin respaldo.
- Respetar información sobre edad y consumo responsable aplicable en contexto público; no sugerir consumo excesivo como condición de diversión.

### 21.3. Inconsistencias entre capturas y contenido real

Los mockups generados pueden incluir marcas de cerveza incorrectas, cocteles, precios especulativos, horarios desactualizados, valoraciones inexistentes, número erróneo dentro del logo, mapas falsos o fachadas ficticias. **NO incorporar esos datos en la implementación**. Sustituirlos con datos reales validados en una fuente de contenido central.

## 22. ABSOLUTE “DO NOT” RULES

1. No rediseñar jerarquías, fondos o proporciones congeladas sin decisión expresa.
2. No incrustar un PNG completo de mockup como sección funcional.
3. No copiar texto pequeño, cantidades o detalles ficticios de imágenes IA como si fueran hechos.
4. No recrear el logotipo oficial con una tipografía parecida, ni cambiar sus letras o números.
5. No inventar productos, precios, promociones, horarios, valoraciones, reseñas ni fotos de clientes.
6. No convertir la carta o calculadora en un carrito de compras, checkout o canal de domicilios.
7. No informar «reserva confirmada» antes de una confirmación real.
8. No mostrar mapas generados por IA como Google Maps auténtico.
9. No añadir glows, cian/violeta, gradientes intensos, coronas o pinceladas extra en cada elemento.
10. No repetir el header dentro de las secciones ni dejar visible parte de la siguiente en un mockup aislado.
11. No usar tres o más tipografías UI; el lettering vectorial es un asset, no una tercera tipografía general.
12. No sacrificar legibilidad móvil por imitar exactamente un render 9:16.
13. No meter textos cruciales dentro de imágenes o pseudo-elementos inaccesibles.
14. No crear enlaces que apunten a `#`, URLs de ejemplo o servicios inexistentes en una entrega final.
15. No publicar páginas legales sin contenido real ni inventar políticas comerciales.
16. No usar fotos ficticias para hacer pasar el bar por un establecimiento más grande o distinto.
17. No introducir librerías pesadas, efectos 3D o vídeo por pura apariencia.
18. No declarar validación de accesibilidad, rendimiento o SEO sin pruebas.

---

# ANEXO A — Tokens CSS de referencia

> **Naturaleza:** implementación de partida normalizada, no CSS ya extraído del sitio. Ajustar valores solo mediante verificación visual comparada y reportar el cambio.

```css
:root {
  /* Paleta contractual de la V2 */
  --primary: #E60068;
  --secondary: #FFB936;
  --background: #171315;
  --surface: #24201F;
  --dark: #171315;
  --accent: #B72B69;
  --muted: #C9BFB6;
  --line: #625852;
  --text: #F5EBDD;

  /* Semánticos */
  --color-paper: #F5EBDD;
  --color-paper-2: #EEE2D1;
  --color-ink: #211C1A;
  --color-ink-muted: #6B615A;
  --color-surface-raised: #342C29;
  --color-line-light: #B8AD9F;
  --color-pink-strong: #E60068;
  --color-pink-text: #B72B69;
  --color-gold: #FFB936;
  --color-gold-soft: #E7AE6C;
  --color-success: #138A43;
  --color-error: #B52731;
  --color-focus: #FFB936;

  /* Fuentes de implementación de prueba */
  --font-display: 'Anton', 'Arial Narrow', Impact, sans-serif;
  --font-body: 'Manrope', Arial, sans-serif;

  /* Escala */
  --fs-hero: clamp(3rem, 7.2vw, 7rem);
  --fs-h2: clamp(2.5rem, 5.5vw, 5.5rem);
  --fs-h3: clamp(1.625rem, 2.8vw, 2.5rem);
  --fs-body-xl: clamp(1.125rem, 1.55vw, 1.5rem);
  --fs-body: clamp(1rem, 1.15vw, 1.125rem);
  --fs-small: .875rem;
  --fs-micro: .75rem;

  /* Espaciado */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;

  /* Layout */
  --container-max: 1280px;
  --page-gutter: clamp(20px, 4vw, 80px);
  --section-padding-block: clamp(56px, 7vw, 120px);
  --grid-gap: 24px;

  /* Forma y profundidad */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --shadow-soft: 0 8px 24px rgba(0,0,0,.12);
  --shadow-dark: 0 16px 44px rgba(0,0,0,.28);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--text);
  background: var(--background);
  font-size: var(--fs-body);
}
.container {
  width: min(var(--container-max), calc(100% - 2 * var(--page-gutter)));
  margin-inline: auto;
}
.section { padding-block: var(--section-padding-block); }
.section--light { background: var(--color-paper); color: var(--color-ink); }
.section--dark { background: var(--background); color: var(--text); }
.display {
  font-family: var(--font-display);
  text-transform: uppercase;
  line-height: .94;
  letter-spacing: -.015em;
  text-wrap: balance;
}
.button--primary {
  background: var(--secondary);
  color: var(--dark);
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  min-height: 48px;
  padding: 12px 24px;
}
:where(a, button, input, select, textarea, summary):focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}
[hidden] { display: none !important; }
@media (max-width: 1199px) {
  :root { --page-gutter: 32px; --grid-gap: 20px; }
}
@media (max-width: 767px) {
  :root { --page-gutter: 20px; --grid-gap: 16px; --section-padding-block: 64px; }
}
@media (max-width: 359px) {
  :root { --page-gutter: 16px; --fs-hero: clamp(2.7rem, 13vw, 3.4rem); }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
```

**Nota técnica:** este fragmento es un punto de partida. Los tamaños de fuente, espaciados y porcentajes deben compararse visualmente con cada mockup antes de aprobar el prototipo V2. No representa una página completa ni sustituye al `PAGE_BLUEPRINT.md`.

---

# ANEXO B — Contrato de componentes

| Componente | Props / datos clave | Estado especial | Condición de implementación |
|---|---|---|---|
| `SiteHeader` | logo, nav, CTA | transparente/sólido, abierto/cerrado | Sin duplicación por sección. |
| `Hero` | foto, H1, subtítulo, CTA 1/2 | crop mobile | Sólo esta sección en mockup aislado. |
| `Manifesto` | eyebrow, titular, texto | variante light | Sin imágenes obligatorias. |
| `ExperienceGallery` | tres experiencias, imágenes reales | hover visual | Jerarquía asimétrica; sin cards uniformes. |
| `DrinkMenu` | categorías, productos, precios | categoría activa | Catálogo únicamente, sin checkout. |
| `DrinkCounter` | producto, presentación, precio, cantidad | `0+` | Datos sincronizados con carta. |
| `ReceiptSummary` | items, subtotal, total | vacío/con contenido | Precio estimado; sin pedido. |
| `ReservationForm` | nombre, personas, fecha, hora | válido/error/loading | Genera solicitud WhatsApp, nunca confirmación automática. |
| `FaqAccordion` | pregunta, respuesta, id | expandido/colapsado | Semántica y teclado. |
| `LocationMap` | dirección, mapa, URL verificada | loading/error | Mapa real; alternativa textual. |
| `SiteFooter` | redes, nav, marca, legales | hover/focus | Destinos reales; copyright dinámico. |

---

# ANEXO C — Reglas de contenido y datos centrales

- **Fuente única de bebidas:** mismo arreglo o repositorio central para carta y calculadora (`id`, `name`, `category`, `presentation`, `price_cop`, `featured`, `image`, `available`). No duplicar precios en JSX, HTML o snippets del diseño.
- **Fuente única de negocio:** nombre, dirección, contactos, redes, horarios aprobados, Google Maps/Place ID validados y política de reservas.
- **Datos comerciales pendientes:** confirmar carta y precios vigentes, horarios, logo SVG/PNG oficial, números WhatsApp, URLs oficiales de redes, URL exacta de Google Maps y textos legales publicados.
- **Rutas legales:** agregar a footer solo cuando el contenido legal exista realmente. No inventar «Términos» o «Privacidad» como enlaces funcionales vacíos.
- **Medición:** eventos diferenciados para `click_directions`, `click_whatsapp_reservation`, `click_menu`, `calculator_interaction`, `click_social`. No afirmar que equivalen a visitas reales.

---

# ANEXO D — Inventario de evidencias visuales

Los nombres siguientes identifican **ejemplos de imágenes generadas durante la exploración**. No constituyen una biblioteca final de producción ni avalan su contenido textual; consultar el historial de conversación para escoger el mockup congelado correcto cuando existan variantes.

| Sección | Desktop de referencia | Mobile de referencia |
|---|---|---|
| Hero | `wide_cinematic_website_hero_header_scene_of_a_neo.png` | `a_vertical_smartphone_ui_website_hero_mockup_of_a.png` |
| Manifiesto | `wide_banner_graphic_design_poster_website_hero_sec.png` | `a_vertical_mobile_website_app_style_poster_screens.png` |
| Experiencias | `a_wide_cinematic_dark_themed_promotional_poster.png` | `a_vertical_smartphone_style_poster_website_app_ui.png` |
| Carta | `wide_promotional_menu_poster_website_mockup_style.png` / otras variantes | `a_vertical_mobile_ui_poster_menu_screen_clean_gra.png` / variantes |
| Calculadora | `wide_dark_styled_promotional_ui_website_mockup_fo.png` | `a_vertically_oriented_mobile_app_website_ui_mockup.png` |
| Reservas | `wide_promotional_website_style_layout_graphic_for.png` | `a_vertical_mobile_ui_poster_design_mockup_overall.png` |
| FAQ | `a_clean_editorial_style_faq_section_graphic_for.png` | `preguntas_frecuentes_de_la_locura_bar.png` |
| Ubicación | `wide_high_quality_website_graphic_layout_with_a_d.png` | `encuéntranos_en_la_locura.png` |
| Footer | `a_wide_high_contrast_nightclub_bar_website_footer.png` | `a_vertical_mobile_style_poster_footer_in_a_dark_ch.png` |

**Advertencia:** los ejemplos de ubicación incluyen representaciones de mapas no verificadas, y los renders de carta/calculadora pueden incluir datos inventados. No extraer coordenadas, reseñas ni precios desde esos PNG.

---

# ANEXO E — QA de fidelidad previo a entrega

## Diseño

- [ ] Cada bloque respeta composición, estilo, jerarquía y fondo del mockup congelado.
- [ ] El diseño contiene **una sola sección por mockup de referencia aislado**; la web final sí muestra el scroll continuo.
- [ ] El logo original es exacto; no hay logos regenerados, coronas improvisadas ni cambios de marca.
- [ ] La paleta respeta roles magenta/ámbar/carbón/crema, sin colores nuevos arbitrarios.
- [ ] Fuentes y métricas se compararon con las imágenes; las diferencias están documentadas.
- [ ] La barra de navegación no está repetida dentro de las secciones.
- [ ] No aparecen bebidas, valores, horarios o mapas ficticios.

## Responsive y accesibilidad

- [ ] Revisado en 320/360/375/390/430/768/1024/1280/1440/1920 px.
- [ ] No hay overflow horizontal ni recortes de CTA/texto.
- [ ] Todas las acciones funcionan con teclado y tienen foco visible.
- [ ] Contraste de texto pequeño comprobado, especialmente magenta sobre crema.
- [ ] Formularios, FAQ y modal de navegación son semánticos y compatibles con lectores de pantalla.
- [ ] Preferencias de movimiento reducido respetadas.
- [ ] Imágenes con alt correcto y mapas con alternativa textual.

## Lógica comercial

- [ ] Precios de carta y calculadora comparten un solo dato fuente.
- [ ] Total y subtotales funcionan sin cantidades negativas.
- [ ] Reserva abre un mensaje correcto y no se anuncia como confirmada.
- [ ] Google Maps apunta al local verificado.
- [ ] WhatsApp, redes y legales apuntan a destinos reales.
- [ ] Fotografía del local auténtica y personas autorizadas cuando corresponda.

## Performance

- [ ] Imágenes responsive optimizadas; hero priorizado, resto lazy-load cuando proceda.
- [ ] Mapa carga de forma diferida, sin bloquear lectura ni acción de «Cómo llegar».
- [ ] CLS, LCP e interacción medidos en la implementación, no estimados visualmente.
- [ ] Animaciones no dependen de librerías pesadas ni bloquean la interfaz.

---

# ANEXO F — Conexión con los siguientes documentos

**Este documento gobierna cómo se ve y se comporta el sistema.** No es responsable del detalle de contenido por sección ni del texto público final.

- `PAGE_BLUEPRINT.md` deberá precisar cada sección: propósito, layout desktop/mobile, componentes, orden, datos, interacciones, assets, estados vacíos, navegación y requisitos de aceptación.
- `FINAL_COPY.md` deberá contener el texto visible definitivo, labels, mensajes de estado/error, FAQs y metadatos; deberá confirmar horarios, precios y datos legales antes de publicarse.
- Si un mockup difiere de este sistema por un detalle generado de forma incoherente, se resuelve en favor de **identidad real, accesibilidad, datos confirmados y consistencia global**, sin reescribir la dirección artística.

**Estado final:** Design System V2 especificado; pendiente prueba de fidelidad de tipografías/tokens y validación de assets y datos reales antes de aprobar una implementación de producción.
