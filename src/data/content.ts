// Centralized content data module — neon variant only

export interface WeekEvent {
  day: string;
  name: string;
  sub: string;
  tag?: string;
  closed?: boolean;
}

export interface Activity {
  name: string;
  sub: string;
  icon: string;
  tag?: string;
}

export interface MenuItem {
  name: string;
  desc: string;
  price: number;
  image: string;
  tag?: string;
  featured?: boolean;
}

export interface Menu {
  beersPersonal: MenuItem[];
  beersShare: MenuItem[];
  liquors: MenuItem[];
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

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  type: "image" | "video";
  publicId: string;
  alt: string;
  posterPublicId?: string;
  gridPosition: number;
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
    sub: "Micheladas, parrilla y fútbol · 6pm–10pm",
    tag: "Michelada + sancocho",
  },
];

export const ACTIVITIES: Activity[] = [
  {
    name: "Bolirana con amigos",
    sub: "Arma el parche, lanza, compite y acompaña la jugada con cerveza bien fría.",
    icon: "target",
  },
  {
    name: "Fútbol en pantalla gigante",
    sub: "Partidos, cerveza fría y ambiente para vivir cada jugada con el parche.",
    icon: "ball",
  },
  {
    name: "Música para el ambiente",
    sub: "Pide tus canciones, canta, baila y disfruta una noche a tu gusto.",
    icon: "music",
  },
  {
    name: "Cerveza fría y tragos",
    sub: "El plan perfecto para pasar de paso, quedarse un rato o empezar la noche.",
    icon: "beer",
  },
  {
    name: "Baile con el parche",
    sub: "Cuando suena la música, la noche también se arma bailando sin complicarse.",
    icon: "dance",
  },
  {
    name: "Parche de barrio",
    sub: "Un lugar relajado, con buena energía, atención cercana y ambiente sin complicarse.",
    icon: "users",
  },
];

export const MENU: Menu = {
  beersPersonal: [
    {
      name: "Cerveza Aguila 330ml",
      desc: "Refrescante y crujiente · la clásica para cualquier parche",
      price: 3300,
      image: "aguila-330_h6nyem",
      tag: "Más pedida",
      featured: true,
    },
    {
      name: "Cerveza Poker 330ml",
      desc: "Equilibrada y ligera · perfecta para compartir con los amigos",
      price: 3300,
      image: "poker-330_wefep9",
    },
    {
      name: "Cerveza Club Colombia 330ml",
      desc: "Sabor auténtico colombiano · tradicional y bien fría",
      price: 4000,
      image: "club-330_oyhhnc",
    },
    {
      name: "Cerveza Corona 210ml",
      desc: "Ligera y refrescante · perfecta con limón y para el parche",
      price: 4000,
      image: "coronita-210_vtbcjx",
    },
    {
      name: "Cerveza Costeñita 330ml",
      desc: "Sabor costeño y alegre · muy bebible para la rumba",
      price: 3300,
      tag: "Más pedida",
      image: "costeñita-330_ttl1nv",
      featured: true,
    },
    {
      name: "Cerveza Aguila Light 330ml",
      desc: "Ligera y suave · menos calorías, misma buena vibra",
      price: 3300,
      image: "aguila-light-330_ptvza2",
    },
    {
      name: "Cerveza Costeña 330ml",
      desc: "Cerveza costeña tradicional · sencilla, fresca y sin vueltas",
      price: 3000,
      image: "costeña-330_n6lwx4",
    },
    {
      name: "Cerveza Reeds 330ml",
      desc: "Cuerpo y carácter · para quien busca sabor con presencia",
      price: 4000,
      image: "redds-330_h5onl7",
    },
  ],
  beersShare: [
    {
      name: "Cerveza Aguila 1000ml",
      desc: "Litro para compartir · fría y lista para el parche",
      price: 7000,
      tag: "Más pedida",
      image: "aguila-1000_ibbohw",
      featured: true,
    },
    {
      name: "Cerveza Poker 1000ml",
      desc: "Para el grupo · refrescante y generosa",
      price: 7000,
      image: "poker-1000_t5m8r0",
    },
    {
      name: "Cerveza Club Colombia 850ml",
      desc: "Clásica para compartir · sabor colombiano para todos",
      price: 7000,
      image: "club-750_eftaky",
      featured: true,
    },
    {
      name: "Cerveza Costeña 750ml",
      desc: "Grande para el parche · ideal para brindar entre amigos",
      price: 4500,
      image: "costeña-750_wx3epl",
    },
  ],
  liquors: [
    {
      name: "Aguardiente Llanero 1/2 botella",
      desc: "Incluye botella de agua y limón · notas dulces y tradición llanera",
      price: 35000,
      image: "llanero-media_jnmmbc",
    },
    {
      name: "Aguardiente Amarillo 1/2 botella",
      desc: "Incluye botella de agua y limón · cuerpo y sabor tradicional",
      price: 45000,
      image: "amarillo-media_kba2ac",
    },
    {
      name: "Aguardiente Antioqueño 1/2 botella",
      desc: "Incluye botella de agua y limón · fuerte, directo y con carácter",
      price: 45000,
      image: "antioqueño-media_yiptro",
    },
  ],
};

