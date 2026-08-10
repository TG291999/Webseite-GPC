"use client"

/**
 * Prozess-Check — interaktiver Leadmagnet.
 *
 * Ablauf: Start → 7 Auswahlfragen → Betriebsgrößen → Rechnung.
 * Die Stundenzahl ist sofort sichtbar; nur die Euro-Summe ist bis zur
 * E-Mail-Angabe geblurrt (Leadmagnet-Gate mit minimaler Hürde:
 * ein Feld, Ergebnis erscheint sofort auf dem Bildschirm).
 * Ohne webhookURL läuft der Check im Testbetrieb (console.log).
 */

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

const CONFIG = {
  // Eigene API-Route: mailt den Lead an tim@goebel-partner.de (RESEND_API_KEY nötig)
  // und reicht ihn optional an Make/Close weiter (MAKE_WEBHOOK_URL). Siehe app/api/prozess-check/route.ts.
  webhookURL: "/api/prozess-check",
  stundensatz: 38,
  stundensatzVerband: 65,
  automatisierbar: 0.4,
  jahresstundenMA: 1600,
  einheitenProMA: 330,
  terminLink: "https://zcal.co/i/1v-apJ3U",
  datenschutzLink: "/datenschutz",
}

type Bereich = {
  kurz: string
  lang: string
  mehrzahl: string
  fragehaeufig: string
  fragezeit: string
}

const BEREICHE: Record<string, Bereich> = {
  mahn: {
    kurz: "Mahnwesen",
    lang: "Mahnwesen und Zahlungsverkehr",
    mehrzahl: "Mahnvorgänge",
    fragehaeufig: "Wie viele Mahnvorgänge laufen bei Ihnen in einer normalen Woche durch?",
    fragezeit: "Wie lange dauert ein einzelner Mahnvorgang – von der Prüfung bis zum Versand?",
  },
  mail: {
    kurz: "Anfragen",
    lang: "Anfragen von Eigentümern und Mietern",
    mehrzahl: "Anfragen",
    fragehaeufig: "Wie viele Anfragen von Eigentümern oder Mietern beantworten Sie in einer normalen Woche?",
    fragezeit: "Wie lange dauert eine durchschnittliche Anfrage – vom Lesen bis zur fertigen Antwort?",
  },
  beleg: {
    kurz: "Belege",
    lang: "Rechnungs- und Belegdurchlauf",
    mehrzahl: "Belege",
    fragehaeufig: "Wie viele Eingangsrechnungen laufen bei Ihnen in einer normalen Woche durch?",
    fragezeit: "Wie lange dauert ein Beleg im Schnitt – vom Eingang bis zur Buchung?",
  },
  schaden: {
    kurz: "Schäden",
    lang: "Schadensmeldungen und Handwerkerkoordination",
    mehrzahl: "Schadensfälle",
    fragehaeufig: "Wie viele Schadensmeldungen bearbeiten Sie in einer normalen Woche?",
    fragezeit: "Wie lange dauert ein Schadensfall im Schnitt – von der Meldung bis zur Beauftragung?",
  },
}

type Frage = {
  nr: number
  schluessel: string
  frage: string | ((b: Bereich | null) => string)
  hilfe: string
  optionen: Array<[string, string]>
  einheit?: (b: Bereich | null) => string
  echoNach?: (wert: string) => string
}

