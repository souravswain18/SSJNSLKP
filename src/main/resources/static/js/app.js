/**
 * Sri Sri Jagannath Nam Sankirtan Loka Kala parisad Odisha
 * Interactive Devotional Catalogue & Gallery Application Script
 * 
 * Supports all 18 Odisha Regional Chapters:
 * 1. Puri Dham (ପୁରୀ)
 * 2. Malkangiri (ମାଲକାନଗିରି)
 * 3. Koraput (କୋରାପୁଟ)
 * 4. Nabarangpur (ନବରଙ୍ଗପୁର)
 * 5. Dhenkanal (ଢେଙ୍କାନାଳ)
 * 6. Sambalpur (ସମ୍ବଲପୁର)
 * 7. Khordha (ଖୋର୍ଦ୍ଧା)
 * 8. Balasore (ବାଲେଶ୍ୱର)
 * 9. Mayurbhanj (ମୟୂରଭଞ୍ଜ)
 * 10. Jagatsinghpur (ଜଗତସିଂହପୁର)
 * 11. Cuttack (କଟକ)
 * 12. Sundargarh (ସୁନ୍ଦରଗଡ଼)
 * 13. Nuapada (ନୂଆପଡ଼ା)
 * 14. Balangir (ବଲାଙ୍ଗୀର)
 * 15. Boudh (ବୌଦ୍ଧ)
 * 16. Bargarh (ବରଗଡ଼)
 * 17. Jharsuguda (ଝାରସୁଗୁଡ଼ା)
 * 18. Kalahandi (କଳାହାଣ୍ଡି)
 * 
 * Connected to Java Spring Boot REST API Backend:
 * - GET  /api/chapters
 * - GET  /api/photos
 * - POST /api/volunteers
 * - POST /api/photos/upload
 */

