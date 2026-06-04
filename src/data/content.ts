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
  image?: string;
  featured?: boolean;
}

export interface Menu {
  beersPersonal: MenuItem[];
  beersShare: MenuItem[];
  licores: MenuItem[];
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
    sub: "Fiesta hasta el amanecer · 6pm–4am",
    tag: "Reserva o llega al parche",
  },
  {
    day: "DOM",
    name: "Domingo Resaca",
    sub: "Micheladas, parrilla y fútbol · 12pm–8pm",
    tag: "Michelada + sancocho",
  },
];

export const MENU: Menu = {
  beersPersonal: [
    {
      name: "Cerveza Aguila 330ml",
      desc: "La de siempre · bien fría",
      price: "$3.500",
      image: "aguila",
      tag: "Más pedida",
      featured: true,
    },
    {
      name: "Cerveza Poker 330ml",
      desc: "Otra clásica · para el parche",
      price: "$3.500",
      image: "poker",
    },
    {
      name: "Cerveza Club Colombia 330ml",
      desc: "La clásica · bien fría",
      price: "$4.000",
      image: "club-colombia",
    },
    {
      name: "Cerveza Corona 355ml",
      desc: "Para el parche · con limón es mejor",
      price: "$5.000",
      image: "corona",
    },
    {
      name: "Cerveza Costeñita 330ml",
      desc: "La costeñita · para el parche",
      price: "$3.500",
      tag: "Más pedida",
      image: "costeñita",
      featured: true,
    },
    {
      name: "Cerveza Aguila Light 330ml",
      desc: "La ligera · para el parche",
      price: "$3.500",
      image: "aguila-light",
    },
    {
      name: "Cerveza Costeña 330ml",
      desc: "La costeña · para el parche",
      price: "$3.000",
      image: "costeña",
    },
    {
      name: "Cerveza Reeds 330ml",
      desc: "La reeds · para el parche",
      price: "$3.000",
      image: "reeds",
    },
  ],
  beersShare: [
    {
      name: "Cerveza Aguila 1000ml",
      desc: "La de siempre · para compartir",
      price: "$7.000",
      tag: "Más pedida",
      image: "aguila-litro",
      featured: true,
    },
    {
      name: "Cerveza Poker 1000ml",
      desc: "La poker · para el parche",
      price: "$7.000",
      image: "poker-litro",
    },
    {
      name: "Cerveza Club Colombia 850ml",
      desc: "La clásica · para compartir",
      price: "$7.000",
      image: "club-colombia-grande",
      featured: true,
    },
    {
      name: "Cerveza Costeña 850ml",
      desc: "La costeña · para compartir",
      price: "$4.500",
      image: "costeña-grande",
    },
  ],
  licores: [
    {
      name: "Aguardiente Llanero 1/2 botella",
      desc: "El de siempre · para compartir",
      price: "$28.000",
      image: "llanero-medio",
    },
    {
      name: "Aguardiente Llanero 1 botella",
      desc: "El de siempre · para compartir",
      price: "$50.000",
      image: "llanero",
    },
    {
      name: "Aguardiente Amarillo 1/2 botella",
      desc: "El de siempre · para compartir",
      price: "$30.000",
      image: "amarillo",
    },
    {
      name: "Aguardiente Antioqueño 1/2 botella",
      desc: "El de siempre · para compartir",
      price: "$26.000",
      image: "antioqueño",
    },
  ],
};

export const COPY_NEON: Copy = {
  tagline: "Cervezas frías. Música fuerte. Decisiones cuestionables.",
  heroSub:
    "Bar de barrio en Villavicencio con algo de locura. Cerveza bien fría, tragos sin fórmula y parche del bueno, de martes a domingo.",
  ctaPrimary: "Reservar mesa",
  ctaSecondary: "Ver la carta",
  aboutTitle: "Un bar sin pretensiones",
  aboutBody:
    "Somos un bar local en Villavicencio creado para disfrutar buena música, cerveza fría, eventos deportivos y noches temáticas en un ambiente relajado.",
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
