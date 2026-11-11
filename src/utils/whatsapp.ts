export const WHATSAPP_PHONE = '573180429823';

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(amount);
}

export interface EstimateItem {
  name: string;
  presentation?: string;
  quantity: number;
  subtotal: number;
}

export function buildWhatsAppEstimateUrl(items: EstimateItem[], total: number): string {
  const lines = items
    .filter((item) => item.quantity > 0)
    .map(
      (item) =>
        `${item.quantity} × ${item.name}${item.presentation ? ` (${item.presentation})` : ''} — ${formatCOP(item.subtotal)}`
    )
    .join('\n');

  const message = [
    'Hola, quiero compartir este estimado de La Locura Bar:',
    '',
    lines,
    '',
    `Total estimado: ${formatCOP(total)}`,
    '',
    'Este cálculo es orientativo y no es un pedido. Los valores pueden cambiar según la carta vigente.',
  ].join('\n');

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export interface ReserveData {
  name: string;
  people: string | number;
  date: string;
  time: string;
}

export function buildWhatsAppReserveUrl(data: ReserveData): string {
  const message = [
    'Hola, quiero consultar disponibilidad para una mesa en La Locura Bar.',
    '',
    `Nombre: ${data.name.trim()}`,
    `Personas: ${data.people}`,
    `Fecha: ${data.date}`,
    `Hora: ${data.time}`,
    '',
    'Quedo atento a la confirmación. ¡Gracias!',
  ].join('\n');

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppGeneralUrl(customMessage?: string): string {
  const message = customMessage || 'Hola, quiero consultar información sobre La Locura Bar.';
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
