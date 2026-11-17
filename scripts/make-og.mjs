// Gera a imagem de compartilhamento (Open Graph) em public/og.png
import sharp from 'sharp';

const W = 1200;
const H = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a1220"/>
      <stop offset="100%" stop-color="#04070d"/>
    </linearGradient>
    <radialGradient id="glow1" cx="0.16" cy="0.05" r="0.7">
      <stop offset="0%" stop-color="#35e0a1" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#35e0a1" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.92" cy="0.9" r="0.6">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#4af0b4"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M60 0H0V60" fill="none" stroke="#8caad2" stroke-opacity="0.09" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow1)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>

  <!-- marca -->
  <g transform="translate(72 64)">
    <rect width="56" height="56" rx="15" fill="#0d1a2e" stroke="#35e0a1" stroke-opacity="0.4"/>
    <rect x="14" y="32" width="6" height="12" rx="2" fill="#22c5d8" opacity="0.6"/>
    <rect x="25" y="26" width="6" height="18" rx="2" fill="#2fd0c7" opacity="0.8"/>
    <rect x="36" y="17" width="6" height="27" rx="2" fill="#4af0b4"/>
    <circle cx="39" cy="13" r="3.2" fill="#4af0b4"/>
  </g>

  <text x="144" y="84" font-family="DejaVu Sans" font-size="19" font-weight="bold" fill="#e9effa" letter-spacing="1">TM INFO IA</text>
  <text x="144" y="110" font-family="DejaVu Sans Mono" font-size="13" fill="#6b7c96" letter-spacing="2.4">DADOS · BI · AUTOMAÇÃO · IA APLICADA</text>

  <text x="72" y="252" font-family="DejaVu Sans" font-size="62" font-weight="bold" fill="#eef4ff" letter-spacing="-1.5">Dados que viram</text>
  <text x="72" y="330" font-family="DejaVu Sans" font-size="62" font-weight="bold" fill="url(#accent)" letter-spacing="-1.5">decisão e resultado.</text>

  <text x="72" y="390" font-family="DejaVu Sans" font-size="24" fill="#93a3bc">Engenharia de dados · BI · Automação · IA aplicada</text>

  <line x1="72" y1="446" x2="1128" y2="446" stroke="#8caad2" stroke-opacity="0.18"/>

  <g font-family="DejaVu Sans" fill="#e9effa">
    <text x="72" y="512" font-size="38" font-weight="bold" fill="#4af0b4">12+</text>
    <text x="72" y="542" font-size="17" fill="#93a3bc">anos em dados</text>

    <text x="352" y="512" font-size="38" font-weight="bold" fill="#4af0b4">16%</text>
    <text x="352" y="542" font-size="17" fill="#93a3bc">redução de custos</text>

    <text x="642" y="512" font-size="38" font-weight="bold" fill="#4af0b4">80%</text>
    <text x="642" y="542" font-size="17" fill="#93a3bc">menos tempo em ETL</text>

    <text x="932" y="512" font-size="38" font-weight="bold" fill="#4af0b4">60%</text>
    <text x="932" y="542" font-size="17" fill="#93a3bc">mais precisão em IA</text>
  </g>

  <text x="72" y="596" font-family="DejaVu Sans Mono" font-size="14" fill="#6b7c96">tminfoia.com.br · Thassys Meira · Curitiba, PR · CNPJ 60.532.999/0001-41</text>
</svg>
`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og.png');
console.log('public/og.png gerado');