// ==========================================================================
// 1. DEFAULT DATA: 18 Odisha City Chapters (Used as fallback/seed)
// ==========================================================================
let cityChaptersData = [
  {
    id: 'puri',
    name: 'Puri Dham',
    subName: 'ଶ୍ରୀକ୍ଷେତ୍ର ପୁରୀ • Mula Peetha & Central Headquarters',
    coordinator: 'Shri Jagannath Seva Samiti & Senior Kirtan Acharyas',
    contact: '+91 94370 XXXXX',
    badge: 'Mula Peetha',
    activities: [
      'Daily Badadanda Harinam Nagar Sankirtan & Prabhat Pheri',
      'Grand Ratha Yatra & Snana Yatra Seva Shivir along chariot route',
      'Continuous Ananda Bazar Mahaprasad distribution to sadhus & pilgrims',
      'Kartik Niyam Seva Akhanda Kirtan & Traditional Bhajan Samaroh'
    ],
    photoCount: 7,
    photos: [
      {
        id: 'puri-photo-1',
        title: 'ଶ୍ରୀକ୍ଷେତ୍ର ବଡ଼ଦାଣ୍ଡ ରଥଯାତ୍ରା ମହା ସମାରୋହ ଓ ଆକାଶ ମାର୍ଗ ଦର୍ଶନ',
        subTitle: 'Grand Puri Ratha Yatra Aerial Twilight Darshan & Badadanda Chariots',
        src: 'assets/images/puri-badadanda-rath-yatra-aerial-darshan.jpg',
        desc: 'Spectacular aerial night view of holy Nandighosha, Taladhwaja, and Darpadalana rathas on Badadanda surrounded by lakhs of ecstatic chanting devotees before the illuminated Srimandir.',
        year: '2024'
      },
      {
        id: 'puri-photo-2',
        title: 'ଶ୍ରୀକ୍ଷେତ୍ର ସିଂହଦ୍ୱାର ପ୍ରତିଦିନ ସଂକୀର୍ତ୍ତନ ମଣ୍ଡଳୀ ଓ ହରିନାମ',
        subTitle: 'Daily Srikhetra Singhadwara Sankirtan — Argus News',
        src: 'assets/images/puri-singhadwara-daily-sankirtan-mandali.jpg',
        desc: 'Village sankirtan mandalis and acharyas dancing with mridanga and kartal in front of holy Sri Jagannath Mandir Singhadwara for universal peace.',
        year: '2024'
      },
      {
        id: 'puri-photo-3',
        title: '‘ଅର୍ଗସ ନ୍ୟୁଜ’ରେ ଶ୍ରୀ ଶ୍ରୀ ଜଗନ୍ନାଥ ନାମ ସଂକୀର୍ତ୍ତନ ଲୋକକଳା ପରିଷଦ',
        subTitle: 'Argus News Special Feature & Parisad Leadership',
        src: 'assets/images/puri-argus-news-parisad-official-broadcast.jpg',
        desc: 'Official television broadcast feature honoring Sri Sri Jagannath Nam Sankirtan Loka Kala Parisad and state leadership spearheading the sankirtan revival movement.',
        year: '2024'
      },
      {
        id: 'puri-photo-4',
        title: 'ପୁରୀ ବଡ଼ଦାଣ୍ଡ ମହିଳା ସଂକୀର୍ତ୍ତନ ଦଳ ମହା ଶୋଭାଯାତ୍ରା',
        subTitle: 'Puri Badadanda Women Sankirtan Mandali Procession',
        src: 'assets/images/puri-badadanda-women-sankirtan-shobhayatra.jpg',
        desc: 'Hundreds of women sankirtan artistes in traditional attire performing ecstatic Harinam with gini and singing bhajans on Puri Grand Road.',
        year: '2024'
      },
      {
        id: 'puri-photo-5',
        title: 'ପୁରୀ ବଡ଼ଦାଣ୍ଡରେ ପରିଷଦ ନେତୃତ୍ୱଙ୍କ ଗଣମାଧ୍ୟମ ବକ୍ତବ୍ୟ',
        subTitle: 'Parishad Leadership Live Media Address at Puri Badadanda',
        src: 'assets/images/puri-badadanda-leadership-media-interview.jpg',
        desc: 'Parishad leadership interacting with media representatives on Puri Badadanda highlighting the state-wide expansion of traditional sankirtan and artistes welfare.',
        year: '2024'
      },
      {
        id: 'puri-photo-6',
        title: 'ଶ୍ରୀକ୍ଷେତ୍ର ବଡ଼ଦାଣ୍ଡ ପ୍ରଭାତ ଫେରୀ ଓ ନଗର ସଂକୀର୍ତ୍ତନ',
        subTitle: 'Badadanda Prabhat Pheri & Harinam Sankirtan',
        src: 'assets/images/puri-rath-yatra-kirtan.svg',
        desc: 'Daily divine Harinam Sankirtan along Puri Badadanda leading up to Sri Jagannath Mandir Singhadwara with senior acharyas.',
        year: '2024'
      },
      {
        id: 'puri-photo-7',
        title: 'ଆନନ୍ଦ ବଜାର ମହାପ୍ରସାଦ ସେବା ଶିବିର',
        subTitle: 'Ananda Bazar Mahaprasad & Sadhu Seva',
        src: 'assets/images/puri-mahaprasad-seva.svg',
        desc: 'Parishad volunteers offering warm holy Mahaprasad to visiting pilgrims, ascetics, and devotees at Lions Gate.',
        year: '2024'
      }
    ],
    videos: [
      {
        id: 'puri-video-1',
        title: 'ଶ୍ରୀକ୍ଷେତ୍ର ସିଂହଦ୍ୱାର ପ୍ରତିଦିନ ସଂକୀର୍ତ୍ତନ (Puri Singhadwara Harinam - Argus News)',
        subTitle: 'Daily Srikhetra Singhadwara Kirtan Mandali & Viswashanti Harinam',
        src: 'assets/videos/puri-dham-singhadwara-sankirtan-argus.mp4',
        desc: 'Official television broadcast on Argus News: Rural and state sankirtan mandalis performing daily devotional kirtan with mridanga and kartal before holy Singhadwara and Aruna Stambha of Sri Jagannath Mandir.',
        sizeBadge: '26 MB HD MP4'
      },
      {
        id: 'puri-video-2',
        title: 'ପୁରୀ ବଡ଼ଦାଣ୍ଡ ମହିଳା ଓ ଗ୍ରାମୀଣ ସଂକୀର୍ତ୍ତନ ଶୋଭାଯାତ୍ରା (Puri Badadanda Women Shobhayatra)',
        subTitle: 'Grand Badadanda Nagar Sankirtan & Parishad Leadership Interview',
        src: 'assets/videos/puri-dham-women-shobhayatra-argus.mp4',
        desc: 'Spectacular live coverage on Argus News: Hundreds of women sankirtaniyas in traditional attire performing Harinam along Puri Badadanda, with mridanga acharyas and on-field leadership interview on traditional artists patronage.',
        sizeBadge: '41 MB HD MP4'
      },
      {
        id: 'puri-video-3',
        title: 'ପୁରୀ ବଡ଼ଦାଣ୍ଡ ହରିନାମ ନଗର ସଂକୀର୍ତ୍ତନ (Puri Badadanda Harinam Sankirtan - Part 3)',
        subTitle: 'Srikhetra Badadanda Prabhat Pheri & Chariot Route Shobhayatra',
        src: 'assets/videos/puri-dham-badadanda-sankirtan-darshan-1.mp4',
        desc: 'Divine Harinam Sankirtan procession along holy Puri Badadanda with traditional mridanga, jhanja, and joyous devotee congregation before Mahaprabhu Sri Jagannath.',
        sizeBadge: '20 MB HD MP4'
      },
      {
        id: 'puri-video-4',
        title: 'ପୁରୀ ଧାମ ମହାସଂକୀର୍ତ୍ତନ ଓ ଭକ୍ତ ସମାବେଶ (Puri Dham Maha Sankirtan Assembly - Part 4)',
        subTitle: 'Ananda Bazar & Lions Gate Devotional Congregation',
        src: 'assets/videos/puri-dham-badadanda-sankirtan-darshan-2.mp4',
        desc: 'Hundreds of devotees and village kirtan mandalis singing in ecstatic bliss, carrying sacred flags and invoking Mahaprabhu Jagannath at the holy Srikhetra Peetha.',
        sizeBadge: '31 MB HD MP4'
      }
    ]
  },
  {
    id: 'malkangiri',
    name: 'Malkangiri',
    subName: 'ମାଲକାନଗିରି • Swabhiman Anchal Tribal & Gramin Seva',
    coordinator: 'Malkangiri District Seva Sangha & Gramin In-charge',
    contact: '+91 94380 XXXXX',
    badge: 'Tribal & Gramin Seva',
    activities: [
      'Swabhiman Anchal Gramin Harinam Sankirtan Yatras in remote villages',
      'Free community Annadan & disaster relief camps for tribal families',
      'Distribution of warm blankets, clothes, and essential supplies',
      'Fostering devotional harmony and preserving indigenous traditions'
    ],
    photoCount: 6,
    photos: [
      {
        id: 'mkg-photo-1',
        title: 'ମହାସଂକୀର୍ତ୍ତନ ଲୋକକଳା ସମାବେଶ ଶୋଭାଯାତ୍ରା',
        subTitle: 'Maha Sankirtan Loka Kala Samabesa Procession',
        src: 'assets/images/malkangiri-sankirtan-samabesa-procession.jpg',
        desc: 'President Sri Sidhartha Sankar Swain and parishad sevaks carrying Sri Jagannath Mahaprabhu portraits with the official Malkangiri District Samabesa banner in grand street procession.'
      },
      {
        id: 'mkg-photo-2',
        title: 'ହରିବୋଲ ଧ୍ୱନି ଓ ସଂକୀର୍ତ୍ତନ ମୁଦ୍ରା',
        subTitle: 'Harinam Sankirtan & Divine Hand Raising',
        src: 'assets/images/malkangiri-harinam-kirtan-jai-jagannath.jpg',
        desc: 'Devotees raising both arms with holy coconut offering in traditional sankirtan ecstasy, chanting "Hari Bol! Jai Jagannath!" before the parishad banner.'
      },
      {
        id: 'mkg-photo-3',
        title: 'ମାଲକାନଗିରି ପରିଷଦ ବ୍ୟାନର ଓ ଭକ୍ତ ସମାବେଶ',
        subTitle: 'Parishad Banner & Devotee Gathering',
        src: 'assets/images/malkangiri-samabesa-banner-bhaktas.jpg',
        desc: 'Parishad members and local devotees gathered before the official banner showcasing Sri Jagannath deities and district dignitaries.'
      },
      {
        id: 'mkg-photo-4',
        title: 'ନଗର ସଂକୀର୍ତ୍ତନ ଓ ପରିକ୍ରମା',
        subTitle: 'Nagar Sankirtan & Samabesa Parikrama',
        src: 'assets/images/malkangiri-nagar-kirtan-parikrama.jpg',
        desc: 'Grand congregational Harinam Sankirtan procession through Malkangiri town with traditional dhol, mridanga, and sound seva vehicles.'
      },
      {
        id: 'mkg-photo-5',
        title: 'ଭକ୍ତବୃନ୍ଦ ଓ ସେବକ ସମାବେଶ ରାଲି',
        subTitle: 'Malkangiri Bhakta & Sevak Assembly',
        src: 'assets/images/malkangiri-devotees-rally-seva.jpg',
        desc: 'Devotees, village mothers in traditional yellow-red sarees, and youth volunteers actively participating in the district cultural congregation.'
      },
      {
        id: 'mkg-photo-6',
        title: 'ସତସଙ୍ଗ ଓ ସାଙ୍ଗଠନିକ ଆଲୋଚନା',
        subTitle: 'Satsang & Organization Meeting',
        src: 'assets/images/malkangiri-maha-samabesa-gathering.jpg',
        desc: 'Devotees and committee members offering pranam and discussing district-wide expansion of village Sankirtan mandalis and Loka Kala preservation.'
      }
    ],
    videos: [
      {
        id: 'mkg-video-1',
        title: 'ମାଲକାନଗିରି ମହାସଂକୀର୍ତ୍ତନ ଓ ଲୋକକଳା ସମାବେଶ (Malkangiri Maha Sankirtan Live Video)',
        subTitle: 'Nagar Sankirtan & Samabesa Live Shobhayatra',
        src: 'assets/videos/malkangiri-sankirtan-samabesa-darshan.mp4',
        desc: 'Authentic ground video from the Malkangiri District Samabesa featuring President Sri Sidhartha Sankar Swain, sevaks, and local devotees in grand Harinam Sankirtan procession with traditional mridanga, dhol, and Sri Jagannath deities.',
        sizeBadge: '18 MB HD MP4'
      }
    ]
  },
  {
    id: 'koraput',
    name: 'Koraput',
    subName: 'କୋରାପୁଟ • Sabara Srikhetra & Jeypore Devotional Chapter',
    coordinator: 'Sabara Srikhetra Jagannath Mandir Seva Dal & Koraput District Samabesa Sangha',
    contact: '+91 94390 XXXXX',
    badge: 'Sabara Srikhetra',
    activities: [
      'District Level Sankirtan and Loka Kala Mahasamabesa at Jeypore Dussehra Padia',
      'Grand Nagar Sankirtan Shobhayatra from Jeypore Jagannath Mandir with 14 blocks',
      'Preservation of tribal folk arts, Chadeia-Chadeiani dance, and indigenous music',
      'Felicitation of traditional kirtan acharyas and musical instrument distribution'
    ],
    photoCount: 8,
    photos: [
      {
        id: 'koraput-photo-1',
        title: 'କୋରାପୁଟ ଜିଲ୍ଲାପାଳଙ୍କ ସହ ଆଲୋଚନା ଓ ନିମନ୍ତ୍ରଣ',
        subTitle: 'Meeting with District Magistrate & Collector, Koraput',
        src: 'assets/images/koraput-collector-meeting.jpg',
        desc: 'Parishad State President Sri Sidhartha Sankar Swain and delegation meeting Koraput Collector Shri Manoj Satyawan Mahajan, IAS, regarding the grand District Sankirtan & Loka Kala Mahasamabesa.',
        year: '2024'
      },
      {
        id: 'koraput-photo-2',
        title: '‘୨୪ରେ ଲୋକକଳାର ମହାସମାବେଶ’ ସାମ୍ବାଦିକ ସମ୍ମିଳନୀ',
        subTitle: 'Press Conference Announcement by State President Sidhartha Sankar Swain',
        src: 'assets/images/koraput-press-conference-announcement.jpg',
        desc: 'Front-page news report of the high-level press meet announcing the historic assembly of 25,000 devotees across 14 blocks of Koraput district to preserve indigenous Lok Kala.',
        year: '2024'
      },
      {
        id: 'koraput-photo-3',
        title: 'ଚଢେଇଆ-ଚଢେଇଆଣୀ ପାରମ୍ପରିକ ଲୋକନୃତ୍ୟ ସଚେତନତା',
        subTitle: 'The Sakala Press Coverage — Indigenous Folk Dance & Cultural Revival',
        src: 'assets/images/koraput-chadeia-dance-awareness.jpg',
        desc: 'Feature article in The Sakala celebrating the revival of ancient tribal Chadeia-Chadeiani folk dance with full patron support from Parishad President Sri Sidhartha Sankar Swain.',
        year: '2024'
      },
      {
        id: 'koraput-photo-4',
        title: 'ଜିଲ୍ଲାପାଳ, ଏସ.ପି. ଓ ଉପଜିଲ୍ଲାପାଳଙ୍କ ସହ ପ୍ରଶାସନିକ ଆଲୋଚନା',
        subTitle: '4-in-1 Administrative Meetings: Collector, SP & Deputy Collector Koraput',
        src: 'assets/images/koraput-administrative-delegations-collage.jpg',
        desc: 'Official delegation summits with Koraput Collectorate, Superintendent of Police, Deputy Collector Koraput, and revenue administration for event coordination.',
        year: '2024'
      },
      {
        id: 'koraput-photo-5',
        title: 'ଜିଲ୍ଲା ସ୍ତରୀୟ ସଂକୀର୍ତ୍ତନ ଓ ଲୋକ କଳା ମହାସମାବେଶ ମୁଖ୍ୟ ବ୍ୟାନର',
        subTitle: 'Official Koraput District Banner — Dussehra Padia, Jeypore',
        src: 'assets/images/koraput-district-sammilani-banner.jpg',
        desc: 'Official banner of Sri Sri Jagannath Nama Sankirtan Loka Kala Parishad Odisha, Koraput District Branch (IGR Regd No 87/8201800077 of 2018-19) for the Dussehra Ground, Jeypore gathering.',
        year: '2024'
      },
      {
        id: 'koraput-photo-6',
        title: '‘ଧରିତ୍ରୀ’ ଖବରକାଗଜରେ ଜୟପୁର ଆଧ୍ୟାତ୍ମିକ ସମାବେଶ ଓ ନଗର ସଂକୀର୍ତ୍ତନ',
        subTitle: 'The Dharitri Press Coverage — Jeypore Grand Nagar Sankirtan Shobhayatra',
        src: 'assets/images/koraput-jeypore-nagar-sankirtan-shobhayatra.jpg',
        desc: 'Extensive reportage by The Dharitri showing MLAs Tara Prasad Bahinipati, Raghuram Majhi, and Parishad President Sidhartha Sankar Swain leading massive Harinam street procession from Jeypore Jagannath Mandir.',
        year: '2024'
      },
      {
        id: 'koraput-photo-7',
        title: '‘ସମ୍ବାଦ’ ଖବରକାଗଜରେ ଦଶହରା ପଡ଼ିଆ ମହାସମାବେଶ',
        subTitle: 'The Sambad Press Coverage — Dussehra Padia Grand Congregation',
        src: 'assets/images/koraput-sambad-mahasamabesa-darshan.jpg',
        desc: 'Front-page publication by The Sambad: "କଳିଯୁଗର ସୁରକ୍ଷା କବଚ ସଂକୀର୍ତ୍ତନ ମହାମନ୍ତ୍ର" featuring the grand dais and thousands of congregational devotees at Jeypore Dussehra Padia.',
        year: '2024'
      },
      {
        id: 'koraput-photo-8',
        title: '‘ଆର୍ଗସ ନ୍ୟୁଜ’ରେ ଆଦିବାସୀ ଲୋକନୃତ୍ୟ ସଚେତନତା ପ୍ରସାରଣ',
        subTitle: 'Argus News Telecast — Chadeia Folk Dance Social Awareness',
        src: 'assets/images/koraput-chadeia-dance-broadcast-thumb.jpg',
        desc: 'Argus News television broadcast snapshot highlighting traditional Chadeia-Chadeiani folk dance performance for social awareness and indigenous art preservation patronized by Parishad leadership.',
        year: '2024'
      }
    ],
    videoCount: 1,
    videos: [
      {
        id: 'koraput-video-1',
        title: 'ଆଦିବାସୀ ଚଢେଇଆ-ଚଢେଇଆଣୀ ଲୋକନୃତ୍ୟ ଓ ସଚେତନତା (Tribal Folk Dance Awareness - Argus News)',
        subTitle: 'Traditional Indigenous Folk Dance & Cultural Heritage Awareness Broadcast',
        src: 'assets/videos/koraput-tribal-folk-dance-awareness-argus.mp4',
        desc: 'Official television broadcast on Argus News: Traditional Chadeia-Chadeiani tribal folk dance awareness performance showcasing indigenous artistes, folk music, and cultural revival under the patronage of Sri Sri Jagannath Nam Sankirtan Loka Kala Parishad Odisha.',
        sizeBadge: '44 MB HD MP4'
      }
    ]
  },
  {
    id: 'nabrangpur',
    name: 'Nabarangpur',
    subName: 'ନବରଙ୍ଗପୁର • Southern Odisha Cultural & Youth Kendra',
    coordinator: 'Indravati Teer Sankirtan Parishad & District Samabesa Seva Sangha',
    contact: '+91 94375 XXXXX',
    badge: 'Sankirtan Kendra',
    activities: [
      'Mass congregational Harinam Samavesh on the banks of river Indravati',
      'District Level Sankirtan and Loka Kala Samabesa uniting 328+ village mandalis',
      'Gramin Sanskar Kendra imparting Gita shlokas and character education',
      'Preservation of traditional tribal Desia, Dhemsa folk arts & musical instruments',
      'Monthly village Parikrama and community prasad distribution'
    ],
    photoCount: 14,
    photos: [
      {
        id: 'nab-photo-1',
        title: 'ଜିଲ୍ଲାପାଳଙ୍କ ସହ ଆଲୋଚନା ଓ ଉତ୍ତରୀୟ ପ୍ରଦାନ',
        subTitle: 'Delegation Meeting with District Magistrate & Collector, Nabarangpur',
        src: 'assets/images/nabarangpur-collector-meeting.jpg',
        desc: 'Parishad leadership presenting ceremonial Uttariya and extending auspicious invitation to District Collector & Magistrate Shri Maheswar Swain, IAS, for the District Sankirtan & Loka Kala Samabesa.',
        year: '2024'
      },
      {
        id: 'nab-photo-2',
        title: 'ଉପଜିଲ୍ଲାପାଳଙ୍କୁ ସମ୍ମାନ ଓ ସ୍ୱାଗତ',
        subTitle: 'Meeting with Sub-Collector & SDM, Nabarangpur',
        src: 'assets/images/nabarangpur-subcollector-meeting.jpg',
        desc: 'State President Sri Sidhartha Sankar Swain and parishad delegation meeting Sub-Collector Shri Prasanta Kumar Rout with ceremonial floral greeting and samabesa outline.',
        year: '2024'
      },
      {
        id: 'nab-photo-3',
        title: 'ଚାମୁରିଆଗୁଡ଼ା ଭୈରବ ମନ୍ଦିର ପ୍ରାଙ୍ଗଣରେ ମଣ୍ଡଳୀ ସମାବେଶ',
        subTitle: 'Kirtan Mandalis & Folk Artistes Congregation at Bhairav Temple',
        src: 'assets/images/nabarangpur-mandali-temple-gathering.jpg',
        desc: 'Hundreds of village sankirtaniyas, dholak vadakas, and traditional folk artistes assembling with official parishad banner at Chamuriaguda Bhairav temple before the grand shobhayatra.',
        year: '2024'
      },
      {
        id: 'nab-photo-4',
        title: 'ରାଜ୍ୟ ଓ ଜିଲ୍ଲା କର୍ମକର୍ତ୍ତାଙ୍କ ସହ ମଞ୍ଚାସୀନ ମହାସମାବେଶ',
        subTitle: 'Grand Dais Congregation with MLAs, Sadhus & Parishad Leaders',
        src: 'assets/images/nabarangpur-samabesa-stage-bhaktas.jpg',
        desc: 'Distinguished dignitaries on stage including District Planning Board Chairman & MLA Gouri Sankar Majhi, Dabugam MLA Manohar Randhari, Puri Mahant Dibyananda Das, Vrindavan Acharya Avishesha Pathak, and State President Sidhartha Sankar Swain.',
        year: '2024'
      },
      {
        id: 'nab-photo-5',
        title: 'ନବରଙ୍ଗପୁର ଜିଲ୍ଲାସ୍ତରୀୟ ସଂକୀର୍ତ୍ତନ ଓ ଲୋକ କଳା ସମାବେଶ ମୁଖ୍ୟ ବ୍ୟାନର',
        subTitle: 'Official Sammilani Graphic with Holy Trinity & IGR Regd No',
        src: 'assets/images/nabarangpur-parishad-banner-deities.jpg',
        desc: 'Official banner of Sri Sri Jagannath Nama Sankirtan Loka Kala Parishad Odisha, District Branch Nabarangpur (IGR Regd No 87/8201800077 of 2018-19) featuring Mahaprabhu Jagannath, Balabhadra, Subhadra, and Sudarshan.',
        year: '2024'
      },
      {
        id: 'nab-photo-6',
        title: 'ସହର ପରିକ୍ରମା ମହା ଶୋଭାଯାତ୍ରା ଓ ହରିନାମ ସଂକୀର୍ତ୍ତନ',
        subTitle: 'Massive Nagar Sankirtan Shobhayatra Across Nabarangpur Town',
        src: 'assets/images/nabarangpur-shobhayatra-nagar-parikrama.jpg',
        desc: 'Spectacular street procession of 328 village kirtan groups dancing with khol, kartal, jhanja, and saffron flags along Nabarangpur main thoroughfares to PM Shri Raja Chaitanya Deb grounds.',
        year: '2024'
      },
      {
        id: 'nab-photo-7',
        title: 'ପୁରୀ ମହନ୍ତ ଓ ବୃନ୍ଦାବନ ଆଚାର୍ଯ୍ୟଙ୍କ ସହ ସାଧୁ ସମ୍ମିଳନୀ',
        subTitle: 'Revered Vaishnava Acharyas & Gurus at Samabesa Pandal',
        src: 'assets/images/nabarangpur-sadhu-sants-pandal-darshan.jpg',
        desc: 'Revered Mahants, sannyasis, and senior acharyas blessing devotees under the ceremonial pandal pavilion with sacred discourses and divine kirtan.',
        year: '2024'
      },
      {
        id: 'nab-photo-8',
        title: '‘ସମାଜ’ ଖବରକାଗଜରେ ୩୨୮ ସଂକୀର୍ତ୍ତନ ମଣ୍ଡଳୀ ଶୋଭାଯାତ୍ରା',
        subTitle: 'The Samaja Press Coverage — 328 Mandalis Shobhayatra & Sammilani',
        src: 'assets/images/nabarangpur-samaja-press-coverage.jpg',
        desc: 'Front-page publication by renowned daily The Samaja detailing the 3rd annual district session with 328 sankirtan and folk troupes at Mini Stadium, attended by District Collector Shri Maheswar Swain, IAS and MP Ramesh Chandra Majhi.',
        year: '2024'
      },
      {
        id: 'nab-photo-9',
        title: '‘ପ୍ରମେୟ’ ଖବରକାଗଜରେ ଆଦିବାସୀ ନୃତ୍ୟର ବିଶେଷ ଆକର୍ଷଣ',
        subTitle: 'The Prameya Press Coverage — Traditional Tribal Folk Dance',
        src: 'assets/images/nabarangpur-prameya-tribal-dance.jpg',
        desc: 'Feature report in The Prameya celebrating the preservation of indigenous culture: tribal artistes performing traditional Rinjha, Dhemsa, and Desia folk dances alongside Harinam Sankirtan.',
        year: '2024'
      },
      {
        id: 'nab-photo-10',
        title: '‘ସମ୍ବାଦ’ ଖବରକାଗଜରେ ଜିଲ୍ଲାସ୍ତରୀୟ ସଂକୀର୍ତ୍ତନ ଓ ଲୋକକଳା ମହାସମାବେଶ',
        subTitle: 'The Sambad Press Coverage — District Level Grand Assembly',
        src: 'assets/images/nabarangpur-sambad-mahasamabesa-press.jpg',
        desc: 'Prominent reportage by The Sambad highlighting the arrival of 328 mandalis from 10 blocks, speeches by dignitaries on spiritual upliftment, and upcoming Bhagavat patha & blood donation camps.',
        year: '2024'
      },
      {
        id: 'nab-photo-11',
        title: '‘ଧରିତ୍ରୀ’ ଖବରକାଗଜରେ ୩୨୮ ସଂକୀର୍ତ୍ତନ ଦଳଙ୍କୁ ଉତ୍ତରୀୟ ସମ୍ବର୍ଦ୍ଧନା',
        subTitle: 'The Dharitri Press Coverage — Ceremonial Uttariya Felicitation',
        src: 'assets/images/nabarangpur-dharitri-mandali-felicitation.jpg',
        desc: 'Extensive media coverage by leading daily Dharitri reporting on the ceremonial honoring and Uttariya felicitation of representatives from all 328 participating sankirtan and folk groups.',
        year: '2024'
      },
      {
        id: 'nab-photo-12',
        title: 'ମାନ୍ୟବର କ୍ୟାବିନେଟ ମନ୍ତ୍ରୀ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଗଣ୍ଡଙ୍କୁ ସ୍ମାରକପତ୍ର ପ୍ରଦାନ',
        subTitle: 'Memorandum Submission to Hon’ble Cabinet Minister Shri Nityananda Gond',
        src: 'assets/images/nabarangpur-minister-memorandum-review.jpg',
        desc: 'Parishad delegation and rural kirtan leaders presenting demand letter and memorandum to Hon’ble Cabinet Minister Shri Nityananda Gond (Minister of School & Mass Education, ST & SC Development, Minorities & Backward Classes Welfare, Govt. of Odisha) for the welfare and patronization of traditional sankirtaniyas and tribal folk artistes.',
        year: '2024'
      },
      {
        id: 'nab-photo-13',
        title: 'ମାନ୍ୟବର କ୍ୟାବିନେଟ ମନ୍ତ୍ରୀ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଗଣ୍ଡଙ୍କ ସହ ଚାର୍ଟର ସମୀକ୍ଷା',
        subTitle: 'Charter & Demands Review with Hon’ble Cabinet Minister Shri Nityananda Gond',
        src: 'assets/images/nabarangpur-dignitaries-kirtan-leaders-assembly.jpg',
        desc: 'Rural sankirtan mandali leaders and Parishad sevaks reviewing cultural preservation charter and memorandum demands with Hon’ble Cabinet Minister Shri Nityananda Gond (Minister of School & Mass Education, ST & SC Development, Minorities & Backward Classes Welfare, Govt. of Odisha) at Nabarangpur.',
        year: '2024'
      },
      {
        id: 'nab-photo-14',
        title: '‘ସକାଳ’ ଖବରକାଗଜରେ କୋଷାଗୁମୁଡ଼ା-ତିରମା ଚଢେଇଆ ନୃତ୍ୟ ସଚେତନତା',
        subTitle: 'The Sakala Press Coverage — Koshagumuda Tribal Folk Dance Revival',
        src: 'assets/images/nabarangpur-sakala-chadeia-dance-press.jpg',
        desc: 'Special news feature in daily The Sakala highlighting the revival and social awareness of indigenous Chadeia-Chadeiani folk dance organized at Tirma, Koshagumuda block, Nabarangpur district, supported by Parishad leadership.',
        year: '2024'
      }
    ],
    videos: [
      {
        id: 'nab-video-1',
        title: 'ନବରଙ୍ଗପୁର ଜିଲ୍ଲାସ୍ତରୀୟ ସଂକୀର୍ତ୍ତନ ମହାସମାବେଶ ଓ ଶୋଭାଯାତ୍ରା (Nabarangpur Maha Sankirtan Shobhayatra - Part 1)',
        subTitle: '328 Sankirtan & Folk Art Mandalis Street Procession',
        src: 'assets/videos/nabarangpur-sankirtan-samabesa-video-1.mp4',
        desc: 'Vibrant congregational Harinam Nagar Sankirtan with traditional mridanga, jhanja, dhol, and hundreds of village kirtaniyas marching through Nabarangpur.',
        sizeBadge: '14 MB HD MP4'
      },
      {
        id: 'nab-video-2',
        title: 'ନବରଙ୍ଗପୁର ଆଦିବାସୀ ଲୋକନୃତ୍ୟ ଓ ଢେମସା ସେବା (Nabarangpur Traditional Tribal Folk Dance - Part 2)',
        subTitle: 'Indigenous Folk Artistes Performing Traditional Desia & Dhemsa Dance',
        src: 'assets/videos/nabarangpur-sankirtan-samabesa-video-2.mp4',
        desc: 'Authentic tribal cultural preservation and folk dance performance by indigenous artistes celebrating Mahaprabhu Jagannath with traditional attire and instruments.',
        sizeBadge: '9 MB HD MP4'
      },
      {
        id: 'nab-video-3',
        title: 'ନବରଙ୍ଗପୁର ମହାମଞ୍ଚ ସଂକୀର୍ତ୍ତନ ଓ ଭକ୍ତ ସମାଗମ (Nabarangpur Stage Congregation & Harinam - Part 3)',
        subTitle: 'Grand Stage Gathering & Congregational Chanting',
        src: 'assets/videos/nabarangpur-sankirtan-samabesa-video-3.mp4',
        desc: 'Devotees and artistes singing the Maha-mantra together before the sacred deities on the grand pavilion stage at PM Shri Raja Chaitanya Deb grounds.',
        sizeBadge: '6 MB HD MP4'
      }
    ]
  },
  {
    id: 'dhenkanal',
    name: 'Dhenkanal',
    subName: 'ଢେଙ୍କାନାଳ • Kapilash & Mahima Peetha Devotional Wing',
    coordinator: 'Kapilash Kshetra Bhakti Parishad & Dhenkanal District Branch',
    contact: '+91 94382 XXXXX',
    badge: 'Lok Kala & Heritage',
    activities: [
      'District Level Sankirtan Mahasamabesa in Zilla Parishad Hall with 20,000+ devotees',
      'Administrative coordination with District Collector for dedicated Sankirtan Mandap & land',
      'Grand Nagar Sankirtan Shobhayatra authorized by Sub-Collector & SDM Dhenkanal',
      'Revival & preservation of traditional Odia Pala, Daskathia & rural folk arts',
      'District & municipal working committee meetings at sacred Sri Sri Dadhi Vaman Temple'
    ],
    photoCount: 10,
    photos: [
      {
        id: 'dhenkanal-photo-1',
        title: 'ଢେଙ୍କାନାଳ ଜିଲ୍ଲା ସଂକୀର୍ତ୍ତନ ମହାସମାବେଶ ସରକାରୀ ନିମନ୍ତ୍ରଣ ପତ୍ର',
        subTitle: 'Official Invitation Card — Dhenkanal District Sankirtan Mahasamabesa',
        src: 'assets/images/dhenkanal-official-invitation-card-2022.jpg',
        desc: 'Official printed invitation card for the historic Dhenkanal District Sankirtan Mahasamabesa held at Old Zilla Parishad Hall, featuring District Collector Saroj Kumar Sethi, IAS as Chief Guest and Parishad leadership.',
        year: '2022'
      },
      {
        id: 'dhenkanal-photo-2',
        title: 'ଉପଜିଲ୍ଲାପାଳ ଓ ଏସ.ଡି.ଏମ.ଙ୍କ ଶୋଭାଯାତ୍ରା ପ୍ରଶାସନିକ ଅନୁମୋଦନ ଆଦେଶ',
        subTitle: 'Official SDM Judicial Order — Kirtan Mandali Procession Permission',
        src: 'assets/images/dhenkanal-sdm-procession-govt-order-2022.jpg',
        desc: 'Statutory administrative order from the Office of Sub-Collector & SDM Dhenkanal formally authorizing District President Siddhartha Sankar Swain for the grand Kirtan Mandali procession and loudspeaker usage.',
        year: '2022'
      },
      {
        id: 'dhenkanal-photo-3',
        title: '‘ସଂକୀର୍ତ୍ତନ ପାଇଁ ଖୁବ୍‌ଶୀଘ୍ର ଗୃହ’ — ଜିଲ୍ଲା ମହାସମାବେଶ',
        subTitle: 'Press Coverage — District Sankirtan Mahasamabesa in Zilla Parishad Hall',
        src: 'assets/images/dhenkanal-district-sankirtan-mahasamabesa-press.jpg',
        desc: 'Official newspaper coverage of the grand Dhenkanal District Jagannath Nam Sankirtan Mahasamabesa in Old Zilla Parishad Conference Hall, inaugurated by District Collector Saroj Kumar Sethi, IAS, with massive Harinam Shobhayatra.',
        year: '2022'
      },
      {
        id: 'dhenkanal-photo-4',
        title: 'ନାମ ସଂକୀର୍ତ୍ତନ ପାଇଁ ଜାଗା ଓ ଘରର ବ୍ୟବସ୍ଥା — ଜିଲ୍ଲାପାଳଙ୍କ ସମ୍ବର୍ଦ୍ଧନା',
        subTitle: 'Collector Saroj Kumar Sethi Announcing Dedicated Mandap & Land Support',
        src: 'assets/images/dhenkanal-collector-kirtan-mandap-press.jpg',
        desc: 'Dhenkanal District Collector Saroj Kumar Sethi, IAS, and District President Sidhartha Sankar Swain at the massive gathering of 20,000+ kirtaniyas across 8 blocks and 3 NACs.',
        year: '2022'
      },
      {
        id: 'dhenkanal-photo-5',
        title: 'ଜିଲ୍ଲା ପରିଷଦ ହଲରେ ବିଶାଳ ଭକ୍ତ ସମାବେଶ ଓ ମହିଳା ସଂକୀର୍ତ୍ତନ ଶୋଭାଯାତ୍ରା',
        subTitle: 'Packed Auditorium Congregation & Vibrant Women Sankirtan Procession',
        src: 'assets/images/dhenkanal-hall-congregation-women-shobhayatra.jpg',
        desc: 'Ground photographic archive of the packed Zilla Parishad conference hall with hundreds of devotees, traditional women sankirtan mandalis marching in traditional attire, and signed validation by District President Sidhartha Sankar Swain.',
        year: '2022'
      },
      {
        id: 'dhenkanal-photo-6',
        title: 'ଜିଲ୍ଲା ସଭାପତି ଶ୍ରୀ ସିଦ୍ଧାର୍ଥ ଶଙ୍କର ସ୍ୱାଇଁଙ୍କ ଅଭିଭାଷଣ ଓ ମଞ୍ଚ କାର୍ଯ୍ୟକ୍ରମ',
        subTitle: 'Presidential Address by Sidhartha Sankar Swain & Dignitaries on Dais',
        src: 'assets/images/dhenkanal-presidential-address-dais-proceedings.jpg',
        desc: 'District President Sri Sidhartha Sankar Swain delivering presidential address from the podium, Lord Jagannath prayer rituals, and distinguished dais proceedings with state cultural leadership.',
        year: '2022'
      },
      {
        id: 'dhenkanal-photo-7',
        title: 'ନଗର ସଂକୀର୍ତ୍ତନ ଶୋଭାଯାତ୍ରା ଓ ମୁଖ୍ୟ ବ୍ୟାନର ସମ୍ମିଳନୀ ମଞ୍ଚ',
        subTitle: 'Nagar Sankirtan Open-Jeep Procession & Executive Dais Congregation',
        src: 'assets/images/dhenkanal-nagar-sankirtan-dais-leaders-collage.jpg',
        desc: 'Historic collage documenting open-vehicle Harinam procession with leaders in prayer posture, Biju Patnaik memorial homage, and full 7-dignitary dais assembly in front of the Parishad banner.',
        year: '2022'
      },
      {
        id: 'dhenkanal-photo-8',
        title: 'ଢେଙ୍କାନାଳ ସହର ପରିକ୍ରମା ଶୋଭାଯାତ୍ରା ଓ ସମାବେଶ ରେକର୍ଡ',
        subTitle: 'Town Parikrama Street March & Convention Archival Endorsement',
        src: 'assets/images/dhenkanal-grand-shobhayatra-samabesa-archive.jpg',
        desc: 'Archival photographic record showcasing extensive street shobhayatra from Alasua Hata to Zilla Parishad Hall, audience devotion, and official sign-off by District President Sidhartha Sankar Swain.',
        year: '2022'
      },
      {
        id: 'dhenkanal-photo-9',
        title: 'ସାଂସଦ ମହେଶ ସାହୁଙ୍କ ମୁଖ୍ୟ ଆତିଥ୍ୟରେ ପରିଷଦର କାର୍ଯ୍ୟକାରୀ ବୈଠକ',
        subTitle: 'Executive Meeting with Dhenkanal MP Shri Mahesh Sahoo',
        src: 'assets/images/dhenkanal-mp-mahesh-sahoo-executive-meeting.jpg',
        desc: 'Dhenkanal MP Shri Mahesh Sahoo addressing the executive council meeting of Sri Sri Jagannath Nam Sankirtan Parishad on Jagannath culture preservation, presided over by District President Sidhartha Sankar Swain.',
        year: '2024'
      },
      {
        id: 'dhenkanal-photo-10',
        title: 'ଶ୍ରୀ ଶ୍ରୀ ଦଧିବାମନ ମନ୍ଦିର ପ୍ରସ୍ତୁତି ବୈଠକ — ଜାଗ୍ରତ ଭାରତ ନ୍ୟୁଜ',
        subTitle: 'Jagrat Bharat News — Preparatory Meeting at Sacred Dadhi Vaman Temple, Rathgada',
        src: 'assets/images/dhenkanal-dadhi-vaman-temple-preparatory-meet.jpg',
        desc: 'Special news report on the preparatory committee assembly at sacred Dadhi Vaman temple premises, Rathgada, Dhenkanal, chaired by District President Sidhartha Sankar Swain for district-wide sankirtan coordination.',
        year: '2024'
      }
    ]
  },
  {
    id: 'sambalpur',
    name: 'Sambalpur',
    subName: 'ସମ୍ବଲପୁର • Western Odisha Lok Kala & Mridanga Hub',
    coordinator: 'Maa Samaleswari Bhakti Sangha & Sambalpur District Seva Mandali',
    contact: '+91 99380 XXXXX',
    badge: 'Western Odisha Hub',
    activities: [
      'Administrative coordination & patronization of traditional Sambalpuri folk artistes',
      'Paschima Odisha Grand Kirtan Samavesh (50+ Village Mandalis)',
      'Free training camps for youth in traditional Mridanga (Khol) & Jhanja',
      'Gramin Seva Yatra, women kirtan mandali empowerment & evening sanskar camps'
    ],
    photoCount: 4,
    photos: [
      {
        id: 'sambalpur-photo-1',
        title: 'ସମ୍ବଲପୁର ଜିଲ୍ଲାପାଳଙ୍କ ସହ ପ୍ରତିନିଧି ଦଳ ଓ ମହିଳା ମଣ୍ଡଳୀ ଆଲୋଚନା',
        subTitle: 'Parishad Delegation & Women Mandali Meeting with Collector Shri Siddheshwar Baliram Bondar, IAS',
        src: 'assets/images/sambalpur-collector-meeting.jpg',
        desc: 'Parishad State President Sri Sidhartha Sankar Swain along with women kirtan seva mandali representatives in traditional Sambalpuri sarees in official conference with Sambalpur District Collector & Magistrate Shri Siddheshwar Baliram Bondar, IAS.',
        year: '2024'
      },
      {
        id: 'sambalpur-photo-2',
        title: 'ଜିଲ୍ଲାପାଳ ଶ୍ରୀ ସିଦ୍ଧେଶ୍ୱର ବଳିରାମ ବୋନ୍ଦାର, IASଙ୍କୁ ପୁଷ୍ପଗୁଚ୍ଛ ଓ ଉତ୍ତରୀୟ ସମ୍ବର୍ଦ୍ଧନା',
        subTitle: 'Ceremonial Bouquet & Uttariya Felicitation to District Collector Shri Siddheshwar Baliram Bondar, IAS',
        src: 'assets/images/sambalpur-collector-felicitation-closeup.jpg',
        desc: 'Auspicious close-up darshan of Parishad State President Sri Sidhartha Sankar Swain and women sankirtan mandali leader presenting ceremonial sacred floral bouquet, traditional Sambalpuri handloom gift pack, and uttariya to Sambalpur Collector & DM Shri Siddheshwar Baliram Bondar, IAS.',
        year: '2024'
      },
      {
        id: 'sambalpur-photo-3',
        title: 'ମା’ ସମଲେଶ୍ଵରୀ ମହୋତ୍ସବ ସଂକୀର୍ତ୍ତନ ସମାବେଶ',
        subTitle: 'Maa Samaleswari Mahotsav Kirtan Samavesh',
        src: 'assets/images/sambalpur-kirtan-samavesh.svg',
        desc: 'Western Odisha grand congregational sankirtan where 50+ village mandalis unite in rhythmic devotion.',
        year: '2025'
      },
      {
        id: 'sambalpur-photo-4',
        title: 'ପାରମ୍ପରିକ ଖୋଳ-ମୃଦଙ୍ଗ ଓ ଝାଞ୍ଜ ପ୍ରଶିକ୍ଷଣ ଶିବିର',
        subTitle: 'Traditional Mridanga (Khol) & Folk Rhythm Training Camp',
        src: 'assets/images/sambalpur-mridanga-seva.svg',
        desc: 'Free residential workshop empowering rural youth and folk artistes in the traditional percussion rhythms of Sri Jagannath sankirtan.',
        year: '2024'
      }
    ]
  },
  {
    id: 'khordha',
    name: 'Khordha (Bhubaneswar)',
    subName: 'ଖୋର୍ଦ୍ଧା • Barunei Peetha & Central Secretariat',
    coordinator: 'Shri Sidhartha Sankar Swain (President)',
    contact: '+91 94376 03767',
    badge: 'Central & Youth Wing',
    activities: [
      'Weekly Central Harinam Prabhat Pheri & Sankirtan rally across Bhubaneswar-Khordha',
      'Statutory coordination with Police Commissionerate & Govt. of India MoSJ&E',
      'Srimad Bhagavad Gita & Bhagavata discourses for college youth',
      'Free spiritual literature distribution and authentic Lok Kala preservation'
    ],
    photoCount: 2
  },
  {
    id: 'balasore',
    name: 'Balasore',
    subName: 'ବାଲେଶ୍ୱର • Khirachora Gopinath & Coastal Heritage',
    coordinator: 'Baleswar Bhakti Sankirtan Parishad & District Seva Samiti',
    contact: '+91 94371 XXXXX',
    badge: 'Coastal Heritage',
    activities: [
      'Administrative coordination & patronization of Balasore district folk artistes',
      'Khirachora Gopinath Kshetra Grand Nagar Sankirtan & Remuna Parikrama',
      'Coastal fishermen community Annadan & devotional welfare seva',
      'Preservation of northern Odisha Vaishnava kirtan & traditional pala heritage'
    ],
    photoCount: 4,
    photos: [
      {
        id: 'balasore-photo-1',
        title: 'ବାଲେଶ୍ୱର ଜିଲ୍ଲାପାଳଙ୍କୁ ସ୍ମାରକପତ୍ର ପ୍ରଦାନ ଓ ପ୍ରଶାସନିକ ଆଲୋଚନା',
        subTitle: 'Memorandum Submission & Official Summit with District Magistrate & Collector, Balasore',
        src: 'assets/images/balasore-collector-memorandum.jpg',
        desc: 'Parishad leadership submitting official representation and memorandum to the District Collector & Magistrate Balasore at the Collectorate office for safeguarding folk artistes, sankirtan mandalis, and heritage preservation.',
        year: '2024'
      },
      {
        id: 'balasore-photo-2',
        title: 'ଜିଲ୍ଲାପାଳଙ୍କୁ ଅଭିନନ୍ଦନ ପତ୍ର ଓ ସମ୍ବର୍ଦ୍ଧନା ସ୍ମାରକୀ ପ୍ରଦାନ',
        subTitle: 'Presenting Honorary Felicitation Citation & Memento to Balasore Collector',
        src: 'assets/images/balasore-collector-felicitation-citation.jpg',
        desc: 'Parishad representatives presenting the official framed Felicitation Citation (ଅଭିନନ୍ଦନ ପତ୍ର) and honorary memento to the District Magistrate & Collector Balasore in recognition of administrative support for spiritual and cultural activities.',
        year: '2024'
      },
      {
        id: 'balasore-photo-3',
        title: 'କ୍ଷୀରଚୋରା ଗୋପୀନାଥ ନଗର ସଂକୀର୍ତ୍ତନ',
        subTitle: 'Khirachora Gopinath Nagar Kirtan & Heritage Parikrama',
        src: 'assets/images/balasore-kirtan-samaroh.svg',
        desc: 'Grand congregational Harinam procession around the historic Remuna & Balasore heritage peethas.',
        year: '2025'
      },
      {
        id: 'balasore-photo-4',
        title: 'ଉପକୂଳବର୍ତ୍ତୀ ସାଧୁ ଓ ତୀର୍ଥଯାତ୍ରୀ ଅନ୍ନଦାନ ସେବା',
        subTitle: 'Coastal Pilgrim & Fishermen Community Annadan Seva',
        src: 'assets/images/balasore-annadan-seva.svg',
        desc: 'Free nutritious Mahaprasad distribution to coastal fishermen communities and visiting pilgrims.',
        year: '2024'
      }
    ]
  },
  {
    id: 'mayurbhanj',
    name: 'Mayurbhanj',
    subName: 'ମୟୂରଭଞ୍ଜ • Dwitiya Srikhetra Baripada Chapter',
    coordinator: 'Haribaldev Jew Seva Dal & Tribal Kirtan Mandal',
    contact: '+91 94372 XXXXX',
    badge: 'Dwitiya Srikhetra',
    activities: [
      'Dwitiya Srikhetra Baripada Ratha Yatra Grand Sankirtan procession',
      'Tribal devotional music and Santhal-Odia devotional cultural confluence',
      'Gramin sanskar camps across Similipal peripheral villages',
      'Assistance to indigenous folk music artistes and instrument makers'
    ],
    photoCount: 2
  },
  {
    id: 'jagatsinghpur',
    name: 'Jagatsinghpur',
    subName: 'ଜଗତସିଂହପୁର • Maa Sarala Peetha & Coastal Seva',
    coordinator: 'Sarala Kshetra Sankirtan Mandali',
    contact: '+91 94373 XXXXX',
    badge: 'Sarala Peetha',
    activities: [
      'Maa Sarala Peetha Morning Prabhat Pheri and Harinam rallies',
      'Mahanadi Delta coastal cyclone & flood relief Annadan seva',
      'Traditional Odia Sarala Mahabharat devotional reading camps',
      'Village temple restoration and community cleanliness seva'
    ],
    photoCount: 2
  },
  {
    id: 'cuttack',
    name: 'Cuttack',
    subName: 'କଟକ • Millennium City & Mahanadi Yajna Kendra',
    coordinator: 'Mahanadi Teer Harinam Mandal',
    contact: '+91 97780 XXXXX',
    badge: 'Mahanadi Kendra',
    activities: [
      '24-Hour Akhanda Harinam Mahayajna on Mahanadi Gadagadia Ghat',
      'State level Pala, Daskathia, and classical Odissi bhajan festival',
      'Continuous Annadan and emergency community relief drives',
      'Training workshops for authentic Odia Khol and Kartal rhythms'
    ],
    photoCount: 2
  },
  {
    id: 'sundargarh',
    name: 'Sundargarh',
    subName: 'ସୁନ୍ଦରଗଡ଼ • Vedavyas & Northern Forest Tribal Wing',
    coordinator: 'Vedavyas Sangam Sankirtan Parishad',
    contact: '+91 94374 XXXXX',
    badge: 'Tribal & Youth Wing',
    activities: [
      'Vedavyas Triveni Sangam Akhanda Harinam Sankirtan Yatra',
      'Tribal village outreach and moral education shivirs across Sundargarh',
      'Youth Bhagavad Gita study circles in college and mining belts',
      'Distribution of clothes, books, and mridanga to rural mandalis'
    ],
    photoCount: 2
  },
  {
    id: 'nuapada',
    name: 'Nuapada',
    subName: 'ନୂଆପଡ଼ା • Yogeswar Peetha & Border Seva Chapter',
    coordinator: 'Yogeswar Temple Bhakti Mandali',
    contact: '+91 94376 XXXXX',
    badge: 'Gramin Seva Hub',
    activities: [
      'Yogeswar Peetha border village Harinam Samavesh and Rath Yatra',
      'Drought-prone area community grain bank and free cooked meals',
      'Tribal folklore bhajan preservation and evening prayer centers',
      'Youth moral upliftment and drug-free society awareness drives'
    ],
    photoCount: 2
  },
  {
    id: 'balangir',
    name: 'Balangir',
    subName: 'ବଲାଙ୍ଗୀର • Harishankar & Gandhamardan Cultural Peetha',
    coordinator: 'Gandhamardan Harinam Samiti',
    contact: '+91 94377 XXXXX',
    badge: 'Gandhamardan Hub',
    activities: [
      'Harishankar Kshetra Gandhamardan foothills Akhanda Kirtan Yajna',
      'Western Odisha folk bhajan sammelan and traditional Dalkhai-bhakti arts',
      'Traditional herbal health & Annadan camps for visiting pilgrims',
      'Empowering rural youth with devotional instrument playing skills'
    ],
    photoCount: 2
  },
  {
    id: 'boudh',
    name: 'Boudh',
    subName: 'ବୌଦ୍ଧ • Central Mahanadi Heritage & Sadhu Seva',
    coordinator: 'Boudh Jagannath Temple Parishad',
    contact: '+91 94378 XXXXX',
    badge: 'Mahanadi Heritage',
    activities: [
      'Mahanadi river valley ancient temple parikrama and Harinam yatra',
      'Sadhu, ascetic, and visiting pilgrim seva and Mahaprasad feasts',
      'Preservation of century-old Odia palm-leaf devotional literature',
      'Village tree plantation and sacred pond renovation seva'
    ],
    photoCount: 2
  },
  {
    id: 'bargarh',
    name: 'Bargarh',
    subName: 'ବରଗଡ଼ • Dhanu Yatra & Nrusinghanath Devotional Hub',
    coordinator: 'Dhanu Yatra Bhakti Samiti & Nrusinghanath Mandal',
    contact: '+91 94379 XXXXX',
    badge: 'Dhanu Yatra Hub',
    activities: [
      'World famous Dhanu Yatra Mahotsav mass Harinam procession',
      'Nrusinghanath Kshetra sacred stream parikrama and kirtan camp',
      'Agricultural community devotional unity and sanskar gatherings',
      'Free mridanga instrument distribution to 25+ farmer kirtan mandalis'
    ],
    photoCount: 2
  },
  {
    id: 'jharsuguda',
    name: 'Jharsuguda',
    subName: 'ଝାରସୁଗୁଡ଼ା • Brajrajnagar & Paschima Odisha Industrial-Tribal Sankirtan Peetha',
    coordinator: 'Jharsuguda District Seva Sangha & Mridanga Mandali Acharyas',
    contact: '+91 94378 XXXXX',
    badge: 'Paschima Odisha Kirtan',
    activities: [
      'Grand Nagar Sankirtan & Prabhat Pheri across Jharsuguda, Brajrajnagar & Belpahar',
      'Preservation of traditional Sambalpuri-Jagannath folk kirtan & Dhol-Nishan seva',
      'Gramin Annadan seva shivir & warm clothes distribution for industrial and rural laborers',
      'Youth Mridanga (Khol) training camps and Ramachandi-Jagannath satsang sabhas'
    ],
    photoCount: 4,
    photos: [
      {
        id: 'jharsuguda-photo-1',
        title: 'ଝାରସୁଗୁଡ଼ା ମହିଳା ସଂକୀର୍ତ୍ତନ ସେବା ମଣ୍ଡଳୀର ମହାସମାବେଶ',
        subTitle: 'Grand Assembly of Jharsuguda Women Sankirtan Seva Mandali',
        src: 'assets/images/jharsuguda-women-sankirtan-samavesh.jpg',
        desc: 'Parishad State President Sri Sidhartha Sankar Swain with the vibrant Jharsuguda women sankirtan seva mandali in traditional Sambalpuri handloom sarees, dedicated to preserving Western Odisha Harinam folk traditions.',
        year: '2024'
      },
      {
        id: 'jharsuguda-photo-2',
        title: 'ଝାରସୁଗୁଡ଼ା ମହିଳା ସଂକୀର୍ତ୍ତନ ମଣ୍ଡଳୀ ଓ କର୍ମକର୍ତ୍ତାଙ୍କ ସହ ଆଲୋଚନା ଓ ସମ୍ବର୍ଦ୍ଧନା',
        subTitle: 'Coordination Meeting & Traditional Cane Bouquet Felicitation',
        src: 'assets/images/jharsuguda-women-mandali-felicitation.jpg',
        desc: 'Parishad State President Sri Sidhartha Sankar Swain being welcomed and felicitated with handcrafted traditional cane bouquets by Jharsuguda women sankirtan seva mandali members and cultural organizers.',
        year: '2024'
      },
      {
        id: 'jharsuguda-photo-3',
        title: 'ଝାରସୁଗୁଡ଼ା ଓ ବ୍ରଜରାଜନଗର ନଗର ସଂକୀର୍ତ୍ତନ',
        subTitle: 'Nagar Sankirtan & Shobhayatra',
        src: 'assets/images/jharsuguda-kirtan-mandali.svg',
        desc: 'Harinam Sankirtan procession through Jharsuguda and Brajrajnagar town peethas with dhol and mridanga.',
        year: '2024'
      },
      {
        id: 'jharsuguda-photo-4',
        title: 'ଗ୍ରାମୀଣ ଅନ୍ନଦାନ ଓ ଆଦିବାସୀ ସେବା ଶିବିର',
        subTitle: 'Gramin Annadan & Seva Shivir',
        src: 'assets/images/jharsuguda-gramin-seva.svg',
        desc: 'Community Annadan and prasada distribution for tribal and rural families in Kolabira and Laikera blocks.',
        year: '2024'
      }
    ]
  },
  {
    id: 'kalahandi',
    name: 'Kalahandi',
    subName: 'କଳାହାଣ୍ଡି • Manikeswari Peetha & Tel Valley Sankirtan Kendra',
    coordinator: 'Kalahandi District Sankirtan Seva Samiti & Maa Manikeswari Mandali',
    contact: '+91 94379 XXXXX',
    badge: 'Manikeswari Peetha',
    activities: [
      'Maa Manikeswari Chhatar Yatra Mahotsav mass Harinam Sankirtan procession',
      'Ancient Tel river valley Jagannath temple parikrama and Prabhat Pheri yatras',
      'Gramin Annadan seva shivir & famine relief grain bank for tribal settlements in Thuamul Rampur',
      'Free Ghanta, Kartal & Mridanga instrument distribution to 20+ village kirtan mandalis'
    ],
    photoCount: 2,
    photos: [
      {
        id: 'kalahandi-photo-1',
        title: 'କଳାହାଣ୍ଡି ମାଣିକେଶ୍ୱରୀ ଛତର ଯାତ୍ରା ସଂକୀର୍ତ୍ତନ',
        subTitle: 'Maa Manikeswari Chhatar Yatra Sankirtan',
        src: 'assets/images/kalahandi-chhatar-yatra.svg',
        desc: 'Ecstatic Harinam Sankirtan procession accompanying Maa Manikeswari during the historic Bhawanipatna Chhatar Yatra.'
      },
      {
        id: 'kalahandi-photo-2',
        title: 'ଥୁଆମୂଳ ରାମପୁର ଗ୍ରାମୀଣ ଅନ୍ନଦାନ ଓ ସେବା ଶିବିର',
        subTitle: 'Thuamul Rampur Gramin Annadan & Seva',
        src: 'assets/images/kalahandi-gramin-seva.svg',
        desc: 'Community Annadan, dry rations and winter blanket distribution for indigenous families across Thuamul Rampur.'
      }
    ]
  }
];

