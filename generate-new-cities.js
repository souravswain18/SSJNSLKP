const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\KIIT\\.gemini\\antigravity\\scratch\\sri-jagannath-sankirtan-parisad\\assets\\images';

const newItems = [
  // 8. BALASORE
  {
    filename: 'balasore-kirtan-samaroh.svg',
    title: 'Khirachora Gopinath Nagar Kirtan',
    city: 'Balasore',
    category: 'Harinam Sankirtan',
    year: '2025',
    color1: '#005C97',
    color2: '#363795',
    iconType: 'kirtan',
    desc: 'Grand congregational Harinam procession around the historic Remuna & Balasore heritage peethas'
  },
  {
    filename: 'balasore-annadan-seva.svg',
    title: 'Coastal Pilgrim & Sadhu Annadan',
    city: 'Balasore',
    category: 'Annadan Seva',
    year: '2024',
    color1: '#134E5E',
    color2: '#71B280',
    iconType: 'annadan',
    desc: 'Free nutritious Mahaprasad distribution to coastal fishermen communities and visiting pilgrims'
  },

  // 9. MAYURBHANJ
  {
    filename: 'mayurbhanj-dwitiya-srikhetra.svg',
    title: 'Dwitiya Srikhetra Baripada Rath Sankirtan',
    city: 'Mayurbhanj',
    category: 'Harinam Sankirtan',
    year: '2025',
    color1: '#654ea3',
    color2: '#eaafc8',
    iconType: 'chariot',
    desc: 'Devotees celebrating traditional Haribaldev Jew Ratha Yatra with sacred kirtan along the grand avenue'
  },
  {
    filename: 'mayurbhanj-tribal-lok-kala.svg',
    title: 'Tribal Devotional Folk Arts & Sangeet',
    city: 'Mayurbhanj',
    category: 'Lok Kala',
    year: '2024',
    color1: '#4A148C',
    color2: '#880E4F',
    iconType: 'music',
    desc: 'Reviving ancestral tribal rhythm traditions and Jagannath bhajan renditions across Mayurbhanj'
  },

  // 10. JAGATSINGHPUR
  {
    filename: 'jagatsinghpur-sarala-sankirtan.svg',
    title: 'Maa Sarala Peetha Morning Prabhat Pheri',
    city: 'Jagatsinghpur',
    category: 'Harinam Sankirtan',
    year: '2025',
    color1: '#B91D73',
    color2: '#F953C6',
    iconType: 'kirtan',
    desc: 'Early dawn Harinam yatras connecting Sarala Kshetra and coastal village mandalis'
  },
  {
    filename: 'jagatsinghpur-annadan-seva.svg',
    title: 'Mahanadi Coastal Delta Community Seva',
    city: 'Jagatsinghpur',
    category: 'Annadan Seva',
    year: '2024',
    color1: '#007991',
    color2: '#78FFD6',
    iconType: 'annadan',
    desc: 'Providing emergency food aid and community feast to flood-affected coastal hamlets'
  },

  // 11. CUTTACK
  {
    filename: 'cuttack-mahanadi-yajna.svg',
    title: 'Mahanadi Gadagadia Ghat Akhanda Yajna',
    city: 'Cuttack',
    category: 'Harinam Sankirtan',
    year: '2024',
    color1: '#E65C00',
    color2: '#F9D423',
    iconType: 'kirtan',
    desc: '24-hour non-stop Akhanda Harinam Mahayajna on the banks of sacred river Mahanadi'
  },
  {
    filename: 'cuttack-pala-sangeet.svg',
    title: 'Millennium City Pala & Daskathia Utsav',
    city: 'Cuttack',
    category: 'Lok Kala',
    year: '2025',
    color1: '#780206',
    color2: '#061161',
    iconType: 'music',
    desc: 'State confluence of master Pala performers and traditional Odissi devotional singers'
  },

  // 12. SUNDARGARH
  {
    filename: 'sundargarh-gramin-kirtan.svg',
    title: 'Vedavyas & Forest Belt Sankirtan Yatra',
    city: 'Sundargarh',
    category: 'Harinam Sankirtan',
    year: '2025',
    color1: '#1D2671',
    color2: '#C33764',
    iconType: 'kirtan',
    desc: 'Spiritual outreach and Harinam yatras uniting rural mining and tribal communities'
  },
  {
    filename: 'sundargarh-youth-sanskar.svg',
    title: 'Gita Jayanti & Youth Character Camp',
    city: 'Sundargarh',
    category: 'Satsang',
    year: '2025',
    color1: '#43cea2',
    color2: '#185a9d',
    iconType: 'satsang',
    desc: 'Empowering young college and school students with timeless ethical and spiritual values'
  },

  // 13. NUAPADA
  {
    filename: 'nuapada-yogeswar-sankirtan.svg',
    title: 'Yogeswar Peetha Harinam Samavesh',
    city: 'Nuapada',
    category: 'Harinam Sankirtan',
    year: '2025',
    color1: '#f857a6',
    color2: '#ff5858',
    iconType: 'kirtan',
    desc: 'Mass gathering of border village bhajan mandalis chanting the holy names in unison'
  },
  {
    filename: 'nuapada-gramin-seva.svg',
    title: 'Drought Relief & Rural Annadan Seva',
    city: 'Nuapada',
    category: 'Annadan Seva',
    year: '2024',
    color1: '#4568DC',
    color2: '#B06AB3',
    iconType: 'annadan',
    desc: 'Serving food grains, drinking water, and winter aid to remote tribal settlements'
  },

  // 14. BALANGIR
  {
    filename: 'balangir-harishankar-kirtan.svg',
    title: 'Harishankar Kshetra Gandhamardan Yajna',
    city: 'Balangir',
    category: 'Harinam Sankirtan',
    year: '2025',
    color1: '#FF4E50',
    color2: '#F9D423',
    iconType: 'kirtan',
    desc: 'Sacred Akhanda Nam yajna held in the foothills of medicinal Gandhamardan mountain'
  },
  {
    filename: 'balangir-sambalpuri-bhajan.svg',
    title: 'Sambalpuri Devotional Folk Sammelan',
    city: 'Balangir',
    category: 'Lok Kala',
    year: '2024',
    color1: '#61045F',
    color2: '#AA076B',
    iconType: 'music',
    desc: 'Preserving traditional Western Odisha devotional folk ragas and rhythmic instruments'
  },

  // 15. BOUDH
  {
    filename: 'boudh-rameswar-kirtan.svg',
    title: 'Mahanadi Valley Rameswar Kirtan Yatra',
    city: 'Boudh',
    category: 'Harinam Sankirtan',
    year: '2025',
    color1: '#16A085',
    color2: '#F4D03F',
    iconType: 'kirtan',
    desc: 'Congregational chanting along ancient temple ghats in central Odisha Mahanadi valley'
  },
  {
    filename: 'boudh-sadhu-seva.svg',
    title: 'Sadhu & Pilgrim Seva Shivir',
    city: 'Boudh',
    category: 'Annadan Seva',
    year: '2024',
    color1: '#D35400',
    color2: '#2C3E50',
    iconType: 'annadan',
    desc: 'Serving passing pilgrims, ascetics, and organizing community satsang feasts'
  },

  // 16. BARGARH
  {
    filename: 'bargarh-dhanuyatra-kirtan.svg',
    title: 'Dhanu Yatra Mahotsav Sankirtan',
    city: 'Bargarh',
    category: 'Harinam Sankirtan',
    year: '2025',
    color1: '#8E0E00',
    color2: '#1F1C18',
    iconType: 'kirtan',
    desc: 'Mass kirtan procession accompanying Lord Krishna during the world’s largest open-air theatre'
  },
  {
    filename: 'bargarh-nrusinghanath-seva.svg',
    title: 'Nrusinghanath Peetha Gramin Seva',
    city: 'Bargarh',
    category: 'Satsang',
    year: '2025',
    color1: '#E65C00',
    color2: '#F9D423',
    iconType: 'satsang',
    desc: 'Empowering village kirtaniyas with mridanga instruments and organising spiritual discourses'
  }
];

