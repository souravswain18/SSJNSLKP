const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\KIIT\\.gemini\\antigravity\\scratch\\sri-jagannath-sankirtan-parisad\\assets\\images';

const galleryItems = [
  // 1. PURI
  {
    filename: 'puri-rath-kirtan.svg',
    title: 'Badadanda Grand Nagar Sankirtan',
    city: 'Puri Dham',
    category: 'Harinam Sankirtan',
    year: '2025',
    color1: '#8E0E00',
    color2: '#1F1C18',
    iconType: 'chariot',
    desc: 'Devotees chanting Harinam along Badadanda before Lord Jagannath chariot'
  },
  {
    filename: 'puri-mahaprasad-seva.svg',
    title: 'Ananda Bazar Mahaprasad Seva',
    city: 'Puri Dham',
    category: 'Annadan Seva',
    year: '2025',
    color1: '#D35400',
    color2: '#2C3E50',
    iconType: 'annadan',
    desc: 'Daily distribution of sanctified Mahaprasad to sadhus and visiting pilgrims'
  },

  // 2. MALKANGIRI
  {
    filename: 'malkangiri-gramin-kirtan.svg',
    title: 'Swabhiman Anchal Gramin Sankirtan Yatra',
    city: 'Malkangiri',
    category: 'Harinam Sankirtan',
    year: '2025',
    color1: '#11998E',
    color2: '#1D4350',
    iconType: 'kirtan',
    desc: 'Spreading the divine Harinam across remote forest hamlets and tribal villages of Malkangiri'
  },
  {
    filename: 'malkangiri-annadan-seva.svg',
    title: 'Tribal Welfare & Free Annadan Seva',
    city: 'Malkangiri',
    category: 'Annadan Seva',
    year: '2024',
    color1: '#795548',
    color2: '#212121',
    iconType: 'annadan',
    desc: 'Distribution of warm cooked meals, clothing, and blankets to underprivileged tribal families'
  },

  // 3. KORAPUT
  {
    filename: 'koraput-sabara-srikhetra.svg',
    title: 'Sabara Srikhetra Jagannath Utsav',
    city: 'Koraput',
    category: 'Lok Kala',
    year: '2025',
    color1: '#4A00E0',
    color2: '#8E2DE2',
    iconType: 'music',
    desc: 'Celebrating sacred tribal-Jagannath heritage and devotional sangeet at Sabara Srikhetra'
  },
  {
    filename: 'koraput-tribal-bhajan.svg',
    title: 'Pahari Bhajan & Traditional Mandali Sammelan',
    city: 'Koraput',
    category: 'Harinam Sankirtan',
    year: '2024',
    color1: '#5D4037',
    color2: '#FF8A65',
    iconType: 'kirtan',
    desc: 'Over 30 hill community kirtan groups coming together with sacred folk instruments'
  },

  // 4. NABARANGPUR
  {
    filename: 'nabarangpur-kirtan-mandali.svg',
    title: 'Indravati Teer Harinam Samavesh',
    city: 'Nabarangpur',
    category: 'Harinam Sankirtan',
    year: '2025',
    color1: '#B24592',
    color2: '#F15F79',
    iconType: 'kirtan',
    desc: 'Mass congregational singing on the banks of Indravati uniting village kirtaniyas'
  },
  {
    filename: 'nabarangpur-gramin-sanskar.svg',
    title: 'Gramin Sanskar & Gita Patha Kendra',
    city: 'Nabarangpur',
    category: 'Satsang',
    year: '2025',
    color1: '#E65C00',
    color2: '#F9D423',
    iconType: 'satsang',
    desc: 'Inspiring rural youth with moral values, Vedic shlokas, and devotional discipline'
  },

  // 5. DHENKANAL
  {
    filename: 'dhenkanal-kapilash-yajna.svg',
    title: 'Kapilash Kshetra Akhanda Harinam Yajna',
    city: 'Dhenkanal',
    category: 'Harinam Sankirtan',
    year: '2024',
    color1: '#1A2980',
    color2: '#26D0CE',
    iconType: 'kirtan',
    desc: '24-hour non-stop Akhanda Sankirtan mahayajna in the foothills of sacred Kapilash'
  },
  {
    filename: 'dhenkanal-lok-kala.svg',
    title: 'Traditional Pala & Devotional Sangeet',
    city: 'Dhenkanal',
    category: 'Lok Kala',
    year: '2025',
    color1: '#C0392B',
    color2: '#8E44AD',
    iconType: 'music',
    desc: 'Preserving authentic Odia Pala, Daskathia, and Jayadev Geet Govind renditions'
  },

  // 6. SAMBALPUR
  {
    filename: 'sambalpur-kirtan-samavesh.svg',
    title: 'Maa Samaleswari Mahotsav Kirtan',
    city: 'Sambalpur',
    category: 'Harinam Sankirtan',
    year: '2025',
    color1: '#61045F',
    color2: '#AA076B',
    iconType: 'kirtan',
    desc: 'Western Odisha grand kirtan congregation accompanied by traditional mridanga and jhanja'
  },
  {
    filename: 'sambalpur-mridanga-seva.svg',
    title: 'Folk Mridanga (Khol) Training Camp',
    city: 'Sambalpur',
    category: 'Lok Kala',
    year: '2024',
    color1: '#D68910',
    color2: '#1B4F72',
    iconType: 'music',
    desc: 'Free training shivir for rural youth to learn authentic devotional kirtan rhythms'
  },

  // 7. KHORDHA
  {
    filename: 'khordha-barunei-sankirtan.svg',
    title: 'Barunei Peetha Prabhat Pheri',
    city: 'Khordha',
    category: 'Harinam Sankirtan',
    year: '2025',
    color1: '#780206',
    color2: '#061161',
    iconType: 'kirtan',
    desc: 'Early morning Harinam procession along the historical Barunei hills with hundreds of devotees'
  },
  {
    filename: 'khordha-gita-satsang.svg',
    title: 'Youth Sanskar & Bhagavata Discourses',
    city: 'Khordha',
    category: 'Satsang',
    year: '2025',
    color1: '#BA135D',
    color2: '#FF416C',
    iconType: 'satsang',
    desc: 'Spiritual discourses spreading the universal message of peace, seva, and bhakti'
  }
];

