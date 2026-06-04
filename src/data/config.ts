const WHATSAPP_ID = "573106495249";
const WHATSAPP_RESERVE_TEXT = "¡Hola! Quisiera hacer una reserva";

export const config = {
  phone: "3106495249",
  whatsapp: WHATSAPP_ID,
  whatsappNumber: "+57 310 649 5249",
  whatsappReserveText: WHATSAPP_RESERVE_TEXT,
  whatsappReserveUrl: `https://wa.me/${WHATSAPP_ID}?text=${encodeURIComponent(WHATSAPP_RESERVE_TEXT)}`,
  address: "Calle 10 # 5-50",
  neighborhood: "Barrio El Embudo, Villavicencio · Colombia",
  location: {
    lat: 4.1422,
    lng: -73.6268,
  },
  horario1Text: "MAR a MIE · 6:00 PM a 2:00 AM",
  horario2Text: "JUE a SAB · 6:00 PM a 4:00 AM",
  horatio3Text: "Domingos cerramos a las 10 PM · Lunes cerrado",
};