// ==========================================================================
// 2. DEFAULT DATA: 36 Activity Photos across 18 Odisha Districts
// ==========================================================================
let activitiesData = [
  // 1. Puri
  {
    id: 'photo-puri-0',
    title: 'ଶ୍ରୀକ୍ଷେତ୍ର ବଡ଼ଦାଣ୍ଡ ରଥଯାତ୍ରା ଆକାଶ ମାର୍ଗ ଦର୍ଶନ',
    city: 'Puri Dham',
    cityKey: 'puri',
    category: 'sankirtan',
    categoryLabel: 'Ratha Yatra & Harinam',
    year: '2024',
    imageSrc: 'assets/images/puri-badadanda-rath-yatra-aerial-darshan.jpg',
    desc: 'Spectacular aerial night view of holy Nandighosha, Taladhwaja, and Darpadalana chariots on Badadanda surrounded by lakhs of chanting devotees before illuminated Srimandir.',
    location: 'Grand Road (Badadanda), Puri',
    tags: ['Puri', 'Ratha Yatra', 'Badadanda', 'Aerial Darshan', 'Harinam']
  },
  {
    id: 'photo-puri-1',
    title: 'ଶ୍ରୀକ୍ଷେତ୍ର ସିଂହଦ୍ୱାର ପ୍ରତିଦିନ ସଂକୀର୍ତ୍ତନ ମଣ୍ଡଳୀ ଓ ହରିନାମ',
    city: 'Puri Dham',
    cityKey: 'puri',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2024',
    imageSrc: 'assets/images/puri-singhadwara-daily-sankirtan-mandali.jpg',
    desc: 'Daily divine Harinam Sankirtan at holy Sri Jagannath Mandir Singhadwara with senior acharyas and rural mandalis.',
    location: 'Singhadwara & Aruna Stambha, Sri Jagannath Temple, Puri',
    tags: ['Puri', 'Singhadwara', 'Argus News', 'Harinam Sankirtan']
  },
  {
    id: 'photo-puri-2',
    title: 'ପୁରୀ ବଡ଼ଦାଣ୍ଡ ମହିଳା ସଂକୀର୍ତ୍ତନ ମହା ଶୋଭାଯାତ୍ରା',
    city: 'Puri Dham',
    cityKey: 'puri',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2024',
    imageSrc: 'assets/images/puri-badadanda-women-sankirtan-shobhayatra.jpg',
    desc: 'Hundreds of traditional women sankirtan artistes in traditional attire performing Harinam and playing gini on Grand Road.',
    location: 'Badadanda, Puri',
    tags: ['Puri', 'Women Mandali', 'Shobhayatra', 'Badadanda']
  },
  {
    id: 'photo-puri-3',
    title: '‘ଅର୍ଗସ ନ୍ୟୁଜ’ରେ ଶ୍ରୀ ଶ୍ରୀ ଜଗନ୍ନାଥ ନାମ ସଂକୀର୍ତ୍ତନ ଲୋକକଳା ପରିଷଦ',
    city: 'Puri Dham',
    cityKey: 'puri',
    category: 'satsang',
    categoryLabel: 'Media Feature',
    year: '2024',
    imageSrc: 'assets/images/puri-argus-news-parisad-official-broadcast.jpg',
    desc: 'Official television broadcast feature honoring Sri Sri Jagannath Nam Sankirtan Loka Kala Parisad and its leadership.',
    location: 'Srikhetra Puri',
    tags: ['Puri', 'Argus News', 'Official Feature', 'State Leadership']
  },
  {
    id: 'photo-puri-4',
    title: 'ପୁରୀ ବଡ଼ଦାଣ୍ଡରେ ପରିଷଦ ନେତୃତ୍ୱଙ୍କ ଗଣମାଧ୍ୟମ ବକ୍ତବ୍ୟ',
    city: 'Puri Dham',
    cityKey: 'puri',
    category: 'satsang',
    categoryLabel: 'Media Address',
    year: '2024',
    imageSrc: 'assets/images/puri-badadanda-leadership-media-interview.jpg',
    desc: 'Parishad leadership addressing media on Puri Badadanda regarding statewide kirtaniyas welfare and cultural patronization.',
    location: 'Badadanda, Puri',
    tags: ['Puri', 'Media Interview', 'Leadership', 'Badadanda']
  },

  // 2. Malkangiri (Authentic Ground Meeting Photos)
  {
    id: 'photo-malkangiri-1',
    title: 'ମହାସଂକୀର୍ତ୍ତନ ଲୋକକଳା ସମାବେଶ ଶୋଭାଯାତ୍ରା',
    city: 'Malkangiri',
    cityKey: 'malkangiri',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2024',
    imageSrc: 'assets/images/malkangiri-sankirtan-samabesa-procession.jpg',
    desc: 'President Sri Sidhartha Sankar Swain and sevaks carrying Sri Jagannath Mahaprabhu portraits with the official Malkangiri District Samabesa banner in grand street procession.',
    location: 'DNK Road & Main Avenue, Malkangiri Town',
    tags: ['Malkangiri', 'Maha Samabesa', 'Shobhayatra', 'Sri Jagannath']
  },
  {
    id: 'photo-malkangiri-2',
    title: 'ନଗର ସଂକୀର୍ତ୍ତନ ଓ ପରିକ୍ରମା',
    city: 'Malkangiri',
    cityKey: 'malkangiri',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2024',
    imageSrc: 'assets/images/malkangiri-nagar-kirtan-parikrama.jpg',
    desc: 'Grand congregational Harinam Sankirtan procession through Malkangiri town with traditional dhol, mridanga, and sound seva vehicles.',
    location: 'Malkangiri Town & Gramin Peetha',
    tags: ['Malkangiri', 'Nagar Kirtan', 'Parikrama']
  },
  {
    id: 'photo-malkangiri-3',
    title: 'ଭକ୍ତବୃନ୍ଦ ଓ ସେବକ ସମାବେଶ ରାଲି',
    city: 'Malkangiri',
    cityKey: 'malkangiri',
    category: 'lok-kala',
    categoryLabel: 'Lok Kala & Cultural Seva',
    year: '2024',
    imageSrc: 'assets/images/malkangiri-devotees-rally-seva.jpg',
    desc: 'Devotees, village mothers in traditional yellow-red sarees, and youth volunteers actively participating in the district cultural congregation.',
    location: 'Malkangiri Cultural Ground',
    tags: ['Malkangiri', 'Bhakta Rally', 'Lok Kala', 'Youth Seva']
  },
  {
    id: 'photo-malkangiri-4',
    title: 'ସତସଙ୍ଗ ଓ ସାଙ୍ଗଠନିକ ଆଲୋଚନା',
    city: 'Malkangiri',
    cityKey: 'malkangiri',
    category: 'satsang',
    categoryLabel: 'Satsang & Seva Planning',
    year: '2024',
    imageSrc: 'assets/images/malkangiri-maha-samabesa-gathering.jpg',
    desc: 'Devotees and committee members offering pranam and discussing district-wide expansion of village Sankirtan mandalis and Loka Kala preservation.',
    location: 'District Parishad Sabhaghar, Malkangiri',
    tags: ['Malkangiri', 'Satsang', 'Meeting', 'Sankirtan Mandali']
  },
  {
    id: 'photo-malkangiri-5',
    title: 'ହରିବୋଲ ଧ୍ୱନି ଓ ସଂକୀର୍ତ୍ତନ ମୁଦ୍ରା',
    city: 'Malkangiri',
    cityKey: 'malkangiri',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2024',
    imageSrc: 'assets/images/malkangiri-harinam-kirtan-jai-jagannath.jpg',
    desc: 'Devotees raising both arms with holy coconut offering in traditional sankirtan ecstasy, chanting "Hari Bol! Jai Jagannath!" before the parishad banner.',
    location: 'Malkangiri Main Avenue, Malkangiri Town',
    tags: ['Malkangiri', 'Hari Bol', 'Sankirtan Mudra', 'Jai Jagannath']
  },
  {
    id: 'photo-malkangiri-6',
    title: 'ମାଲକାନଗିରି ପରିଷଦ ବ୍ୟାନର ଓ ଭକ୍ତ ସମାବେଶ',
    city: 'Malkangiri',
    cityKey: 'malkangiri',
    category: 'lok-kala',
    categoryLabel: 'Lok Kala & Cultural Seva',
    year: '2024',
    imageSrc: 'assets/images/malkangiri-samabesa-banner-bhaktas.jpg',
    desc: 'Parishad members and local devotees gathered before the official banner showcasing Sri Jagannath deities and district dignitaries.',
    location: 'Malkangiri Town Seva Peetha',
    tags: ['Malkangiri', 'Banner', 'Devotees', 'Lok Kala']
  },

  // 3. Koraput (Real Photos from Official District Samabesa)
  {
    id: 'photo-koraput-1',
    title: 'ଜୟପୁର ଶ୍ରୀ ଜଗନ୍ନାଥ ମନ୍ଦିରରୁ ନଗର ସଂକୀର୍ତ୍ତନ ଶୋଭାଯାତ୍ରା',
    city: 'Koraput',
    cityKey: 'koraput',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2024',
    imageSrc: 'assets/images/koraput-jeypore-nagar-sankirtan-shobhayatra.jpg',
    desc: 'Massive street shobhayatra from holy Jeypore Jagannath temple with thousands of devotees, senior MLAs, and Parishad leadership.',
    location: 'Main Road & Dussehra Padia, Jeypore, Koraput',
    tags: ['Koraput', 'Jeypore', 'Nagar Sankirtan', 'Shobhayatra']
  },
  {
    id: 'photo-koraput-2',
    title: 'ଜିଲ୍ଲାପାଳଙ୍କ ସହ ପ୍ରଶାସନିକ ଆଲୋଚନା ଓ ନିମନ୍ତ୍ରଣ',
    city: 'Koraput',
    cityKey: 'koraput',
    category: 'satsang',
    categoryLabel: 'Official Meeting',
    year: '2024',
    imageSrc: 'assets/images/koraput-collector-meeting.jpg',
    desc: 'Parishad State President Sri Sidhartha Sankar Swain and delegation meeting Koraput Collector Shri Manoj Satyawan Mahajan, IAS.',
    location: 'Collectorate Office, Koraput',
    tags: ['Koraput', 'District Collector', 'Official Meeting']
  },
  {
    id: 'photo-koraput-3',
    title: 'ଚଢେଇଆ-ଚଢେଇଆଣୀ ପାରମ୍ପରିକ ଲୋକକଳା ସଂରକ୍ଷଣ',
    city: 'Koraput',
    cityKey: 'koraput',
    category: 'lok-kala',
    categoryLabel: 'Lok Kala & Music',
    year: '2024',
    imageSrc: 'assets/images/koraput-chadeia-dance-awareness.jpg',
    desc: 'Revival and preservation of authentic tribal Chadeia-Chadeiani folk dance and music across Koraput district villages.',
    location: 'Kotpad & Jeypore Cultural Mandap, Koraput',
    tags: ['Koraput', 'Chadeia Dance', 'Lok Kala', 'Tribal Art']
  },
  {
    id: 'photo-koraput-4',
    title: '‘ଆର୍ଗସ ନ୍ୟୁଜ’ରେ ଆଦିବାସୀ ଲୋକନୃତ୍ୟ ସଚେତନତା',
    city: 'Koraput',
    cityKey: 'koraput',
    category: 'lok-kala',
    categoryLabel: 'Lok Kala & Music',
    year: '2024',
    imageSrc: 'assets/images/koraput-chadeia-dance-broadcast-thumb.jpg',
    desc: 'Argus News television broadcast coverage of traditional Chadeia-Chadeiani tribal folk dance awareness performance supported by Parishad.',
    location: 'District Cultural Awareness Venue, Koraput',
    tags: ['Koraput', 'Argus News', 'Chadeia Dance', 'Lok Kala', 'Awareness']
  },

  // 4. Nabarangpur (Real Photos from Official District Samabesa)
  {
    id: 'photo-nabrangpur-1',
    title: 'ଜିଲ୍ଲାସ୍ତରୀୟ ସଂକୀର୍ତ୍ତନ ଓ ଲୋକ କଳା ମହା ଶୋଭାଯାତ୍ରା',
    city: 'Nabarangpur',
    cityKey: 'nabrangpur',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2024',
    imageSrc: 'assets/images/nabarangpur-shobhayatra-nagar-parikrama.jpg',
    desc: 'Spectacular street procession of 328 village kirtan groups dancing with khol, kartal, jhanja, and saffron flags along Nabarangpur main thoroughfares.',
    location: 'Main Road & Mini Stadium, Nabarangpur',
    tags: ['Nabarangpur', 'Shobhayatra', '328 Mandalis', 'Harinam']
  },
  {
    id: 'photo-nabrangpur-2',
    title: 'ଆଦିବାସୀ ପାରମ୍ପରିକ ଲୋକକଳା ଓ ନୃତ୍ୟ ସଂରକ୍ଷଣ',
    city: 'Nabarangpur',
    cityKey: 'nabrangpur',
    category: 'lok-kala',
    categoryLabel: 'Lok Kala & Tribal Art',
    year: '2024',
    imageSrc: 'assets/images/nabarangpur-prameya-tribal-dance.jpg',
    desc: 'Preservation of indigenous culture: tribal artistes performing traditional Rinjha, Dhemsa, and Desia folk dances alongside Harinam Sankirtan.',
    location: 'PM Shri Raja Chaitanya Deb Ground, Nabarangpur',
    tags: ['Nabarangpur', 'Tribal Dance', 'Dhemsa', 'Lok Kala']
  },
  {
    id: 'photo-nabrangpur-3',
    title: 'ଜିଲ୍ଲାପାଳଙ୍କ ସହ ଆଲୋଚନା ଓ ଉତ୍ତରୀୟ ପ୍ରଦାନ',
    city: 'Nabarangpur',
    cityKey: 'nabrangpur',
    category: 'satsang',
    categoryLabel: 'Official Meeting',
    year: '2024',
    imageSrc: 'assets/images/nabarangpur-collector-meeting.jpg',
    desc: 'Parishad leadership presenting ceremonial Uttariya to District Collector & Magistrate Shri Maheswar Swain, IAS.',
    location: 'Collectorate Office, Nabarangpur',
    tags: ['Nabarangpur', 'District Collector', 'Official Meeting']
  },
  {
    id: 'photo-nabrangpur-4',
    title: 'ମାନ୍ୟବର କ୍ୟାବିନେଟ ମନ୍ତ୍ରୀ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଗଣ୍ଡଙ୍କୁ ସ୍ମାରକପତ୍ର ପ୍ରଦାନ',
    city: 'Nabarangpur',
    cityKey: 'nabrangpur',
    category: 'satsang',
    categoryLabel: 'Official Meeting',
    year: '2024',
    imageSrc: 'assets/images/nabarangpur-minister-memorandum-review.jpg',
    desc: 'Parishad delegation and kirtan leaders presenting memorandum and demand letter to Hon’ble Cabinet Minister Shri Nityananda Gond (Minister of School & Mass Education, ST & SC Development, Minorities & Backward Classes Welfare, Govt. of Odisha) for rural sankirtan welfare.',
    location: 'District Samabesa Venue, Nabarangpur',
    tags: ['Nabarangpur', 'Nityananda Gond', 'Cabinet Minister', 'Memorandum', 'Sankirtan Seva']
  },

  // 5. Dhenkanal (Real Press Coverage, Govt Orders & Ground Archives)
  {
    id: 'photo-dhenkanal-1',
    title: 'ଢେଙ୍କାନାଳ ଜିଲ୍ଲା ସଂକୀର୍ତ୍ତନ ମହାସମାବେଶ ସରକାରୀ ନିମନ୍ତ୍ରଣ ପତ୍ର',
    city: 'Dhenkanal',
    cityKey: 'dhenkanal',
    category: 'satsang',
    categoryLabel: 'Official Document',
    year: '2022',
    imageSrc: 'assets/images/dhenkanal-official-invitation-card-2022.jpg',
    desc: 'Official printed invitation card for the historic Dhenkanal District Sankirtan Mahasamabesa at Old Zilla Parishad Hall, with Collector Saroj Kumar Sethi, IAS as Chief Guest.',
    location: 'Old Zilla Parishad Hall, Dhenkanal',
    tags: ['Dhenkanal', 'Invitation Card', 'Collectorate', 'Zilla Parishad', 'Official']
  },
  {
    id: 'photo-dhenkanal-2',
    title: 'ଉପଜିଲ୍ଲାପାଳ ଓ ଏସ.ଡି.ଏମ.ଙ୍କ ଶୋଭାଯାତ୍ରା ପ୍ରଶାସନିକ ଅନୁମୋଦନ ଆଦେଶ',
    city: 'Dhenkanal',
    cityKey: 'dhenkanal',
    category: 'satsang',
    categoryLabel: 'Official Document',
    year: '2022',
    imageSrc: 'assets/images/dhenkanal-sdm-procession-govt-order-2022.jpg',
    desc: 'Administrative order from Office of Sub-Collector & SDM Dhenkanal authorizing District President Siddhartha Sankar Swain for Kirtan Mandali procession from Alasua Hata to Zilla Parishad Hall.',
    location: 'Office of Sub-Collector & SDM, Dhenkanal',
    tags: ['Dhenkanal', 'Sub-Collector', 'SDM Order', 'Govt Permission', 'Sankirtan Procession']
  },
  {
    id: 'photo-dhenkanal-3',
    title: 'ଜିଲ୍ଲା ଜଗନ୍ନାଥ ନାମ ସଂକୀର୍ତ୍ତନ ମହାସମାବେଶ ଓ ଶୋଭାଯାତ୍ରା',
    city: 'Dhenkanal',
    cityKey: 'dhenkanal',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2022',
    imageSrc: 'assets/images/dhenkanal-district-sankirtan-mahasamabesa-press.jpg',
    desc: 'Grand Dhenkanal District Jagannath Nam Sankirtan Mahasamabesa in Old Zilla Parishad Hall with massive Harinam Shobhayatra, inaugurated by Collector Saroj Kumar Sethi, IAS.',
    location: 'Old Zilla Parishad Hall & Main Town, Dhenkanal',
    tags: ['Dhenkanal', 'Mahasamabesa', 'Harinam', 'Shobhayatra', 'Collectorate']
  },
  {
    id: 'photo-dhenkanal-4',
    title: 'ଜିଲ୍ଲାପାଳଙ୍କ ଦ୍ୱାରା ସଂକୀର୍ତ୍ତନ ମଣ୍ଡପ ଘୋଷଣା ଓ ସମ୍ବର୍ଦ୍ଧନା',
    city: 'Dhenkanal',
    cityKey: 'dhenkanal',
    category: 'satsang',
    categoryLabel: 'Official Meeting',
    year: '2022',
    imageSrc: 'assets/images/dhenkanal-collector-kirtan-mandap-press.jpg',
    desc: 'Dhenkanal District Collector Saroj Kumar Sethi, IAS, being felicitated and announcing dedicated land and kirtan mandap for 20,000+ village kirtaniyas.',
    location: 'Zilla Parishad Conference Hall, Dhenkanal',
    tags: ['Dhenkanal', 'District Collector', 'Saroj Kumar Sethi', 'Mandap Announcement']
  },
  {
    id: 'photo-dhenkanal-5',
    title: 'ଜିଲ୍ଲା ପରିଷଦ ହଲରେ ବିଶାଳ ଭକ୍ତ ସମାବେଶ ଓ ମହିଳା ସଂକୀର୍ତ୍ତନ ଶୋଭାଯାତ୍ରା',
    city: 'Dhenkanal',
    cityKey: 'dhenkanal',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2022',
    imageSrc: 'assets/images/dhenkanal-hall-congregation-women-shobhayatra.jpg',
    desc: 'Hundreds of devotees packing Zilla Parishad Hall, women kirtan mandalis marching in traditional attire, signed by District President Sidhartha Sankar Swain.',
    location: 'Zilla Parishad Hall & Town Thoroughfares, Dhenkanal',
    tags: ['Dhenkanal', 'Hall Congregation', 'Women Sankirtan', 'Shobhayatra']
  },
  {
    id: 'photo-dhenkanal-6',
    title: 'ଜିଲ୍ଲା ସଭାପତି ଶ୍ରୀ ସିଦ୍ଧାର୍ଥ ଶଙ୍କର ସ୍ୱାଇଁଙ୍କ ଅଭିଭାଷଣ ଓ ମଞ୍ଚ କାର୍ଯ୍ୟକ୍ରମ',
    city: 'Dhenkanal',
    cityKey: 'dhenkanal',
    category: 'satsang',
    categoryLabel: 'Official Meeting',
    year: '2022',
    imageSrc: 'assets/images/dhenkanal-presidential-address-dais-proceedings.jpg',
    desc: 'District President Sri Sidhartha Sankar Swain addressing from podium, sacred Jagannath prayer rituals, and dais proceedings.',
    location: 'Zilla Parishad Auditorium, Dhenkanal',
    tags: ['Dhenkanal', 'Sidhartha Sankar Swain', 'Presidential Address', 'Dais']
  },
  {
    id: 'photo-dhenkanal-7',
    title: 'ସାଂସଦ ମହେଶ ସାହୁଙ୍କ ଉପସ୍ଥିତିରେ ପରିଷଦର କାର୍ଯ୍ୟକାରୀ ବୈଠକ',
    city: 'Dhenkanal',
    cityKey: 'dhenkanal',
    category: 'satsang',
    categoryLabel: 'Official Meeting',
    year: '2024',
    imageSrc: 'assets/images/dhenkanal-mp-mahesh-sahoo-executive-meeting.jpg',
    desc: 'Dhenkanal MP Shri Mahesh Sahoo addressing executive council meeting alongside District President Sidhartha Sankar Swain on Jagannath culture preservation.',
    location: 'Dhenkanal Town Hall / Executive Office',
    tags: ['Dhenkanal', 'MP Mahesh Sahoo', 'Executive Meeting', 'Jagannath Culture']
  },
  {
    id: 'photo-dhenkanal-8',
    title: 'ଦଧିବାମନ ମନ୍ଦିରରେ ପରିଷଦ ପ୍ରସ୍ତୁତି ସମାବେଶ',
    city: 'Dhenkanal',
    cityKey: 'dhenkanal',
    category: 'satsang',
    categoryLabel: 'Official Meeting',
    year: '2024',
    imageSrc: 'assets/images/dhenkanal-dadhi-vaman-temple-preparatory-meet.jpg',
    desc: 'Working committee preparatory meeting at sacred Sri Sri Dadhi Vaman Temple, Rathgada, chaired by District President Sidhartha Sankar Swain.',
    location: 'Sri Sri Dadhi Vaman Temple, Rathgada, Dhenkanal',
    tags: ['Dhenkanal', 'Dadhi Vaman Temple', 'Rathgada', 'Preparatory Meeting']
  },

  // 6. Sambalpur (Real Ground Photo & Folk Activities)
  {
    id: 'photo-sambalpur-1',
    title: 'ଜିଲ୍ଲାପାଳ ଶ୍ରୀ ସିଦ୍ଧେଶ୍ୱର ବଳିରାମ ବୋନ୍ଦାର, IASଙ୍କ ସହ ଆଲୋଚନା ଓ ସମ୍ବର୍ଦ୍ଧନା',
    city: 'Sambalpur',
    cityKey: 'sambalpur',
    category: 'satsang',
    categoryLabel: 'Official Meeting',
    year: '2024',
    imageSrc: 'assets/images/sambalpur-collector-meeting.jpg',
    desc: 'Parishad State President Sri Sidhartha Sankar Swain and women seva mandali members in traditional Sambalpuri sarees presenting sacred uttariya and floral bouquet to District Collector & Magistrate Shri Siddheshwar Baliram Bondar, IAS.',
    location: 'District Collectorate Office, Sambalpur',
    tags: ['Sambalpur', 'District Collector', 'Siddheshwar Baliram Bondar', 'Official Meeting', 'Women Seva']
  },
  {
    id: 'photo-sambalpur-2',
    title: 'Maa Samaleswari Mahotsav Kirtan',
    city: 'Sambalpur',
    cityKey: 'sambalpur',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2025',
    imageSrc: 'assets/images/sambalpur-kirtan-samavesh.svg',
    desc: 'Western Odisha grand kirtan congregation where village mandalis unite with mridanga beats.',
    location: 'Maa Samaleswari Temple Grounds, Sambalpur',
    tags: ['Sambalpur', 'Samaleswari', 'Western Odisha']
  },
  {
    id: 'photo-sambalpur-3',
    title: 'Folk Mridanga (Khol) Training Camp',
    city: 'Sambalpur',
    category: 'lok-kala',
    categoryLabel: 'Lok Kala & Music',
    cityKey: 'sambalpur',
    year: '2024',
    imageSrc: 'assets/images/sambalpur-mridanga-seva.svg',
    desc: 'Free residential workshop training village youth in the rhythmic arts of authentic Odissi Khol.',
    location: 'Burla & Hirakud Cultural Centre, Sambalpur',
    tags: ['Sambalpur', 'Mridanga', 'Lok Kala']
  },
  {
    id: 'photo-sambalpur-4',
    title: 'ଜିଲ୍ଲାପାଳ ଶ୍ରୀ ସିଦ୍ଧେଶ୍ୱର ବଳିରାମ ବୋନ୍ଦାର, IASଙ୍କୁ ପୁଷ୍ପଗୁଚ୍ଛ ସମ୍ବର୍ଦ୍ଧନା',
    city: 'Sambalpur',
    cityKey: 'sambalpur',
    category: 'satsang',
    categoryLabel: 'Official Meeting',
    year: '2024',
    imageSrc: 'assets/images/sambalpur-collector-felicitation-closeup.jpg',
    desc: 'Ceremonial close-up felicitation of Sambalpur District Collector & Magistrate Shri Siddheshwar Baliram Bondar, IAS, by State President Sri Sidhartha Sankar Swain and women kirtan seva mandali.',
    location: 'District Collectorate Office, Sambalpur',
    tags: ['Sambalpur', 'District Collector', 'Siddheshwar Baliram Bondar', 'Felicitation', 'Women Seva']
  },

  // 7. Khordha
  {
    id: 'photo-khordha-1',
    title: 'Barunei Peetha Prabhat Pheri',
    city: 'Khordha',
    cityKey: 'khordha',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2025',
    imageSrc: 'assets/images/khordha-barunei-sankirtan.svg',
    desc: 'Early morning Harinam procession along the historic Barunei hills with hundreds of devotees.',
    location: 'Maa Barunei Peetha, Khordha',
    tags: ['Khordha', 'Barunei', 'Prabhat Pheri']
  },
  {
    id: 'photo-khordha-2',
    title: 'Youth Sanskar & Bhagavata Discourses',
    city: 'Khordha',
    cityKey: 'khordha',
    category: 'satsang',
    categoryLabel: 'Satsang & Youth',
    year: '2025',
    imageSrc: 'assets/images/khordha-gita-satsang.svg',
    desc: 'Spiritual youth gathering exploring the teachings of Srimad Bhagavata and Sanatana values.',
    location: 'Jatni & Khordha Town Satsang Bhavan',
    tags: ['Khordha', 'Bhagavata', 'Youth']
  },

  // 8. Balasore (Real Ground Photos & Coastal Activities)
  {
    id: 'photo-balasore-1',
    title: 'ବାଲେଶ୍ୱର ଜିଲ୍ଲାପାଳଙ୍କୁ ସ୍ମାରକପତ୍ର ପ୍ରଦାନ',
    city: 'Balasore',
    cityKey: 'balasore',
    category: 'satsang',
    categoryLabel: 'Official Meeting',
    year: '2024',
    imageSrc: 'assets/images/balasore-collector-memorandum.jpg',
    desc: 'Official representation and memorandum submission to District Collector & Magistrate Balasore at Collectorate office.',
    location: 'District Collectorate Office, Balasore',
    tags: ['Balasore', 'District Collector', 'Official Meeting', 'Memorandum']
  },
  {
    id: 'photo-balasore-2',
    title: 'ଜିଲ୍ଲାପାଳଙ୍କୁ ସମ୍ବର୍ଦ୍ଧନା ଓ ଅଭିନନ୍ଦନ ପତ୍ର ପ୍ରଦାନ',
    city: 'Balasore',
    cityKey: 'balasore',
    category: 'satsang',
    categoryLabel: 'Official Felicitation',
    year: '2024',
    imageSrc: 'assets/images/balasore-collector-felicitation-citation.jpg',
    desc: 'Presenting framed honorary Felicitation Citation (ଅଭିନନ୍ଦନ ପତ୍ର) to Balasore District Magistrate & Collector.',
    location: 'District Collectorate Office, Balasore',
    tags: ['Balasore', 'Felicitation', 'Citation', 'Official Meeting']
  },
  {
    id: 'photo-balasore-3',
    title: 'Khirachora Gopinath Nagar Kirtan',
    city: 'Balasore',
    cityKey: 'balasore',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2025',
    imageSrc: 'assets/images/balasore-kirtan-samaroh.svg',
    desc: 'Grand congregational Harinam procession around the historic Remuna & Balasore heritage peethas.',
    location: 'Remuna Khirachora Gopinath Temple, Balasore',
    tags: ['Balasore', 'Remuna', 'Gopinath', 'Nagar Kirtan']
  },
  {
    id: 'photo-balasore-4',
    title: 'Coastal Pilgrim & Sadhu Annadan',
    city: 'Balasore',
    cityKey: 'balasore',
    category: 'annadan',
    categoryLabel: 'Annadan Seva',
    year: '2024',
    imageSrc: 'assets/images/balasore-annadan-seva.svg',
    desc: 'Free nutritious Mahaprasad distribution to coastal fishermen communities and visiting pilgrims.',
    location: 'Chandipur & Baleswar Town, Balasore',
    tags: ['Balasore', 'Annadan', 'Coastal Seva']
  },

  // 9. Mayurbhanj
  {
    id: 'photo-mayurbhanj-1',
    title: 'Dwitiya Srikhetra Baripada Rath Sankirtan',
    city: 'Mayurbhanj',
    cityKey: 'mayurbhanj',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2025',
    imageSrc: 'assets/images/mayurbhanj-dwitiya-srikhetra.svg',
    desc: 'Devotees celebrating traditional Haribaldev Jew Ratha Yatra with sacred kirtan along the grand avenue.',
    location: 'Grand Road, Baripada, Mayurbhanj',
    tags: ['Mayurbhanj', 'Baripada', 'Dwitiya Srikhetra', 'Rath Yatra']
  },
  {
    id: 'photo-mayurbhanj-2',
    title: 'Tribal Devotional Folk Arts & Sangeet',
    city: 'Mayurbhanj',
    cityKey: 'mayurbhanj',
    category: 'lok-kala',
    categoryLabel: 'Lok Kala & Music',
    year: '2024',
    imageSrc: 'assets/images/mayurbhanj-tribal-lok-kala.svg',
    desc: 'Reviving ancestral tribal rhythm traditions and Jagannath bhajan renditions across Mayurbhanj.',
    location: 'Similipal Peripheral Cultural Bhavan, Mayurbhanj',
    tags: ['Mayurbhanj', 'Tribal Bhajan', 'Lok Kala']
  },

  // 10. Jagatsinghpur
  {
    id: 'photo-jagatsinghpur-1',
    title: 'Maa Sarala Peetha Morning Prabhat Pheri',
    city: 'Jagatsinghpur',
    cityKey: 'jagatsinghpur',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2025',
    imageSrc: 'assets/images/jagatsinghpur-sarala-sankirtan.svg',
    desc: 'Early dawn Harinam yatras connecting Sarala Kshetra and coastal village mandalis.',
    location: 'Maa Sarala Peetha, Jhankada, Jagatsinghpur',
    tags: ['Jagatsinghpur', 'Sarala Peetha', 'Prabhat Pheri']
  },
  {
    id: 'photo-jagatsinghpur-2',
    title: 'Mahanadi Coastal Delta Community Seva',
    city: 'Jagatsinghpur',
    cityKey: 'jagatsinghpur',
    category: 'annadan',
    categoryLabel: 'Annadan Seva',
    year: '2024',
    imageSrc: 'assets/images/jagatsinghpur-annadan-seva.svg',
    desc: 'Providing emergency food aid and community feast to flood-affected coastal hamlets.',
    location: 'Kujang & Paradip coastal belt, Jagatsinghpur',
    tags: ['Jagatsinghpur', 'Annadan', 'Relief Seva']
  },

  // 11. Cuttack
  {
    id: 'photo-cuttack-1',
    title: 'Mahanadi Gadagadia Ghat Akhanda Yajna',
    city: 'Cuttack',
    cityKey: 'cuttack',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2024',
    imageSrc: 'assets/images/cuttack-mahanadi-yajna.svg',
    desc: '24-hour non-stop Akhanda Harinam Mahayajna on the banks of sacred river Mahanadi.',
    location: 'Gadagadia Ghat, Mahanadi, Cuttack',
    tags: ['Cuttack', 'Mahanadi', 'Akhanda Yajna']
  },
  {
    id: 'photo-cuttack-2',
    title: 'Millennium City Pala & Daskathia Utsav',
    city: 'Cuttack',
    cityKey: 'cuttack',
    category: 'lok-kala',
    categoryLabel: 'Lok Kala & Music',
    year: '2025',
    imageSrc: 'assets/images/cuttack-pala-sangeet.svg',
    desc: 'State confluence of master Pala performers and traditional Odissi devotional singers.',
    location: 'Kala Vikash Kendra, Cuttack',
    tags: ['Cuttack', 'Pala', 'Daskathia', 'Lok Kala']
  },

  // 12. Sundargarh
  {
    id: 'photo-sundargarh-1',
    title: 'Vedavyas & Forest Belt Sankirtan Yatra',
    city: 'Sundargarh',
    cityKey: 'sundargarh',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2025',
    imageSrc: 'assets/images/sundargarh-gramin-kirtan.svg',
    desc: 'Spiritual outreach and Harinam yatras uniting rural mining and tribal communities.',
    location: 'Vedavyas Temple Sangam, Rourkela, Sundargarh',
    tags: ['Sundargarh', 'Vedavyas', 'Rourkela', 'Sankirtan']
  },
  {
    id: 'photo-sundargarh-2',
    title: 'Gita Jayanti & Youth Character Camp',
    city: 'Sundargarh',
    cityKey: 'sundargarh',
    category: 'satsang',
    categoryLabel: 'Satsang & Youth',
    year: '2025',
    imageSrc: 'assets/images/sundargarh-youth-sanskar.svg',
    desc: 'Empowering young college and school students with timeless ethical and spiritual values.',
    location: 'Bonaigarh & Sundargarh Town, Sundargarh',
    tags: ['Sundargarh', 'Gita Jayanti', 'Youth Sanskar']
  },

  // 13. Nuapada
  {
    id: 'photo-nuapada-1',
    title: 'Yogeswar Peetha Harinam Samavesh',
    city: 'Nuapada',
    cityKey: 'nuapada',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2025',
    imageSrc: 'assets/images/nuapada-yogeswar-sankirtan.svg',
    desc: 'Mass gathering of border village bhajan mandalis chanting the holy names in unison.',
    location: 'Yogeswar Temple, Khariar, Nuapada',
    tags: ['Nuapada', 'Yogeswar', 'Khariar', 'Sankirtan']
  },
  {
    id: 'photo-nuapada-2',
    title: 'Drought Relief & Rural Annadan Seva',
    city: 'Nuapada',
    cityKey: 'nuapada',
    category: 'annadan',
    categoryLabel: 'Annadan Seva',
    year: '2024',
    imageSrc: 'assets/images/nuapada-gramin-seva.svg',
    desc: 'Serving food grains, drinking water, and winter aid to remote tribal settlements.',
    location: 'Sinapali & Boden rural blocks, Nuapada',
    tags: ['Nuapada', 'Annadan', 'Drought Relief']
  },

  // 14. Balangir
  {
    id: 'photo-balangir-1',
    title: 'Harishankar Kshetra Gandhamardan Yajna',
    city: 'Balangir',
    cityKey: 'balangir',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2025',
    imageSrc: 'assets/images/balangir-harishankar-kirtan.svg',
    desc: 'Sacred Akhanda Nam yajna held in the foothills of medicinal Gandhamardan mountain.',
    location: 'Harishankar Temple Grounds, Balangir',
    tags: ['Balangir', 'Harishankar', 'Gandhamardan', 'Akhanda Yajna']
  },
  {
    id: 'photo-balangir-2',
    title: 'Sambalpuri Devotional Folk Sammelan',
    city: 'Balangir',
    cityKey: 'balangir',
    category: 'lok-kala',
    categoryLabel: 'Lok Kala & Music',
    year: '2024',
    imageSrc: 'assets/images/balangir-sambalpuri-bhajan.svg',
    desc: 'Preserving traditional Western Odisha devotional folk ragas and rhythmic instruments.',
    location: 'Koshal Kalamandal, Balangir Town',
    tags: ['Balangir', 'Sambalpuri Folk', 'Lok Kala']
  },

  // 15. Boudh
  {
    id: 'photo-boudh-1',
    title: 'Mahanadi Valley Rameswar Kirtan Yatra',
    city: 'Boudh',
    cityKey: 'boudh',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2025',
    imageSrc: 'assets/images/boudh-rameswar-kirtan.svg',
    desc: 'Congregational chanting along ancient temple ghats in central Odisha Mahanadi valley.',
    location: 'Rameswar Temple Ghat, Boudh',
    tags: ['Boudh', 'Mahanadi', 'Rameswar', 'Sankirtan']
  },
  {
    id: 'photo-boudh-2',
    title: 'Sadhu & Pilgrim Seva Shivir',
    city: 'Boudh',
    cityKey: 'boudh',
    category: 'annadan',
    categoryLabel: 'Annadan Seva',
    year: '2024',
    imageSrc: 'assets/images/boudh-sadhu-seva.svg',
    desc: 'Serving passing pilgrims, ascetics, and organizing community satsang feasts.',
    location: 'Harbhanga & Boudh Town, Boudh',
    tags: ['Boudh', 'Sadhu Seva', 'Annadan']
  },

  // 16. Bargarh
  {
    id: 'photo-bargarh-1',
    title: 'Dhanu Yatra Mahotsav Sankirtan',
    city: 'Bargarh',
    cityKey: 'bargarh',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2025',
    imageSrc: 'assets/images/bargarh-dhanuyatra-kirtan.svg',
    desc: 'Mass kirtan procession accompanying Lord Krishna during the world’s largest open-air theatre.',
    location: 'Dhanu Yatra Grounds, Bargarh Town',
    tags: ['Bargarh', 'Dhanu Yatra', 'Sankirtan']
  },
  {
    id: 'photo-bargarh-2',
    title: 'Nrusinghanath Peetha Gramin Seva',
    city: 'Bargarh',
    cityKey: 'bargarh',
    category: 'satsang',
    categoryLabel: 'Satsang & Youth',
    year: '2025',
    imageSrc: 'assets/images/bargarh-nrusinghanath-seva.svg',
    desc: 'Empowering village kirtaniyas with mridanga instruments and organising spiritual discourses.',
    location: 'Nrusinghanath Temple Peetha, Bargarh',
    tags: ['Bargarh', 'Nrusinghanath', 'Gramin Seva']
  },

  // 17. Jharsuguda
  {
    id: 'photo-jharsuguda-1',
    title: 'ଝାରସୁଗୁଡ଼ା ମହିଳା ସଂକୀର୍ତ୍ତନ ସେବା ମଣ୍ଡଳୀର ମହାସମାବେଶ',
    city: 'Jharsuguda',
    cityKey: 'jharsuguda',
    category: 'sankirtan',
    categoryLabel: 'Women Sankirtan Mandali',
    year: '2024',
    imageSrc: 'assets/images/jharsuguda-women-sankirtan-samavesh.jpg',
    desc: 'Parishad State President Sri Sidhartha Sankar Swain with the vibrant Jharsuguda women sankirtan seva mandali in traditional Sambalpuri handloom sarees, dedicated to preserving Western Odisha Harinam folk traditions.',
    location: 'Jharsuguda District Headquarters, Jharsuguda',
    tags: ['Jharsuguda', 'Women Mandali', 'Sambalpuri Handloom', 'Sankirtan Seva']
  },
  {
    id: 'photo-jharsuguda-2',
    title: 'ଝାରସୁଗୁଡ଼ା ମହିଳା ମଣ୍ଡଳୀ ଆଲୋଚନା ଓ ବେତ ଫୁଲତୋଡ଼ା ସମ୍ବର୍ଦ୍ଧନା',
    city: 'Jharsuguda',
    cityKey: 'jharsuguda',
    category: 'satsang',
    categoryLabel: 'Meeting & Felicitation',
    year: '2024',
    imageSrc: 'assets/images/jharsuguda-women-mandali-felicitation.jpg',
    desc: 'Parishad State President Sri Sidhartha Sankar Swain being welcomed and felicitated with handcrafted traditional cane bouquets by Jharsuguda women sankirtan seva mandali members and cultural organizers.',
    location: 'Jharsuguda Seva Bhavan, Jharsuguda',
    tags: ['Jharsuguda', 'Felicitation', 'Women Mandali', 'Traditional Cane Bouquet']
  },
  {
    id: 'photo-jharsuguda-3',
    title: 'Jharsuguda & Brajrajnagar Nagar Sankirtan',
    city: 'Jharsuguda',
    cityKey: 'jharsuguda',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2025',
    imageSrc: 'assets/images/jharsuguda-kirtan-mandali.svg',
    desc: 'Harinam Sankirtan procession through Jharsuguda and Brajrajnagar town peethas with dhol and mridanga.',
    location: 'Jharsuguda & Brajrajnagar Towns, Jharsuguda',
    tags: ['Jharsuguda', 'Brajrajnagar', 'Nagar Sankirtan']
  },
  {
    id: 'photo-jharsuguda-4',
    title: 'Paschima Odisha Tribal & Gramin Seva',
    city: 'Jharsuguda',
    cityKey: 'jharsuguda',
    category: 'annadan',
    categoryLabel: 'Annadan Seva',
    year: '2025',
    imageSrc: 'assets/images/jharsuguda-gramin-seva.svg',
    desc: 'Community Annadan and warm clothes distribution for industrial and rural laborers in Kolabira and Laikera.',
    location: 'Kolabira & Laikera Blocks, Jharsuguda',
    tags: ['Jharsuguda', 'Gramin Seva', 'Annadan']
  },

  // 18. Kalahandi
  {
    id: 'photo-kalahandi-1',
    title: 'Maa Manikeswari Chhatar Yatra Sankirtan',
    city: 'Kalahandi',
    cityKey: 'kalahandi',
    category: 'sankirtan',
    categoryLabel: 'Harinam Sankirtan',
    year: '2025',
    imageSrc: 'assets/images/kalahandi-chhatar-yatra.svg',
    desc: 'Ecstatic Harinam Sankirtan procession accompanying Maa Manikeswari during the historic Bhawanipatna Chhatar Yatra.',
    location: 'Bhawanipatna & Manikeswari Temple, Kalahandi',
    tags: ['Kalahandi', 'Chhatar Yatra', 'Manikeswari', 'Sankirtan']
  },
  {
    id: 'photo-kalahandi-2',
    title: 'Thuamul Rampur Tribal & Gramin Seva',
    city: 'Kalahandi',
    cityKey: 'kalahandi',
    category: 'annadan',
    categoryLabel: 'Annadan Seva',
    year: '2025',
    imageSrc: 'assets/images/kalahandi-gramin-seva.svg',
    desc: 'Community Annadan, dry rations and winter blanket distribution for indigenous families across Thuamul Rampur.',
    location: 'Thuamul Rampur & Lanjigarh, Kalahandi',
    tags: ['Kalahandi', 'Thuamul Rampur', 'Gramin Seva', 'Annadan']
  }
];

