import type { Metadata } from "next"
import { ProzessCheck } from "./check"

export const metadata: Metadata = {
  title: "Prozess-Check für Hausverwaltungen — was kostet Sie ein Routineprozess? | Goebel & Partner",
  description:
    "In vier Minuten sehen Sie, wie viel Arbeitszeit ein einzelner Routineprozess in Ihrer Verwaltung pro Jahr bindet. Acht Fragen, nachvollziehbare Rechnung, keine Registrierung.",
  alternates: { canonical: "/prozess-check" },
}

export default function ProzessCheckPage() {
  return <ProzessCheck />
}
