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
        category: '01 / EL JUEGO',
        title: 'LA REVANCHA SE JUEGA AQUÍ.',
        titleLine1: 'LA REVANCHA',
        titleLine2: 'SE JUEGA AQUÍ.',
        subtitle: 'Bolirrana con amigos, tiro, punto y revancha.',
        image: '/images/v2/bolirrana.png',
        alt: 'Mesa de bolirrana de La Locura Bar.',
      },
      {
        id: 'musica',
        category: '02 / LA MÚSICA',
        title: 'TÚ PIDES LA CANCIÓN.',
        titleLine1: 'TÚ PIDES',
        titleLine2: 'LA CANCIÓN.',
        subtitle: 'El ambiente lo pones tú.',
        image: '/images/v2/musica.png',
        alt: 'Zona de mesas de La Locura Bar con rocola digital y música.',
      },
      {
        id: 'pantalla',
        category: '03 / LA PANTALLA',
        title: 'EL DEPORTE SE VIVE EN GRANDE.',
        titleLine1: 'EL DEPORTE',
        titleLine2: 'SE VIVE EN GRANDE.',
        subtitle: 'Los partidos que no te puedes perder.',
        image: '/images/v2/pantalla.png',
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
      { id: 'personal', label: 'Cervezas personales', sublabel: 'Personales y para compartir', icon: 'beer', description: 'Presentaciones individuales' },
      { id: 'compartir', label: 'Para compartir', sublabel: 'Litros y cubetas', icon: 'bucket', description: 'Presentaciones para el parche' },
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
    id: 'aguila-original-330',
    name: 'Aguila Original',
    presentation: '330 ml.',
    price: 6000,
    category: 'personal',
    featured: true,
    tag: 'DESTACADA',
    image: '/images/v2/menu-cervezas.png',
    bottleImage: '/images/v2/bottles/aguila.png',
    desc: 'Cerveza 330 ml.',
  },
  {
    id: 'heineken-330',
    name: 'Heineken',
    presentation: '330 ml.',
    price: 8000,
    category: 'personal',
    featured: true,
    tag: 'DESTACADA',
    image: '/images/v2/menu-licores.png',
    bottleImage: '/images/v2/bottles/heineken.png',
    desc: 'Cerveza 330 ml.',
  },
  {
    id: 'aguila-light-330',
    name: 'Aguila Light',
    presentation: '330 ml.',
    price: 6000,
    category: 'personal',
    bottleImage: '/images/v2/bottles/aguila-light.png',
    desc: 'Ligera, refrescante y suave',
  },
  {
    id: 'club-colombia-330',
    name: 'Club Colombia',
    presentation: '330 ml.',
    price: 7000,
    category: 'personal',
    bottleImage: '/images/v2/bottles/club-dorada.png',
    desc: 'Dorada tradicional colombiana',
  },
  {
    id: 'poker-330',
    name: 'Poker',
    presentation: '330 ml.',
    price: 5000,
    category: 'personal',
    bottleImage: '/images/v2/bottles/aguila.png',
    desc: 'El amigo que une al parche',
  },
  {
    id: 'costenita-330',
    name: 'Costeñita',
    presentation: '330 ml.',
    price: 5000,
    category: 'personal',
    bottleImage: '/images/v2/bottles/aguila.png',
    desc: 'Sabor costeño refrescante',
  },
  {
    id: 'corona-330',
    name: 'Corona',
    presentation: '330 ml.',
    price: 8000,
    category: 'personal',
    bottleImage: '/images/v2/bottles/corona.png',
    desc: 'Bien fría con limón',
  },
  {
    id: 'stella-artois-330',
    name: 'Stella Artois',
    presentation: '330 ml.',
    price: 9000,
    category: 'personal',
    bottleImage: '/images/v2/bottles/heineken.png',
    desc: 'Premium lager europea',
  },
  {
    id: 'budweiser-330',
    name: 'Budweiser',
    presentation: '330 ml.',
    price: 7000,
    category: 'personal',
    bottleImage: '/images/v2/bottles/aguila.png',
    desc: 'Clásica lager americana',
  },
  {
    id: 'miller-lite-330',
    name: 'Miller Lite',
    presentation: '330 ml.',
    price: 7000,
    category: 'personal',
    bottleImage: '/images/v2/bottles/corona.png',
    desc: 'Triple filtrada, ligera',
  },
  {
    id: 'andina-330',
    name: 'Andina',
    presentation: '330 ml.',
    price: 6000,
    category: 'personal',
    bottleImage: '/images/v2/bottles/aguila.png',
    desc: 'Cerveza colombiana refrescante',
  },
  {
    id: 'bbc-330',
    name: 'BBC',
    presentation: '330 ml.',
    price: 8000,
    category: 'personal',
    bottleImage: '/images/v2/bottles/aguila.png',
    desc: 'Artesanal bogotana',
  },
  {
    id: 'club-roja-330',
    name: 'Club Colombia Roja',
    presentation: '330 ml.',
    price: 7000,
    category: 'personal',
    bottleImage: '/images/v2/bottles/club-roja.png',
    desc: 'Maltas tostadas especiales',
  },
  {
    id: 'michelob-ultra-330',
    name: 'Michelob Ultra',
    presentation: '330 ml.',
    price: 8000,
    category: 'personal',
    bottleImage: '/images/v2/bottles/aguila-light.png',
    desc: 'Baja en calorías y carbohidratos',
  },

  // Para compartir
  {
    id: 'cubetazo-aguila',
    name: 'Cubetazo Águila (5 botellas)',
    presentation: '5 x 330 ml.',
    price: 28000,
    category: 'compartir',
    featured: true,
    tag: 'DESTACADA',
    image: '/images/v2/menu-cervezas.png',
    bottleImage: '/images/v2/bottles/aguila.png',
    desc: '5 cervezas bien frías en cubeta de hielo',
  },
  {
    id: 'cubetazo-corona',
    name: 'Cubetazo Corona (5 botellas)',
    presentation: '5 x 330 ml.',
    price: 38000,
    category: 'compartir',
    featured: true,
    tag: 'DESTACADA',
    image: '/images/v2/menu-licores.png',
    bottleImage: '/images/v2/bottles/corona.png',
    desc: 'Balde de Coronitas con limón',
  },
  {
    id: 'aguila-1000',
    name: 'Cerveza Aguila Litro',
    presentation: '1000 ml.',
    price: 10000,
    category: 'compartir',
    bottleImage: '/images/v2/bottles/aguila.png',
    desc: 'Litro para compartir con los amigos',
  },
  {
    id: 'poker-1000',
    name: 'Cerveza Poker Litro',
    presentation: '1000 ml.',
    price: 10000,
    category: 'compartir',
    bottleImage: '/images/v2/bottles/aguila.png',
    desc: 'Litro generoso para el parche',
  },
  {
    id: 'club-850',
    name: 'Cerveza Club Colombia',
    presentation: '850 ml.',
    price: 11000,
    category: 'compartir',
    bottleImage: '/images/v2/bottles/club-dorada.png',
    desc: 'Botella grande para compartir',
  },
  {
    id: 'costena-750',
    name: 'Cerveza Costeña',
    presentation: '750 ml.',
    price: 8000,
    category: 'compartir',
    bottleImage: '/images/v2/bottles/aguila.png',
    desc: 'Ideal para la ronda',
  },

  // Licores
  {
    id: 'llanero-botella',
    name: 'Aguardiente Llanero',
    presentation: 'Botella 750 ml.',
    price: 75000,
    category: 'licores',
    featured: true,
    tag: 'DESTACADA',
    image: '/images/v2/menu-licores.png',
    desc: 'Tradición del llano para celebrar',
  },
  {
    id: 'amarillo-botella',
    name: 'Aguardiente Amarillo',
    presentation: 'Botella 750 ml.',
    price: 90000,
    category: 'licores',
    featured: true,
    tag: 'DESTACADA',
    image: '/images/v2/menu-cervezas.png',
    desc: 'Pionero de Manzanares con notas anisadas',
  },
  {
    id: 'llanero-media',
    name: 'Aguardiente Llanero',
    presentation: '1/2 botella 375 ml.',
    price: 40000,
    category: 'licores',
    desc: 'Incluye agua y limón',
  },
  {
    id: 'amarillo-media',
    name: 'Aguardiente Amarillo',
    presentation: '1/2 botella 375 ml.',
    price: 50000,
    category: 'licores',
    desc: 'Incluye agua y limón',
  },
  {
    id: 'antioqueno-media',
    name: 'Aguardiente Antioqueño',
    presentation: '1/2 botella 375 ml.',
    price: 45000,
    category: 'licores',
    desc: 'Tapa azul tradicional',
  },
  {
    id: 'antioqueno-botella',
    name: 'Aguardiente Antioqueño',
    presentation: 'Botella 750 ml.',
    price: 85000,
    category: 'licores',
    desc: 'Tapa azul 750 ml.',
  },
  {
    id: 'ron-caldas-media',
    name: 'Ron Viejo de Caldas',
    presentation: '1/2 botella 375 ml.',
    price: 45000,
    category: 'licores',
    desc: 'Tradicional 3 años',
  },
  {
    id: 'ron-caldas-botella',
    name: 'Ron Viejo de Caldas',
    presentation: 'Botella 750 ml.',
    price: 85000,
    category: 'licores',
    desc: 'Botella entera para la mesa',
  },

  // Otras bebidas
  {
    id: 'agua-botella',
    name: 'Agua mineral (con / sin gas)',
    presentation: '300 ml.',
    price: 4000,
    category: 'otras',
    desc: 'Botella fría',
  },
  {
    id: 'gaseosa',
    name: 'Gaseosa variedad',
    presentation: '350 ml.',
    price: 4000,
    category: 'otras',
    desc: 'Coca-Cola, Cuatro, Colombiana',
  },
  {
    id: 'red-bull',
    name: 'Red Bull Energy Drink',
    presentation: '250 ml.',
    price: 10000,
    category: 'otras',
    desc: 'Energizante en lata',
  },
  {
    id: 'electrolit',
    name: 'Bebida hidratante Electrolit',
    presentation: '625 ml.',
    price: 9000,
    category: 'otras',
    desc: 'Varios sabores',
  },
];