// ==========================================================================
// 3. APPLICATION STATE & BACKEND INTEGRATION
// ==========================================================================
const API_BASE = window.location.origin.includes('localhost:8080') 
  ? '' 
  : 'http://localhost:8080';

const state = {
  selectedCityFilter: 'all',
  selectedCategoryFilter: 'all',
  searchQuery: '',
  currentLightboxIndex: 0,
  filteredPhotos: [...activitiesData],
  isBackendConnected: false
};

async function loadDataFromBackend() {
  try {
    const chaptersRes = await fetch(`${API_BASE}/api/chapters`);
    if (chaptersRes.ok) {
      const liveChapters = await chaptersRes.json();
      if (Array.isArray(liveChapters) && liveChapters.length > 0) {
        cityChaptersData = liveChapters.map(c => {
          const localChapter = cityChaptersData.find(loc => loc.id === c.cityKey);
          return {
            id: c.cityKey,
            name: c.name,
            subName: c.subName,
            coordinator: c.coordinator,
            contact: c.contact,
            badge: c.badge,
            activities: c.activities || [],
            photoCount: c.photoCount || (localChapter ? localChapter.photoCount : 2),
            photos: (localChapter && localChapter.photos) ? localChapter.photos : [],
            videos: (localChapter && localChapter.videos) ? localChapter.videos : (localChapter && localChapter.video ? [localChapter.video] : [])
          };
        });
        state.isBackendConnected = true;
        renderCityCards(state.selectedCityFilter);
      }
    }

    const photosRes = await fetch(`${API_BASE}/api/photos`);
    if (photosRes.ok) {
      const livePhotos = await photosRes.json();
      if (Array.isArray(livePhotos) && livePhotos.length > 0) {
        activitiesData = livePhotos.map(p => ({
          id: p.photoKey || 'p-' + p.id,
          title: p.title,
          city: p.city,
          cityKey: p.cityKey,
          category: p.category,
          categoryLabel: p.categoryLabel,
          year: p.year,
          imageSrc: p.imageSrc,
          desc: p.description,
          location: p.location,
          tags: p.tags || []
        }));
        renderGalleryPhotos();
      }
    }
    console.log('✅ Connected to Java Spring Boot REST API Backend with all 18 Odisha Chapters!');
  } catch (err) {
    console.info('ℹ️ Running in standalone mode with embedded data.');
  }
}

