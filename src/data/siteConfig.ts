import { buildWhatsAppGeneralUrl } from '../utils/whatsapp';
import { socialNetworks } from './social-networks';

export interface NavItem {
  label: string;
  href: string;
}

export interface MenuItemV2 {
  id: string;
  name: string;
  presentation: string;
  price: number;
  category: 'personal' | 'compartir' | 'licores' | 'otras';
  featured?: boolean;
  tag?: string;
  image?: string;
  bottleImage?: string;
  desc?: string;
}

export interface ExperienceItem {
  id: string;
  category: string;
  title: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle: string;
  image: string;
  alt: string;
}

export interface FaqItemV2 {
  id: string;
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: 'La Locura Bar',
  city: 'Villavicencio',
  department: 'Meta',
  country: 'Colombia',
  neighborhood: 'Barrio Embudo',
  address: 'Cra. 30A #10B-81, barrio Embudo, Villavicencio, Meta.',
  googleMapsUrl: 'https://maps.app.goo.gl/cALLfS7GvzKurkEx7',
  phone: '3180429823',
  whatsappNumber: '+57 318 042 9823',
  whatsappUrl: buildWhatsAppGeneralUrl(),
  logo: '/images/logo.png',
  logoTransparent: '/images/logo-transparent.webp',

  seo: {
    htmlLang: 'es-CO',
    locale: 'es_CO',
    title: 'La Locura Bar en Villavicencio | Bolirrana y música',
    description:
      'Ven a La Locura Bar, en el barrio Embudo de Villavicencio. Bolirrana, cerveza fría, música y eventos deportivos anunciados. Mira la carta y cómo llegar.',
    ogTitle: 'La Locura Bar · El parche empieza aquí',
    ogDescription:
      'Bolirrana, música, cerveza fría y parche en el barrio Embudo, Villavicencio. Descubre la carta, calcula tu cuenta y conoce cómo llegar.',
    ogImage: '/images/v2/hero-desktop.png',
    siteUrl: 'https://lalocurabar.com.co',
  },

