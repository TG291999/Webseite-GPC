import sharp from "sharp"

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="#16304E"/>
  <rect x="40" y="96" width="22" height="48" rx="6" fill="#749FDD"/>
  <rect x="79" y="70" width="22" height="74" rx="6" fill="#9BC0EB"/>
  <rect x="118" y="44" width="22" height="100" rx="6" fill="#ffffff"/>
</svg>`

await sharp(Buffer.from(svg)).png().toFile("app/apple-icon.png")
console.log("apple-icon.png geschrieben")
