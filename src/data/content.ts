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
  beers: MenuItem[];
  shots: MenuItem[];
  // picar: MenuItem[];
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
  {
    day: "MAR",
    name: "Martes de Rock",
    sub: "Clásicos en vinilo · 6pm–1am",
    tag: "2x1 cervezas",
  },
  {
    day: "MIÉ",
    name: "Miércoles Mezcla",
    sub: "DJ sets locales · tragos de autor",
    tag: "Cóctel del día $18k",
  },
  {
    day: "JUE",
    name: "Jueves Karaoke",
    sub: "La noche más loca · premios al ganador",
    tag: "Shots gratis al top 3",
  },
  {
    day: "VIE",
    name: "Viernes de Salsa",
    sub: "Banda en vivo desde las 9pm",
    tag: "Entrada libre",
  },
  {
    day: "SÁB",
    name: "La Locura Total",
    sub: "Fiesta hasta el amanecer · 6pm–3am",
    tag: "Reserva obligatoria",
  },
  {
    day: "DOM",
    name: "Domingo Resaca",
    sub: "Micheladas, parrilla y fútbol · 12pm–8pm",
    tag: "Michelada + sancocho",
  },
];

export const MENU: Menu = {
  beers: [
    {
      name: "Cerveza Aguila 330ml",
      desc: "La de siempre · bien fría",
      price: "$3.500",
    },
    {
      name: "Cerveza Poker 330ml",
      desc: "Otra clásica · para el parche",
      price: "$3.500",
    },
    {
      name: "Cerveza Club Colombia 330ml",
      desc: "La clásica · bien fría",
      price: "$4.000",
    },
    {
      name: "Cerveza Corona 355ml",
      desc: "Para el parche · con limón es mejor",
      price: "$5.000",
    },
    {
      name: "Cerveza Costeñita 330ml",
      desc: "La costeñita · para el parche",
      price: "$3.500",
      tag: "Más pedida",
    },
    {
      name: "Cerveza Aguila Light 330ml",
      desc: "La ligera · para el parche",
      price: "$3.500",
    },
    {
      name: "Cerveza Costeña 330ml",
      desc: "La costeña · para el parche",
      price: "$3.000",
    },
    {
      name: "Cerveza Reeds 330ml",
      desc: "La reeds · para el parche",
      price: "$3.000",
    },
    {
      name: "Cerveza Aguila 1000ml",
      desc: "La de siempre · para compartir",
      price: "$7.000",
      tag: "Más pedida",
    },
    {
      name: "Cerveza Poker 1000ml",
      desc: "La poker · para el parche",
      price: "$7.000",
    },
    {
      name: "Cerveza Club Colombia 850ml",
      desc: "La clásica · para compartir",
      price: "$7.000",
    },
    {
      name: "Cerveza Costeña 850ml",
      desc: "La costeña · para compartir",
      price: "$4.500",
    },
  ],
  shots: [
    {
      name: "Aguardiente Llanero 1/2 botella",
      desc: "El de siempre · para compartir",
      price: "$28.000",
    },
    {
      name: "Aguardiente Llanero 1 botella",
      desc: "El de siempre · para compartir",
      price: "$50.000",
    },
    {
      name: "Aguardiente Amarillo 1/2 botella",
      desc: "El de siempre · para compartir",
      price: "$30.000",
    },
    {
      name: "Aguardiente Antioqueño 1/2 botella",
      desc: "El de siempre · para compartir",
      price: "$26.000",
    },
  ],
  // picar: [
  //   {
  //     name: "Dorilocos",
  //     desc: "Preparalo a tu manera · con todo el parche",
  //     price: "DEPENDE",
  //   },
  // ],
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