  navigation: {
    desktop: [
      { label: 'Experiencias', href: '#experiencias' },
      { label: 'Carta', href: '#carta' },
      { label: 'Calculadora', href: '#calculadora' },
      { label: 'Ubicación', href: '#ubicacion' },
    ] as NavItem[],
    mobile: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Experiencias', href: '#experiencias' },
      { label: 'Carta', href: '#carta' },
      { label: 'Calculadora', href: '#calculadora' },
      { label: 'Reservas', href: '#reservas' },
      { label: 'Preguntas frecuentes', href: '#preguntas' },
      { label: 'Ubicación', href: '#ubicacion' },
    ] as NavItem[],
    cta: {
      label: 'Reservar mesa',
      href: '#reservas',
    },
  },

  hero: {
    eyebrow: 'BARRIO EMBUDO · VILLAVICENCIO',
    title: 'EL PARCHE EMPIEZA AQUÍ.',
    description: 'Cerveza fría, bolirrana, música y buena compañía. Sin tanta vuelta.',
    ctaPrimary: {
      label: 'Cómo llegar',
      href: '#ubicacion',
    },
    ctaSecondary: {
      label: 'Ver la carta',
      href: '#carta',
    },
    imageDesktop: '/images/v2/hero-desktop.webp',
    imageMobile: '/images/v2/hero-mobile.webp',
    imageAlt: 'Interior de La Locura Bar en Villavicencio durante la noche.',
  },

  esencia: {
    eyebrow: 'LA ESENCIA DEL PARCHE',
    title: 'EL PLAN NO NECESITA EXCUSA.',
    body: 'Con amigos, en pareja o por tu cuenta. Aquí puedes llegar sin formalidades, pedir tu música y armar el parche a tu ritmo.',
    signature: 'LA LOCURA BAR · VILLAVICENCIO',
  },

  experiencias: {
    eyebrow: 'ASÍ SE VIVE LA LOCURA',
    title: 'ENTRE CANCIONES Y REVANCHAS.',
    description: 'Un lugar para jugar, escuchar tu música y compartir el parche.',
    items: [
      {
        id: 'bolirrana',
        category: '01 / EL JUEGO',
        title: 'LA REVANCHA SE JUEGA AQUÍ.',
        titleLine1: 'LA REVANCHA',
        titleLine2: 'SE JUEGA AQUÍ.',
        subtitle: 'Bolirrana con amigos, tiro, punto y revancha.',
        image: '/images/v2/bolirrana.webp',
        alt: 'Mesa de bolirrana de La Locura Bar.',
      },
      {
        id: 'musica',
        category: '02 / LA MÚSICA',
        title: 'TÚ PIDES LA CANCIÓN.',
        titleLine1: 'TÚ PIDES',
        titleLine2: 'LA CANCIÓN.',
        subtitle: 'El ambiente lo pones tú.',
        image: '/images/v2/musica.webp',
        alt: 'Zona de mesas de La Locura Bar con rocola digital y música.',
      },
      {
        id: 'pantalla',
        category: '03 / LA PANTALLA',
        title: 'EL DEPORTE SE VIVE EN GRANDE.',
        titleLine1: 'EL DEPORTE',
        titleLine2: 'SE VIVE EN GRANDE.',
        subtitle: 'Los partidos que no te puedes perder.',
        image: '/images/v2/pantalla.webp',
        alt: 'Pantalla de gran formato para partidos y eventos en La Locura Bar.',
      },
    ] as ExperienceItem[],
  },

  carta: {
    eyebrow: '04 / LA CARTA',
    title: '¿QUÉ SE VA A TOMAR?',
    description: 'Conoce nuestras bebidas y arma tu plan sin sorpresas.',
    ctaCalculator: {
      label: 'Calcula tu cuenta',
      href: '#calculadora',
    },
    categories: [
      { id: 'personal', label: 'Cervezas personales', sublabel: 'Individuales', icon: 'beer', description: 'Presentaciones individuales' },
      { id: 'compartir', label: 'Para compartir', sublabel: 'Balde y torres', icon: 'bucket', description: 'Presentaciones para el parche' },
      { id: 'licores', label: 'Licores', sublabel: 'Tragos y botellas', icon: 'bottle', description: 'Consulta las opciones disponibles' },
      { id: 'otras', label: 'Otras bebidas', sublabel: 'Sin alcohol y mixers', icon: 'martini', description: 'Bebidas no alcohólicas y mixers' },
    ] as const,
  },

  calculadora: {
    eyebrow: '05 / ARMA TU PARCHE',
    title: '¿CUÁNTO SALE EL PARCHE?',
    description: 'Escoge las bebidas, ajusta las cantidades y calcula cuánto podrían gastar.',
    ticketBrand: 'LA LOCURA BAR',
    ticketTitle: 'TU CUENTA',
    ticketSubtitle: 'RESUMEN ESTIMADO',
    emptyState: 'Agrega bebidas para ver tu cuenta.',
    totalLabel: 'TOTAL ESTIMADO',
    ctaShare: 'Compartir estimado por WhatsApp',
    ctaClear: 'Limpiar cuenta',
    disclaimer: 'Valores sujetos a la carta vigente. Esta es una estimación, no un pedido.',
    mobileCollapsed: 'Ver resumen',
    mobileExpanded: 'Ocultar resumen',
  },

  reservas: {
    eyebrow: '06 / RESERVAS',
    title: '¿YA ARMARON EL PARCHE?',
    description:
      'Dinos cuándo vienen y cuántas personas son. Solicita tu mesa por WhatsApp y confirma la disponibilidad con nosotros.',
    panelTitle: 'SOLICITA TU MESA',
    panelSubtitle: 'Completa estos datos para enviar tu solicitud.',
    ctaSubmit: 'Solicitar por WhatsApp',
    notice: 'La reserva queda sujeta a confirmación.',
    helperNotice: 'Te confirmaremos la disponibilidad por WhatsApp.',
    image: '/images/v2/reservas.webp',
    imageAlt: 'Ambiente nocturno para reservar mesa en La Locura Bar.',
  },

  faq: {
    eyebrow: '07 / PREGUNTAS FRECUENTES',
    title: 'ANTES DE CAER.',
    description: 'Resolvemos lo básico para que llegues sin tanta vuelta y disfrutes el parche.',
    items: [
      {
        id: 'faq-1',
        question: '¿Cuál es el horario de La Locura Bar?',
        answer: 'Escríbenos por WhatsApp antes de venir y te confirmamos nuestro horario de atención.',
      },
      {
        id: 'faq-2',
        question: '¿Cómo puedo reservar una mesa?',
        answer: 'Puedes solicitar tu mesa desde la página o por WhatsApp. Nuestro equipo te confirmará la disponibilidad.',
      },
      {
        id: 'faq-3',
        question: '¿Se puede jugar bolirrana?',
        answer: '¡Claro! Puedes jugar bolirrana con tus amigos mientras disfrutas de la música y el ambiente del bar.',
      },
      {
        id: 'faq-4',
        question: '¿Transmiten partidos y otros eventos deportivos?',
        answer:
          'Sí, contamos con pantalla gigante para transmisiones deportivas anunciadas. Consulta nuestras redes para conocer los próximos eventos.',
      },
      {
        id: 'faq-5',
        question: '¿Puedo pedir música y bailar?',
        answer: 'Sí. Tenemos música variada, puedes pedir canciones y disfrutar del ambiente a tu ritmo.',
      },
      {
        id: 'faq-6',
        question: '¿Qué bebidas tienen disponibles?',
        answer: 'Tenemos cervezas personales, presentaciones para compartir y aguardiente. Consulta las opciones y precios en nuestra carta.',
      },
    ] as FaqItemV2[],
    extraHelp: {
      title: '¿TE QUEDÓ ALGUNA DUDA?',
      text: 'Escríbenos por WhatsApp y te ayudamos.',
      cta: 'Consultar por WhatsApp',
    },
  },

  ubicacion: {
    eyebrow: '08 / ENCUÉNTRANOS',
    title: 'AQUÍ NOS VEMOS.',
    description:
      'Estamos en el barrio Embudo, Villavicencio. Consulta la ruta antes de salir y nos vemos en el parche.',
    addressLabel: 'DIRECCIÓN',
    address: 'Cra. 30A #10B-81, barrio Embudo, Villavicencio, Meta.',
    ctaMaps: 'Cómo llegar en Google Maps',
    ctaWhatsApp: 'Consultar por WhatsApp',
    image: '/images/v2/ubicacion.png',
    imageAlt: 'Ubicación de La Locura Bar en el barrio Embudo, Villavicencio.',
    mapTitle: 'Mapa de ubicación de La Locura Bar en el barrio Embudo, Villavicencio.',
  },

  footer: {
    eyebrow: 'EL PARCHE SIGUE EN REDES',
    title: 'LA NOCHE ES DEL BARRIO.',
    description: 'Síguenos y entérate de lo que se arma en La Locura.',
    socialHeading: 'SÍGUENOS',
    exploreHeading: 'EXPLORA',
    socialNetworks,
    exploreLinks: [
      { label: 'Experiencias', href: '#experiencias' },
      { label: 'Carta', href: '#carta' },
      { label: 'Calculadora de parche', href: '#calculadora' },
      { label: 'Reservas', href: '#reservas' },
      { label: 'Preguntas frecuentes', href: '#preguntas' },
      { label: 'Ubicación', href: '#ubicacion' },
    ] as NavItem[],
    brandSign: 'LA LOCURA BAR',
    locationSign: 'VILLAVICENCIO · COLOMBIA',
  },
} as const;

