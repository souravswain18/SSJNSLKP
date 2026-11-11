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
        chapterRepository.findByCityKey("balasore").ifPresent(ch -> {
            if (ch.getPhotoCount() != 4) {
                ch.setPhotoCount(4);
                ch.setActivities(Arrays.asList(
                    "Administrative coordination & patronization of Balasore district folk artistes",
                    "Khirachora Gopinath Kshetra Grand Nagar Sankirtan & Remuna Parikrama",
                    "Coastal fishermen community Annadan & devotional welfare seva",
                    "Preservation of northern Odisha Vaishnava kirtan & traditional pala heritage"
                ));
                chapterRepository.save(ch);
            }
        });
                chapterRepository.findByCityKey("puri").ifPresent(ch -> {
            if (ch.getPhotoCount() != 7) {
                ch.setPhotoCount(7);
                chapterRepository.save(ch);
            }
        });
        chapterRepository.findByCityKey("sambalpur").ifPresent(ch -> {
            if (ch.getPhotoCount() != 3) {
                ch.setPhotoCount(3);
                ch.setActivities(Arrays.asList(
                    "Administrative coordination & patronization of traditional Sambalpuri folk artistes",
                    "Paschima Odisha Grand Kirtan Samavesh (50+ Village Mandalis)",
                    "Free training camps for youth in traditional Mridanga (Khol) & Jhanja",
                    "Gramin Seva Yatra, women kirtan mandali empowerment & evening sanskar camps"
                ));
                chapterRepository.save(ch);
            }
        });
        chapterRepository.findByCityKey("koraput").ifPresent(ch -> {
            if (ch.getPhotoCount() != 7) {
                ch.setPhotoCount(7);
                ch.setActivities(Arrays.asList(
                    "District Level Sankirtan and Loka Kala Mahasamabesa at Jeypore Dussehra Padia",
                    "Grand Nagar Sankirtan Shobhayatra from Jeypore Jagannath Mandir with 14 blocks",
                    "Preservation of tribal folk arts, Chadeia-Chadeiani dance, and indigenous music",
                    "Felicitation of traditional kirtan acharyas and musical instrument distribution"
                ));
                chapterRepository.save(ch);
            }
        });
        chapterRepository.findByCityKey("nabrangpur").ifPresent(ch -> {
            if (ch.getPhotoCount() != 14) {
                ch.setPhotoCount(14);
                ch.setActivities(Arrays.asList(
                    "Mass congregational Harinam Samavesh on the banks of river Indravati",
                    "District Level Sankirtan and Loka Kala Samabesa uniting 328+ village mandalis",
                    "Gramin Sanskar Kendra imparting Gita shlokas and character education",
                    "Preservation of traditional tribal Desia, Dhemsa folk arts & musical instruments",
                    "Monthly village Parikrama and community prasad distribution"
                ));
                chapterRepository.save(ch);
            }
        });
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
                "Shri Jagannath Seva Samiti & Senior Kirtan Acharyas", "+91 94370 XXXXX", "Mula Peetha", 7,
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
            new CityChapter("koraput", "Koraput", "କୋରାପୁଟ • Sabara Srikhetra & Jeypore Devotional Chapter",
                "Sabara Srikhetra Jagannath Mandir Seva Dal & Koraput District Samabesa Sangha", "+91 94390 XXXXX", "Sabara Srikhetra", 8,
                Arrays.asList(
                    "District Level Sankirtan and Loka Kala Mahasamabesa at Jeypore Dussehra Padia",
                    "Grand Nagar Sankirtan Shobhayatra from Jeypore Jagannath Mandir with 14 blocks",
                    "Preservation of tribal folk arts, Chadeia-Chadeiani dance, and indigenous music",
                    "Felicitation of traditional kirtan acharyas and musical instrument distribution"
                )),

            // 4. Nabarangpur
            new CityChapter("nabrangpur", "Nabarangpur", "ନବରଙ୍ଗପୁର • Southern Odisha Cultural & Youth Kendra",
                "Indravati Teer Sankirtan Parishad & District Samabesa Seva Sangha", "+91 94375 XXXXX", "Sankirtan Kendra", 14,
                Arrays.asList(
                    "Mass congregational Harinam Samavesh on the banks of river Indravati",
                    "District Level Sankirtan and Loka Kala Samabesa uniting 328+ village mandalis",
                    "Gramin Sanskar Kendra imparting Gita shlokas and character education",
                    "Preservation of traditional tribal Desia, Dhemsa folk arts & musical instruments",
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
                "Maa Samaleswari Bhakti Sangha & Sambalpur District Seva Mandali", "+91 99380 XXXXX", "Western Odisha Hub", 3,
                Arrays.asList(
                    "Administrative coordination & patronization of traditional Sambalpuri folk artistes",
                    "Paschima Odisha Grand Kirtan Samavesh (50+ Village Mandalis)",
                    "Free training camps for youth in traditional Mridanga (Khol) & Jhanja",
                    "Gramin Seva Yatra, women kirtan mandali empowerment & evening sanskar camps"
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
                "Baleswar Bhakti Sankirtan Parishad & District Seva Samiti", "+91 94371 XXXXX", "Coastal Heritage", 4,
                Arrays.asList(
                    "Administrative coordination & patronization of Balasore district folk artistes",
                    "Khirachora Gopinath Kshetra Grand Nagar Sankirtan & Remuna Parikrama",
                    "Coastal fishermen community Annadan & devotional welfare seva",
                    "Preservation of northern Odisha Vaishnava kirtan & traditional pala heritage"
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
            new ActivityPhoto("photo-puri-0", "ଶ୍ରୀକ୍ଷେତ୍ର ବଡ଼ଦାଣ୍ଡ ରଥଯାତ୍ରା ଆକାଶ ମାର୍ଗ ଦର୍ଶନ", "Puri Dham", "puri",
                "sankirtan", "Ratha Yatra & Harinam", "2024", "assets/images/puri-badadanda-rath-yatra-aerial-darshan.jpg",
                "Spectacular aerial night view of holy Nandighosha, Taladhwaja, and Darpadalana chariots on Badadanda surrounded by lakhs of chanting devotees before illuminated Srimandir.",
                "Grand Road (Badadanda), Puri",
                Arrays.asList("Puri", "Ratha Yatra", "Badadanda", "Aerial Darshan", "Harinam")),
            new ActivityPhoto("photo-puri-1", "ଶ୍ରୀକ୍ଷେତ୍ର ସିଂହଦ୍ୱାର ପ୍ରତିଦିନ ସଂକୀର୍ତ୍ତନ ମଣ୍ଡଳୀ ଓ ହରିନାମ", "Puri Dham", "puri",
                "sankirtan", "Harinam Sankirtan", "2024", "assets/images/puri-singhadwara-daily-sankirtan-mandali.jpg",
                "Daily divine Harinam Sankirtan at holy Sri Jagannath Mandir Singhadwara with senior acharyas and rural mandalis.",
                "Singhadwara & Aruna Stambha, Sri Jagannath Temple, Puri",
                Arrays.asList("Puri", "Singhadwara", "Argus News", "Harinam Sankirtan")),
            new ActivityPhoto("photo-puri-2", "ପୁରୀ ବଡ଼ଦାଣ୍ଡ ମହିଳା ସଂକୀର୍ତ୍ତନ ମହା ଶୋଭାଯାତ୍ରା", "Puri Dham", "puri",
                "sankirtan", "Harinam Sankirtan", "2024", "assets/images/puri-badadanda-women-sankirtan-shobhayatra.jpg",
                "Hundreds of traditional women sankirtan artistes in traditional attire performing Harinam and playing gini on Grand Road.",
                "Badadanda, Puri",
                Arrays.asList("Puri", "Women Mandali", "Shobhayatra", "Badadanda")),
            new ActivityPhoto("photo-puri-3", "‘ଅର୍ଗସ ନ୍ୟୁଜ’ରେ ଶ୍ରୀ ଶ୍ରୀ ଜଗନ୍ନାଥ ନାମ ସଂକୀର୍ତ୍ତନ ଲୋକକଳା ପରିଷଦ", "Puri Dham", "puri",
                "satsang", "Media Feature", "2024", "assets/images/puri-argus-news-parisad-official-broadcast.jpg",
                "Official television broadcast feature honoring Sri Sri Jagannath Nam Sankirtan Loka Kala Parisad and its leadership.",
                "Srikhetra Puri",
                Arrays.asList("Puri", "Argus News", "Official Feature", "State Leadership")),
            new ActivityPhoto("photo-puri-4", "ପୁରୀ ବଡ଼ଦାଣ୍ଡରେ ପରିଷଦ ନେତୃତ୍ୱଙ୍କ ଗଣମାଧ୍ୟମ ବକ୍ତବ୍ୟ", "Puri Dham", "puri",
                "satsang", "Media Address", "2024", "assets/images/puri-badadanda-leadership-media-interview.jpg",
                "Parishad leadership addressing media on Puri Badadanda regarding statewide kirtaniyas welfare and cultural patronization.",
                "Badadanda, Puri",
                Arrays.asList("Puri", "Media Interview", "Leadership", "Badadanda")),

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

            // 3. Koraput (Real Photos from Official District Samabesa)
            new ActivityPhoto("photo-koraput-1", "ଜୟପୁର ଶ୍ରୀ ଜଗନ୍ନାଥ ମନ୍ଦିରରୁ ନଗର ସଂକୀର୍ତ୍ତନ ଶୋଭାଯାତ୍ରା", "Koraput", "koraput",
                "sankirtan", "Harinam Sankirtan", "2024", "assets/images/koraput-jeypore-nagar-sankirtan-shobhayatra.jpg",
                "Massive street shobhayatra from holy Jeypore Jagannath temple with thousands of devotees, senior MLAs, and Parishad leadership.",
                "Main Road & Dussehra Padia, Jeypore, Koraput",
                Arrays.asList("Koraput", "Jeypore", "Nagar Sankirtan", "Shobhayatra")),
            new ActivityPhoto("photo-koraput-2", "ଜିଲ୍ଲାପାଳଙ୍କ ସହ ପ୍ରଶାସନିକ ଆଲୋଚନା ଓ ନିମନ୍ତ୍ରଣ", "Koraput", "koraput",
                "satsang", "Official Meeting", "2024", "assets/images/koraput-collector-meeting.jpg",
                "Parishad State President Sri Sidhartha Sankar Swain and delegation meeting Koraput Collector Shri Manoj Satyawan Mahajan, IAS.",
                "Collectorate Office, Koraput",
                Arrays.asList("Koraput", "District Collector", "Official Meeting")),
            new ActivityPhoto("photo-koraput-3", "ଚଢେଇଆ-ଚଢେଇଆଣୀ ପାରମ୍ପରିକ ଲୋକକଳା ସଂରକ୍ଷଣ", "Koraput", "koraput",
                "lok-kala", "Lok Kala & Music", "2024", "assets/images/koraput-chadeia-dance-awareness.jpg",
                "Revival and preservation of authentic tribal Chadeia-Chadeiani folk dance and music across Koraput district villages.",
                "Kotpad & Jeypore Cultural Mandap, Koraput",
                Arrays.asList("Koraput", "Chadeia Dance", "Lok Kala", "Tribal Art")),
            new ActivityPhoto("photo-koraput-4", "‘ଆର୍ଗସ ନ୍ୟୁଜ’ରେ ଆଦିବାସୀ ଲୋକନୃତ୍ୟ ସଚେତନତା", "Koraput", "koraput",
                "lok-kala", "Lok Kala & Music", "2024", "assets/images/koraput-chadeia-dance-broadcast-thumb.jpg",
                "Argus News television broadcast coverage of traditional Chadeia-Chadeiani tribal folk dance awareness performance supported by Parishad.",
                "District Cultural Awareness Venue, Koraput",
                Arrays.asList("Koraput", "Argus News", "Chadeia Dance", "Lok Kala", "Awareness")),

            // 4. Nabarangpur (Real Photos from Official District Samabesa)
            new ActivityPhoto("photo-nabrangpur-1", "ଜିଲ୍ଲାସ୍ତରୀୟ ସଂକୀର୍ତ୍ତନ ଓ ଲୋକ କଳା ମହା ଶୋଭାଯାତ୍ରା", "Nabarangpur", "nabrangpur",
                "sankirtan", "Harinam Sankirtan", "2024", "assets/images/nabarangpur-shobhayatra-nagar-parikrama.jpg",
                "Spectacular street procession of 328 village kirtan groups dancing with khol, kartal, jhanja, and saffron flags along Nabarangpur main thoroughfares.",
                "Main Road & Mini Stadium, Nabarangpur",
                Arrays.asList("Nabarangpur", "Shobhayatra", "328 Mandalis", "Harinam")),
            new ActivityPhoto("photo-nabrangpur-2", "ଆଦିବାସୀ ପାରମ୍ପରିକ ଲୋକକଳା ଓ ନୃତ୍ୟ ସଂରକ୍ଷଣ", "Nabarangpur", "nabrangpur",
                "lok-kala", "Lok Kala & Tribal Art", "2024", "assets/images/nabarangpur-prameya-tribal-dance.jpg",
                "Preservation of indigenous culture: tribal artistes performing traditional Rinjha, Dhemsa, and Desia folk dances alongside Harinam Sankirtan.",
                "PM Shri Raja Chaitanya Deb Ground, Nabarangpur",
                Arrays.asList("Nabarangpur", "Tribal Dance", "Dhemsa", "Lok Kala")),
            new ActivityPhoto("photo-nabrangpur-3", "ଜିଲ୍ଲାପାଳଙ୍କ ସହ ଆଲୋଚନା ଓ ଉତ୍ତରୀୟ ପ୍ରଦାନ", "Nabarangpur", "nabrangpur",
                "satsang", "Official Meeting", "2024", "assets/images/nabarangpur-collector-meeting.jpg",
                "Parishad leadership presenting ceremonial Uttariya to District Collector & Magistrate Shri Maheswar Swain, IAS.",
                "Collectorate Office, Nabarangpur",
                Arrays.asList("Nabarangpur", "District Collector", "Official Meeting")),
            new ActivityPhoto("photo-nabrangpur-4", "ମାନ୍ୟବର କ୍ୟାବିନେଟ ମନ୍ତ୍ରୀ ଶ୍ରୀ ନିତ୍ୟାନନ୍ଦ ଗଣ୍ଡଙ୍କୁ ସ୍ମାରକପତ୍ର ପ୍ରଦାନ", "Nabarangpur", "nabrangpur",
                "satsang", "Ministerial Meeting", "2024", "assets/images/nabarangpur-minister-memorandum-review.jpg",
                "Parishad delegation and kirtan leaders presenting memorandum and demand letter to Hon’ble Cabinet Minister Shri Nityananda Gond (Minister of School & Mass Education, ST & SC Development, Minorities & Backward Classes Welfare, Govt. of Odisha) for rural sankirtan welfare.",
                "District Samabesa Venue, Nabarangpur",
                Arrays.asList("Nabarangpur", "Nityananda Gond", "Cabinet Minister", "Memorandum", "Sankirtan Seva")),

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

            // 6. Sambalpur (Real Ground Photo & Folk Activities)
            new ActivityPhoto("photo-sambalpur-1", "ଜିଲ୍ଲାପାଳ ଶ୍ରୀ ସିଦ୍ଧେଶ୍ୱର ବଳିରାମ ବୋନ୍ଦାର, IASଙ୍କ ସହ ଆଲୋଚନା ଓ ସମ୍ବର୍ଦ୍ଧନା", "Sambalpur", "sambalpur",
                "satsang", "Official Meeting", "2024", "assets/images/sambalpur-collector-meeting.jpg",
                "Parishad State President Sri Sidhartha Sankar Swain and women seva mandali members in traditional Sambalpuri sarees presenting sacred uttariya and floral bouquet to District Collector & Magistrate Shri Siddheshwar Baliram Bondar, IAS.",
                "District Collectorate Office, Sambalpur",
                Arrays.asList("Sambalpur", "District Collector", "Siddheshwar Baliram Bondar", "Official Meeting", "Women Seva")),
            new ActivityPhoto("photo-sambalpur-2", "Maa Samaleswari Mahotsav Kirtan", "Sambalpur", "sambalpur",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/sambalpur-kirtan-samavesh.svg",
                "Western Odisha grand kirtan congregation where village mandalis unite with mridanga beats.",
                "Maa Samaleswari Temple Grounds, Sambalpur",
                Arrays.asList("Sambalpur", "Samaleswari", "Western Odisha")),
            new ActivityPhoto("photo-sambalpur-3", "Folk Mridanga (Khol) Training Camp", "Sambalpur", "sambalpur",
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

            // 8. Balasore (Real Ground Photos & Coastal Activities)
            new ActivityPhoto("photo-balasore-1", "ବାଲେଶ୍ୱର ଜିଲ୍ଲାପାଳଙ୍କୁ ସ୍ମାରକପତ୍ର ପ୍ରଦାନ", "Balasore", "balasore",
                "satsang", "Official Meeting", "2024", "assets/images/balasore-collector-memorandum.jpg",
                "Official representation and memorandum submission to District Collector & Magistrate Balasore at Collectorate office.",
                "District Collectorate Office, Balasore",
                Arrays.asList("Balasore", "District Collector", "Official Meeting", "Memorandum")),
            new ActivityPhoto("photo-balasore-2", "ଜିଲ୍ଲାପାଳଙ୍କୁ ସମ୍ବର୍ଦ୍ଧନା ଓ ଅଭିନନ୍ଦନ ପତ୍ର ପ୍ରଦାନ", "Balasore", "balasore",
                "satsang", "Official Felicitation", "2024", "assets/images/balasore-collector-felicitation-citation.jpg",
                "Presenting framed honorary Felicitation Citation (ଅଭିନନ୍ଦନ ପତ୍ର) to Balasore District Magistrate & Collector.",
                "District Collectorate Office, Balasore",
                Arrays.asList("Balasore", "Felicitation", "Citation", "Official Meeting")),
            new ActivityPhoto("photo-balasore-3", "Khirachora Gopinath Nagar Kirtan", "Balasore", "balasore",
                "sankirtan", "Harinam Sankirtan", "2025", "assets/images/balasore-kirtan-samaroh.svg",
                "Grand congregational Harinam procession around the historic Remuna & Balasore heritage peethas.",
                "Remuna Khirachora Gopinath Temple, Balasore",
                Arrays.asList("Balasore", "Remuna", "Gopinath", "Nagar Kirtan")),
            new ActivityPhoto("photo-balasore-4", "Coastal Pilgrim & Sadhu Annadan", "Balasore", "balasore",
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
