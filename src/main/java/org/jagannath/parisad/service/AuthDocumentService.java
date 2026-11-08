package org.jagannath.parisad.service;

import org.jagannath.parisad.model.AuthDocument;
import org.jagannath.parisad.repository.AuthDocumentRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.text.DecimalFormat;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AuthDocumentService {

    private final AuthDocumentRepository documentRepository;

    @Value("${app.upload.doc.dir:uploads/documents/}")
    private String docUploadDir;

    public AuthDocumentService(AuthDocumentRepository documentRepository) {
        this.documentRepository = documentRepository;
    }

    public List<AuthDocument> getAllDocuments(String category, String search) {
        if (search != null && !search.trim().isEmpty()) {
            return documentRepository.searchDocuments(search.trim());
        }

        if (category != null && !category.trim().isEmpty() && !category.equalsIgnoreCase("all")) {
            return documentRepository.findByCategoryIgnoreCase(category.trim());
        }

        return documentRepository.findAllByOrderByUploadDateDesc();
    }

    public Optional<AuthDocument> getDocumentById(Long id) {
        return documentRepository.findById(id);
    }

    public AuthDocument saveDocument(AuthDocument doc) {
        return documentRepository.save(doc);
    }

    public AuthDocument uploadAndSaveDocument(MultipartFile file, AuthDocument docData) throws IOException {
        Path uploadPath = Paths.get(docUploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String originalFilename = file.getOriginalFilename();
        String extension = "";
        if (originalFilename != null && originalFilename.contains(".")) {
            extension = originalFilename.substring(originalFilename.lastIndexOf(".")).toLowerCase();
        }

        String uniqueFilename = "doc_" + UUID.randomUUID().toString().substring(0, 8) + extension;
        Path targetPath = uploadPath.resolve(uniqueFilename);
        Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);

        // Detect file type
        String fileType = "PDF";
        if (extension.equals(".jpg") || extension.equals(".jpeg") || extension.equals(".png") || extension.equals(".webp")) {
            fileType = "IMAGE";
        } else if (extension.equals(".doc") || extension.equals(".docx")) {
            fileType = "DOC";
        }

        // Format file size
        long bytes = file.getSize();
        String sizeFormatted;
        DecimalFormat df = new DecimalFormat("#.##");
        if (bytes >= 1024 * 1024) {
            sizeFormatted = df.format(bytes / (1024.0 * 1024.0)) + " MB";
        } else {
            sizeFormatted = df.format(bytes / 1024.0) + " KB";
        }

        docData.setFileName(originalFilename != null ? originalFilename : uniqueFilename);
        docData.setFileUrl("/api/documents/file/" + uniqueFilename);
        docData.setFileType(fileType);
        docData.setFileSizeFormatted(sizeFormatted);
        docData.setVerifiedStatus(true);

        return documentRepository.save(docData);
    }

    public boolean deleteDocument(Long id) {
        if (documentRepository.existsById(id)) {
            documentRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
