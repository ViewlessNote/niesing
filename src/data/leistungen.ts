import type { ImageMetadata } from 'astro';
import zerspanung from '../assets/img/zerspanung.jpg';
import maschinenbau from '../assets/img/maschinenbau.jpg';
import webblaetter from '../assets/img/webblaetter.jpg';
import soforthilfe from '../assets/img/soforthilfe.jpg';
import planung from '../assets/img/planung.jpg';
import service from '../assets/img/service.jpg';

export interface Leistung {
  slug: string;
  title: string;
  /** Kurztext für die Kachel auf der Startseite */
  short: string;
  /** Meta-Description (ca. 140–160 Zeichen) */
  description: string;
  img: ImageMetadata;
  alt: string;
  intro: string[];
  punkte: string[];
  /** Betreff für den Anfrage-Link */
  anfrage: string;
}

export const leistungen: Leistung[] = [
  {
    slug: 'zerspanung-lohnfertigung',
    title: 'Zerspanung und Lohnfertigung',
    short: 'Zu unserer Kernkompetenz gehört das professionelle Zerspanen in höchster Qualität sowie die Erledigung von Lohnfertigung.',
    description: 'Zerspanung und Lohnfertigung im Münsterland: Präzisionsdreh- und Frästeile als Einzelteil oder Kleinserie – H.H. Niesing GmbH, Gronau-Epe.',
    img: zerspanung,
    alt: 'Drehmaschine von MAG Boehringer bei der H.H. Niesing GmbH',
    intro: [
      'Das Zerspanen ist unsere Kernkompetenz. Wir drehen und fräsen Präzisionsteile nach Ihrer Zeichnung – vom einzelnen Ersatzteil über Prototypen bis zur Kleinserie.',
      'In der Lohnfertigung übernehmen wir Bearbeitungsschritte für Ihre Produktion, wenn Ihre eigenen Kapazitäten ausgelastet sind oder Ihnen die passende Maschine fehlt.',
    ],
    punkte: [
      'Dreh- und Frästeile nach Zeichnung, Skizze oder Muster',
      'Einzelteile, Prototypen und Kleinserien',
      'Lohnfertigung einzelner Bearbeitungsschritte',
      'Nachfertigung von Ersatzteilen, auch ohne Zeichnung',
    ],
    anfrage: 'Zerspanung / Lohnfertigung',
  },
  {
    slug: 'maschinenbau-vorrichtungsbau',
    title: 'Maschinenbau und Vorrichtungsbau',
    short: 'Aufträge erledigen wir stets mit höchster Kundenzufriedenheit.',
    description: 'Maschinenbau und Vorrichtungsbau aus Gronau-Epe: Baugruppen, Vorrichtungen und Maschinenteile nach Kundenwunsch – H.H. Niesing GmbH.',
    img: maschinenbau,
    alt: 'Gefertigte Walzen mit gedrehten Wellenenden, verpackt zur Auslieferung',
    intro: [
      'Wir bauen Maschinenteile, Baugruppen und Vorrichtungen genau für Ihren Anwendungsfall – von der Idee bis zum einbaufertigen Teil.',
      'Zusammen mit unseren Systemlieferanten liefern wir komplette Lösungen aus einer Hand und in kurzer Produktionszeit.',
    ],
    punkte: [
      'Vorrichtungen für Fertigung, Montage und Prüfung',
      'Walzen, Wellen und Maschinenteile',
      'Baugruppen inklusive Montage',
      'Komplettlösungen mit unseren Systemlieferanten',
    ],
    anfrage: 'Maschinenbau / Vorrichtungsbau',
  },
  {
    slug: 'webblaetter',
    title: 'Webblätter und benadeltes Maschinenzubehör',
    short: 'Für Ihren Webereibedarf stellen wir hochwertige Webblätter auf Kundenwunsch her.',
    description: 'Webblätter und benadeltes Maschinenzubehör nach Kundenwunsch: Webereibedarf von der H.H. Niesing GmbH aus dem Münsterland.',
    img: webblaetter,
    alt: 'Nahaufnahme eines Webblatts mit feinen Rietstäben',
    intro: [
      'Für Webereien fertigen wir Webblätter nach Ihren Vorgaben sowie benadeltes Maschinenzubehör.',
      'Ob Neuanfertigung oder Ersatz für ein vorhandenes Teil: Wir stimmen Maße und Ausführung mit Ihnen ab.',
    ],
    punkte: [
      'Webblätter nach Kundenwunsch',
      'Benadeltes Maschinenzubehör',
      'Nachfertigung nach Muster',
      'Beratung zu Ausführung und Maßen',
    ],
    anfrage: 'Webblätter / Webereibedarf',
  },
  {
    slug: 'soforthilfe-maschinenstillstand',
    title: 'Soforthilfe bei Maschinenstillstand',
    short: 'Wir leisten Ad-hoc-Lösungen bei Maschinenstillstand und liefern Ihnen Sofort-Hilfe.',
    description: 'Maschine steht still? Soforthilfe aus Gronau-Epe: schnelle Fertigung von Ersatzteilen und Reparatur – H.H. Niesing GmbH.',
    img: soforthilfe,
    alt: 'Demontiertes Getriebe auf einer Palette während einer Reparatur',
    intro: [
      'Jede Stunde Stillstand kostet Geld. Wenn bei Ihnen eine Maschine steht, helfen wir schnell – mit einer Lösung, die Ihre Produktion wieder ans Laufen bringt.',
      'Wir fertigen defekte Teile kurzfristig nach, oft auch ohne Zeichnung direkt nach dem ausgebauten Teil.',
    ],
    punkte: [
      'Kurzfristige Fertigung von Ersatzteilen',
      'Nachfertigung nach defektem Musterteil',
      'Reparatur und Montage',
      'Persönlicher Ansprechpartner am Telefon',
    ],
    anfrage: 'DRINGEND – Maschinenstillstand',
  },
  {
    slug: 'planung-beratung',
    title: 'Planung und Beratung',
    short: 'Bei der Planung von Maschinen und Maschinenteilen stehen wir Ihnen stets beratend zur Seite, um für Sie eine optimale Lösung zu finden.',
    description: 'Planung und Beratung für Maschinen und Maschinenteile: fertigungsgerechte Lösungen von der H.H. Niesing GmbH, Gronau-Epe.',
    img: planung,
    alt: 'Messschraube und Taschenrechner auf einer technischen Zeichnung',
    intro: [
      'Gute Teile entstehen schon bei der Planung. Wir beraten Sie, wie sich Ihre Maschine oder Ihr Bauteil zuverlässig und wirtschaftlich fertigen lässt.',
      'Dabei bringen wir die Erfahrung aus der Werkstatt ein: Werkstoff, Toleranzen und Bearbeitung so, dass es passt.',
    ],
    punkte: [
      'Fertigungsgerechte Konstruktion',
      'Wahl von Werkstoff und Bearbeitung',
      'Machbarkeit und Kosten früh klären',
      'Persönliche Beratung vor Ort oder telefonisch',
    ],
    anfrage: 'Planung / Beratung',
  },
  {
    slug: 'service-montage',
    title: 'Service und Montage',
    short: 'Die Montage von Ersatzteilen gehört ebenso wie Serviceleistungen zu unseren professionellen Leistungen.',
    description: 'Service und Montage von Ersatzteilen und Baugruppen: zuverlässiger Partner aus dem Münsterland – H.H. Niesing GmbH.',
    img: service,
    alt: 'Gedrehte Präzisionsteile auf technischen Zeichnungen',
    intro: [
      'Wir liefern nicht nur das Teil, sondern bauen es auf Wunsch auch ein. So haben Sie einen Ansprechpartner von der Fertigung bis zur Montage.',
    ],
    punkte: [
      'Montage von Ersatzteilen',
      'Montage von Baugruppen',
      'Serviceleistungen an Maschinen',
      'Alles aus einer Hand',
    ],
    anfrage: 'Service / Montage',
  },
];