function getCenterGraphic(type) {
  if (type === 'chariot') {
    return `
      <!-- Chariot / Temple Silhouette -->
      <g transform="translate(400, 260) scale(1.1)">
        <path d="M 0,-130 L 25,-60 L 55,-60 L 65,30 L 75,50 L -75,50 L -65,30 L -55,-60 L -25,-60 Z" fill="#FFE082" opacity="0.95"/>
        <line x1="0" y1="-150" x2="0" y2="-130" stroke="#FFD54F" stroke-width="4"/>
        <polygon points="0,-150 20,-140 0,-132" fill="#E53935"/>
        <circle cx="-50" cy="55" r="30" fill="none" stroke="#FFE082" stroke-width="5"/>
        <circle cx="50" cy="55" r="30" fill="none" stroke="#FFE082" stroke-width="5"/>
        <circle cx="-50" cy="55" r="5" fill="#FFE082"/>
        <circle cx="50" cy="55" r="5" fill="#FFE082"/>
      </g>
    `;
  } else if (type === 'kirtan') {
    return `
      <!-- Mridanga & Hands in Joy -->
      <g transform="translate(400, 270) scale(1.2)">
        <ellipse cx="0" cy="10" rx="75" ry="32" fill="#E5A93C" stroke="#FFF" stroke-width="3"/>
        <ellipse cx="-75" cy="10" rx="10" ry="24" fill="#6B3A10" stroke="#FFF" stroke-width="2"/>
        <ellipse cx="75" cy="10" rx="15" ry="28" fill="#422108" stroke="#FFF" stroke-width="2"/>
        <path d="M -75,0 Q 0,40 75,0 M -75,20 Q 0,-20 75,20" stroke="#FFE082" stroke-width="2.5" fill="none"/>
        <path d="M -90,-45 Q -105,-90 -95,-105 Q -85,-95 -75,-65" fill="#FFE082"/>
        <path d="M 90,-45 Q 105,-90 95,-105 Q 85,-95 75,-65" fill="#FFE082"/>
      </g>
    `;
  } else if (type === 'annadan') {
    return `
      <!-- Sacred Kalash & Prasadam Pot -->
      <g transform="translate(400, 270) scale(1.1)">
        <ellipse cx="0" cy="40" rx="60" ry="20" fill="#935116"/>
        <path d="M -60,40 C -60,-10 -40,-40 0,-45 C 40,-40 60,-10 60,40 Z" fill="#D35400" stroke="#FFE082" stroke-width="3"/>
        <path d="M -30,-45 Q -60,-75 -80,-55 Q -50,-40 -20,-45 Z" fill="#2ECC71"/>
        <path d="M 30,-45 Q 60,-75 80,-55 Q 50,-40 20,-45 Z" fill="#2ECC71"/>
        <circle cx="0" cy="-60" r="22" fill="#873600" stroke="#FFE082" stroke-width="2"/>
        <path d="M 0,-85 Q 12,-70 0,-55 Q -12,-70 0,-85 Z" fill="#F39C12"/>
      </g>
    `;
  } else if (type === 'music') {
    return `
      <!-- Musical Flute / Veena / Sangeet Motif -->
      <g transform="translate(400, 270) scale(1.2)">
        <line x1="-90" y1="20" x2="90" y2="-30" stroke="#FFE082" stroke-width="7" stroke-linecap="round"/>
        <g transform="translate(-80, 15) rotate(-35)">
          <path d="M 0,0 C -25,-35 0,-70 20,-50 C 35,-35 15,0 0,0 Z" fill="#1ABC9C"/>
          <ellipse cx="8" cy="-45" rx="9" ry="14" fill="#3498DB"/>
          <circle cx="8" cy="-45" r="5" fill="#8E44AD"/>
        </g>
        <circle cx="-30" cy="8" r="4" fill="#8E0E00"/>
        <circle cx="0" cy="0" r="4" fill="#8E0E00"/>
        <circle cx="30" cy="-8" r="4" fill="#8E0E00"/>
        <circle cx="60" cy="-17" r="4" fill="#8E0E00"/>
      </g>
    `;
  } else {
    return `
      <!-- Satsang Diya & Lotus -->
      <g transform="translate(400, 270) scale(1.2)">
        <path d="M -45,30 Q 0,45 45,30 Q 30,10 0,10 Q -30,10 -45,30 Z" fill="#E5A93C" stroke="#FFF" stroke-width="2"/>
        <path d="M 0,-25 Q 15,5 0,10 Q -15,5 0,-25 Z" fill="#FF5722"/>
        <circle cx="0" cy="-2" r="5" fill="#FFEB3B"/>
        <path d="M -55,30 Q -80,10 -70,-5 Q -55,10 -45,30" fill="#E91E63" opacity="0.8"/>
        <path d="M 55,30 Q 80,10 70,-5 Q 55,10 45,30" fill="#E91E63" opacity="0.8"/>
      </g>
    `;
  }
}

