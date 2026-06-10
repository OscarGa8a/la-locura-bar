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

## Important URLs

- Home: ${url("/")}
- Menu section: ${url("/#menu")}
- Calculator section: ${url("/#calculator")}
- Reservations section: ${url("/#reserve")}
- Location section: ${url("/#location")}
- Google Maps profile: ${config.googleMapsUrl}
- Robots: ${url("/robots.txt")}
- Sitemap: ${url("/sitemap-index.xml")}
- Full AI summary: ${url("/llms-full.txt")}

## Official social profiles

${socialNetworks.map((social) => `- ${social.name}: ${social.href}`).join("\n")}

## Common questions

${FAQS.slice(0, 6)
	.map((item) => `- ${item.question} ${item.answer}`)
	.join("\n")}

## Relevant search intents

${config.aiSearchQueries.map((query) => `- ${query}`).join("\n")}
`;

	return new Response(content, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}
