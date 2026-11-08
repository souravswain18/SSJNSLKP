package org.jagannath.parisad.config;

import org.jagannath.parisad.model.ActivityPhoto;
import org.jagannath.parisad.model.AuthDocument;
import org.jagannath.parisad.model.CityChapter;
import org.jagannath.parisad.repository.ActivityPhotoRepository;
import org.jagannath.parisad.repository.AuthDocumentRepository;
import org.jagannath.parisad.repository.CityChapterRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

/**
 * Seeds the database on startup with all 18 Odisha regional chapters
 * and curated devotional photo catalogue entries.
 */
@Component
public class DataLoader implements CommandLineRunner {

    private final CityChapterRepository chapterRepository;
    private final ActivityPhotoRepository photoRepository;
    private final AuthDocumentRepository documentRepository;

    public DataLoader(CityChapterRepository chapterRepository, 
                      ActivityPhotoRepository photoRepository,
                      AuthDocumentRepository documentRepository) {
        this.chapterRepository = chapterRepository;
        this.photoRepository = photoRepository;
        this.documentRepository = documentRepository;
    }

    @Override
    public void run(String... args) {
        if (chapterRepository.count() == 0) {
            seedChapters();
        } else {
            if (!chapterRepository.existsByCityKey("jharsuguda")) {
                chapterRepository.save(new CityChapter("jharsuguda", "Jharsuguda", 
                    "ଝାରସୁଗୁଡ଼ା • Brajrajnagar & Paschima Odisha Industrial-Tribal Sankirtan Peetha",
                    "Jharsuguda District Seva Sangha & Mridanga Mandali Acharyas", "+91 94378 XXXXX", "Paschima Odisha Kirtan", 2,
                    Arrays.asList(
                        "Grand Nagar Sankirtan & Prabhat Pheri across Jharsuguda, Brajrajnagar & Belpahar",
                        "Preservation of traditional Sambalpuri-Jagannath folk kirtan & Dhol-Nishan seva",
                        "Gramin Annadan seva shivir & warm clothes distribution for industrial and rural laborers",
                        "Youth Mridanga (Khol) training camps and Ramachandi-Jagannath satsang sabhas"
                    )));
            }
            if (!chapterRepository.existsByCityKey("kalahandi")) {
                chapterRepository.save(new CityChapter("kalahandi", "Kalahandi", 
                    "କଳାହାଣ୍ଡି • Manikeswari Peetha & Tel Valley Sankirtan Kendra",
                    "Kalahandi District Sankirtan Seva Samiti & Maa Manikeswari Mandali", "+91 94379 XXXXX", "Manikeswari Peetha", 2,
                    Arrays.asList(
                        "Maa Manikeswari Chhatar Yatra Mahotsav mass Harinam Sankirtan procession",
                        "Ancient Tel river valley Jagannath temple parikrama and Prabhat Pheri yatras",
                        "Gramin Annadan seva shivir & famine relief grain bank for tribal settlements in Thuamul Rampur",
                        "Free Ghanta, Kartal & Mridanga instrument distribution to 20+ village kirtan mandalis"
                    )));
            }
        }
        if (photoRepository.count() == 0) {
            seedPhotos();
        } else {
            if (photoRepository.findByCityKey("jharsuguda").isEmpty()) {
                photoRepository.saveAll(Arrays.asList(
                    new ActivityPhoto("photo-jharsuguda-1", "Jharsuguda & Brajrajnagar Nagar Sankirtan", "Jharsuguda", "jharsuguda",
                        "sankirtan", "Harinam Sankirtan", "2025", "assets/images/jharsuguda-kirtan-mandali.svg",
                        "Harinam Sankirtan procession through Jharsuguda and Brajrajnagar town peethas with dhol and mridanga.",
                        "Jharsuguda & Brajrajnagar Towns, Jharsuguda",
                        Arrays.asList("Jharsuguda", "Brajrajnagar", "Nagar Sankirtan")),
                    new ActivityPhoto("photo-jharsuguda-2", "Paschima Odisha Tribal & Gramin Seva", "Jharsuguda", "jharsuguda",
                        "annadan", "Annadan Seva", "2025", "assets/images/jharsuguda-gramin-seva.svg",
                        "Community Annadan and warm clothes distribution for industrial and rural laborers in Kolabira and Laikera.",
                        "Kolabira & Laikera Blocks, Jharsuguda",
                        Arrays.asList("Jharsuguda", "Gramin Seva", "Annadan"))
                ));
            }
            if (photoRepository.findByCityKey("kalahandi").isEmpty()) {
                photoRepository.saveAll(Arrays.asList(
                    new ActivityPhoto("photo-kalahandi-1", "Maa Manikeswari Chhatar Yatra Sankirtan", "Kalahandi", "kalahandi",
                        "sankirtan", "Harinam Sankirtan", "2025", "assets/images/kalahandi-chhatar-yatra.svg",
                        "Ecstatic Harinam Sankirtan procession accompanying Maa Manikeswari during the historic Bhawanipatna Chhatar Yatra.",
                        "Bhawanipatna & Manikeswari Temple, Kalahandi",
                        Arrays.asList("Kalahandi", "Chhatar Yatra", "Manikeswari", "Sankirtan")),
                    new ActivityPhoto("photo-kalahandi-2", "Thuamul Rampur Tribal & Gramin Seva", "Kalahandi", "kalahandi",
                        "annadan", "Annadan Seva", "2025", "assets/images/kalahandi-gramin-seva.svg",
                        "Community Annadan, dry rations and winter blanket distribution for indigenous families across Thuamul Rampur.",
                        "Thuamul Rampur & Lanjigarh, Kalahandi",
                        Arrays.asList("Kalahandi", "Thuamul Rampur", "Gramin Seva", "Annadan"))
                ));
            }
        }
        if (documentRepository.count() == 0) {
            seedDocuments();
        } else if (documentRepository.searchDocuments("srisrijagannath@sbi").isEmpty()) {
            documentRepository.save(new AuthDocument(
                "Official Bank Account & UPI Donation QR (State Bank of India)",
                "donation",
                "UPI ID: srisrijagannath@sbi",
                "State Bank of India (SBI) • SRI SRIJAGANNATH NAMA SANKIRT",
                "2026",
                "Helping hand to poor tribal artists and hari bhaktas , all donations are used in distribution of musical instruments, clothings and mahaprasad annadan, Youth seva, etc.",
                "sbi-upi-donation-qr.png",
                "assets/docs/sbi-upi-donation-qr.png",
                "IMAGE",
                "742 KB"
            ));
        }
        System.out.println("🕉️ Sri Sri Jagannath Nam Sankirtan Loka Kala parisad Odisha: 18 Chapters & Auth Docs Initialized!");
    }