const FRAGEN: Frage[] = [
  {
    nr: 1,
    schluessel: "staerke",
    frage: "Was läuft bei Ihnen schon besser als bei den meisten Verwaltungen, die Sie kennen?",
    hilfe: "Ehrliche Antwort, keine falsche Bescheidenheit.",
    optionen: [
      ["Erreichbarkeit für Eigentümer und Mieter", "erreichbarkeit"],
      ["Abrechnungen sind pünktlich draußen", "abrechnung"],
      ["Belege liegen digital und geordnet vor", "belege"],
      ["Das Team arbeitet eingespielt zusammen", "team"],
      ["Ehrlich gesagt: aktuell nichts davon", "nichts"],
    ],
  },
  {
    nr: 2,
    schluessel: "bereich",
    frage: "Welcher dieser Abläufe frisst bei Ihnen die meiste Zeit?",
    hilfe: "Wählen Sie den, bei dem Sie am ehesten sagen würden: „Das nervt jede Woche.“",
    optionen: [
      ["Mahnwesen und Zahlungsverkehr", "mahn"],
      ["Anfragen von Eigentümern und Mietern", "mail"],
      ["Rechnungs- und Belegdurchlauf", "beleg"],
      ["Schadensmeldungen und Handwerkerkoordination", "schaden"],
    ],
    echoNach: () =>
      "Alles Weitere dreht sich nur um diesen einen Ablauf. Die anderen lasse ich außen vor.",
  },
  {
    nr: 3,
    schluessel: "haeufigkeit",
    frage: (b) => b?.fragehaeufig ?? "",
    hilfe: "Schätzen reicht. Eine normale Woche, kein Ausnahmemonat.",
    optionen: [
      ["Bis 10", "5"],
      ["11 bis 25", "18"],
      ["26 bis 50", "38"],
      ["51 bis 100", "75"],
      ["Mehr als 100", "140"],
    ],
    einheit: (b) => `${b?.mehrzahl ?? ""} / Woche`,
  },
  {
    nr: 4,
    schluessel: "dauer",
    frage: (b) => b?.fragezeit ?? "",
    hilfe: "Bitte die Gesamtzeit über alle Beteiligten hinweg – inklusive Nachfragen und Nacharbeit.",
    optionen: [
      ["Unter 5 Minuten", "4"],
      ["5 bis 10 Minuten", "7"],
      ["10 bis 20 Minuten", "15"],
      ["20 bis 45 Minuten", "32"],
      ["Über 45 Minuten", "60"],
    ],
    einheit: () => "Minuten",
    echoNach: () => "Damit stehen die beiden Werte, aus denen die Rechnung entsteht.",
  },
  {
    nr: 5,
    schluessel: "beteiligte",
    frage: "Wie viele Personen fassen einen einzelnen Vorgang an, bis er erledigt ist?",
    hilfe: "Jede Weitergabe zählt – auch die kurze Rückfrage im Nachbarbüro.",
    optionen: [
      ["Eine Person macht alles", "1"],
      ["Zwei Personen", "2"],
      ["Drei oder mehr", "3"],
      ["Unterschiedlich, je nach Fall", "x"],
    ],
  },
  {
    nr: 6,
    schluessel: "nacharbeit",
    frage: "Wie oft kommt ein Vorgang zurück, weil etwas fehlt oder unklar ist?",
    hilfe: "Rückläufer sind der Punkt, an dem aus zehn Minuten dreißig werden.",
    optionen: [
      ["Selten, das läuft sauber durch", "selten"],
      ["Bei jedem vierten oder fünften", "gelegentlich"],
      ["Bei etwa jedem zweiten", "oft"],
      ["Fast immer", "immer"],
    ],
    echoNach: (w) =>
      w === "oft" || w === "immer"
        ? "Notiert. Rückläufer stecken bereits in Ihrer Zeitangabe – ich rechne sie nicht zusätzlich obendrauf."
        : "",
  },
  {
    nr: 7,
    schluessel: "wunsch",
    frage: "Wenn morgen früh eine dieser Aufgaben einfach weg wäre – welche?",
    hilfe: "Nicht die wichtigste. Die, über die Sie sich am häufigsten ärgern.",
    optionen: [
      ["Mahnläufe vorbereiten und versenden", "mahnlauf"],
      ["Standardanfragen beantworten", "standardmails"],
      ["Rechnungen erfassen und zuordnen", "rechnungen"],
      ["Handwerker koordinieren und nachhalten", "handwerker"],
      ["Termine und Fristen im Blick behalten", "fristen"],
    ],
  },
]

const GESAMT = 8 // 7 Auswahlfragen + Betriebsgrößen

const zahl = (n: number, d = 0) =>
  n.toLocaleString("de-DE", { minimumFractionDigits: d, maximumFractionDigits: d })

/* Tippfehler-Vorschlag für gängige Mail-Domains — wird nur gezeigt, wenn die
   DNS-Prüfung die eingegebene Domain bereits abgelehnt hat (keine falschen
   Alarme bei echten Firmen-Domains). */
const BEKANNTE_DOMAINS = [
  "gmail.com", "googlemail.com", "web.de", "gmx.de", "gmx.net", "t-online.de",
  "outlook.com", "outlook.de", "hotmail.com", "hotmail.de", "yahoo.com",
  "yahoo.de", "icloud.com", "freenet.de", "aol.com", "magenta.de",
]

