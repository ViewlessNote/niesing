// Maschinenpark – Angaben hier pflegen.
//
// Ein Wert, der `undefined` ist, erscheint auf der fertigen Seite als „auf Anfrage“.
// Im Entwicklungsmodus (`npm run dev`) wird er gelb als Platzhalter markiert,
// damit vor dem Livegang sichtbar ist, was noch fehlt.
// Bitte nur echte, von H.H. Niesing bestätigte Werte eintragen.

export interface Spec {
  label: string;
  value?: string;
}

export interface Maschine {
  hersteller: string;
  /** Genaue Typbezeichnung, z. B. „DUS 560 ti“ */
  modell?: string;
  art: string;
  einsatz: string;
  specs: Spec[];
}

export const maschinen: Maschine[] = [
  {
    hersteller: 'MAG Boehringer',
    // Foto zeigt „DUS 56…“ – genaue Bezeichnung vom Typenschild ergänzen
    modell: undefined,
    art: 'Drehmaschine (Baureihe DUS)',
    einsatz: 'Drehen von Wellen, Walzen und rotationssymmetrischen Teilen – auch in großen Längen.',
    specs: [
      { label: 'Max. Drehdurchmesser', value: undefined },
      { label: 'Max. Drehlänge', value: undefined },
      { label: 'Spindelbohrung', value: undefined },
      { label: 'Steuerung', value: undefined },
    ],
  },
  {
    hersteller: 'DMG',
    modell: undefined,
    art: 'CNC-Bearbeitung',
    einsatz: 'Präzise Dreh- und Frästeile als Einzelteil, Prototyp oder Kleinserie.',
    specs: [
      { label: 'Verfahrweg X / Y / Z', value: undefined },
      { label: 'Anzahl Achsen', value: undefined },
      { label: 'Max. Spindeldrehzahl', value: undefined },
      { label: 'Steuerung', value: undefined },
    ],
  },
];

/** Allgemeine Fertigungsmöglichkeiten (Abschnitt „Unsere Möglichkeiten“). */
export const moeglichkeiten: Spec[] = [
  { label: 'Fertigungsverfahren', value: 'Drehen, Fräsen, Montage' },
  { label: 'Losgrößen', value: 'Einzelteile, Prototypen und Kleinserien' },
  { label: 'Grundlage', value: 'Zeichnung, Skizze oder Musterteil' },
  // Bitte bestätigen bzw. ergänzen:
  { label: 'Werkstoffe', value: undefined },
  { label: 'Erreichbare Toleranzen', value: undefined },
  { label: 'Max. Werkstückgewicht', value: undefined },
];