    private void seedChapters() {
        List<CityChapter> chapters = Arrays.asList(
            // 1. Puri
            new CityChapter("puri", "Puri Dham", "ଶ୍ରୀକ୍ଷେତ୍ର ପୁରୀ • Mula Peetha & Central Headquarters",
                "Shri Jagannath Seva Samiti & Senior Kirtan Acharyas", "+91 94370 XXXXX", "Mula Peetha", 2,
                Arrays.asList(
                    "Daily Badadanda Harinam Nagar Sankirtan & Prabhat Pheri",
                    "Grand Ratha Yatra & Snana Yatra Seva Shivir along chariot route",
                    "Continuous Ananda Bazar Mahaprasad distribution to sadhus & pilgrims",
                    "Kartik Niyam Seva Akhanda Kirtan & Traditional Bhajan Samaroh"
                )),

            // 2. Malkangiri
            new CityChapter("malkangiri", "Malkangiri", "ମାଲକାନଗିରି • Swabhiman Anchal Tribal & Gramin Seva",
                "Malkangiri District Seva Sangha & Gramin In-charge", "+91 94380 XXXXX", "Tribal & Gramin Seva", 6,
                Arrays.asList(
                    "Swabhiman Anchal Gramin Harinam Sankirtan Yatras in remote villages",
                    "Free community Annadan & disaster relief camps for tribal families",
                    "Distribution of warm blankets, clothes, and essential supplies",
                    "Fostering devotional harmony and preserving indigenous traditions"
                )),

            // 3. Koraput
            new CityChapter("koraput", "Koraput", "କୋରାପୁଟ • Sabara Srikhetra Devotional Chapter",
                "Sabara Srikhetra Jagannath Mandir Seva Dal", "+91 94390 XXXXX", "Sabara Srikhetra", 2,
                Arrays.asList(
                    "Celebrating Sabara Srikhetra traditional tribal-Jagannath festivals",
                    "Pahari Bhajan Mandali Sammelan uniting 30+ hill community groups",
                    "Spiritual empowerment camps and devotional music workshops",
                    "Preservation of tribal devotional folk songs and rhythm traditions"
                )),

            // 4. Nabarangpur
            new CityChapter("nabrangpur", "Nabarangpur", "ନବରଙ୍ଗପୁର • Southern Odisha Cultural & Youth Kendra",
                "Indravati Teer Sankirtan Parishad", "+91 94375 XXXXX", "Sankirtan Kendra", 2,
                Arrays.asList(
                    "Mass congregational Harinam Samavesh on the banks of river Indravati",
                    "Gramin Sanskar Kendra imparting Gita shlokas and character education",
                    "Assistance and musical instrument distribution to rural kirtaniyas",
                    "Monthly village Parikrama and community prasad distribution"
                )),

            // 5. Dhenkanal
            new CityChapter("dhenkanal", "Dhenkanal", "ଢେଙ୍କାନାଳ • Kapilash & Mahima Peetha Devotional Wing",
                "Kapilash Kshetra Bhakti Parishad", "+91 94382 XXXXX", "Lok Kala & Heritage", 2,
                Arrays.asList(
                    "24-Hour Akhanda Harinam Maha-Yajna in sacred Kapilash foothills",
                    "Revival & preservation of traditional Odia Pala and Daskathia art",
                    "Recitation and singing shivirs for Jayadev's sacred Geet Govind",
                    "Senior sadhu seva and spiritual retreats during auspicious festivals"
                )),

            // 6. Sambalpur
            new CityChapter("sambalpur", "Sambalpur", "ସମ୍ବଲପୁର • Western Odisha Lok Kala & Mridanga Hub",
                "Maa Samaleswari Bhakti Sangha Coordinators", "+91 99380 XXXXX", "Western Odisha Hub", 2,
                Arrays.asList(
                    "Paschima Odisha Grand Kirtan Samavesh (50+ Village Mandalis)",
                    "Free training camps for youth in traditional Mridanga (Khol) & Jhanja",
                    "Gramin Seva Yatra & evening sanskar camps across villages",
                    "Empowerment of underprivileged traditional folk kirtan performers"
                )),

            // 7. Khordha & Bhubaneswar
            new CityChapter("khordha", "Khordha (Bhubaneswar)", "ଖୋର୍ଦ୍ଧା • Barunei Peetha & Central Secretariat",
                "Shri Sidhartha Sankar Swain (President)", "+91 94376 03767", "Central & Youth Wing", 2,
                Arrays.asList(
                    "Weekly Central Harinam Prabhat Pheri & Sankirtan rally across Bhubaneswar-Khordha",
                    "Statutory coordination with Police Commissionerate & Govt. of India MoSJ&E",
                    "Srimad Bhagavad Gita & Bhagavata discourses for college youth",
                    "Free spiritual literature distribution and authentic Lok Kala preservation"
                )),

            // 8. Balasore
            new CityChapter("balasore", "Balasore", "ବାଲେଶ୍ୱର • Khirachora Gopinath & Coastal Heritage",
                "Baleswar Bhakti Sankirtan Parishad", "+91 94371 XXXXX", "Coastal Heritage", 2,
                Arrays.asList(
                    "Khirachora Gopinath Kshetra Grand Nagar Sankirtan & Remuna Parikrama",
                    "Coastal fishermen community Annadan & devotional welfare seva",
                    "Preservation of northern Odisha Vaishnava kirtan traditions",
                    "Monthly Harinam Prabhat Pheri along Chandipur coastline"
                )),

            // 9. Mayurbhanj
            new CityChapter("mayurbhanj", "Mayurbhanj", "ମୟୂରଭଞ୍ଜ • Dwitiya Srikhetra Baripada Chapter",
                "Haribaldev Jew Seva Dal & Tribal Kirtan Mandal", "+91 94372 XXXXX", "Dwitiya Srikhetra", 2,
                Arrays.asList(
                    "Dwitiya Srikhetra Baripada Ratha Yatra Grand Sankirtan procession",
                    "Tribal devotional music and Santhal-Odia devotional cultural confluence",
                    "Gramin sanskar camps across Similipal peripheral villages",
                    "Assistance to indigenous folk music artistes and instrument makers"
                )),

            // 10. Jagatsinghpur
            new CityChapter("jagatsinghpur", "Jagatsinghpur", "ଜଗତସିଂହପୁର • Maa Sarala Peetha & Coastal Seva",
                "Sarala Kshetra Sankirtan Mandali", "+91 94373 XXXXX", "Sarala Peetha", 2,
                Arrays.asList(
                    "Maa Sarala Peetha Morning Prabhat Pheri and Harinam rallies",
                    "Mahanadi Delta coastal cyclone & flood relief Annadan seva",
                    "Traditional Odia Sarala Mahabharat devotional reading camps",
                    "Village temple restoration and community cleanliness seva"
                )),

            // 11. Cuttack
            new CityChapter("cuttack", "Cuttack", "କଟକ • Millennium City & Mahanadi Yajna Kendra",
                "Mahanadi Teer Harinam Mandal", "+91 97780 XXXXX", "Mahanadi Kendra", 2,
                Arrays.asList(
                    "24-Hour Akhanda Harinam Mahayajna on Mahanadi Gadagadia Ghat",
                    "State level Pala, Daskathia, and classical Odissi bhajan festival",
                    "Continuous Annadan and emergency community relief drives",
                    "Training workshops for authentic Odia Khol and Kartal rhythms"
                )),

            // 12. Sundargarh
            new CityChapter("sundargarh", "Sundargarh", "ସୁନ୍ଦରଗଡ଼ • Vedavyas & Northern Forest Tribal Wing",
                "Vedavyas Sangam Sankirtan Parishad", "+91 94374 XXXXX", "Tribal & Youth Wing", 2,
                Arrays.asList(
                    "Vedavyas Triveni Sangam Akhanda Harinam Sankirtan Yatra",
                    "Tribal village outreach and moral education shivirs across Sundargarh",
                    "Youth Bhagavad Gita study circles in college and mining belts",
                    "Distribution of clothes, books, and mridanga to rural mandalis"
                )),

            // 13. Nuapada
            new CityChapter("nuapada", "Nuapada", "ନୂଆପଡ଼ା • Yogeswar Peetha & Border Seva Chapter",
                "Yogeswar Temple Bhakti Mandali", "+91 94376 XXXXX", "Gramin Seva Hub", 2,
                Arrays.asList(
                    "Yogeswar Peetha border village Harinam Samavesh and Rath Yatra",
                    "Drought-prone area community grain bank and free cooked meals",
                    "Tribal folklore bhajan preservation and evening prayer centers",
                    "Youth moral upliftment and drug-free society awareness drives"
                )),

            // 14. Balangir
            new CityChapter("balangir", "Balangir", "ବଲାଙ୍ଗୀର • Harishankar & Gandhamardan Cultural Peetha",
                "Gandhamardan Harinam Samiti", "+91 94377 XXXXX", "Gandhamardan Hub", 2,
                Arrays.asList(
                    "Harishankar Kshetra Gandhamardan foothills Akhanda Kirtan Yajna",
                    "Western Odisha folk bhajan sammelan and traditional Dalkhai-bhakti arts",
                    "Traditional herbal health & Annadan camps for visiting pilgrims",
                    "Empowering rural youth with devotional instrument playing skills"
                )),

            // 15. Boudh
            new CityChapter("boudh", "Boudh", "ବୌଦ୍ଧ • Central Mahanadi Heritage & Sadhu Seva",
                "Boudh Jagannath Temple Parishad", "+91 94378 XXXXX", "Mahanadi Heritage", 2,
                Arrays.asList(
                    "Mahanadi river valley ancient temple parikrama and Harinam yatra",
                    "Sadhu, ascetic, and visiting pilgrim seva and Mahaprasad feasts",
                    "Preservation of century-old Odia palm-leaf devotional literature",
                    "Village tree plantation and sacred pond renovation seva"
                )),

            // 16. Bargarh
            new CityChapter("bargarh", "Bargarh", "ବରଗଡ଼ • Dhanu Yatra & Nrusinghanath Devotional Hub",
                "Dhanu Yatra Bhakti Samiti & Nrusinghanath Mandal", "+91 94379 XXXXX", "Dhanu Yatra Hub", 2,
                Arrays.asList(
                    "World famous Dhanu Yatra Mahotsav mass Harinam procession",
                    "Nrusinghanath Kshetra sacred stream parikrama and kirtan camp",
                    "Agricultural community devotional unity and sanskar gatherings",
                    "Free mridanga instrument distribution to 25+ farmer kirtan mandalis"
                )),

            // 17. Jharsuguda
            new CityChapter("jharsuguda", "Jharsuguda", "ଝାରସୁଗୁଡ଼ା • Brajrajnagar & Paschima Odisha Industrial-Tribal Sankirtan Peetha",
                "Jharsuguda District Seva Sangha & Mridanga Mandali Acharyas", "+91 94378 XXXXX", "Paschima Odisha Kirtan", 2,
                Arrays.asList(
                    "Grand Nagar Sankirtan & Prabhat Pheri across Jharsuguda, Brajrajnagar & Belpahar",
                    "Preservation of traditional Sambalpuri-Jagannath folk kirtan & Dhol-Nishan seva",
                    "Gramin Annadan seva shivir & warm clothes distribution for industrial and rural laborers",
                    "Youth Mridanga (Khol) training camps and Ramachandi-Jagannath satsang sabhas"
                )),

            // 18. Kalahandi
            new CityChapter("kalahandi", "Kalahandi", "କଳାହାଣ୍ଡି • Manikeswari Peetha & Tel Valley Sankirtan Kendra",
                "Kalahandi District Sankirtan Seva Samiti & Maa Manikeswari Mandali", "+91 94379 XXXXX", "Manikeswari Peetha", 2,
                Arrays.asList(
                    "Maa Manikeswari Chhatar Yatra Mahotsav mass Harinam Sankirtan procession",
                    "Ancient Tel river valley Jagannath temple parikrama and Prabhat Pheri yatras",
                    "Gramin Annadan seva shivir & famine relief grain bank for tribal settlements in Thuamul Rampur",
                    "Free Ghanta, Kartal & Mridanga instrument distribution to 20+ village kirtan mandalis"
                ))
        );

        chapterRepository.saveAll(chapters);
    }

