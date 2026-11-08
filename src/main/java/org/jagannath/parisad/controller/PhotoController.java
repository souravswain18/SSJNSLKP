package org.jagannath.parisad.controller;

import org.jagannath.parisad.model.ActivityPhoto;
import org.jagannath.parisad.service.PhotoService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/photos")
@CrossOrigin(origins = "*")
public class PhotoController {

    private final PhotoService photoService;

    public PhotoController(PhotoService photoService) {
        this.photoService = photoService;
    }

    @GetMapping
    public ResponseEntity<List<ActivityPhoto>> getAllPhotos(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search) {
        return ResponseEntity.ok(photoService.getAllPhotos(city, category, search));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ActivityPhoto> getPhotoById(@PathVariable Long id) {
        return photoService.getPhotoById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ActivityPhoto> createPhoto(@RequestBody ActivityPhoto photo) {
        ActivityPhoto saved = photoService.savePhoto(photo);
        return ResponseEntity.ok(saved);
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> uploadPhoto(
            @RequestParam("file") MultipartFile file,
            @RequestParam("title") String title,
            @RequestParam("city") String city,
            @RequestParam("cityKey") String cityKey,
            @RequestParam("category") String category,
            @RequestParam(value = "categoryLabel", required = false) String categoryLabel,
            @RequestParam(value = "year", required = false) String year,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "location", required = false) String location,
            @RequestParam(value = "tags", required = false) List<String> tags) {

        try {
            ActivityPhoto photo = new ActivityPhoto();
            photo.setTitle(title);
            photo.setCity(city);
            photo.setCityKey(cityKey);
            photo.setCategory(category);
            photo.setCategoryLabel(categoryLabel != null ? categoryLabel : category);
            photo.setYear(year != null ? year : "2026");
            photo.setDescription(description);
            photo.setLocation(location);
            if (tags != null) {
                photo.setTags(tags);
            }

            ActivityPhoto saved = photoService.uploadAndSavePhoto(file, photo);
            return ResponseEntity.ok(saved);
        } catch (IOException e) {
            return ResponseEntity.internalServerError().body("Error uploading photo: " + e.getMessage());
        }
    }
}