export const MENU_PRODUCTS: MenuItemV2[] = [
  // Cervezas personales
  {
    id: 'aguila-330',
    name: 'Águila',
    presentation: '330 ml.',
    price: 3300,
    category: 'personal',
    featured: true,
    tag: 'MÁS PEDIDA',
    image: '/images/products/aguila-330_h6nyem.webp',
    bottleImage: '/images/v2/bottles/aguila.webp',
    desc: 'Refrescante y crujiente · la clásica para cualquier parche',
  },
  {
    id: 'corona-210',
    name: 'Corona',
    presentation: '210 ml.',
    price: 4000,
    category: 'personal',
    featured: true,
    tag: 'DESTACADA',
    image: '/images/products/coronita-210_vtbcjx.webp',
    bottleImage: '/images/v2/bottles/corona.webp',
    desc: 'Ligera y refrescante · perfecta con limón y para el parche',
  },
  {
    id: 'poker-330',
    name: 'Poker',
    presentation: '330 ml.',
    price: 3300,
    category: 'personal',
    image: '/images/products/poker-330_wefep9.webp',
    desc: 'Equilibrada y ligera · perfecta para compartir con amigos',
  },
  {
    id: 'club-colombia-330',
    name: 'Club Colombia',
    presentation: '330 ml.',
    price: 4000,
    category: 'personal',
    image: '/images/products/club-330_oyhhnc.webp',
    bottleImage: '/images/v2/bottles/club-dorada.webp',
    desc: 'Sabor auténtico colombiano · tradicional y bien fría',
  },
  {
    id: 'costenita-330',
    name: 'Costeñita',
    presentation: '330 ml.',
    price: 3300,
    category: 'personal',
    tag: 'MÁS PEDIDA',
    image: '/images/products/costenita-330_ttl1nv.webp',
    desc: 'Sabor costeño y alegre · muy bebible para la rumba',
  },
  {
    id: 'aguila-light-330',
    name: 'Águila Light',
    presentation: '330 ml.',
    price: 3300,
    category: 'personal',
    image: '/images/products/aguila-light-330_ptvza2.webp',
    bottleImage: '/images/v2/bottles/aguila-light.webp',
    desc: 'Ligera y suave · menos calorías, misma buena vibra',
  },
  {
    id: 'costena-330',
    name: 'Costeña',
    presentation: '330 ml.',
    price: 3000,
    category: 'personal',
    image: '/images/products/costena-330_n6lwx4.webp',
    desc: 'Cerveza costeña tradicional · sencilla, fresca y sin vueltas',
  },
  {
    id: 'redds-330',
    name: "Cerveza Redd's",
    presentation: '330 ml.',
    price: 4000,
    category: 'personal',
    image: '/images/products/redds-330_h5onl7.webp',
    desc: 'Cuerpo y carácter · para quien busca sabor con presencia',
  },

  // Para compartir
  {
    id: 'aguila-1000',
    name: 'Águila Litro',
    presentation: '1000 ml.',
    price: 7000,
    category: 'compartir',
    featured: true,
    tag: 'MÁS PEDIDA',
    image: '/images/products/aguila-1000_ibbohw.webp',
    bottleImage: '/images/v2/bottles/aguila.webp',
    desc: 'Litro para compartir · fría y lista para el parche',
  },
  {
    id: 'club-colombia-850',
    name: 'Club Colombia',
    presentation: '850 ml.',
    price: 7000,
    category: 'compartir',
    featured: true,
    tag: 'DESTACADA',
    image: '/images/products/club-750_eftaky.webp',
    bottleImage: '/images/v2/bottles/club-dorada.webp',
    desc: 'Clásica para compartir · sabor colombiano para todos',
  },
  {
    id: 'poker-1000',
    name: 'Poker Litro',
    presentation: '1000 ml.',
    price: 7000,
    category: 'compartir',
    image: '/images/products/poker-1000_t5m8r0.webp',
    desc: 'Para el grupo · refrescante y generosa',
  },
  {
    id: 'costena-750',
    name: 'Costeña',
    presentation: '750 ml.',
    price: 5000,
    category: 'compartir',
    image: '/images/products/costena-750_wx3epl.webp',
    desc: 'Grande para el parche · ideal para brindar entre amigos',
  },

  // Licores
  {
    id: 'llanero-media',
    name: 'Aguardiente Llanero',
    presentation: '1/2 botella · 375 ml.',
    price: 35000,
    category: 'licores',
    featured: true,
    tag: 'TRADICIÓN LLANERA',
    image: '/images/products/llanero-media_jnmmbc.webp',
    desc: 'Incluye botella de agua y limón · notas dulces y tradición llanera',
  },
  {
    id: 'amarillo-media',
    name: 'Aguardiente Amarillo',
    presentation: '1/2 botella · 375 ml.',
    price: 45000,
    category: 'licores',
    featured: true,
    tag: 'DESTACADA',
    image: '/images/products/amarillo-media_kba2ac.webp',
    desc: 'Incluye botella de agua y limón · cuerpo y sabor tradicional',
  },
  {
    id: 'antioqueno-media',
    name: 'Aguardiente Antioqueño',
    presentation: '1/2 botella · 375 ml.',
    price: 45000,
    category: 'licores',
    image: '/images/products/antioqueno-media_yiptro.webp',
    desc: 'Incluye botella de agua y limón · fuerte, directo y con carácter',
  },

  // Otras bebidas
  {
    id: 'agua-botella',
    name: 'Botella de agua',
    presentation: 'Con o sin gas',
    price: 3000,
    category: 'otras',
    desc: 'Botella fría de agua con o sin gas',
  },
  {
    id: 'gatorade',
    name: 'Gatorade',
    presentation: 'Bebida hidratante',
    price: 5000,
    category: 'otras',
    desc: 'Bebida isotónica hidratante varios sabores',
  },
];
