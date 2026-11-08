package org.jagannath.parisad.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "auth_documents")
public class AuthDocument {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String category; // registration, government, tax, bylaws, audit

    private String documentNumber; // e.g. OR/00055330

    private String issuingAuthority; // e.g. Govt. of India, MoSJ&E / Registrar of Societies

    @Column(name = "issue_year")
    private String issueYear;

    @Column(length = 1000)
    private String description;

    private String fileName;

    private String fileUrl;

    private String fileType; // PDF, JPG, PNG

    private String fileSizeFormatted;

    private boolean verifiedStatus = true;

    private LocalDate uploadDate;

    public AuthDocument() {
        this.uploadDate = LocalDate.now();
        this.verifiedStatus = true;
    }

    public AuthDocument(String title, String category, String documentNumber, 
                        String issuingAuthority, String issueYear, String description, 
                        String fileName, String fileUrl, String fileType, String fileSizeFormatted) {
        this.title = title;
        this.category = category;
        this.documentNumber = documentNumber;
        this.issuingAuthority = issuingAuthority;
        this.issueYear = issueYear;
        this.description = description;
        this.fileName = fileName;
        this.fileUrl = fileUrl;
        this.fileType = fileType;
        this.fileSizeFormatted = fileSizeFormatted;
        this.verifiedStatus = true;
        this.uploadDate = LocalDate.now();
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDocumentNumber() {
        return documentNumber;
    }

    public void setDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
    }

    public String getIssuingAuthority() {
        return issuingAuthority;
    }

    public void setIssuingAuthority(String issuingAuthority) {
        this.issuingAuthority = issuingAuthority;
    }

    public String getIssueYear() {
        return issueYear;
    }

    public void setIssueYear(String issueYear) {
        this.issueYear = issueYear;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public String getFileSizeFormatted() {
        return fileSizeFormatted;
    }

    public void setFileSizeFormatted(String fileSizeFormatted) {
        this.fileSizeFormatted = fileSizeFormatted;
    }

    public boolean isVerifiedStatus() {
        return verifiedStatus;
    }

    public void setVerifiedStatus(boolean verifiedStatus) {
        this.verifiedStatus = verifiedStatus;
    }

    public LocalDate getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(LocalDate uploadDate) {
        this.uploadDate = uploadDate;
    }
}
