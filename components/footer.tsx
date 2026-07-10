import Link from "next/link"

/**
 * Footer in Markenfarben (identisch zur Startseite), für die Rechtsseiten.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <svg className="mark" viewBox="179 315 665 393" aria-hidden="true">
                <g transform="translate(215.04,647.03) scale(0.192894,-0.192894)">
                  <path d="M1251 3Q1251 -12 1249.0 -17.0Q1247 -22 1241 -22Q1229 -22 1198.0 -6.5Q1167 9 1128.5 30.5Q1090 52 1054.0 67.5Q1018 83 997 83Q987 83 964.0 67.5Q941 52 904.5 31.5Q868 11 816.5 -4.5Q765 -20 697 -20Q555 -20 437.0 30.0Q319 80 233.5 171.5Q148 263 101.0 388.5Q54 514 54 665Q54 835 104.5 973.5Q155 1112 248.5 1212.0Q342 1312 471.0 1366.0Q600 1420 757 1420Q840 1420 895.5 1398.5Q951 1377 983.0 1355.0Q1015 1333 1024 1333Q1042 1333 1073.5 1354.5Q1105 1376 1135.0 1397.5Q1165 1419 1178 1419Q1181 1419 1183.0 1416.5Q1185 1414 1187 1402L1260 964Q1262 958 1261.5 955.0Q1261 952 1258 950Q1256 949 1253.0 950.0Q1250 951 1246 956Q1183 1118 1105.5 1216.0Q1028 1314 942.0 1358.5Q856 1403 763 1403Q643 1403 552.0 1326.5Q461 1250 409.5 1098.5Q358 947 358 719Q358 499 415.5 343.0Q473 187 568.0 104.0Q663 21 776 21Q808 21 843.5 31.5Q879 42 910.5 61.0Q942 80 962.0 107.0Q982 134 982 166V558Q982 570 972.5 576.5Q963 583 942 585L830 598Q823 599 820.0 601.0Q817 603 817 605Q817 608 819.5 610.0Q822 612 827 612H1339Q1344 612 1346.5 610.0Q1349 608 1349 605Q1349 603 1346.0 601.0Q1343 599 1336 598L1278 585Q1264 582 1257.5 576.0Q1251 570 1251 558Z" transform="translate(-54.0,0)" fill="#FAF7F1" />
                  <rect x="1520.0" y="-210.0" width="150.0" height="1820.0" fill="#D49A2A" />
                  <path d="M1232 870Q1232 735 1169.0 635.0Q1106 535 995.0 480.5Q884 426 738 426Q626 426 545.0 451.5Q464 477 397 527L401 542Q447 510 488.5 491.0Q530 472 570.0 464.0Q610 456 649 456Q731 456 798.0 505.0Q865 554 904.5 648.0Q944 742 944 876Q944 1038 895.5 1151.0Q847 1264 763.0 1322.5Q679 1381 573 1381H493V56Q493 44 502.0 37.5Q511 31 530 27L613 14Q618 13 620.5 11.5Q623 10 623 7Q623 4 621.0 2.0Q619 0 614 0H78Q73 0 70.5 2.0Q68 4 68 7Q68 12 79 14L163 28Q181 31 189.5 37.5Q198 44 198 54V1341Q198 1354 189.5 1362.0Q181 1370 164 1372L77 1386Q68 1388 68 1393Q68 1397 70.0 1398.5Q72 1400 77 1400H573Q770 1400 918.0 1334.0Q1066 1268 1149.0 1148.5Q1232 1029 1232 870Z" transform="translate(1847.0,0)" fill="#FAF7F1" />
                </g>
              </svg>
              <span>Goebel & Partner</span>
            </Link>
            <p className="footer-claim">
              Struktur, Automatisierung und KI für Hausverwaltungen — innerhalb der Software,
              die Sie bereits nutzen. Ohne Systemwechsel.
            </p>
          </div>

          <div>
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/#methode">Methode</Link></li>
              <li><Link href="/#loesung">Lösung</Link></li>
              <li><Link href="/#ablauf">Ablauf</Link></li>
              <li><Link href="/#ueber-mich">Über mich</Link></li>
              <li><Link href="/#buchung">Analyse buchen</Link></li>
            </ul>
          </div>

          <div>
            <h4>Kontakt & Recht</h4>
            <ul>
              <li>Goebel & Partner Consulting</li>
              <li><a href="mailto:tim@goebel-partner.de">tim@goebel-partner.de</a></li>
              <li><a href="tel:+491726932222">0172 - 693 22 22</a></li>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Goebel & Partner Consulting</span>
          <span>DSGVO-konform · EU-Hosting · AVV · <a href="#" className="js-cookie-settings">Cookie-Einstellungen</a></span>
        </div>
      </div>
    </footer>
  )
}
