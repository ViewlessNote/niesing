# hhniesing.de

Statische Website der H.H. Niesing GmbH (Ersatz für die bisherige WordPress-Seite).

- **Astro** erzeugt beim Build reines HTML/CSS + optimierte Bilder (WebP) – kein JavaScript, kein PHP, keine Datenbank, kein Login.
- **nginx (unprivilegiert, read-only Container)** liefert die Dateien aus, mit strikten Sicherheits-Headern (CSP, HSTS, …).
- Schriften (Jost, Roboto) liegen lokal → keine Verbindung zu Google.

## Entwickeln
    npm install
    npm run dev        # http://localhost:4321

## Inhalte ändern
- Texte: `src/pages/*.astro`
- Leistungen (Startseiten-Kacheln + Unterseiten `/leistungen/…/`): `src/data/leistungen.ts`
- Maschinenpark (Maschinen, Kennwerte, Möglichkeiten): `src/data/maschinen.ts`
- Neue Seite? Zusätzlich in `src/pages/sitemap.xml.ts` eintragen.
- Firmendaten (Adresse, Telefon, E-Mail): `src/data/site.ts`
- Bilder: `src/assets/img/`
- Farben/Layout: `src/styles/global.css`

## Betrieb
    docker compose up -d --build   # lauscht auf 127.0.0.1:8080

Davor einen Reverse-Proxy mit HTTPS setzen (z. B. Caddy: `hhniesing.de { reverse_proxy 127.0.0.1:8080 }`).
Alte WordPress-URLs (/contact/, /elementor-3488/, /elementor-3475/) werden per 301 umgeleitet.

## Vor dem Livegang offen
- Impressum: Handelsregister-Nr., Registergericht und USt-IdNr. sind Platzhalter von der alten Seite.
- Datenschutz: Hosting-Anbieter eintragen; Text rechtlich prüfen lassen.
- Maschinenpark: genaue Maschinentypen und Kennwerte in `src/data/maschinen.ts` eintragen (fehlende Werte erscheinen live als „auf Anfrage“, in `npm run dev` gelb markiert). Werkstoffe und Toleranzen bestätigen lassen.
- Texte der Leistungs-Unterseiten von H.H. Niesing gegenlesen lassen (z. B. „Nachfertigung ohne Zeichnung“, „Reparatur“).
- Nach dem Livegang: Domain in der Google Search Console anmelden und `https://hhniesing.de/sitemap.xml` einreichen.
