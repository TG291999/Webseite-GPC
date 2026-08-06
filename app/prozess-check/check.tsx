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
import { useEffect, useRef, useState } from "react"

const CONFIG = {
  webhookURL: "", // Make.com-Webhook. Leer = Testbetrieb, es wird nichts gesendet.
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

export function ProzessCheck() {
  // step: 0 = Start, 1–7 = Auswahlfragen, 8 = Betrieb, 9 = Ergebnis
  const [step, setStep] = useState(0)
  const [antworten, setAntworten] = useState<Record<string, string>>({})
  const [echo, setEcho] = useState("")
  const [warnung, setWarnung] = useState("")
  const [freigegeben, setFreigegeben] = useState(false)
  const [satz, setSatz] = useState(CONFIG.stundensatz)
  const [nachtragOk, setNachtragOk] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null)

  const bereich = antworten.bereich ? BEREICHE[antworten.bereich] : null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
    setWarnung("")
    if (step === 9 && !freigegeben) {
      const t = setTimeout(() => emailRef.current?.focus({ preventScroll: true }), 300)
      return () => clearTimeout(t)
    }
  }, [step, freigegeben])

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
    setAntworten((a) => ({ ...a, [frage.schluessel]: wert }))
    setEcho(frage.echoNach ? frage.echoNach(wert) : "")
    setStep((s) => s + 1)
  }

  const zurueck = () => {
    setEcho("")
    setStep((s) => Math.max(0, s - 1))
  }

  const betriebWeiter = () => {
    const einheiten = (document.getElementById("pcEinheiten") as HTMLSelectElement).value
    const mitarbeiter = (document.getElementById("pcMitarbeiter") as HTMLSelectElement).value
    const software = (document.getElementById("pcSoftware") as HTMLInputElement).value.trim()
    if (!einheiten || !mitarbeiter) {
      setWarnung("Bitte Einheiten und Mitarbeitende auswählen.")
      return
    }
    setAntworten((a) => ({ ...a, einheiten, mitarbeiter, software }))
    setEcho("")
    setStep(9)
  }

  const freischalten = () => {
    const wert = emailRef.current?.value.trim() ?? ""
    if (!/.+@.+\..+/.test(wert)) {
      setWarnung("Bitte eine gültige E-Mail-Adresse eintragen – sonst kommt die Rechnung nicht an.")
      emailRef.current?.focus()
      return
    }
    setWarnung("")
    setAntworten((a) => ({ ...a, email: wert }))
    setFreigegeben(true)
    senden("freigabe", { email: wert })
  }

  const nachtragSpeichern = () => {
    const name = (document.getElementById("pcName") as HTMLInputElement).value.trim()
    const telefon = (document.getElementById("pcTelefon") as HTMLInputElement).value.trim()
    setAntworten((a) => ({ ...a, name, telefon }))
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
              Damit die Rechnung zu Ihrer Größe passt und nicht zu einer gedachten
              Durchschnittsverwaltung.
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
                        if (e.key === "Enter") freischalten()
                      }}
                    />
                    <button className="btn btn-primary" onClick={freischalten}>
                      Summe anzeigen
                    </button>
                  </div>
                  {warnung && <p className="pc-warn">{warnung}</p>}
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
                    onClick={() => setSatz(CONFIG.stundensatz)}
                  >
                    {CONFIG.stundensatz} € · meine Rechnung
                  </button>
                  <button
                    className={satz === CONFIG.stundensatzVerband ? "aktiv" : ""}
                    onClick={() => setSatz(CONFIG.stundensatzVerband)}
                  >
                    {CONFIG.stundensatzVerband} € · VDIV-Kalkulation
                  </button>
                </div>
                <p className="pc-notiz">
                  Ich rechne mit {CONFIG.stundensatz} €. Ihr Verband rechnet in der
                  Objektkalkulation mit {CONFIG.stundensatzVerband} €. Nehmen Sie den Wert, den Sie
                  für richtig halten.
                </p>

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

                <div className="pc-nachtrag">
                  {nachtragOk ? (
                    <>
                      <div className="pc-beschriftung">Notiert</div>
                      <p style={{ margin: 0 }}>Danke. Ich spreche Sie richtig an, wenn ich mich melde.</p>
                    </>
                  ) : (
                    <>
                      <div className="pc-beschriftung">Freiwillig</div>
                      <p>Wie darf ich Sie ansprechen, wenn ich mich melde?</p>
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
                      <button className="pc-nachtrag-btn" onClick={nachtragSpeichern}>
                        Speichern
                      </button>
                    </>
                  )}
                </div>

                <div className="pc-abschluss">
                  <h3>Fünfzehn Minuten, dann wissen Sie mehr</h3>
                  <p>
                    Wir gehen Ihre Antworten kurz gemeinsam durch. Ich sage Ihnen ehrlich, ob sich
                    der Prozess bei Ihrer Größe rechnet – oder ob ein anderer der bessere Einstieg
                    wäre.
                  </p>
                  <a href={CONFIG.terminLink} target="_blank" rel="noopener">
                    Termin aussuchen <span className="arrow">→</span>
                  </a>
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