function getCenterGraphic(type) {
  if (type === 'chariot') {
    return `
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

newItems.forEach(item => {
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

  <rect width="800" height="550" fill="url(#bgGrad)"/>
  <rect x="20" y="20" width="760" height="510" rx="14" fill="none" stroke="#FFE082" stroke-width="2" opacity="0.4"/>
  <rect x="28" y="28" width="744" height="494" rx="10" fill="none" stroke="#FFE082" stroke-width="1" stroke-dasharray="6,4" opacity="0.3"/>

  <g fill="#FFE082" opacity="0.6">
    <circle cx="36" cy="36" r="6"/>
    <circle cx="764" cy="36" r="6"/>
    <circle cx="36" cy="514" r="6"/>
    <circle cx="764" cy="514" r="6"/>
  </g>

  <circle cx="400" cy="270" r="160" fill="#FFE082" opacity="0.08"/>
  <circle cx="400" cy="270" r="110" fill="#FFFFFF" opacity="0.05"/>

  <g transform="translate(45, 65)">
    <rect x="0" y="0" width="165" height="34" rx="17" fill="rgba(0,0,0,0.45)" stroke="#FFE082" stroke-width="1.5"/>
    <text x="82" y="22" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#FFE082" text-anchor="middle">📍 ${item.city}, Odisha</text>

    <rect x="180" y="0" width="145" height="34" rx="17" fill="rgba(255,255,255,0.15)" stroke="#FFF" stroke-width="1"/>
    <text x="252" y="22" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#FFFFFF" text-anchor="middle">${item.category}</text>
  </g>

  <g transform="translate(680, 65)">
    <rect x="0" y="0" width="75" height="34" rx="17" fill="rgba(0,0,0,0.5)" stroke="#FFE082" stroke-width="1"/>
    <text x="37" y="22" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#FFE082" text-anchor="middle">✨ ${item.year}</text>
  </g>

  ${getCenterGraphic(item.iconType)}

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
