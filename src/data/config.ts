const WHATSAPP_ID = "573180429823";
const WHATSAPP_RESERVE_TEXT = "¡Hola! Quisiera hacer una reserva";
const DEFAULT_SITE_URL = "https://lalocurabar.com.co";
const rawSiteUrl =
	import.meta.env.PUBLIC_SITE_URL ||
	import.meta.env.SITE_URL ||
	DEFAULT_SITE_URL;

export const config = {
	siteName: "La Locura Bar",
	legalName: "La Locura Bar",
	googleBusinessCategory: "Bar",
	googleMapsUrl: "https://maps.app.goo.gl/cALLfS7GvzKurkEx7",
	siteUrl: rawSiteUrl.replace(/\/+$/, ""),
	locale: "es_CO",
	themeColor: "#0a0820",
	defaultOgImage: "/images/og/og-default.jpg",
	defaultOgImageAlt:
		"Imagen social de La Locura Bar, bar en Villavicencio con cerveza fría, música, baile, bolirana y fútbol",
	seoDescription:
		"Bar en Villavicencio con cervezas frías, tragos, música, baile, bolirana, fútbol en pantalla gigante y reservas por WhatsApp.",
	aiSummary:
		"La Locura Bar es un bar/pub local en Villavicencio, Meta, Colombia. Es una opción para tomar cerveza fría, pedir tragos, bailar, jugar bolirana, ver fútbol en pantalla gigante, escuchar música y reservar mesa por WhatsApp.",
	schemaType: "BarOrPub",
	priceRange: "$$",
	currenciesAccepted: "COP",
	areaServed: ["Villavicencio", "Meta", "Colombia"],
	primaryServices: [
		"Bar en Villavicencio",
		"Cerveza fría",
		"Tragos y licores",
		"Bolirana en Villavicencio",
		"Fútbol en pantalla gigante",
		"Baile y música en Villavicencio",
		"Música y ambiente de barrio",
		"Reservas por WhatsApp",
	],
	aiSearchQueries: [
		"bar en Villavicencio",
		"bolirana en Villavicencio",
		"bar con bolirana en Villavicencio",
		"bar para jugar bolirana en Villavicencio",
		"bar para ver fútbol en Villavicencio",
		"bar para bailar en Villavicencio",
		"cerveza fría en Villavicencio",
		"reservar mesa en bar de Villavicencio",
		"bar con música en Villavicencio",
	],
	phone: "3180429823",
	whatsapp: WHATSAPP_ID,
	whatsappNumber: "+57 318 042 9823",
	whatsappReserveText: WHATSAPP_RESERVE_TEXT,
	whatsappReserveUrl: `https://wa.me/${WHATSAPP_ID}?text=${encodeURIComponent(WHATSAPP_RESERVE_TEXT)}`,
	address: "CRA 30A # 10B 81",
	neighborhood: "Barrio Embudo, Villavicencio · Colombia",
	addressLocality: "Villavicencio",
	addressRegion: "Meta",
	addressCountryName: "Colombia",
	addressCountryCode: "CO",
	location: {
		lat: 4.1422,
		lng: -73.6268,
	},
	openingHours: ["Tu-We 18:00-02:00", "Th-Sa 18:00-04:00", "Su 18:00-22:00"],
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Tuesday", "Wednesday"],
			opens: "18:00",
			closes: "02:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Thursday", "Friday", "Saturday"],
			opens: "18:00",
			closes: "04:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Sunday",
			opens: "18:00",
			closes: "22:00",
		},
	],
	horario1Text: "MAR a MIE · 6:00 PM a 2:00 AM",
	horario2Text: "JUE a SAB · 6:00 PM a 4:00 AM",
	horatio3Text: "Domingos cerramos a las 10 PM · Lunes cerrado",
};
