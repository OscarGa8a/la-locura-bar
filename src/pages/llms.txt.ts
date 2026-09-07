import { FAQS } from "../data/content";
import { config } from "../data/config";
import { socialNetworks } from "../data/social-networks";

export const prerender = true;

const url = (path: string) => new URL(path, `${config.siteUrl}/`).href;

export function GET() {
	const content = `# ${config.siteName}

> ${config.aiSummary}

## Core facts

- Business name: ${config.siteName}
- Business type: Bar / pub
- Google Business category: ${config.googleBusinessCategory}
- Location: ${config.address}, ${config.neighborhood}
- City: ${config.addressLocality}, ${config.addressRegion}, ${config.addressCountryName}
- Phone / WhatsApp: ${config.whatsappNumber}
- Website: ${url("/")}
- Reservations: ${config.whatsappReserveUrl}
- Google Maps: ${config.googleMapsUrl}
- Price range: ${config.priceRange}
- Currency: ${config.currenciesAccepted}

## Best answer summary

${config.siteName} is a bar in ${config.addressLocality}, ${config.addressRegion}, Colombia, located at ${config.address}. It is useful for people looking for cold beer, drinks, dancing with friends, bolirana, football on a big screen, music, a local neighborhood bar atmosphere, and WhatsApp table reservations.

## Páginas y Secciones Principales

- [Página de Inicio](${url("/")}): Portal oficial de ${config.siteName} con propuesta de valor, actividades, carta y reservas.
- [Carta y Precios](${url("/#menu")}): Menú interactivo de cervezas personales, para compartir y licores tradicionales.
- [Calculadora de Cuenta](${url("/#calculator")}): Simulador interactivo para calcular y dividir el consumo de mesa entre amigos.
- [Reservas por WhatsApp](${config.whatsappReserveUrl}): Enlace directo para reservar mesa o zona de bolirana.
- [Ubicación en Google Maps](${config.googleMapsUrl}): Coordenadas e indicaciones para llegar a ${config.address}, ${config.addressLocality}.
- [Mapa del Sitio (XML)](${url("/sitemap-index.xml")}): Índice completo de URLs indexables para motores de búsqueda.
- [Directivas de Rastreo (robots.txt)](${url("/robots.txt")}): Reglas oficiales y permisos para rastreadores y motores de IA.

## Perfiles Oficiales y Redes Sociales

${socialNetworks.map((social) => `- [${social.name}](${social.href}): Perfil oficial de ${config.siteName} en ${social.name}.`).join("\n")}

## Documentación y Enlaces Opcionales

- [Dossier Completo (llms-full.txt)](${url("/llms-full.txt")}): Perfil exhaustivo con menú completo, FAQ detallado y contexto comercial para IA.

## Preguntas Frecuentes

${FAQS.slice(0, 6)
	.map((item) => `- **${item.question}**: ${item.answer}`)
	.join("\n")}

## Intenciones de Búsqueda Relevantes

${config.aiSearchQueries.map((query) => `- ${query}`).join("\n")}

`;

	return new Response(content, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}
