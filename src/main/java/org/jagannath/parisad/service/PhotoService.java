package org.jagannath.parisad.service;

import org.jagannath.parisad.model.ActivityPhoto;
import org.jagannath.parisad.repository.ActivityPhotoRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PhotoService {

    private final ActivityPhotoRepository photoRepository;

    @Value("${app.upload.dir:uploads/photos/}")
    private String uploadDir;

    public PhotoService(ActivityPhotoRepository photoRepository) {
        this.photoRepository = photoRepository;
    }

    public List<ActivityPhoto> getAllPhotos(String cityKey, String category, String search) {
        if (search != null && !search.trim().isEmpty()) {
            return photoRepository.searchPhotos(search.trim());
        }

        boolean hasCity = cityKey != null && !cityKey.trim().isEmpty() && !cityKey.equalsIgnoreCase("all");
        boolean hasCategory = category != null && !category.trim().isEmpty() && !category.equalsIgnoreCase("all");

        if (hasCity && hasCategory) {
            return photoRepository.findByCityKeyAndCategory(cityKey.toLowerCase(), category.toLowerCase());
        } else if (hasCity) {
            return photoRepository.findByCityKey(cityKey.toLowerCase());
        } else if (hasCategory) {
            return photoRepository.findByCategory(category.toLowerCase());
        }

        return photoRepository.findAll();
    }

    public Optional<ActivityPhoto> getPhotoById(Long id) {
        return photoRepository.findById(id);
    }

    public ActivityPhoto savePhoto(ActivityPhoto photo) {
        if (photo.getPhotoKey() == null || photo.getPhotoKey().trim().isEmpty()) {
            photo.setPhotoKey("photo-" + UUID.randomUUID().toString().substring(0, 8));
        }
        return photoRepository.save(photo);
    }

    public ActivityPhoto uploadAndSavePhoto(MultipartFile file, ActivityPhoto photoData) throws IOException {
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String originalFilename = file.getOriginalFilename();
        String extension = "";
        if (originalFilename != null && originalFilename.contains(".")) {
            extension = originalFilename.substring(originalFilename.lastIndexOf("."));
        }

        String uniqueFilename = UUID.randomUUID().toString() + extension;
        Path targetPath = uploadPath.resolve(uniqueFilename);
        Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);

        photoData.setImageSrc("/" + uploadDir.replace("\\", "/") + uniqueFilename);
        return savePhoto(photoData);
    }
}