// ==========================================================================
// 4. DOM ELEMENTS
// ==========================================================================
const DOM = {
  citiesGrid: document.getElementById('citiesGrid'),
  cityNavTabs: document.getElementById('cityNavTabs'),
  galleryGrid: document.getElementById('galleryGrid'),
  galleryCountBadge: document.getElementById('galleryCountBadge'),
  searchInput: document.getElementById('gallerySearchInput'),
  categoryPills: document.getElementById('categoryPills'),
  
  // Lightbox Modal Dialog Elements
  lightboxModal: document.getElementById('lightboxModal'),
  lightboxTitle: document.getElementById('lightboxTitle'),
  lightboxCityTag: document.getElementById('lightboxCityTag'),
  lightboxImg: document.getElementById('lightboxImg'),
  lightboxDesc: document.getElementById('lightboxDesc'),
  lightboxMeta: document.getElementById('lightboxMeta'),
  lightboxCounter: document.getElementById('lightboxCounter'),
  lightboxPrevBtn: document.getElementById('lightboxPrevBtn'),
  lightboxNextBtn: document.getElementById('lightboxNextBtn'),
  lightboxCloseBtn: document.getElementById('lightboxCloseBtn'),

  // Navigation & Extras
  mobileMenuBtn: document.getElementById('mobileMenuBtn'),
  navLinks: document.getElementById('navLinks'),
  backToTopBtn: document.getElementById('backToTopBtn'),
  sevaForm: document.getElementById('sevaForm')
};