    private void seedPhotos() {
        List<ActivityPhoto> photos = Arrays.asList(
            // 1. Puri
            new ActivityPhoto("photo-puri-1", "Badadanda Grand Nagar Sankirtan", "Puri Dham", "puri",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/puri-rath-kirtan.svg",
                "Thousands of devotees chanting the Maha-Mantra along Badadanda before Lord Jagannath chariot.",
                "Badadanda, Sri Jagannath Temple, Puri",
                Arrays.asList("Ratha Yatra", "Puri", "Nagar Kirtan")),
            new ActivityPhoto("photo-puri-2", "Ananda Bazar Mahaprasad Seva", "Puri Dham", "puri",
                "annadan", "Annadan Seva", "2025", "assets/images/puri-mahaprasad-seva.svg",
                "Volunteers distributing warm, holy Mahaprasad to visiting pilgrims, ascetics, and devotees.",
                "Ananda Bazar & Lions Gate, Puri",
                Arrays.asList("Mahaprasad", "Annadan", "Pilgrim Seva")),

            // 2. Malkangiri (Authentic Ground Meeting Photos)
            new ActivityPhoto("photo-malkangiri-1", 
                "ମହାସଂକୀର୍ତ୍ତନ ଲୋକକଳା ସମାବେଶ ଶୋଭାଯାତ୍ରା (Maha Sankirtan Loka Kala Samabesa Procession)", 
                "Malkangiri", "malkangiri", "sankirtan", "Harinam Sankirtan", "2024", 
                "assets/images/malkangiri-sankirtan-samabesa-procession.jpg",
                "President Sri Sidhartha Sankar Swain and parishad sevaks carrying Sri Jagannath Mahaprabhu portraits with the official Malkangiri District Samabesa banner in grand street procession.",
                "DNK Road & Main Avenue, Malkangiri Town",
                Arrays.asList("Malkangiri", "Maha Samabesa", "Shobhayatra", "Sri Jagannath")),

            new ActivityPhoto("photo-malkangiri-2", 
                "ନଗର ସଂକୀର୍ତ୍ତନ ଓ ପରିକ୍ରମା (Nagar Sankirtan & Samabesa Parikrama)", 
                "Malkangiri", "malkangiri", "sankirtan", "Harinam Sankirtan", "2024", 
                "assets/images/malkangiri-nagar-kirtan-parikrama.jpg",
                "Grand congregational Harinam Sankirtan procession through Malkangiri town with traditional dhol, mridanga, and sound seva vehicles.",
                "Malkangiri Town & Gramin Peetha",
                Arrays.asList("Malkangiri", "Nagar Kirtan", "Parikrama")),

            new ActivityPhoto("photo-malkangiri-3", 
                "ଭକ୍ତବୃନ୍ଦ ଓ ସେବକ ସମାବେଶ ରାଲି (Malkangiri Bhakta & Sevak Assembly)", 
                "Malkangiri", "malkangiri", "lok-kala", "Lok Kala & Cultural Seva", "2024", 
                "assets/images/malkangiri-devotees-rally-seva.jpg",
                "Devotees, village mothers in traditional yellow-red sarees, and youth volunteers actively participating in the district cultural congregation.",
                "Malkangiri Cultural Ground",
                Arrays.asList("Malkangiri", "Bhakta Rally", "Lok Kala", "Youth Seva")),

            new ActivityPhoto("photo-malkangiri-4", 
                "ସତସଙ୍ଗ ଓ ସାଙ୍ଗଠନିକ ଆଲୋଚନା (Satsang & Organization Meeting)", 
                "Malkangiri", "malkangiri", "satsang", "Satsang & Seva Planning", "2024", 
                "assets/images/malkangiri-maha-samabesa-gathering.jpg",
                "Devotees and committee members offering pranam and discussing district-wide expansion of village Sankirtan mandalis and Loka Kala preservation.",
                "District Parishad Sabhaghar, Malkangiri",
                Arrays.asList("Malkangiri", "Satsang", "Meeting", "Sankirtan Mandali")),

            new ActivityPhoto("photo-malkangiri-5", 
                "ହରିବୋଲ ଧ୍ୱନି ଓ ସଂକୀର୍ତ୍ତନ ମୁଦ୍ରା (Harinam Sankirtan & Divine Hand Raising)", 
                "Malkangiri", "malkangiri", "sankirtan", "Harinam Sankirtan", "2024", 
                "assets/images/malkangiri-harinam-kirtan-jai-jagannath.jpg",
                "Devotees raising both arms with holy coconut offering in traditional sankirtan ecstasy, chanting 'Hari Bol! Jai Jagannath!' before the parishad banner.",
                "Malkangiri Main Avenue, Malkangiri Town",
                Arrays.asList("Malkangiri", "Hari Bol", "Sankirtan Mudra", "Jai Jagannath")),

            new ActivityPhoto("photo-malkangiri-6", 
                "ମାଲକାନଗିରି ପରିଷଦ ବ୍ୟାନର ଓ ଭକ୍ତ ସମାବେଶ (Parishad Banner & Devotee Gathering)", 
                "Malkangiri", "malkangiri", "lok-kala", "Lok Kala & Cultural Seva", "2024", 
                "assets/images/malkangiri-samabesa-banner-bhaktas.jpg",
                "Parishad members and local devotees gathered before the official banner showcasing Sri Jagannath deities and district dignitaries.",
                "Malkangiri Town Seva Peetha",
                Arrays.asList("Malkangiri", "Banner", "Devotees", "Lok Kala")),

            // 3. Koraput
            new ActivityPhoto("photo-koraput-1", "Sabara Srikhetra Jagannath Utsav", "Koraput", "koraput",
                "lok-kala", "Lok Kala & Music", "2025", "assets/images/koraput-sabara-srikhetra.svg",
                "Celebrating sacred tribal-Jagannath brotherhood and devotional sangeet at Sabara Srikhetra.",
                "Sabara Srikhetra, Koraput Town",
                Arrays.asList("Koraput", "Sabara Srikhetra", "Lok Kala")),
            new ActivityPhoto("photo-koraput-2", "Pahari Bhajan & Traditional Mandali Sammelan", "Koraput", "koraput",
                "sankirtan", "Harinam Sankirtan", "2024", "assets/images/koraput-tribal-bhajan.svg",
                "Over thirty hill community devotional groups joining together with traditional dholak and mridanga.",
                "Jeypore & Sunabeda Foothills, Koraput",
                Arrays.asList("Koraput", "Pahari Bhajan", "Sankirtan")),

            // 4. Nabarangpur
            new ActivityPhoto("photo-nabrangpur-1", "Indravati Teer Harinam Samavesh", "Nabarangpur", "nabrangpur",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/nabarangpur-kirtan-mandali.svg",
                "Mass congregational singing on the riverfront of Indravati, filling the air with divine vibration.",
                "Indravati River Ghat, Nabarangpur",
                Arrays.asList("Nabarangpur", "Indravati", "Harinam Samavesh")),
            new ActivityPhoto("photo-nabrangpur-2", "Gramin Sanskar & Gita Patha Kendra", "Nabarangpur", "nabrangpur",
                "satsang", "Satsang & Youth", "2025", "assets/images/nabarangpur-gramin-sanskar.svg",
                "Imparting timeless values, Vedic recitation, and moral education to young village students.",
                "Umerkote & Chandahandi villages, Nabarangpur",
                Arrays.asList("Nabarangpur", "Gita Patha", "Youth")),

            // 5. Dhenkanal
            new ActivityPhoto("photo-dhenkanal-1", "Kapilash Kshetra Akhanda Harinam Yajna", "Dhenkanal", "dhenkanal",
                "sankirtan", "Harinam Sankirtan", "2024", "assets/images/dhenkanal-kapilash-yajna.svg",
                "Continuous 24-hour non-stop Akhanda Sankirtan mahayajna in sacred Kapilash foothills.",
                "Kapilash Temple Foot, Dhenkanal",
                Arrays.asList("Dhenkanal", "Kapilash", "Akhanda Yajna")),
            new ActivityPhoto("photo-dhenkanal-2", "Traditional Pala & Devotional Sangeet", "Dhenkanal", "dhenkanal",
                "lok-kala", "Lok Kala & Music", "2025", "assets/images/dhenkanal-lok-kala.svg",
                "Celebrating classical Odia Pala and Daskathia performers enacting stories of Lord Jagannath.",
                "Dhenkanal Town Hall Auditorium",
                Arrays.asList("Dhenkanal", "Pala", "Lok Kala")),

            // 6. Sambalpur
            new ActivityPhoto("photo-sambalpur-1", "Maa Samaleswari Mahotsav Kirtan", "Sambalpur", "sambalpur",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/sambalpur-kirtan-samavesh.svg",
                "Western Odisha grand kirtan congregation where village mandalis unite with mridanga beats.",
                "Maa Samaleswari Temple Grounds, Sambalpur",
                Arrays.asList("Sambalpur", "Samaleswari", "Western Odisha")),
            new ActivityPhoto("photo-sambalpur-2", "Folk Mridanga (Khol) Training Camp", "Sambalpur", "sambalpur",
                "lok-kala", "Lok Kala & Music", "2024", "assets/images/sambalpur-mridanga-seva.svg",
                "Free residential workshop training village youth in the rhythmic arts of authentic Odissi Khol.",
                "Burla & Hirakud Cultural Centre, Sambalpur",
                Arrays.asList("Sambalpur", "Mridanga", "Lok Kala")),

            // 7. Khordha
            new ActivityPhoto("photo-khordha-1", "Barunei Peetha Prabhat Pheri", "Khordha", "khordha",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/khordha-barunei-sankirtan.svg",
                "Early morning Harinam procession along the historic Barunei hills with hundreds of devotees.",
                "Maa Barunei Peetha, Khordha",
                Arrays.asList("Khordha", "Barunei", "Prabhat Pheri")),
            new ActivityPhoto("photo-khordha-2", "Youth Sanskar & Bhagavata Discourses", "Khordha", "khordha",
                "satsang", "Satsang & Youth", "2025", "assets/images/khordha-gita-satsang.svg",
                "Spiritual youth gathering exploring the teachings of Srimad Bhagavata and Sanatana values.",
                "Jatni & Khordha Town Satsang Bhavan",
                Arrays.asList("Khordha", "Bhagavata", "Youth")),

            // 8. Balasore
            new ActivityPhoto("photo-balasore-1", "Khirachora Gopinath Nagar Kirtan", "Balasore", "balasore",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/balasore-kirtan-samaroh.svg",
                "Grand congregational Harinam procession around the historic Remuna & Balasore heritage peethas.",
                "Remuna Khirachora Gopinath Temple, Balasore",
                Arrays.asList("Balasore", "Remuna", "Gopinath", "Nagar Kirtan")),
            new ActivityPhoto("photo-balasore-2", "Coastal Pilgrim & Sadhu Annadan", "Balasore", "balasore",
                "annadan", "Annadan Seva", "2024", "assets/images/balasore-annadan-seva.svg",
                "Free nutritious Mahaprasad distribution to coastal fishermen communities and visiting pilgrims.",
                "Chandipur & Baleswar Town, Balasore",
                Arrays.asList("Balasore", "Annadan", "Coastal Seva")),

            // 9. Mayurbhanj
            new ActivityPhoto("photo-mayurbhanj-1", "Dwitiya Srikhetra Baripada Rath Sankirtan", "Mayurbhanj", "mayurbhanj",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/mayurbhanj-dwitiya-srikhetra.svg",
                "Devotees celebrating traditional Haribaldev Jew Ratha Yatra with sacred kirtan along the grand avenue.",
                "Grand Road, Baripada, Mayurbhanj",
                Arrays.asList("Mayurbhanj", "Baripada", "Dwitiya Srikhetra", "Rath Yatra")),
            new ActivityPhoto("photo-mayurbhanj-2", "Tribal Devotional Folk Arts & Sangeet", "Mayurbhanj", "mayurbhanj",
                "lok-kala", "Lok Kala & Music", "2024", "assets/images/mayurbhanj-tribal-lok-kala.svg",
                "Reviving ancestral tribal rhythm traditions and Jagannath bhajan renditions across Mayurbhanj.",
                "Similipal Peripheral Cultural Bhavan, Mayurbhanj",
                Arrays.asList("Mayurbhanj", "Tribal Bhajan", "Lok Kala")),

            // 10. Jagatsinghpur
            new ActivityPhoto("photo-jagatsinghpur-1", "Maa Sarala Peetha Morning Prabhat Pheri", "Jagatsinghpur", "jagatsinghpur",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/jagatsinghpur-sarala-sankirtan.svg",
                "Early dawn Harinam yatras connecting Sarala Kshetra and coastal village mandalis.",
                "Maa Sarala Peetha, Jhankada, Jagatsinghpur",
                Arrays.asList("Jagatsinghpur", "Sarala Peetha", "Prabhat Pheri")),
            new ActivityPhoto("photo-jagatsinghpur-2", "Mahanadi Coastal Delta Community Seva", "Jagatsinghpur", "jagatsinghpur",
                "annadan", "Annadan Seva", "2024", "assets/images/jagatsinghpur-annadan-seva.svg",
                "Providing emergency food aid and community feast to flood-affected coastal hamlets.",
                "Kujang & Paradip coastal belt, Jagatsinghpur",
                Arrays.asList("Jagatsinghpur", "Annadan", "Relief Seva")),

            // 11. Cuttack
            new ActivityPhoto("photo-cuttack-1", "Mahanadi Gadagadia Ghat Akhanda Yajna", "Cuttack", "cuttack",
                "sankirtan", "Harinam Sankirtan", "2024", "assets/images/cuttack-mahanadi-yajna.svg",
                "24-hour non-stop Akhanda Harinam Mahayajna on the banks of sacred river Mahanadi.",
                "Gadagadia Ghat, Mahanadi, Cuttack",
                Arrays.asList("Cuttack", "Mahanadi", "Akhanda Yajna")),
            new ActivityPhoto("photo-cuttack-2", "Millennium City Pala & Daskathia Utsav", "Cuttack", "cuttack",
                "lok-kala", "Lok Kala & Music", "2025", "assets/images/cuttack-pala-sangeet.svg",
                "State confluence of master Pala performers and traditional Odissi devotional singers.",
                "Kala Vikash Kendra, Cuttack",
                Arrays.asList("Cuttack", "Pala", "Daskathia", "Lok Kala")),

            // 12. Sundargarh
            new ActivityPhoto("photo-sundargarh-1", "Vedavyas & Forest Belt Sankirtan Yatra", "Sundargarh", "sundargarh",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/sundargarh-gramin-kirtan.svg",
                "Spiritual outreach and Harinam yatras uniting rural mining and tribal communities.",
                "Vedavyas Temple Sangam, Rourkela, Sundargarh",
                Arrays.asList("Sundargarh", "Vedavyas", "Rourkela", "Sankirtan")),
            new ActivityPhoto("photo-sundargarh-2", "Gita Jayanti & Youth Character Camp", "Sundargarh", "sundargarh",
                "satsang", "Satsang & Youth", "2025", "assets/images/sundargarh-youth-sanskar.svg",
                "Empowering young college and school students with timeless ethical and spiritual values.",
                "Bonaigarh & Sundargarh Town, Sundargarh",
                Arrays.asList("Sundargarh", "Gita Jayanti", "Youth Sanskar")),

            // 13. Nuapada
            new ActivityPhoto("photo-nuapada-1", "Yogeswar Peetha Harinam Samavesh", "Nuapada", "nuapada",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/nuapada-yogeswar-sankirtan.svg",
                "Mass gathering of border village bhajan mandalis chanting the holy names in unison.",
                "Yogeswar Temple, Khariar, Nuapada",
                Arrays.asList("Nuapada", "Yogeswar", "Khariar", "Sankirtan")),
            new ActivityPhoto("photo-nuapada-2", "Drought Relief & Rural Annadan Seva", "Nuapada", "nuapada",
                "annadan", "Annadan Seva", "2024", "assets/images/nuapada-gramin-seva.svg",
                "Serving food grains, drinking water, and winter aid to remote tribal settlements.",
                "Sinapali & Boden rural blocks, Nuapada",
                Arrays.asList("Nuapada", "Annadan", "Drought Relief")),

            // 14. Balangir
            new ActivityPhoto("photo-balangir-1", "Harishankar Kshetra Gandhamardan Yajna", "Balangir", "balangir",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/balangir-harishankar-kirtan.svg",
                "Sacred Akhanda Nam yajna held in the foothills of medicinal Gandhamardan mountain.",
                "Harishankar Temple Grounds, Balangir",
                Arrays.asList("Balangir", "Harishankar", "Gandhamardan", "Akhanda Yajna")),
            new ActivityPhoto("photo-balangir-2", "Sambalpuri Devotional Folk Sammelan", "Balangir", "balangir",
                "lok-kala", "Lok Kala & Music", "2024", "assets/images/balangir-sambalpuri-bhajan.svg",
                "Preserving traditional Western Odisha devotional folk ragas and rhythmic instruments.",
                "Koshal Kalamandal, Balangir Town",
                Arrays.asList("Balangir", "Sambalpuri Folk", "Lok Kala")),

            // 15. Boudh
            new ActivityPhoto("photo-boudh-1", "Mahanadi Valley Rameswar Kirtan Yatra", "Boudh", "boudh",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/boudh-rameswar-kirtan.svg",
                "Congregational chanting along ancient temple ghats in central Odisha Mahanadi valley.",
                "Rameswar Temple Ghat, Boudh",
                Arrays.asList("Boudh", "Mahanadi", "Rameswar", "Sankirtan")),
            new ActivityPhoto("photo-boudh-2", "Sadhu & Pilgrim Seva Shivir", "Boudh", "boudh",
                "annadan", "Annadan Seva", "2024", "assets/images/boudh-sadhu-seva.svg",
                "Serving passing pilgrims, ascetics, and organizing community satsang feasts.",
                "Harbhanga & Boudh Town, Boudh",
                Arrays.asList("Boudh", "Sadhu Seva", "Annadan")),

            // 16. Bargarh
            new ActivityPhoto("photo-bargarh-1", "Dhanu Yatra Mahotsav Sankirtan", "Bargarh", "bargarh",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/bargarh-dhanuyatra-kirtan.svg",
                "Mass kirtan procession accompanying Lord Krishna during the world's largest open-air theatre.",
                "Dhanu Yatra Grounds, Bargarh Town",
                Arrays.asList("Bargarh", "Dhanu Yatra", "Sankirtan")),
            new ActivityPhoto("photo-bargarh-2", "Nrusinghanath Peetha Gramin Seva", "Bargarh", "bargarh",
                "satsang", "Satsang & Youth", "2025", "assets/images/bargarh-nrusinghanath-seva.svg",
                "Empowering village kirtaniyas with mridanga instruments and organising spiritual discourses.",
                "Nrusinghanath Temple Peetha, Bargarh",
                Arrays.asList("Bargarh", "Nrusinghanath", "Gramin Seva")),

            // 17. Jharsuguda
            new ActivityPhoto("photo-jharsuguda-1", "Jharsuguda & Brajrajnagar Nagar Sankirtan", "Jharsuguda", "jharsuguda",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/jharsuguda-kirtan-mandali.svg",
                "Harinam Sankirtan procession through Jharsuguda and Brajrajnagar town peethas with dhol and mridanga.",
                "Jharsuguda & Brajrajnagar Towns, Jharsuguda",
                Arrays.asList("Jharsuguda", "Brajrajnagar", "Nagar Sankirtan")),
            new ActivityPhoto("photo-jharsuguda-2", "Paschima Odisha Tribal & Gramin Seva", "Jharsuguda", "jharsuguda",
                "annadan", "Annadan Seva", "2025", "assets/images/jharsuguda-gramin-seva.svg",
                "Community Annadan and warm clothes distribution for industrial and rural laborers in Kolabira and Laikera.",
                "Kolabira & Laikera Blocks, Jharsuguda",
                Arrays.asList("Jharsuguda", "Gramin Seva", "Annadan")),

            // 18. Kalahandi
            new ActivityPhoto("photo-kalahandi-1", "Maa Manikeswari Chhatar Yatra Sankirtan", "Kalahandi", "kalahandi",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/kalahandi-chhatar-yatra.svg",
                "Ecstatic Harinam Sankirtan procession accompanying Maa Manikeswari during the historic Bhawanipatna Chhatar Yatra.",
                "Bhawanipatna & Manikeswari Temple, Kalahandi",
                Arrays.asList("Kalahandi", "Chhatar Yatra", "Manikeswari", "Sankirtan")),
            new ActivityPhoto("photo-kalahandi-2", "Thuamul Rampur Tribal & Gramin Seva", "Kalahandi", "kalahandi",
                "annadan", "Annadan Seva", "2025", "assets/images/kalahandi-gramin-seva.svg",
                "Community Annadan, dry rations and winter blanket distribution for indigenous families across Thuamul Rampur.",
                "Thuamul Rampur & Lanjigarh, Kalahandi",
                Arrays.asList("Kalahandi", "Thuamul Rampur", "Gramin Seva", "Annadan"))
        );

        photoRepository.saveAll(photos);
    }

