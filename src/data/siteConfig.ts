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
  category: 'personal' | 'compartir' | 'licores';
  featured?: boolean;
  tag?: string;
  image?: string;
  desc?: string;
}

export interface ExperienceItem {
  id: string;
  category: string;
  title: string;
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
  logoTransparent: '/images/logo-transparent.png',

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
    imageDesktop: '/images/v2/hero-desktop.png',
    imageMobile: '/images/v2/hero-mobile.png',
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
        category: 'Bolirrana',
        title: 'LA REVANCHA SE JUEGA AQUÍ.',
        subtitle: 'Bolirrana con amigos.',
        image: '/images/v2/bolirrana.png',
        alt: 'Mesa de bolirrana de La Locura Bar.',
      },
      {
        id: 'musica',
        category: 'Música',
        title: 'TÚ PIDES LA CANCIÓN.',
        subtitle: 'Música para disfrutar el parche a tu ritmo.',
        image: '/images/v2/musica.png',
        alt: 'Zona de mesas de La Locura Bar con iluminación nocturna.',
      },
      {
        id: 'pantalla',
        category: 'Eventos deportivos',
        title: 'EL DEPORTE SE VIVE EN GRANDE.',
        subtitle: 'Transmisiones deportivas anunciadas.',
        image: '/images/v2/pantalla.png',
        alt: 'Pantalla del bar durante una transmisión deportiva anunciada.',
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
      { id: 'personal', label: 'Cervezas personales', description: 'Presentaciones individuales' },
      { id: 'compartir', label: 'Para compartir', description: 'Presentaciones para el parche' },
      { id: 'licores', label: 'Licores', description: 'Consulta las opciones disponibles' },
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
    image: '/images/v2/reservas.png',
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
    name: 'Cerveza Aguila',
    presentation: '330ml',
    price: 3300,
    category: 'personal',
    featured: true,
    tag: 'Más pedida',
    desc: 'Refrescante y crujiente · la clásica para cualquier parche',
  },
  {
    id: 'poker-330',
    name: 'Cerveza Poker',
    presentation: '330ml',
    price: 3300,
    category: 'personal',
    desc: 'Equilibrada y ligera · perfecta para compartir con los amigos',
  },
  {
    id: 'club-330',
    name: 'Cerveza Club Colombia',
    presentation: '330ml',
    price: 4000,
    category: 'personal',
    desc: 'Sabor auténtico colombiano · tradicional y bien fría',
  },
  {
    id: 'corona-210',
    name: 'Cerveza Corona',
    presentation: '210ml',
    price: 4000,
    category: 'personal',
    desc: 'Ligera y refrescante · perfecta con limón y para el parche',
  },
  {
    id: 'costenita-330',
    name: 'Cerveza Costeñita',
    presentation: '330ml',
    price: 3300,
    category: 'personal',
    featured: true,
    tag: 'Más pedida',
    desc: 'Sabor costeño y alegre · muy bebible para la rumba',
  },
  {
    id: 'aguila-light-330',
    name: 'Cerveza Aguila Light',
    presentation: '330ml',
    price: 3300,
    category: 'personal',
    desc: 'Ligera y suave · menos calorías, misma buena vibra',
  },
  {
    id: 'costena-330',
    name: 'Cerveza Costeña',
    presentation: '330ml',
    price: 3000,
    category: 'personal',
    desc: 'Cerveza costeña tradicional · sencilla, fresca y sin vueltas',
  },
  {
    id: 'redds-330',
    name: 'Cerveza Reeds',
    presentation: '330ml',
    price: 4000,
    category: 'personal',
    desc: 'Cuerpo y carácter · para quien busca sabor con presencia',
  },

  // Para compartir
  {
    id: 'aguila-1000',
    name: 'Cerveza Aguila',
    presentation: '1000ml (Litro)',
    price: 7000,
    category: 'compartir',
    featured: true,
    tag: 'Más pedida',
    desc: 'Litro para compartir · fría y lista para el parche',
  },
  {
    id: 'poker-1000',
    name: 'Cerveza Poker',
    presentation: '1000ml (Litro)',
    price: 7000,
    category: 'compartir',
    desc: 'Para el grupo · refrescante y generosa',
  },
  {
    id: 'club-850',
    name: 'Cerveza Club Colombia',
    presentation: '850ml',
    price: 7000,
    category: 'compartir',
    featured: true,
    desc: 'Clásica para compartir · sabor colombiano para todos',
  },
  {
    id: 'costena-750',
    name: 'Cerveza Costeña',
    presentation: '750ml',
    price: 5000,
    category: 'compartir',
    desc: 'Grande para el parche · ideal para brindar entre amigos',
  },

  // Licores
  {
    id: 'llanero-media',
    name: 'Aguardiente Llanero',
    presentation: '1/2 botella',
    price: 35000,
    category: 'licores',
    featured: true,
    desc: 'Incluye botella de agua y limón · notas dulces y tradición llanera',
  },
  {
    id: 'amarillo-media',
    name: 'Aguardiente Amarillo',
    presentation: '1/2 botella',
    price: 45000,
    category: 'licores',
    featured: true,
    desc: 'Incluye botella de agua y limón · cuerpo y sabor tradicional',
  },
  {
    id: 'antioqueno-media',
    name: 'Aguardiente Antioqueño',
    presentation: '1/2 botella',
    price: 45000,
    category: 'licores',
    desc: 'Incluye botella de agua y limón · fuerte, directo y con carácter',
  },
];
