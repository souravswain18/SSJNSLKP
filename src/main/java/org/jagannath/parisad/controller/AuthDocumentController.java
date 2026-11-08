package org.jagannath.parisad.controller;

import org.jagannath.parisad.model.AuthDocument;
import org.jagannath.parisad.service.AuthDocumentService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/documents")
@CrossOrigin(origins = "*")
public class AuthDocumentController {

    private final AuthDocumentService documentService;

    @Value("${app.upload.doc.dir:uploads/documents/}")
    private String docUploadDir;

    public AuthDocumentController(AuthDocumentService documentService) {
        this.documentService = documentService;
    }

    @GetMapping
    public ResponseEntity<List<AuthDocument>> getAllDocuments(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search) {
        return ResponseEntity.ok(documentService.getAllDocuments(category, search));
    }

    @GetMapping("/{id}")
    public ResponseEntity<AuthDocument> getDocumentById(@PathVariable Long id) {
        return documentService.getDocumentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/file/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName) {
        try {
            Path filePath = Paths.get(docUploadDir).resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if (resource.exists() && resource.isReadable()) {
                String contentType = "application/octet-stream";
                if (fileName.endsWith(".pdf")) {
                    contentType = "application/pdf";
                } else if (fileName.endsWith(".png")) {
                    contentType = "image/png";
                } else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) {
                    contentType = "image/jpeg";
                }

                return ResponseEntity.ok()
                        .contentType(MediaType.parseMediaType(contentType))
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + fileName + "\"")
                        .body(resource);
            }
        } catch (Exception e) {
            // fallthrough
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> uploadDocument(
            @RequestParam("file") MultipartFile file,
            @RequestParam("title") String title,
            @RequestParam("category") String category,
            @RequestParam(value = "documentNumber", required = false) String documentNumber,
            @RequestParam(value = "issuingAuthority", required = false) String issuingAuthority,
            @RequestParam(value = "issueYear", required = false) String issueYear,
            @RequestParam(value = "description", required = false) String description) {

        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Please select a valid document file to upload"));
        }

        try {
            AuthDocument doc = new AuthDocument();
            doc.setTitle(title);
            doc.setCategory(category != null ? category.toLowerCase() : "registration");
            doc.setDocumentNumber(documentNumber);
            doc.setIssuingAuthority(issuingAuthority != null ? issuingAuthority : "Govt. of India / Odisha");
            doc.setIssueYear(issueYear != null ? issueYear : "2026");
            doc.setDescription(description);

            AuthDocument saved = documentService.uploadAndSaveDocument(file, doc);
            return ResponseEntity.status(HttpStatus.CREATED).body(saved);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Failed to upload document: " + e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDocument(@PathVariable Long id) {
        if (documentService.deleteDocument(id)) {
            return ResponseEntity.ok(Map.of("message", "Document deleted successfully"));
        }
        return ResponseEntity.notFound().build();
    }
}