    private void seedDocuments() {
        List<AuthDocument> docs = Arrays.asList(
            new AuthDocument(
                "Certificate of Registration of Societies (Act XXI of 1860)",
                "registration",
                "87/ 18201800077 of 2018-2019",
                "Office of the Registrar of Societies, Odisha (Cuttack)",
                "2019",
                "Official legal registration certificate under Societies Registration Act (No. XXI of 1860) granted to Sri Sri Jagannath Nam Sankirtan Parisad at Baramunda, Bhubaneswar, Khurdha, Odisha.",
                "society-registration-certificate.jpg",
                "assets/docs/society-registration-certificate.jpg",
                "IMAGE",
                "145 KB"
            ),
            new AuthDocument(
                "Ministry of Social Justice & Empowerment - Certificate of Enrollment",
                "government",
                "OR/00055330",
                "Ministry of Social Justice & Empowerment (MoSJ&E), Govt. of India",
                "2020",
                "Official Certificate of Enrollment granted to Sri Sri Jagannath Nama Sankirtan Lok Kala Parisad Odisha under e-Anudaan (eMSJE Portal) in association with National Informatics Centre (NIC).",
                "mosje-certificate-of-enrollment.jpg",
                "assets/docs/mosje-certificate-of-enrollment.jpg",
                "IMAGE",
                "132 KB"
            ),
            new AuthDocument(
                "Police Commissionerate Statutory Permission Licence (Page 1)",
                "government",
                "Licence No. 815 / L.Cell (Memo 4411)",
                "Dy. Commissioner of Police, Bhubaneswar-Cuttack",
                "2023",
                "Statutory Permission Licence granted under Section-29 and Section 8(2) of Orissa Urban Police Act, 2003 for 2000-person Spiritual Meeting & Sankirtan Assembly at Near Xavier Square, Loyola School Field, Maitri Vihar, Bhubaneswar.",
                "police-commissionerate-license-p1.jpg",
                "assets/docs/police-commissionerate-license-p1.jpg",
                "IMAGE",
                "190 KB"
            ),
            new AuthDocument(
                "Police Commissionerate Permission Licence Terms & Seal (Page 2)",
                "government",
                "Memo No. 4411 / L.Cell",
                "Dy. Commissioner of Police, Bhubaneswar",
                "2023",
                "Official signed terms, conditions, sound limiter compliance (65 dB limit), and official police dispatch endorsement for the spiritual congregation.",
                "police-commissionerate-license-p2.jpg",
                "assets/docs/police-commissionerate-license-p2.jpg",
                "IMAGE",
                "182 KB"
            ),
            new AuthDocument(
                "Society Registration Money Receipt & Treasury Challan",
                "registration",
                "App No. 1820231100405",
                "Directorate of Treasuries & Inspection, Odisha",
                "2023",
                "Official government fee payment receipt (Challan Txn No. 35CF09791E, Bank Txn 0851486119136) for Shri Shri Jagannath Nam Sankirtan Lok Kala Parisad, Odisha, Bhubaneswar.",
                "society-registration-money-receipt.jpg",
                "assets/docs/society-registration-money-receipt.jpg",
                "IMAGE",
                "297 KB"
            ),
            new AuthDocument(
                "Official Bank Account & UPI Donation QR (State Bank of India)",
                "donation",
                "UPI ID: srisrijagannath@sbi",
                "State Bank of India (SBI) • SRI SRIJAGANNATH NAMA SANKIRT",
                "2026",
                "Helping hand to poor tribal artists and hari bhaktas , all donations are used in distribution of musical instruments, clothings and mahaprasad annadan, Youth seva, etc.",
                "sbi-upi-donation-qr.png",
                "assets/docs/sbi-upi-donation-qr.png",
                "IMAGE",
                "742 KB"
            )
        );

        documentRepository.saveAll(docs);
    }
}
