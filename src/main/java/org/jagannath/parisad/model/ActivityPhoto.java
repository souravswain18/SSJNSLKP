package org.jagannath.parisad.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Entity representing an activity photo / devotional event record
 * in the catalogue archive.
 */
@Entity
@Table(name = "activity_photos")
public class ActivityPhoto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String photoKey; // Unique code e.g. "photo-puri-1"

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String city; // e.g. "Puri Dham", "Malkangiri"

    @Column(nullable = false)
    private String cityKey; // e.g. "puri", "malkangiri"

    @Column(nullable = false)
    private String category; // "sankirtan", "lok-kala", "annadan", "satsang"

    private String categoryLabel; // "Harinam Sankirtan", "Lok Kala & Music"

    @Column(name = "event_year")
    private String year;

    @Column(nullable = false)
    private String imageSrc; // Path e.g. "assets/images/puri-rath-kirtan.svg" or "/uploads/photos/..."

    @Column(name = "photo_description", length = 1000)
    private String description;

    private String location;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "photo_tags", joinColumns = @JoinColumn(name = "photo_id"))
    @Column(name = "tag_name")
    private List<String> tags = new ArrayList<>();

    public ActivityPhoto() {
    }

    public ActivityPhoto(String photoKey, String title, String city, String cityKey,
                         String category, String categoryLabel, String year,
                         String imageSrc, String description, String location, List<String> tags) {
        this.photoKey = photoKey;
        this.title = title;
        this.city = city;
        this.cityKey = cityKey;
        this.category = category;
        this.categoryLabel = categoryLabel;
        this.year = year;
        this.imageSrc = imageSrc;
        this.description = description;
        this.location = location;
        if (tags != null) {
            this.tags = tags;
        }
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPhotoKey() {
        return photoKey;
    }

    public void setPhotoKey(String photoKey) {
        this.photoKey = photoKey;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCityKey() {
        return cityKey;
    }

    public void setCityKey(String cityKey) {
        this.cityKey = cityKey;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCategoryLabel() {
        return categoryLabel;
    }

    public void setCategoryLabel(String categoryLabel) {
        this.categoryLabel = categoryLabel;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getImageSrc() {
        return imageSrc;
    }

    public void setImageSrc(String imageSrc) {
        this.imageSrc = imageSrc;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }
}