// ==========================================================================
// 5. RENDER FUNCTIONS
// ==========================================================================

function renderCityCards(filterCityId = 'all') {
  if (!DOM.citiesGrid) return;

  const citiesToRender = filterCityId === 'all' 
    ? cityChaptersData 
    : cityChaptersData.filter(c => c.id === filterCityId);

  DOM.citiesGrid.innerHTML = citiesToRender.map(city => {
    const cityVideos = city.videos || (city.video ? [city.video] : []);
    const hasVideo = cityVideos.length > 0;
    return `
    <article class="city-card" data-city-id="${city.id}">
      <header class="city-card-header">
        <div class="city-badge-row">
          <span class="city-tag">📍 ${city.name}, Odisha</span>
          <span class="city-tag" style="background: rgba(255, 215, 0, 0.15); border-color: rgba(255, 215, 0, 0.4);">✨ ${city.badge}</span>
        </div>
        <h3 class="city-title">${city.name}</h3>
        <p class="city-subtitle">${city.subName}</p>
      </header>

      <div class="city-card-body">
        <div class="city-coordinator">
          <strong>Key Sevayat / Regional In-charge:</strong><br/>
          <span>${city.coordinator}</span>
        </div>

        <ul class="city-activities-list">
          ${city.activities.map(act => `<li>${act}</li>`).join('')}
        </ul>

        <div class="city-card-footer ${hasVideo ? 'has-video' : ''}">
          <button type="button" class="btn-city-photos" onclick="openDistrictGallery('${city.id}', 'photos')" title="View official photos for ${city.name}">
            <i class="fas fa-camera"></i>
            <span>View Photos</span>
          </button>
          ${hasVideo ? `
            <button type="button" class="btn-city-video" onclick="openDistrictGallery('${city.id}', 'video')" title="Watch Live Video for ${city.name}">
              <i class="fas fa-play-circle"></i>
              <span>Watch Video ${cityVideos.length > 1 ? `(${cityVideos.length})` : ''}</span>
            </button>
          ` : ''}
          <a href="#contact" class="btn-city-join" onclick="selectDistrictForSeva('${city.name}')" title="Join ${city.name} Seva">
            <i class="fas fa-hands-helping"></i>
            <span>Join Seva</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </article>
  `;
  }).join('');
}

