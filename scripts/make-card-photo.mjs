import sharp from "sharp"

// Quelle: hochauflösendes Original (4000x6000, Porträt). Gesicht im oberen Drittel.
// Quadrat-Crop zentriert auf Gesicht/Oberkörper, dann auf 640px für den runden Kartenkreis.
const SRC = `${process.env.HOME}/Desktop/HQ4A3715 Kopie.jpg`

await sharp(SRC)
  .extract({ left: 500, top: 600, width: 3000, height: 3000 })
  .resize(640, 640)
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile("public/tim/tim-foto.jpg")

console.log("tim-foto.jpg geschrieben")