galleryItems.forEach(item => {
  const content = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 550" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${item.color1}"/>
      <stop offset="100%" stop-color="${item.color2}"/>
    </linearGradient>
    <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFF5C2"/>
      <stop offset="100%" stop-color="#E5A93C"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="550" fill="url(#bgGrad)"/>

  <!-- Ornate Decorative Borders -->
  <rect x="20" y="20" width="760" height="510" rx="14" fill="none" stroke="#FFE082" stroke-width="2" opacity="0.4"/>
  <rect x="28" y="28" width="744" height="494" rx="10" fill="none" stroke="#FFE082" stroke-width="1" stroke-dasharray="6,4" opacity="0.3"/>

  <!-- Corner Lotus Motifs -->
  <g fill="#FFE082" opacity="0.6">
    <circle cx="36" cy="36" r="6"/>
    <circle cx="764" cy="36" r="6"/>
    <circle cx="36" cy="514" r="6"/>
    <circle cx="764" cy="514" r="6"/>
  </g>

  <!-- Background Glow & Circular Aura -->
  <circle cx="400" cy="270" r="160" fill="#FFE082" opacity="0.08"/>
  <circle cx="400" cy="270" r="110" fill="#FFFFFF" opacity="0.05"/>

  <!-- Top Badges -->
  <g transform="translate(45, 65)">
    <rect x="0" y="0" width="165" height="34" rx="17" fill="rgba(0,0,0,0.45)" stroke="#FFE082" stroke-width="1.5"/>
    <text x="82" y="22" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#FFE082" text-anchor="middle">📍 ${item.city}, Odisha</text>

    <rect x="180" y="0" width="145" height="34" rx="17" fill="rgba(255,255,255,0.15)" stroke="#FFF" stroke-width="1"/>
    <text x="252" y="22" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF" text-anchor="middle">${item.category}</text>
  </g>

  <!-- Year Tag (Top Right) -->
  <g transform="translate(680, 65)">
    <rect x="0" y="0" width="75" height="34" rx="17" fill="rgba(0,0,0,0.5)" stroke="#FFE082" stroke-width="1"/>
    <text x="37" y="22" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#FFE082" text-anchor="middle">✨ ${item.year}</text>
  </g>

  <!-- Central Graphic -->
  ${getCenterGraphic(item.iconType)}

  <!-- Bottom Details Overlay -->
  <rect x="35" y="405" width="730" height="105" rx="12" fill="rgba(10, 5, 5, 0.75)" stroke="rgba(255, 224, 130, 0.3)" stroke-width="1"/>

  <text x="55" y="442" font-family="'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="bold" fill="url(#goldText)" filter="url(#shadow)">
    ${item.title}
  </text>
  <text x="55" y="475" font-family="'Segoe UI', Roboto, sans-serif" font-size="14.5" fill="#E0E0E0">
    ${item.desc}
  </text>
  <text x="55" y="497" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" fill="#FFCC80">
    Sri Sri Jagannath Nam Sankirtan Lok Kalaparisad (Odisha) • Click to enlarge
  </text>
</svg>`;

  fs.writeFileSync(path.join(targetDir, item.filename), content, 'utf8');
  console.log('Created ' + item.filename);
});