function renderGalleryPhotos() {
  if (!DOM.galleryGrid) return;

  state.filteredPhotos = activitiesData.filter(item => {
    const matchesCity = state.selectedCityFilter === 'all' || item.cityKey === state.selectedCityFilter;
    const matchesCategory = state.selectedCategoryFilter === 'all' || item.category === state.selectedCategoryFilter;

    const query = state.searchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      item.title.toLowerCase().includes(query) ||
      item.city.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.tags.some(t => t.toLowerCase().includes(query));

    return matchesCity && matchesCategory && matchesSearch;
  });

  if (DOM.galleryCountBadge) {
    DOM.galleryCountBadge.innerHTML = `Showing <span>${state.filteredPhotos.length}</span> of <span>${activitiesData.length}</span> Odisha archive photos`;
  }

  if (state.filteredPhotos.length === 0) {
    DOM.galleryGrid.innerHTML = `
      <div class="gallery-empty">
        <div class="gallery-empty-icon">🕉️</div>
        <h3>No photos match your current search</h3>
        <p style="color: var(--text-secondary); margin-top: 0.5rem;">
          Try resetting your city, category, or search keywords.
        </p>
        <button type="button" class="btn-secondary" style="margin-top: 1.2rem;" onclick="resetAllFilters()">
          Show All 18 Odisha Activities & Photos
        </button>
      </div>
    `;
    return;
  }

  DOM.galleryGrid.innerHTML = state.filteredPhotos.map((item, index) => `
    <article class="photo-card" onclick="openLightbox(${index})" tabindex="0" role="button" aria-label="Open photo: ${item.title}">
      <div class="photo-card-media">
        <img src="${item.imageSrc}" alt="${item.title}" class="photo-card-img" loading="lazy">
        <div class="photo-card-overlay">
          <div class="photo-zoom-icon">
            <i class="fas fa-search-plus"></i>
          </div>
        </div>
      </div>

      <div class="photo-card-info">
        <div class="photo-badge-row">
          <span class="photo-city-badge">📍 ${item.city}, Odisha</span>
          <span class="photo-category-badge">${item.categoryLabel}</span>
        </div>
        <h4 class="photo-title">${item.title}</h4>
        <p class="photo-desc">${item.desc}</p>
        <footer class="photo-footer">
          <span>✨ Year: ${item.year}</span>
          <span>Click to view full photo</span>
        </footer>
      </div>
    </article>
  `).join('');
}

// ==========================================================================
// 6. FILTER & SEARCH HANDLERS
// ==========================================================================

window.filterGalleryByCity = function(cityKey) {
  state.selectedCityFilter = cityKey;

  document.querySelectorAll('.filter-pill[data-city-filter]').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.cityFilter === cityKey);
  });

  renderGalleryPhotos();

  const galleryElem = document.getElementById('gallery');
  if (galleryElem) {
    galleryElem.scrollIntoView({ behavior: 'smooth' });
  }
};

window.resetAllFilters = function() {
  state.selectedCityFilter = 'all';
  state.selectedCategoryFilter = 'all';
  state.searchQuery = '';
  if (DOM.searchInput) DOM.searchInput.value = '';

  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.categoryFilter === 'all' || pill.dataset.cityFilter === 'all');
  });

  renderGalleryPhotos();
};

function setupCityNavTabs() {
  if (!DOM.cityNavTabs) return;

  DOM.cityNavTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.city-tab-btn');
    if (!btn) return;

    DOM.cityNavTabs.querySelectorAll('.city-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cityId = btn.dataset.city;
    renderCityCards(cityId);
  });
}

function setupGalleryPills() {
  if (!DOM.categoryPills) return;

  DOM.categoryPills.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;

    if (pill.dataset.categoryFilter !== undefined) {
      DOM.categoryPills.querySelectorAll('.filter-pill[data-category-filter]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.selectedCategoryFilter = pill.dataset.categoryFilter;
      renderGalleryPhotos();
    }
  });
}

function setupSearchInput() {
  if (!DOM.searchInput) return;

  let debounceTimer;
  DOM.searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      state.searchQuery = e.target.value;
      renderGalleryPhotos();
    }, 180);
  });
}

// ==========================================================================
// 7. LIGHTBOX DIALOG (Modern Web Guidance Compliant)
// ==========================================================================

window.openLightbox = function(index) {
  if (!DOM.lightboxModal || !state.filteredPhotos[index]) return;

  state.currentLightboxIndex = index;
  updateLightboxContent(index);

  if (typeof DOM.lightboxModal.showModal === 'function') {
    DOM.lightboxModal.showModal();
  } else {
    DOM.lightboxModal.setAttribute('open', '');
  }
};

function updateLightboxContent(index) {
  const item = state.filteredPhotos[index];
  if (!item) return;

  DOM.lightboxTitle.textContent = item.title;
  DOM.lightboxCityTag.textContent = `📍 ${item.city}, Odisha • ${item.categoryLabel} (${item.year})`;
  DOM.lightboxImg.src = item.imageSrc;
  DOM.lightboxImg.alt = item.title;
  DOM.lightboxDesc.textContent = item.desc;
  DOM.lightboxMeta.textContent = `Location: ${item.location} • Tags: ${item.tags.join(', ')}`;
  DOM.lightboxCounter.textContent = `${index + 1} / ${state.filteredPhotos.length}`;
}

window.closeLightbox = function() {
  if (!DOM.lightboxModal) return;
  if (typeof DOM.lightboxModal.close === 'function') {
    DOM.lightboxModal.close();
  } else {
    DOM.lightboxModal.removeAttribute('open');
  }
};

window.nextLightboxPhoto = function() {
  if (state.filteredPhotos.length <= 1) return;
  state.currentLightboxIndex = (state.currentLightboxIndex + 1) % state.filteredPhotos.length;
  updateLightboxContent(state.currentLightboxIndex);
};

window.prevLightboxPhoto = function() {
  if (state.filteredPhotos.length <= 1) return;
  state.currentLightboxIndex = (state.currentLightboxIndex - 1 + state.filteredPhotos.length) % state.filteredPhotos.length;
  updateLightboxContent(state.currentLightboxIndex);
};

function setupLightboxEvents() {
  if (!DOM.lightboxModal) return;

  if (DOM.lightboxNextBtn) DOM.lightboxNextBtn.addEventListener('click', window.nextLightboxPhoto);
  if (DOM.lightboxPrevBtn) DOM.lightboxPrevBtn.addEventListener('click', window.prevLightboxPhoto);
  if (DOM.lightboxCloseBtn) DOM.lightboxCloseBtn.addEventListener('click', window.closeLightbox);

  DOM.lightboxModal.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      window.nextLightboxPhoto();
    } else if (event.key === 'ArrowLeft') {
      window.prevLightboxPhoto();
    }
  });

  if (!('closedBy' in HTMLDialogElement.prototype)) {
    DOM.lightboxModal.addEventListener('click', (event) => {
      if (event.target !== DOM.lightboxModal) return;

      const rect = DOM.lightboxModal.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );

      if (!isDialogContent) {
        DOM.lightboxModal.close();
      }
    });
  }
}

// ==========================================================================
// 8. MOBILE NAVIGATION & BACK TO TOP
// ==========================================================================
function setupNavigation() {
  if (DOM.mobileMenuBtn && DOM.navLinks) {
    DOM.mobileMenuBtn.addEventListener('click', () => {
      DOM.navLinks.classList.toggle('mobile-open');
      const isOpen = DOM.navLinks.classList.contains('mobile-open');
      DOM.mobileMenuBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    DOM.navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        DOM.navLinks.classList.remove('mobile-open');
        if (DOM.mobileMenuBtn) {
          DOM.mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
      });
    });
  }

  if (DOM.backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        DOM.backToTopBtn.classList.add('show');
      } else {
        DOM.backToTopBtn.classList.remove('show');
      }
    });

    DOM.backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// 9. SEVA VOLUNTEER FORM SUBMISSION (Connected to Spring Boot API!)
