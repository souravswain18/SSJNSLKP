# 🕉️ Sri Sri Jagannath Nam Sankirtan Loka Kala parisad Odisha
### Java Spring Boot Backend & Devotional City Catalogue
*(ଶ୍ରୀ ଶ୍ରୀ ଜଗନ୍ନାଥ ନାମ ସଂକୀର୍ତ୍ତନ ଲୋକ କଳା ପରିଷଦ, ଓଡ଼ିଶା)*

---

## 🚩 Project Architecture (प्रोजेक्ट आर्किटेक्चर)
Yeh project ek **Full-Stack Spiritual Catalogue Web Application** hai jiska backend **Java (Spring Boot 3 + Spring Data JPA + H2 In-Memory Database)** me banaya gaya hai aur frontend **HTML5, Modern CSS (Devotional Theme) aur JavaScript** me bana hai organisation **Sri Sri Jagannath Nam Sankirtan Loka Kala parisad Odisha** ke liye.

### 🌐 Live Server URL:
- **Full Web App**: [http://localhost:8080](http://localhost:8080)
- **City Chapters REST API**: [http://localhost:8080/api/chapters](http://localhost:8080/api/chapters)
- **Photos & Activities REST API**: [http://localhost:8080/api/photos](http://localhost:8080/api/photos)
- **H2 Database Web Console**: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)  
  *(JDBC URL: `jdbc:h2:mem:jagannath_db`, Username: `sa`, Password: blank)*

---

## 🏛️ 7 Odisha Regional Chapters (ସାତଟି କେନ୍ଦ୍ର)
Organisation exclusive roop se Odisha ke in 7 pramukh jilon me karyarat hai:

1. **Puri Dham (ଶ୍ରୀକ୍ଷେତ୍ର ପୁରୀ)** - Mula Peetha & Central Headquarters (Badadanda Nagar Kirtan & Daily Mahaprasad Seva)
2. **Malkangiri (ମାଲକାନଗିରି)** - Swabhiman Anchal Tribal & Gramin Harinam Yatras, Winter Blanket & Annadan Relief
3. **Koraput (କୋରାପୁଟ)** - Sabara Srikhetra Jagannath Utsav, Pahari Bhajan & 30+ Hill Mandali Sammelan
4. **Nabarangpur (ନବରଙ୍ଗପୁର)** - Indravati Teer Harinam Samavesh & Gramin Sanskar Gita Patha Kendra
5. **Dhenkanal (ଢେଙ୍କାନାଳ)** - Kapilash Kshetra Akhanda Harinam Maha-Yajna & Traditional Pala/Lok Kala
6. **Sambalpur (ସମ୍ବଲପୁର)** - Western Odisha Grand Kirtan Samavesh & Traditional Mridanga (Khol) Training
7. **Khordha (ଖୋର୍ଦ୍ଧା)** - Barunei Peetha Prabhat Pheri & Srimad Bhagavata Youth Discourses

---

## 📂 Java Backend Code Structure (जावा बैकएंड पैकेज)

```
sri-jagannath-sankirtan-parisad/
├── pom.xml                                       # Maven build configuration (Java 17/Spring Boot 3)
├── mvnw & mvnw.cmd                              # Maven Wrapper (zero install required)
├── .mvn/wrapper/                                # Maven wrapper binaries
├── src/main/java/org/jagannath/parisad/
│   ├── JagannathParisadApplication.java          # Spring Boot Main Entry Point
│   ├── config/
│   │   ├── CorsConfig.java                      # CORS & Static Upload Resource handler
│   │   └── DataLoader.java                      # Seeds 7 Odisha chapters & 14 photos on boot
│   ├── controller/
│   │   ├── ChapterController.java               # REST: /api/chapters (GET, POST)
│   │   ├── PhotoController.java                 # REST: /api/photos (GET, POST, /upload)
│   │   └── VolunteerController.java             # REST: /api/volunteers (POST, GET)
│   ├── model/
│   │   ├── CityChapter.java                     # JPA Entity for Odisha regional chapters
│   │   ├── ActivityPhoto.java                   # JPA Entity for catalogue photos & events
│   │   └── VolunteerRegistration.java           # JPA Entity for devotee seva registrations
│   ├── repository/
│   │   ├── CityChapterRepository.java
│   │   ├── ActivityPhotoRepository.java         # Dynamic search & city/category filter queries
│   │   └── VolunteerRegistrationRepository.java
│   └── service/
│       ├── ChapterService.java
│       ├── PhotoService.java                    # Search, category filters & multipart photo upload
│       └── VolunteerService.java
└── src/main/resources/
    ├── application.properties                   # H2 database & server configuration
    └── static/                                  # Frontend assets (served automatically on port 8080)
        ├── index.html
        ├── css/styles.css
        ├── js/app.js
        └── assets/ (icons & 14 Odisha vector activity photos)
```

---

## 🚀 How to Run the Java Backend (जावा बैकएंड कैसे चलाएं)

### Command to Start Spring Boot:
Folder me terminal open karein aur run karein:
```powershell
cd C:\Users\KIIT\.gemini\antigravity\scratch\sri-jagannath-sankirtan-parisad
.\mvnw.cmd spring-boot:run
```

App start hone ke baad browser me kholiye:
👉 **`http://localhost:8080`**

---

## 📡 REST API Documentation

### 1. City Chapters API
- `GET /api/chapters` - Returns all 7 Odisha regional chapters.
- `GET /api/chapters/{cityKey}` - Returns single chapter (e.g. `/api/chapters/puri` or `/api/chapters/koraput`).
- `POST /api/chapters` - Add a new chapter.

### 2. Activity Photos Catalogue API
- `GET /api/photos` - Returns all photo entries.
- `GET /api/photos?city=malkangiri` - Filter photos by city.
- `GET /api/photos?category=annadan` - Filter photos by seva category (`sankirtan`, `lok-kala`, `annadan`, `satsang`).
- `GET /api/photos?search=kapilash` - Live keyword search.
- `POST /api/photos` - Add new photo JSON metadata.
- `POST /api/photos/upload` - Multipart file upload of real photos directly from PC.

### 3. Volunteer / Seva Registration API
- `POST /api/volunteers` - Save devotee seva registrations submitted from the website form into the database.
- `GET /api/volunteers` - View all devotee submissions.
- `GET /api/volunteers/count` - Total count of registered volunteers.

---

## ⚡ Dual Mode (Online & Offline)
- **With Java Backend Running**: Frontend automatically detects `http://localhost:8080`, loads live data from database, and saves form submissions directly to the backend.
- **Offline Mode (Without Backend)**: Devotees or your father can also double-click `index.html` anywhere without running any server — it runs with built-in fallback data seamlessly!

---
*जय जगन्नाथ! Jai Jagannath!* 🙏