function editierDistanz(a: string, b: string): number {
  const m = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)])
  for (let j = 1; j <= b.length; j++) m[0][j] = j
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      m[i][j] = Math.min(
        m[i - 1][j] + 1,
        m[i][j - 1] + 1,
        m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      )
  return m[a.length][b.length]
}

function tippfehlerVorschlag(email: string): string | null {
  const [lokal, domain] = email.toLowerCase().split("@")
  if (!lokal || !domain || BEKANNTE_DOMAINS.includes(domain)) return null
  let bester: string | null = null
  let besteDistanz = 3
  for (const kandidat of BEKANNTE_DOMAINS) {
    const d = editierDistanz(domain, kandidat)
    if (d < besteDistanz) {
      besteDistanz = d
      bester = kandidat
    }
  }
  return bester ? `${lokal}@${bester}` : null
}

function rechnen(antworten: Record<string, string>, satz: number) {
  const A = parseFloat(antworten.haeufigkeit)
  const B = parseFloat(antworten.dauer)
  const stundenJahr = A * 52 * (B / 60)
  const entlastung = stundenJahr * CONFIG.automatisierbar
  return {
    A,
    B,
    stundenJahr,
    entlastung,
    euro: entlastung * satz,
    einheiten: (entlastung / CONFIG.jahresstundenMA) * CONFIG.einheitenProMA,
  }
}

/* ---------- Funnel-Messung ----------
   Macht sichtbar, an welcher Frage jemand aussteigt — ohne URL-Wechsel sieht
   das sonst kein Analytics-Werkzeug. Die Sitzungs-ID lebt ausschließlich im
   Arbeitsspeicher: kein Cookie, kein localStorage, damit keine Einwilligung
   nach § 25 TTDSG nötig ist. Ein Reload zählt deshalb als neue Sitzung — das
   ist der Preis für die Einwilligungsfreiheit. Übertragen werden Schritt,
   Antwortoption und Zeiten, niemals E-Mail-Adresse, Name oder Telefonnummer. */

const FUNNEL_URL = "/api/prozess-check/ereignis"

function neueSitzungsId(): string {
  try {
    return crypto.randomUUID()
  } catch {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
  }
}

