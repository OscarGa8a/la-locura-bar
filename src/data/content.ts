// Centralized content data module — neon variant only

export interface WeekEvent {
  day: string;
  name: string;
  sub: string;
  tag?: string;
  closed?: boolean;
}

export interface MenuItem {
  name: string;
  desc: string;
  price: string;
  tag?: string;
}

export interface Menu {
  cervezas: MenuItem[];
  tragos: MenuItem[];
  picar: MenuItem[];
}

export type MenuTab = keyof Menu;

export interface Copy {
  tagline: string;
  heroSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  aboutTitle: string;
  aboutBody: string;
  promoBadge: string;
  reserveNote: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const WEEK_EVENTS: WeekEvent[] = [
  { day: "LUN", name: "Cerrado", sub: "Descansamos los lúpulos", closed: true },
  { day: "MAR", name: "Martes de Rock", sub: "Clásicos en vinilo · 6pm–1am", tag: "2x1 cervezas" },
  { day: "MIÉ", name: "Miércoles Mezcla", sub: "DJ sets locales · tragos de autor", tag: "Cóctel del día $18k" },
  { day: "JUE", name: "Jueves Karaoke", sub: "La noche más loca · premios al ganador", tag: "Shots gratis al top 3" },
  { day: "VIE", name: "Viernes de Salsa", sub: "Banda en vivo desde las 9pm", tag: "Entrada libre" },
  { day: "SÁB", name: "La Locura Total", sub: "Fiesta hasta el amanecer · 6pm–3am", tag: "Reserva obligatoria" },
  { day: "DOM", name: "Domingo Resaca", sub: "Micheladas, parrilla y fútbol · 12pm–8pm", tag: "Michelada + sancocho" },
];

export const MENU: Menu = {
  cervezas: [
    { name: "Cerveza de la casa", desc: "Pilsen artesanal · jarra 500ml", price: "$8.000", tag: "Nuestra" },
    { name: "Rubia importada", desc: "Pick del día · pregunta al barman", price: "$14.000" },
    { name: "IPA local", desc: "Lúpulo fresco de Medellín", price: "$16.000" },
    { name: "Jarra 1 litro", desc: "Para el parche · Pilsen casa", price: "$20.000", tag: "Más pedida" },
    { name: "Balde x 6", desc: "Nacionales surtidas", price: "$45.000" },
  ],
  tragos: [
    { name: "Cuba Libre", desc: "Ron + cola + lima · receta clásica", price: "$18.000" },
    { name: "Aguardiente solo", desc: "El de siempre · shot o botella", price: "$6.000 / $60.000" },
    { name: "Margarita", desc: "Tequila, limón, sal · como debe ser", price: "$22.000" },
    { name: "Old Fashioned", desc: "Whisky, azúcar, amargo · 3 hielos", price: "$28.000", tag: "Del barman" },
    { name: "Michelada La Locura", desc: "Nuestra receta secreta · picante", price: "$16.000", tag: "Firma" },
  ],
  picar: [
    { name: "Papas locas", desc: "Queso, tocineta, guacamole, hogao", price: "$22.000" },
    { name: "Alitas BBQ", desc: "12 unidades · salsa de la casa", price: "$32.000" },
    { name: "Chorizo santarrosano", desc: "Con arepa y ají", price: "$18.000" },
    { name: "Tabla para compartir", desc: "Quesos, embutidos, encurtidos", price: "$48.000", tag: "Para 4" },
  ],
};

export const COPY_NEON: Copy = {
  tagline: "Cervezas frías. Música fuerte. Decisiones cuestionables.",
  heroSub:
    "Bar de barrio con algo de locura. Cerveza bien fría, tragos sin fórmula y parche del bueno, de martes a domingo.",
  ctaPrimary: "Reservar mesa",
  ctaSecondary: "Ver la carta",
  aboutTitle: "Un bar sin pretensiones",
  aboutBody:
    "La Locura nació porque la ciudad ya tenía suficientes bares serios. Aquí venimos a tomar cerveza fría, poner la canción a todo volumen y reírnos hasta que cierren. Sin dress code, sin cover a veces, sin excusas.",
  promoBadge: "PROMOS NUEVAS",
  reserveNote: "Los sábados se llenan. Mejor reserva con tiempo, parce.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "La Semana", href: "#events" },
  { label: "Sobre nosotros", href: "#about" },
  { label: "Carta", href: "#menu" },
  { label: "Galería", href: "#gallery" },
  { label: "Reservar", href: "#reserve" },
  { label: "Ubicación", href: "#location" },
];
