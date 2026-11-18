export const firma = {
  name: 'H.H. Niesing GmbH',
  strasse: 'Gronauer Straße 61',
  plz: '48599',
  ort: 'Gronau-Epe',
  land: 'Deutschland',
  telefon: '+49 2565 1300',
  telefonHref: 'tel:+4925651300',
  email: 'info@hhniesing.de',
  /** Koordinaten des Firmengebäudes (OpenStreetMap) */
  lat: 52.18104,
  lon: 7.03537,
};

/** mailto-Link mit vorausgefülltem Betreff und Anfrage-Gerüst (funktioniert ohne Backend). */
export function anfrageLink(thema: string): string {
  const body = [
    'Guten Tag,',
    '',
    'wir haben folgende Anfrage:',
    '',
    'Bauteil / Bezeichnung: ',
    'Stückzahl: ',
    'Werkstoff: ',
    'Wunschtermin: ',
    '',
    'Zeichnung / Fotos: bitte im Anhang beifügen',
    '',
    'Mit freundlichen Grüßen',
  ].join('\n');
  return `mailto:${firma.email}?subject=${encodeURIComponent(`Anfrage: ${thema}`)}&body=${encodeURIComponent(body)}`;
}