export function ProzessCheck() {
  // step: 0 = Start, 1–7 = Auswahlfragen, 8 = Betrieb, 9 = Ergebnis
  const [step, setStep] = useState(0)
  const [antworten, setAntworten] = useState<Record<string, string>>({})
  const [echo, setEcho] = useState("")
  const [warnung, setWarnung] = useState("")
  const [freigegeben, setFreigegeben] = useState(false)
  const [satz, setSatz] = useState(CONFIG.stundensatz)
  const [nachtragOk, setNachtragOk] = useState(false)
  const [prueft, setPrueft] = useState(false)
  const [vorschlag, setVorschlag] = useState("")
  const emailRef = useRef<HTMLInputElement>(null)
  const calRef = useRef<HTMLDivElement>(null)

  const sitzung = useRef("")
  const startZeit = useRef(0)
  const frageZeit = useRef(0)
  const schrittRef = useRef(0)

  const bereich = antworten.bereich ? BEREICHE[antworten.bereich] : null

  const melden = useCallback(
    (typ: string, felder: Record<string, unknown> = {}, beimVerlassen = false) => {
      if (!sitzung.current) return
      const nutzlast = JSON.stringify({
        sitzung: sitzung.current,
        typ,
        schritt: schrittRef.current,
        ms_gesamt: Date.now() - startZeit.current,
        ...felder,
      })
      if (beimVerlassen && typeof navigator.sendBeacon === "function") {
        navigator.sendBeacon(FUNNEL_URL, new Blob([nutzlast], { type: "application/json" }))
        return
      }
      /* keepalive lässt die Übertragung einen sofortigen Seitenwechsel
         überleben. Fehler werden geschluckt: Die Messung darf den Check unter
         keinen Umständen stören. */
      fetch(FUNNEL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: nutzlast,
        keepalive: true,
      }).catch(() => {})
    },
    []
  )

  useEffect(() => {
    sitzung.current = neueSitzungsId()
    startZeit.current = Date.now()
    frageZeit.current = Date.now()

    const parameter = new URLSearchParams(window.location.search)
    let verweis = ""
    try {
      verweis = document.referrer ? new URL(document.referrer).hostname : ""
    } catch {
      verweis = ""
    }
    melden("aufruf", {
      quelle: parameter.get("q") ?? parameter.get("utm_source") ?? "",
      kampagne: parameter.get("utm_campaign") ?? "",
      verweis,
      geraet: window.matchMedia("(max-width: 760px)").matches ? "mobil" : "desktop",
    })

    /* pagehide statt beforeunload — feuert zuverlässig auch auf iOS. */
    const beimVerlassen = () => melden("verlassen", {}, true)
    window.addEventListener("pagehide", beimVerlassen)
    return () => window.removeEventListener("pagehide", beimVerlassen)
  }, [melden])

  useEffect(() => {
    schrittRef.current = step
    frageZeit.current = Date.now()
    if (step > 0) melden("schritt")
  }, [step, melden])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
    setWarnung("")
    if (step === 9 && !freigegeben) {
      const t = setTimeout(() => emailRef.current?.focus({ preventScroll: true }), 300)
      return () => clearTimeout(t)
    }
  }, [step, freigegeben])

  /* zcal-Kalender erst nach der Freischaltung aufbauen. Das Widget-Markup wird
     imperativ in ein leeres, von React nicht verwaltetes Div gesetzt — sonst
     räumt Reacts Re-Render (z. B. beim Stundensatz-Wechsel) das vom
     Embed-Script injizierte iframe wieder weg. */
  useEffect(() => {
    if (!freigegeben || !calRef.current) return
    calRef.current.innerHTML = `<div class="zcal-inline-widget"><a href="${CONFIG.terminLink}">Automatisierungs-Analyse — Termin auswählen</a></div>`
    const script = document.createElement("script")
    script.src = "https://static.zcal.co/embed/v1/embed.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      script.remove()
    }
  }, [freigegeben])

  const senden = (anlass: string, extra: Record<string, string> = {}) => {
    const r = rechnen(antworten, CONFIG.stundensatz)
    const nutzlast = {
      ...antworten,
      ...extra,
      anlass,
      bereich_lang: bereich?.lang,
      stunden_jahr: Math.round(r.stundenJahr),
      entlastung_stunden: Math.round(r.entlastung),
      euro: Math.round(r.euro),
      einheiten_kapazitaet: Math.round(r.einheiten),
      awareness_stufe: 2,
      quelle: "prozess-check",
      zeitpunkt: new Date().toISOString(),
    }
    if (!CONFIG.webhookURL) {
      console.log("Testbetrieb, kein Webhook gesetzt:", nutzlast)
      return
    }
    fetch(CONFIG.webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nutzlast),
    }).catch((e) => console.warn("Übertragung fehlgeschlagen:", e))
  }

  const waehlen = (frage: Frage, wert: string) => {
    const gewaehlt = frage.optionen.find((o) => o[1] === wert)
    melden("antwort", {
      frage: frage.schluessel,
      frage_nr: frage.nr,
      antwort: wert,
      antwort_text: gewaehlt?.[0] ?? "",
      ms_frage: Date.now() - frageZeit.current,
    })
    setAntworten((a) => ({ ...a, [frage.schluessel]: wert }))
    setEcho(frage.echoNach ? frage.echoNach(wert) : "")
    setStep((s) => s + 1)
  }

  const zurueck = () => {
    // Ein Rücksprung ist ein Zweifel-Signal — genauso interessant wie ein Abbruch.
    melden("zurueck")
    setEcho("")
    setStep((s) => Math.max(0, s - 1))
  }

  const betriebWeiter = () => {
    const einheiten = (document.getElementById("pcEinheiten") as HTMLSelectElement).value
    const mitarbeiter = (document.getElementById("pcMitarbeiter") as HTMLSelectElement).value
    const software = (document.getElementById("pcSoftware") as HTMLInputElement).value.trim()
    if (!einheiten || !mitarbeiter) {
      melden("betrieb_unvollstaendig")
      setWarnung("Bitte Einheiten und Mitarbeitende auswählen.")
      return
    }
    melden("betrieb", {
      einheiten,
      mitarbeiter,
      software,
      ms_frage: Date.now() - frageZeit.current,
    })
    setAntworten((a) => ({ ...a, einheiten, mitarbeiter, software }))
    setEcho("")
    setStep(9)
  }

  const freischalten = async () => {
    const wert = emailRef.current?.value.trim() ?? ""
    if (!/.+@.+\..+/.test(wert)) {
      melden("mail_ungueltig")
      setWarnung("Bitte eine gültige E-Mail-Adresse eintragen – sonst kommt die Rechnung nicht an.")
      emailRef.current?.focus()
      return
    }
    melden("mail_versuch", { ms_frage: Date.now() - frageZeit.current })
    setWarnung("")
    setVorschlag("")
    setPrueft(true)
    /* Stille Echtheitsprüfung (DNS/MX). Bei Infrastrukturfehlern: durchlassen —
       lieber ein zweifelhafter Lead als ein verlorener echter. */
    let ok = true
    let grund = ""
    try {
      const antwort = await fetch("/api/prozess-check/mail-pruefung", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: wert }),
      })
      const d = await antwort.json()
      ok = d.ok !== false
      grund = d.grund ?? ""
    } catch {
      ok = true
    }
    setPrueft(false)
    if (!ok) {
      melden("mail_abgelehnt", { grund: grund || "unbekannt" })
      if (grund === "wegwerf") {
        setWarnung("Wegwerf-Adressen funktionieren hier nicht — Ihre Auswertung ginge ins Leere.")
      } else {
        const v = tippfehlerVorschlag(wert)
        if (v) setVorschlag(v)
        setWarnung("Diese Adresse scheint es nicht zu geben — bitte prüfen Sie die Schreibweise.")
      }
      emailRef.current?.focus()
      return
    }
    setAntworten((a) => ({ ...a, email: wert }))
    setFreigegeben(true)
    melden("freigabe")
    senden("freigabe", { email: wert })
  }

  const vorschlagUebernehmen = () => {
    if (emailRef.current) emailRef.current.value = vorschlag
    setVorschlag("")
    setWarnung("")
    void freischalten()
  }

  const nachtragSpeichern = () => {
    const name = (document.getElementById("pcName") as HTMLInputElement).value.trim()
    const telefon = (document.getElementById("pcTelefon") as HTMLInputElement).value.trim()
    setAntworten((a) => ({ ...a, name, telefon }))
    // Nur ob eine Nummer da ist, nie die Nummer selbst.
    melden("nachtrag", { zusatz: telefon ? "mit-telefon" : "ohne-telefon" })
    senden("nachtrag", { name, telefon })
    setNachtragOk(true)
  }

  const fortschritt = step === 0 ? 0 : step >= 9 ? 100 : ((step - 1) / GESAMT) * 100
  const schrittText =
    step === 0
      ? "Prozess-Check"
      : step >= 9
        ? freigegeben
          ? "Ihre Auswertung"
          : "Rechnung erstellt"
        : `Frage ${step} von ${GESAMT}`

  const r = step === 9 ? rechnen(antworten, satz) : null

  return (
    <div className="pc-wrap">
      <header className="pc-header">
        <Link className="pc-mark" href="/" aria-label="Zur Startseite">
          G<span>|</span>P
        </Link>
        <div className="pc-schritt">{schrittText}</div>
      </header>
      <div className="pc-balken" role="progressbar" aria-valuenow={Math.round(fortschritt)} aria-valuemin={0} aria-valuemax={100}>
        <i style={{ width: `${fortschritt}%` }} />
      </div>

      <main className="pc-main">
        {/* ---------- Start ---------- */}
        {step === 0 && (
          <div className="pc-karte" key="start">
            <div className="pc-eyebrow">Prozess-Check für Hausverwaltungen</div>
            <h1 className="pc-h1">Was kostet Sie ein einziger Routineprozess im Jahr?</h1>
            <p className="pc-lead">
              Acht Fragen zu einem Ablauf, den Sie jede Woche haben. Daraus entsteht eine Rechnung
              – mit jeder Zeile offen, damit Sie sie selbst nachprüfen können.
            </p>
            <p className="pc-hilfe">Etwa vier Minuten · kostenlos · kein Login, keine Registrierung.</p>
            <div className="pc-leiste">
              <button className="btn btn-primary" onClick={() => setStep(1)}>
                Check starten <span className="arrow">→</span>
              </button>
            </div>
            <div className="pc-absender">
              <div className="pc-initialen">TG</div>
              <div>
                <b>Tim Goebel</b>
                <span>
                  Goebel &amp; Partner Consulting, Dortmund. Gelernter Immobilienkaufmann, über acht
                  Jahre in der Branche.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ---------- Auswahlfragen 1–7 ---------- */}
        {step >= 1 && step <= 7 && (() => {
          const f = FRAGEN[step - 1]
          const frageText = typeof f.frage === "function" ? f.frage(bereich) : f.frage
          const marken = "ABCDE"
          return (
            <div className="pc-karte" key={`f${step}`}>
              {echo && <div className="pc-echo">{echo}</div>}
              <div className="pc-eyebrow">Frage {f.nr}</div>
              <h2 className="pc-h2">{frageText}</h2>
              <p className="pc-hilfe">{f.hilfe}</p>
              <div className="pc-optionen">
                {f.optionen.map((o, i) => (
                  <button
                    key={o[1]}
                    className={`pc-opt${antworten[f.schluessel] === o[1] ? " aktiv" : ""}`}
                    onClick={() => waehlen(f, o[1])}
                  >
                    <span className="pc-kuerzel">{marken[i]}</span>
                    <span>{o[0]}</span>
                    {f.einheit && <span className="pc-zusatz">{f.einheit(bereich)}</span>}
                  </button>
                ))}
              </div>
              <div className="pc-leiste">
                <button className="pc-zurueck" onClick={zurueck}>
                  Zurück
                </button>
              </div>
            </div>
          )
        })()}

        {/* ---------- Betrieb ---------- */}
        {step === 8 && (
          <div className="pc-karte" key="betrieb">
            <div className="pc-eyebrow">Frage 8</div>
            <h2 className="pc-h2">Zum Schluss kurz zu Ihrer Verwaltung.</h2>
            <p className="pc-hilfe">
              Damit ich Ihre Zahlen richtig einordnen kann — eine Verwaltung mit 800 Einheiten
              braucht andere Antworten als eine mit 5.000.
            </p>
            <div className="pc-zweispalt">
              <label className="pc-feld">
                <span>Verwaltete Einheiten</span>
                <select id="pcEinheiten" defaultValue={antworten.einheiten ?? ""}>
                  <option value="">bitte wählen</option>
                  <option value="250">unter 500</option>
                  <option value="750">500 bis 1.000</option>
                  <option value="1750">1.000 bis 2.500</option>
                  <option value="3750">2.500 bis 5.000</option>
                  <option value="7000">über 5.000</option>
                </select>
              </label>
              <label className="pc-feld">
                <span>Mitarbeitende</span>
                <select id="pcMitarbeiter" defaultValue={antworten.mitarbeiter ?? ""}>
                  <option value="">bitte wählen</option>
                  <option value="2">bis 2</option>
                  <option value="4">3 bis 5</option>
                  <option value="8">6 bis 10</option>
                  <option value="15">11 bis 20</option>
                  <option value="30">über 20</option>
                </select>
              </label>
            </div>
            <label className="pc-feld">
              <span>Verwaltungssoftware &nbsp;·&nbsp; freiwillig</span>
              <input
                id="pcSoftware"
                type="text"
                placeholder="z. B. Domus, Immoware24, GFAD, Haufe …"
                autoComplete="off"
                defaultValue={antworten.software ?? ""}
              />
            </label>
            {warnung && <p className="pc-warn">{warnung}</p>}
            <div className="pc-leiste">
              <button className="btn btn-primary" onClick={betriebWeiter}>
                Rechnung erstellen <span className="arrow">→</span>
              </button>
              <button className="pc-zurueck" onClick={zurueck}>
                Zurück
              </button>
            </div>
          </div>
        )}

        {/* ---------- Ergebnis ---------- */}
        {step === 9 && r && bereich && (
          <div className="pc-karte" key="ergebnis">
            <div className="pc-eyebrow">Auswertung · {bereich.lang}</div>
            {freigegeben ? (
              <>
                <h1 className="pc-h1">Diese Rechnung haben Sie bereits bezahlt.</h1>
                <p className="pc-lead" style={{ marginBottom: 28 }}>
                  Nicht in Geld. In Arbeitszeit, die im Haus war und für etwas anderes gefehlt hat.
                </p>
              </>
            ) : (
              <>
                <h1 className="pc-h1">Ihre Rechnung steht.</h1>
                <p className="pc-lead" style={{ marginBottom: 28 }}>
                  {zahl(r.stundenJahr)} Stunden pro Jahr gehen allein für{" "}
                  {bereich.lang} durch Ihr Büro. Was das in Euro bedeutet, steht unten – ich gebe es
                  Ihnen gleich frei.
                </p>
              </>
            )}

            <div className="pc-rechnung">
              <div className="pc-rkopf">
                <b>{bereich.lang}</b>
                <em>Zeitraum: 12 Monate</em>
              </div>
              <div className="pc-zeile">
                <span>{bereich.mehrzahl} pro Woche</span>
                <b>{zahl(r.A)}</b>
              </div>
              <div className="pc-zeile">
                <span>Wochen pro Jahr</span>
                <b>52</b>
              </div>
              <div className="pc-zeile">
                <span>Bearbeitungszeit je Vorgang</span>
                <b>{zahl(r.B)} min</b>
              </div>
              <div className="pc-zeile pc-zwischen">
                <span>Arbeitszeit im Jahr</span>
                <b>{zahl(r.stundenJahr)} Stunden</b>
              </div>
              <div className="pc-zeile">
                <span>davon realistisch entlastbar ({Math.round(CONFIG.automatisierbar * 100)} %)</span>
                <b>{zahl(r.entlastung)} Stunden</b>
              </div>
              <div className="pc-zeile">
                <span>Stundensatz</span>
                <b>{zahl(satz)} €</b>
              </div>

              <div className="pc-summe">
                <div className="pc-beschriftung">Gebundene Arbeitszeit, in Euro</div>
                <div className={`pc-betrag${freigegeben ? "" : " pc-gesperrt"}`}>
                  {zahl(r.euro)} €
                </div>
              </div>

              {freigegeben ? (
                <div className="pc-stempel">
                  Das entspricht rund {zahl(r.einheiten)} Einheiten, die Ihr heutiges Team
                  zusätzlich betreuen könnte.
                  <small>
                    Gerechnet mit {zahl(CONFIG.jahresstundenMA)} produktiven Jahresstunden und{" "}
                    {CONFIG.einheitenProMA} Einheiten je Mitarbeitendem (DDIV-Strukturerhebung,
                    mittlere Verwaltungen). Freie Kapazität wird erst zu Umsatz, wenn Sie sie
                    füllen.
                  </small>
                </div>
              ) : (
                <div className="pc-freigabe">
                  <div className="pc-siegel">Noch gesperrt</div>
                  <p>
                    Die Summe ist berechnet. Sagen Sie mir, wohin die fertige Rechnung darf – dann
                    steht sie eine Sekunde später hier auf dem Bildschirm.
                  </p>
                  <div className="pc-eingabezeile">
                    <input
                      ref={emailRef}
                      id="pcEmail"
                      type="email"
                      placeholder="ihre@adresse.de"
                      autoComplete="email"
                      inputMode="email"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") void freischalten()
                      }}
                    />
                    <button className="btn btn-primary" onClick={() => void freischalten()} disabled={prueft}>
                      {prueft ? "Einen Moment …" : "Summe anzeigen"}
                    </button>
                  </div>
                  {warnung && <p className="pc-warn">{warnung}</p>}
                  {vorschlag && (
                    <button type="button" className="pc-vorschlag" onClick={vorschlagUebernehmen}>
                      Meinten Sie <b>{vorschlag}</b>? — übernehmen
                    </button>
                  )}
                  <p className="pc-mikro">
                    Kein Newsletter, keine Weitergabe an Dritte. Ich melde mich einmal dazu – wenn
                    Sie das nicht möchten, genügt ein Wort zurück.{" "}
                    <a href={CONFIG.datenschutzLink}>Datenschutz</a>
                  </p>
                </div>
              )}
            </div>

            {freigegeben && (
              <>
                <div className="pc-schalter" role="group" aria-label="Stundensatz wählen">
                  <button
                    className={satz === CONFIG.stundensatz ? "aktiv" : ""}
                    onClick={() => {
                      melden("stundensatz", { zusatz: String(CONFIG.stundensatz) })
                      setSatz(CONFIG.stundensatz)
                    }}
                  >
                    {CONFIG.stundensatz} € · konservative Rechnung
                  </button>
                  <button
                    className={satz === CONFIG.stundensatzVerband ? "aktiv" : ""}
                    onClick={() => {
                      melden("stundensatz", { zusatz: String(CONFIG.stundensatzVerband) })
                      setSatz(CONFIG.stundensatzVerband)
                    }}
                  >
                    {CONFIG.stundensatzVerband} € · VDIV-Kalkulation
                  </button>
                </div>
                <p className="pc-notiz">
                  Ich rechne mit {CONFIG.stundensatz} €. Ihr Verband rechnet in der
                  Objektkalkulation mit {CONFIG.stundensatzVerband} €. Nehmen Sie den Wert, den Sie
                  für richtig halten.
                </p>

                <div className="pc-nachtrag pc-nachtrag-promoted">
                  {nachtragOk ? (
                    <>
                      <div className="pc-beschriftung">Notiert</div>
                      <p style={{ margin: 0 }}>Danke — ich melde mich in Kürze bei Ihnen.</p>
                    </>
                  ) : (
                    <>
                      <div className="pc-siegel">Freiwillig · 20 Sekunden</div>
                      <h3 className="pc-nachtrag-titel">
                        Lieber ein persönlicher Rückruf zu Ihren Zahlen?
                      </h3>
                      <div className="pc-zweispalt">
                        <label className="pc-feld">
                          <span>Name</span>
                          <input id="pcName" type="text" autoComplete="name" />
                        </label>
                        <label className="pc-feld">
                          <span>Telefon</span>
                          <input id="pcTelefon" type="tel" autoComplete="tel" />
                        </label>
                      </div>
                      <button className="btn btn-primary pc-nachtrag-cta" onClick={nachtragSpeichern}>
                        Rückruf statt Mail <span className="arrow">→</span>
                      </button>
                    </>
                  )}
                </div>

                <div className="pc-block pc-luecke">
                  <h3>Was dieser Check nicht weiß</h3>
                  <ul>
                    <li>
                      <b>Wie Ihre Freigaben laufen.</b>
                      <span>
                        Ob ein Vorgang eine Unterschrift braucht oder drei, verschiebt die Zahl oben
                        in beide Richtungen deutlich.
                      </span>
                    </li>
                    <li>
                      <b>Wie sauber Ihre Stammdaten sind.</b>
                      <span>
                        Automatisierung auf lückenhaften Daten erzeugt Nacharbeit statt Entlastung.
                        Das sieht man erst im System.
                      </span>
                    </li>
                    <li>
                      <b>Was Ihre Software hergibt.</b>
                      <span>
                        Zwei Verwaltungen mit derselben Software haben selten dieselben
                        Schnittstellen. Das entscheidet über den Aufwand.
                      </span>
                    </li>
                  </ul>
                  <p className="pc-luecke-fazit">
                    Deshalb ist die Zahl oben ein Verdacht, kein Befund. Sie sagt Ihnen, ob sich
                    Hinschauen lohnt – nicht, was zu tun ist.
                  </p>
                </div>

                <div className="pc-cal-card">
                  <h3 className="pc-cal-titel">Machen Sie jetzt aus dem Verdacht einen Befund.</h3>
                  {/* zcal-Inline-Kalender direkt auf der Seite — niedrigste Hürde.
                      Wird im Effekt oben imperativ befüllt (außerhalb von React). */}
                  <div className="pc-cal" ref={calRef} />
                  <p className="pc-cal-fallback">
                    Kalender lädt nicht?{" "}
                    <a
                      href={CONFIG.terminLink}
                      target="_blank"
                      rel="noopener"
                      onClick={() => melden("kalender_fallback")}
                    >
                      Termin direkt buchen →
                    </a>
                  </p>
                </div>

                <p className="pc-notiz">
                  Ein Hinweis zur Ehrlichkeit: In dieser Rechnung stecken keine fremden
                  Erfahrungswerte, sondern ausschließlich Ihre eigenen Angaben und die drei
                  Annahmen, die oben offen benannt sind.
                </p>
              </>
            )}
          </div>
        )}
      </main>

      <footer className="pc-footer">
        <span>Goebel &amp; Partner Consulting · Dortmund</span>
        <span>Die Software bleibt. Die Routine geht.</span>
        <Link href="/">Zur Startseite</Link>
      </footer>
    </div>
  )
}