export const COPY_NEON: Copy = {
  tagline: "Cervezas frías. Música fuerte. Decisiones cuestionables.",
  heroSub:
    "Bar de barrio en Villavicencio con algo de locura. Cerveza bien fría, bolirana, música, baile, fútbol y parche del bueno, de martes a domingo.",
  ctaPrimary: "Reservar mesa",
  ctaSecondary: "Ver la carta",
  aboutTitle: "Un bar sin pretensiones",
  aboutBody:
    "Somos un bar local en Villavicencio creado para disfrutar buena música, bailar, tomar cerveza fría, jugar bolirana, ver fútbol en pantalla gigante y pasarla relajado.",
  promoBadge: "PROMOS NUEVAS",
  reserveNote: "Los sábados se llenan. Mejor reserva con tiempo, parce.",
};

export const ABOUT_GALLERY: GalleryItem[] = [
  {
    type: "image",
    publicId: "img1_wfnleb",
    alt: "Ambiente interior del bar",
    gridPosition: 0,
  },
  {
    type: "image",
    publicId: "img2_k1ikww",
    alt: "Entrada principal del bar",
    gridPosition: 1,
  },
  {
    type: "video",
    publicId: "vid1_ylu2xr",
    alt: "Celebrando la victoria del equipo",
    posterPublicId: "poster-vid-1_pgygmc",
    gridPosition: 2,
  },
  {
    type: "image",
    publicId: "img3_dhrnum",
    alt: "Barra de tragos",
    gridPosition: 3,
  },
  {
    type: "image",
    publicId: "img4_zjpdzt",
    alt: "Entrada secundaria del bar",
    gridPosition: 4,
  },
  {
    type: "image",
    publicId: "img5_t884ev",
    alt: "Ambiente del bar con luces",
    gridPosition: 5,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Dónde queda La Locura Bar?",
    answer:
      "La Locura Bar queda en CRA 30A # 10B 81, Barrio Embudo, en Villavicencio, Meta, Colombia.",
  },
  {
    question: "¿Cuál es el horario de La Locura Bar?",
    answer:
      "La Locura Bar abre de martes a miércoles de 6:00 PM a 2:00 AM, de jueves a sábado de 6:00 PM a 4:00 AM y los domingos de 6:00 PM a 10:00 PM. Los lunes está cerrado.",
  },
  {
    question: "¿Se puede reservar mesa en La Locura Bar?",
    answer:
      "Sí. Puedes reservar mesa por WhatsApp escribiendo a La Locura Bar. La reserva queda en cola y el equipo confirma por WhatsApp.",
  },
  {
    question: "¿La Locura Bar tiene fútbol en pantalla gigante?",
    answer:
      "Sí. La Locura Bar transmite fútbol en pantalla gigante, con cerveza fría y ambiente para ver partidos con amigos.",
  },
  {
    question: "¿Se puede jugar bolirana en La Locura Bar?",
    answer:
      "Sí. En La Locura Bar puedes parchar con amigos jugando bolirana mientras disfrutas cerveza fría, música y ambiente de bar.",
  },
  {
    question: "¿Se puede bailar en La Locura Bar?",
    answer:
      "Sí. La Locura Bar tiene música y ambiente para bailar con amigos, parchar y disfrutar la noche sin complicarse.",
  },
  {
    question: "¿Qué se puede tomar en La Locura Bar?",
    answer:
      "La carta destacada incluye cervezas personales, cervezas para compartir, aguardientes y licores. La carta completa está disponible en el bar.",
  },
  {
    question: "¿Qué tipo de ambiente tiene La Locura Bar?",
    answer:
      "La Locura Bar tiene un ambiente de bar de barrio en Villavicencio: relajado, con música, baile, fútbol, bolirana, cerveza fría, tragos y parche con amigos.",
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "El ambiente", href: "#activities" },
  { label: "Nosotros", href: "#about" },
  { label: "Carta", href: "#menu" },
  { label: "Calcula", href: "#calculator" },
  { label: "Reservar", href: "#reserve" },
  { label: "Ubicación", href: "#location" },
  { label: "Preguntas", href: "#faq" },
];