// ==========================================================================
function setupSevaForm() {
  if (!DOM.sevaForm) return;

  DOM.sevaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('volunteerName')?.value || 'Devotee';
    const city = document.getElementById('volunteerCity')?.value || 'Odisha';
    const sevaType = document.getElementById('volunteerSeva')?.value || 'Sankirtan Seva';
    const phone = document.getElementById('volunteerPhone')?.value || '';
    const notes = document.getElementById('volunteerNotes')?.value || '';

    const payload = {
      fullName: name,
      city: city,
      sevaInterest: sevaType,
      phone: phone,
      notes: notes
    };

    try {
      const response = await fetch(`${API_BASE}/api/volunteers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert(`🙏 जय जगन्नाथ! ${name} ji,\n\nAapka sankalp (${sevaType} - ${city}) Spring Boot backend me successfully save ho gaya hai!\n\nHumare samiti ke sadasya aapse jald hi sampark karenge.\n\n"हरे कृष्ण हरे राम"`);
      } else {
        throw new Error('Server returned ' + response.status);
      }
    } catch (err) {
      alert(`🙏 जय जगन्नाथ! ${name} ji,\n\nSri Sri Jagannath Nam Sankirtan Loka Kala parisad Odisha se judne ke liye dhanyawad!\n\nAapka sankalp (${sevaType} - ${city}, Odisha) prapt ho gaya hai.\n\n"हरे कृष्ण हरे राम"`);
    }

    DOM.sevaForm.reset();
  });
}

// ==========================================================================
// 9B. ORGANISATION AUTHENTICATION & LEGAL DOCUMENTS MODULE
// ==========================================================================
const DEFAULT_AUTH_DOCUMENTS = [
  {
    id: 1,
    title: 'Certificate of Registration of Societies (Act XXI of 1860)',
    category: 'registration',
    documentNumber: '87/ 18201800077 of 2018-2019',
    issuingAuthority: 'Office of the Registrar of Societies, Odisha (Cuttack)',
    issueYear: '2019',
    description: 'Official legal registration certificate under Societies Registration Act (No. XXI of 1860) granted to Sri Sri Jagannath Nam Sankirtan Parisad at Baramunda, Bhubaneswar, Khurdha, Odisha.',
    fileName: 'society-registration-certificate.jpg',
    fileUrl: 'assets/docs/society-registration-certificate.jpg',
    fileType: 'IMAGE',
    fileSizeFormatted: '145 KB',
    verifiedStatus: true,
    uploadDate: '2026-11-08'
  },
  {
    id: 2,
    title: 'Ministry of Social Justice & Empowerment - Certificate of Enrollment',
    category: 'government',
    documentNumber: 'OR/00055330',
    issuingAuthority: 'Ministry of Social Justice & Empowerment (MoSJ&E), Govt. of India',
    issueYear: '2020',
    description: 'Official Certificate of Enrollment granted to Sri Sri Jagannath Nama Sankirtan Lok Kala Parisad Odisha under e-Anudaan (eMSJE Portal) in association with National Informatics Centre (NIC).',
    fileName: 'mosje-certificate-of-enrollment.jpg',
    fileUrl: 'assets/docs/mosje-certificate-of-enrollment.jpg',
    fileType: 'IMAGE',
    fileSizeFormatted: '132 KB',
    verifiedStatus: true,
    uploadDate: '2026-11-08'
  },
  {
    id: 3,
    title: 'Police Commissionerate Statutory Permission Licence (Page 1)',
    category: 'government',
    documentNumber: 'Licence No. 815 / L.Cell (Memo 4411)',
    issuingAuthority: 'Dy. Commissioner of Police, Bhubaneswar-Cuttack',
    issueYear: '2023',
    description: 'Statutory Permission Licence granted under Section-29 and Section 8(2) of Orissa Urban Police Act, 2003 for 2000-person Spiritual Meeting & Sankirtan Assembly at Near Xavier Square, Loyola School Field, Maitri Vihar, Bhubaneswar.',
    fileName: 'police-commissionerate-license-p1.jpg',
    fileUrl: 'assets/docs/police-commissionerate-license-p1.jpg',
    fileType: 'IMAGE',
    fileSizeFormatted: '190 KB',
    verifiedStatus: true,
    uploadDate: '2026-11-08'
  },
  {
    id: 4,
    title: 'Police Commissionerate Permission Licence Terms & Seal (Page 2)',
    category: 'government',
    documentNumber: 'Memo No. 4411 / L.Cell',
    issuingAuthority: 'Dy. Commissioner of Police, Bhubaneswar',
    issueYear: '2023',
    description: 'Official signed terms, conditions, sound limiter compliance (65 dB limit), and official police dispatch endorsement for the spiritual congregation.',
    fileName: 'police-commissionerate-license-p2.jpg',
    fileUrl: 'assets/docs/police-commissionerate-license-p2.jpg',
    fileType: 'IMAGE',
    fileSizeFormatted: '182 KB',
    verifiedStatus: true,
    uploadDate: '2026-11-08'
  },
  {
    id: 5,
    title: 'Society Registration Money Receipt & Treasury Challan',
    category: 'registration',
    documentNumber: 'App No. 1820231100405',
    issuingAuthority: 'Directorate of Treasuries & Inspection, Odisha',
    issueYear: '2023',
    description: 'Official government fee payment receipt (Challan Txn No. 35CF09791E, Bank Txn 0851486119136) for Shri Shri Jagannath Nam Sankirtan Lok Kala Parisad, Odisha, Bhubaneswar.',
    fileName: 'society-registration-money-receipt.jpg',
    fileUrl: 'assets/docs/society-registration-money-receipt.jpg',
    fileType: 'IMAGE',
    fileSizeFormatted: '297 KB',
    verifiedStatus: true,
    uploadDate: '2026-11-08'
  },
  {
    id: 6,
    title: 'Official Bank Account & UPI Donation QR (State Bank of India)',
    category: 'donation',
    documentNumber: 'UPI ID: srisrijagannath@sbi',
    issuingAuthority: 'State Bank of India (SBI) • SRI SRIJAGANNATH NAMA SANKIRT',
    issueYear: '2026',
    description: 'Helping hand to poor tribal artists and hari bhaktas , all donations are used in distribution of musical instruments, clothings and mahaprasad annadan, Youth seva, etc.',
    fileName: 'sbi-upi-donation-qr.png',
    fileUrl: 'assets/docs/sbi-upi-donation-qr.png',
    fileType: 'IMAGE',
    fileSizeFormatted: '742 KB',
    verifiedStatus: true,
    uploadDate: '2026-11-08'
  },
  {
    id: 7,
    title: 'Income Tax Department - Permanent Account Number (PAN) Card',
    category: 'tax',
    documentNumber: 'PAN: ....... 4L',
    issuingAuthority: 'Income Tax Department, Govt. of India (भारत सरकार)',
    issueYear: '2024',
    description: 'Official Permanent Account Number (PAN) card issued by the Income Tax Department, Government of India, to Sri Sri Jagannath Nama Sankirtan Lok Kala Parisad Odisha (Date of Incorporation/Formation: 20/04/2024). Valid statutory tax identity card for all legal and banking operations.',
    fileName: 'income-tax-pan-card.jpg',
    fileUrl: 'assets/docs/income-tax-pan-card.jpg',
    fileType: 'IMAGE',
    fileSizeFormatted: '398 KB',
    verifiedStatus: true,
    uploadDate: '2026-11-12'
  }
];

let activeDocCategory = 'all';
let currentDocSearch = '';
let loadedAuthDocs = [...DEFAULT_AUTH_DOCUMENTS];

function setupDocumentsModule() {
  const docsGrid = document.getElementById('docsGrid');
  const searchInput = document.getElementById('docSearchInput');
  const categoryContainer = document.getElementById('docCategoryFilters');
  const uploadForm = document.getElementById('docUploadForm');
  const dropzone = document.getElementById('docDropzone');
  const fileInput = document.getElementById('docFileInput');
  const dropzoneText = document.getElementById('dropzoneText');
  const modal = document.getElementById('docModal');
  const modalClose = document.getElementById('docModalClose');

  if (!docsGrid) return;

  function renderDocuments(docs) {
    if (!docs || docs.length === 0) {
      docsGrid.innerHTML = `
        <div style="text-align: center; padding: 2.5rem; background: rgba(0,0,0,0.3); border-radius: var(--radius-md); border: 1px dashed var(--gold-border);">
          <i class="fas fa-folder-open" style="font-size: 2.5rem; color: var(--gold-light); margin-bottom: 0.75rem;"></i>
          <h4 style="color: var(--text-light); margin-bottom: 0.25rem;">No Documents Found</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Aap naye authentication documents upload kar sakte hain.</p>
        </div>
      `;
      return;
    }

    docsGrid.innerHTML = docs.map(doc => {
      const isPdf = (doc.fileType || '').toUpperCase() === 'PDF' || (doc.fileName || '').endsWith('.pdf');
      const isImg = (doc.fileType || '').toUpperCase() === 'IMAGE' || (doc.fileName || '').endsWith('.jpg') || (doc.fileName || '').endsWith('.png');
      const iconClass = isPdf ? 'fas fa-file-pdf' : (isImg ? 'fas fa-file-image' : 'fas fa-file-alt');
      const iconBadgeClass = isImg ? 'doc-icon-badge image-type' : 'doc-icon-badge';

      const hasThumb = doc.fileUrl && doc.fileUrl !== '#';

      return `
        <article class="doc-card" data-id="${doc.id}">
          ${hasThumb ? `
            <div class="doc-thumbnail-wrap" onclick="openDocDetails(${doc.id})" title="Click to view full certificate photo: ${doc.title}">
              <img src="${doc.fileUrl}" alt="${doc.title}" class="doc-thumbnail-img" loading="lazy">
              <div class="doc-zoom-overlay">
                <i class="fas fa-search-plus"></i>
                <span>Click to View Full Photo</span>
              </div>
            </div>
          ` : ''}

          <div class="doc-card-body">
            <div class="doc-card-top">
              <div class="doc-type-box">
                <div class="${iconBadgeClass}">
                  <i class="${iconClass}"></i>
                </div>
                <div>
                  <h4 class="doc-title">${doc.title}</h4>
                  <div style="font-size: 0.8rem; color: var(--gold-light); margin-top: 0.15rem;">
                    ${doc.documentNumber ? `<strong>ID / Reg:</strong> <span style="color: #FFF;">${doc.documentNumber}</span>` : ''}
                  </div>
                </div>
              </div>
              <span class="doc-badge-verified">
                <i class="fas fa-check-circle"></i> Govt. Verified
              </span>
            </div>

            <p class="doc-desc">${doc.description || 'Official statutory document for Sri Sri Jagannath Nam Sankirtan Loka Kala parisad Odisha.'}</p>

            <div class="doc-meta">
              <span><i class="fas fa-university"></i> <strong>Authority:</strong> ${doc.issuingAuthority || 'Govt. of India / Odisha'}</span>
              <span><i class="fas fa-calendar-alt"></i> <strong>Year:</strong> ${doc.issueYear || '2026'}</span>
              <span><i class="fas fa-file"></i> ${doc.fileSizeFormatted || '1.5 MB'}</span>
            </div>

            <div class="doc-card-actions">
              <span class="doc-file-info">
                <i class="fas fa-image"></i> Scanned Document
              </span>
              <div style="display: flex; gap: 0.5rem;">
                <button type="button" class="doc-btn-view" onclick="openDocDetails(${doc.id})">
                  <i class="fas fa-eye"></i> View Photo
                </button>
                ${doc.fileUrl && doc.fileUrl !== '#' ? `
                  <a href="${doc.fileUrl}" target="_blank" download class="doc-btn-view" style="text-decoration: none;">
                    <i class="fas fa-download"></i> Download
                  </a>
                ` : `
                  <button type="button" class="doc-btn-view" onclick="alert('Verified and archived at Central Headquarters, Bhubaneswar.')">
                    <i class="fas fa-check"></i> Verified
                  </button>
                `}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  async function loadDocuments() {
    try {
      const url = `${API_BASE}/api/documents?category=${activeDocCategory}&search=${encodeURIComponent(currentDocSearch)}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data && data.length > 0) {
          loadedAuthDocs = data;
        } else if (activeDocCategory === 'all' && !currentDocSearch) {
          loadedAuthDocs = [...DEFAULT_AUTH_DOCUMENTS];
        } else {
          loadedAuthDocs = [];
        }
      } else {
        throw new Error('API returned status ' + res.status);
      }
    } catch (e) {
      let filtered = [...DEFAULT_AUTH_DOCUMENTS];
      if (activeDocCategory !== 'all') {
        filtered = filtered.filter(d => d.category.toLowerCase() === activeDocCategory.toLowerCase());
      }
      if (currentDocSearch) {
        const q = currentDocSearch.toLowerCase();
        filtered = filtered.filter(d => 
          d.title.toLowerCase().includes(q) || 
          (d.documentNumber && d.documentNumber.toLowerCase().includes(q)) ||
          (d.issuingAuthority && d.issuingAuthority.toLowerCase().includes(q))
        );
      }
      loadedAuthDocs = filtered;
    }
    renderDocuments(loadedAuthDocs);
  }

  if (categoryContainer) {
    categoryContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.doc-pill');
      if (!btn) return;
      categoryContainer.querySelectorAll('.doc-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeDocCategory = btn.dataset.category || 'all';
      loadDocuments();
    });
  }

  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentDocSearch = e.target.value.trim();
        loadDocuments();
      }, 300);
    });
  }

  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
        dropzoneText.innerHTML = `<strong>Selected:</strong> ${file.name} (${sizeMb} MB)`;
        dropzone.classList.add('dragover');
      }
    });

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files.length > 0) {
        fileInput.files = e.dataTransfer.files;
        const file = e.dataTransfer.files[0];
        const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
        dropzoneText.innerHTML = `<strong>Selected:</strong> ${file.name} (${sizeMb} MB)`;
      }
    });
  }

  if (uploadForm) {
    uploadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('docUploadSubmitBtn');
      const title = document.getElementById('docTitle')?.value || '';
      const category = document.getElementById('docCategory')?.value || 'registration';
      const docNumber = document.getElementById('docNumber')?.value || 'OR/00055330';
      const year = document.getElementById('docYear')?.value || '2026';
      const authority = document.getElementById('docAuthority')?.value || 'Govt. of India, MoSJ&E';
      const desc = document.getElementById('docDescription')?.value || '';
      const file = fileInput?.files?.[0];

      if (!file) {
        alert('Kripya document ki file (PDF ya Image) select karein!');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> <span>Uploading & Verifying...</span>';
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', title);
      formData.append('category', category);
      formData.append('documentNumber', docNumber);
      formData.append('issueYear', year);
      formData.append('issuingAuthority', authority);
      formData.append('description', desc);

      try {
        const response = await fetch(`${API_BASE}/api/documents/upload`, {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          alert(`🙏 जय जगन्नाथ!\n\nDocument "${title}" (${docNumber}) successfully upload ho gaya hai aur Organisation Authentication archive me jod diya gaya hai!`);
          uploadForm.reset();
          if (dropzoneText) dropzoneText.textContent = 'Click or Drag & Drop Document here';
          loadDocuments();
        } else {
          throw new Error('Upload status: ' + response.status);
        }
      } catch (err) {
        console.error('Upload error:', err);
        const localDoc = {
          id: Date.now(),
          title: title,
          category: category,
          documentNumber: docNumber,
          issuingAuthority: authority,
          issueYear: year,
          description: desc || 'Newly uploaded official accreditation copy.',
          fileName: file.name,
          fileUrl: URL.createObjectURL(file),
          fileType: file.type.includes('pdf') ? 'PDF' : 'IMAGE',
          fileSizeFormatted: (file.size / 1024).toFixed(1) + ' KB',
          verifiedStatus: true,
          uploadDate: new Date().toISOString().split('T')[0]
        };
        DEFAULT_AUTH_DOCUMENTS.unshift(localDoc);
        alert(`🙏 जय जगन्नाथ!\n\nDocument "${title}" (${docNumber}) successfully jod diya gaya hai!`);
        uploadForm.reset();
        if (dropzoneText) dropzoneText.textContent = 'Click or Drag & Drop Document here';
        loadDocuments();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fas fa-stamp"></i> <span>Upload & Verify Document</span>';
        }
      }
    });
  }

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => modal.close());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.close();
    });
  }

  loadDocuments();
}

window.openDocDetails = function(id) {
  const modal = document.getElementById('docModal');
  const modalBody = document.getElementById('docModalBody');
  const modalTitle = document.getElementById('docModalTitle');
  if (!modal || !modalBody) return;

  const doc = loadedAuthDocs.find(d => d.id === id) || DEFAULT_AUTH_DOCUMENTS.find(d => d.id === id);
  if (!doc) return;

  if (modalTitle) modalTitle.textContent = doc.title;
  modalBody.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.25rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--gold-border);">
        <div>
          <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Official Registration ID</span>
          <div style="font-size: 1.25rem; font-weight: bold; color: var(--gold-light);">${doc.documentNumber || 'OR/00055330'}</div>
        </div>
        <span class="doc-badge-verified"><i class="fas fa-check-circle"></i> Govt. of India Verified</span>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.88rem;">
        <div>
          <strong style="color: var(--text-gold);">Issuing Authority:</strong>
          <div style="color: var(--text-light);">${doc.issuingAuthority || 'Govt. of India, MoSJ&E'}</div>
        </div>
        <div>
          <strong style="color: var(--text-gold);">Issue Year:</strong>
          <div style="color: var(--text-light);">${doc.issueYear || '2026'}</div>
        </div>
        <div>
          <strong style="color: var(--text-gold);">Category:</strong>
          <div style="color: var(--text-light); text-transform: capitalize;">${doc.category || 'Registration'}</div>
        </div>
        <div>
          <strong style="color: var(--text-gold);">File Details:</strong>
          <div style="color: var(--text-light);">${doc.fileName || 'Certificate.pdf'} (${doc.fileSizeFormatted || '1.8 MB'})</div>
        </div>
      </div>

      <div>
        <strong style="color: var(--text-gold); font-size: 0.88rem;">Document Mandate & Description:</strong>
        <p style="font-size: 0.85rem; color: var(--text-light); line-height: 1.5; margin-top: 0.25rem; background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px;">
          ${doc.description || 'Statutory authentication record verified under Sri Sri Jagannath Nam Sankirtan Loka Kala parisad Odisha.'}
        </p>
      </div>

      ${doc.fileUrl && doc.fileUrl !== '#' ? `
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <strong style="color: var(--text-gold); font-size: 0.88rem;">Official Scanned Copy:</strong>
            <a href="${doc.fileUrl}" target="_blank" style="color: var(--gold-light); font-size: 0.78rem; text-decoration: underline;">
              <i class="fas fa-external-link-alt"></i> Open Full View
            </a>
          </div>
          <div style="text-align: center; max-height: 380px; overflow-y: auto; border: 1px solid var(--gold-border); border-radius: 8px; padding: 0.5rem; background: #0c0102;">
            <img src="${doc.fileUrl}" alt="${doc.title}" style="max-width: 100%; height: auto; border-radius: 4px; display: block; margin: auto; box-shadow: 0 4px 15px rgba(0,0,0,0.6);">
          </div>
        </div>
      ` : ''}

      <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 0.5rem; padding-top: 1rem; border-top: 1px solid rgba(212,175,55,0.2); flex-wrap: wrap;">
        <button type="button" class="btn-secondary" onclick="document.getElementById('docModal').close()">Close</button>
        ${doc.category === 'donation' || (doc.documentNumber && doc.documentNumber.includes('@')) ? `
          <a href="upi://pay?pa=srisrijagannath@sbi&pn=SRI%20SRIJAGANNATH%20NAMA%20SANKIRT&cu=INR" class="btn-primary" style="text-decoration: none; background: #2e7d32; border-color: #81C784;">
            <i class="fas fa-mobile-alt"></i> Pay via UPI
          </a>
        ` : ''}
        ${doc.fileUrl && doc.fileUrl !== '#' ? `
          <a href="${doc.fileUrl}" target="_blank" download class="btn-primary" style="text-decoration: none;">
            <i class="fas fa-download"></i> Download Document
          </a>
        ` : `
          <button type="button" class="btn-primary" onclick="alert('Physical certificate archived at Central Office, Bhubaneswar. Copy available upon official written request.'); document.getElementById('docModal').close();">
            <i class="fas fa-stamp"></i> Request Official Copy
          </button>
        `}
      </div>
    </div>
  `;

  modal.showModal();
};

window.closeDistrictGalleryModal = function() {
  const modal = document.getElementById('districtGalleryModal');
  if (modal) {
    const allVideos = modal.querySelectorAll('video');
    allVideos.forEach(v => v.pause());
    modal.close();
  }
};

window.openDistrictGallery = function(cityId, initialTab = 'photos') {
  const modal = document.getElementById('districtGalleryModal');
  const titleEl = document.getElementById('districtGalleryTitle');
  const subTitleEl = document.getElementById('districtGallerySubtitle');
  const bodyEl = document.getElementById('districtGalleryBody');
  if (!modal || !bodyEl) return;

  const city = cityChaptersData.find(c => c.id === cityId);
  const cityName = city ? city.name : cityId;
  const citySub = city ? city.subName : '';

  // Get photos
  let photos = [];
  if (city && city.photos && city.photos.length > 0) {
    photos = city.photos;
  } else {
    photos = activitiesData.filter(p => p.cityKey === cityId).map(p => ({
      title: p.title,
      subTitle: p.categoryLabel || p.category,
      src: p.imageSrc,
      desc: p.desc || p.description,
      year: p.year
    }));
  }

  const videos = (city && (city.videos || (city.video ? [city.video] : []))) || [];
  const hasVideo = videos.length > 0;

  if (titleEl) titleEl.textContent = `📍 ${cityName} Chapter — Seva Darshan`;
  if (subTitleEl) subTitleEl.textContent = `${citySub} • ${photos.length} Photos ${hasVideo ? `• 🎥 ${videos.length} Live Video${videos.length > 1 ? 's' : ''}` : ''}`;

  window.switchDistrictTab = function(tabName) {
    const tabs = bodyEl.querySelectorAll('.district-modal-tab');
    tabs.forEach(t => t.classList.remove('active'));
    const clickedTab = bodyEl.querySelector(`[data-tab="${tabName}"]`);
    if (clickedTab) clickedTab.classList.add('active');

    const photosPane = document.getElementById('districtPhotosPane');
    const videoPane = document.getElementById('districtVideoPane');

    if (tabName === 'video') {
      if (photosPane) photosPane.style.display = 'none';
      if (videoPane) {
        videoPane.style.display = 'block';
        const firstV = videoPane.querySelector('video');
        if (firstV && firstV.paused) {
          firstV.play().catch(() => {});
        }
      }
    } else {
      if (videoPane) {
        videoPane.style.display = 'none';
        const allV = videoPane.querySelectorAll('video');
        allV.forEach(v => v.pause());
      }
      if (photosPane) photosPane.style.display = 'block';
    }
  };

  const tabsHtml = `
    <div class="district-modal-tabs">
      <button type="button" class="district-modal-tab ${initialTab === 'photos' ? 'active' : ''}" data-tab="photos" onclick="switchDistrictTab('photos')">
        <i class="fas fa-camera"></i>
        <span>Photos (${photos.length})</span>
      </button>
      <button type="button" class="district-modal-tab ${initialTab === 'video' ? 'active' : ''}" data-tab="video" onclick="switchDistrictTab('video')">
        <i class="fas fa-film"></i>
        <span>Video Darshan ${hasVideo ? `(${videos.length})` : ''}</span>
        ${hasVideo ? `<span class="tab-badge">${videos.length > 1 ? `${videos.length} CLIPS` : 'LIVE CLIP'}</span>` : ''}
      </button>
    </div>
  `;

  const photosHtml = `
    <div id="districtPhotosPane" style="display: ${initialTab === 'photos' ? 'block' : 'none'};">
      ${photos.length === 0 ? `
        <div style="text-align: center; padding: 3rem; background: rgba(0,0,0,0.3); border-radius: 8px;">
          <i class="fas fa-camera" style="font-size: 2.5rem; color: var(--gold-light); margin-bottom: 0.75rem;"></i>
          <h4 style="color: var(--text-light);">Photos Coming Soon</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${cityName} chapter ground activities and seva photos are being curated.</p>
        </div>
      ` : `
        <div class="district-modal-grid">
          ${photos.map((p) => `
            <article class="district-modal-card">
              <div class="district-modal-img-wrap" onclick="openPhotoModal('${p.src}', '${(p.title || '').replace(/'/g, "\\'")}', '${(p.desc || '').replace(/'/g, "\\'")}', '${(p.subTitle || cityName).replace(/'/g, "\\'")}')" title="Click to zoom photo">
                <img src="${p.src}" alt="${p.title}" class="district-modal-img" loading="lazy">
                <div class="city-photo-overlay">
                  <i class="fas fa-search-plus"></i>
                  <span>Click to Zoom</span>
                </div>
              </div>
              <div class="district-modal-card-body">
                <h4 class="district-modal-card-title">${p.title}</h4>
                <p class="district-modal-card-desc">${p.desc}</p>
                <div class="district-modal-card-footer">
                  <button type="button" class="btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;" onclick="openPhotoModal('${p.src}', '${(p.title || '').replace(/'/g, "\\'")}', '${(p.desc || '').replace(/'/g, "\\'")}', '${(p.subTitle || cityName).replace(/'/g, "\\'")}')">
                    <i class="fas fa-expand"></i> Zoom View
                  </button>
                  <a href="${p.src}" download target="_blank" class="btn-primary" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; text-decoration: none;">
                    <i class="fas fa-download"></i> Download
                  </a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      `}
    </div>
  `;

  const videoHtml = `
    <div id="districtVideoPane" style="display: ${initialTab === 'video' ? 'block' : 'none'};">
      ${hasVideo ? `
        <div class="district-videos-list" style="display: flex; flex-direction: column; gap: 2rem;">
          ${videos.map((vid, idx) => `
            <div class="district-video-wrapper">
              <video id="districtVideoPlayer_${idx}" class="district-video-player" controls playsinline preload="metadata" poster="${photos.length > idx ? photos[idx].src : (photos.length > 0 ? photos[0].src : '')}">
                <source src="${vid.src}" type="video/mp4">
                Your browser does not support HTML5 video streaming.
              </video>
              <div class="district-video-info">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap;">
                  <div>
                    <h4 style="color: var(--gold-light); font-size: 1.15rem; margin-bottom: 0.35rem;">
                      <i class="fas fa-play-circle text-gold" style="margin-right: 0.35rem;"></i>
                      ${vid.title}
                    </h4>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.5rem;">
                      ${vid.subTitle}
                    </p>
                  </div>
                  <span class="tab-badge" style="background: linear-gradient(135deg, #B8860B, #FFD700); color: #120102; padding: 0.25rem 0.6rem; font-weight: 700; border-radius: 4px; font-size: 0.78rem;">
                    <i class="fas fa-check-circle"></i> ${vid.sizeBadge || 'HD MP4'}
                  </span>
                </div>
                <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.55; margin-top: 0.5rem; margin-bottom: 1.25rem;">
                  ${vid.desc}
                </p>
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                  <a href="${vid.src}" download target="_blank" class="btn-primary" style="font-size: 0.85rem; padding: 0.45rem 1rem; text-decoration: none;">
                    <i class="fas fa-download"></i> Download Video
                  </a>
                  <button type="button" class="btn-secondary" onclick="const v = document.getElementById('districtVideoPlayer_${idx}'); if (v.requestFullscreen) { v.requestFullscreen(); } else if (v.webkitRequestFullscreen) { v.webkitRequestFullscreen(); }" style="font-size: 0.85rem; padding: 0.45rem 1rem;">
                    <i class="fas fa-expand"></i> Full Screen
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <div style="text-align: center; padding: 3rem; background: rgba(0,0,0,0.3); border-radius: 8px;">
          <i class="fas fa-video-slash" style="font-size: 2.5rem; color: var(--gold-light); margin-bottom: 0.75rem;"></i>
          <h4 style="color: var(--text-light);">Video Darshan Coming Soon</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">Ground video clips of ${cityName} chapter sankirtan and samabesa are currently being recorded and prepared.</p>
        </div>
      `}
    </div>
  `;

  bodyEl.innerHTML = tabsHtml + photosHtml + videoHtml;
  modal.showModal();

  if (initialTab === 'video' && hasVideo) {
    const firstV = document.getElementById('districtVideoPlayer_0');
    if (firstV) {
      setTimeout(() => firstV.play().catch(() => {}), 300);
    }
  }
};

window.selectDistrictForSeva = function(cityName) {
  const citySelect = document.getElementById('volunteerCity');
  if (citySelect) {
    for (let i = 0; i < citySelect.options.length; i++) {
      if (citySelect.options[i].text.toLowerCase().includes(cityName.toLowerCase()) || 
          citySelect.options[i].value.toLowerCase().includes(cityName.toLowerCase())) {
        citySelect.selectedIndex = i;
        break;
      }
    }
  }
};

window.openPhotoModal = function(src, title, desc, subTitle) {
  const modal = document.getElementById('photoModal');
  const img = document.getElementById('photoModalImg');
  const modalTitle = document.getElementById('photoModalTitle');
  const modalSubTitle = document.getElementById('photoModalSubTitle');
  const modalDesc = document.getElementById('photoModalDesc');
  const downloadLink = document.getElementById('photoModalDownload');
  if (!modal) return;
  if (img) img.src = src;
  if (modalTitle) modalTitle.textContent = title || 'Malkangiri Chapter Photo';
  if (modalSubTitle) modalSubTitle.textContent = subTitle || title || '';
  if (modalDesc) modalDesc.textContent = desc || '';
  if (downloadLink) {
    downloadLink.href = src;
    downloadLink.setAttribute('download', (title || 'malkangiri-photo').replace(/[^a-zA-Z0-9_-]/g, '_') + '.jpg');
  }
  modal.showModal();
};

// ==========================================================================
// 10. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderCityCards('all');
  renderGalleryPhotos();
  setupCityNavTabs();
  setupGalleryPills();
  setupSearchInput();
  setupLightboxEvents();
  setupNavigation();
  setupSevaForm();
  setupDocumentsModule();
  loadDataFromBackend();
  console.log('🕉️ Sri Sri Jagannath Nam Sankirtan Loka Kala parisad Odisha: All 18 Odisha Chapters & Auth Docs Ready!');
});
