package org.jagannath.parisad.model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Entity representing a regional Odisha chapter/kendra
 * of Sri Sri Jagannath Nam Sankirtan Lok Kalaparisad.
 */
@Entity
@Table(name = "city_chapters")
public class CityChapter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String cityKey; // e.g. "puri", "malkangiri", "koraput"

    @Column(nullable = false)
    private String name; // e.g. "Puri Dham", "Malkangiri"

    private String subName; // Odia script subtitle & designation
    private String coordinator; // Key Sevayat in-charge
    private String contact; // Helpline / phone
    private String badge; // e.g. "Mula Peetha", "Sabara Srikhetra"
    private int photoCount;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "chapter_activities", joinColumns = @JoinColumn(name = "chapter_id"))
    @Column(name = "activity_description", length = 500)
    private List<String> activities = new ArrayList<>();

    public CityChapter() {
    }

    public CityChapter(String cityKey, String name, String subName, String coordinator, 
                       String contact, String badge, int photoCount, List<String> activities) {
        this.cityKey = cityKey;
        this.name = name;
        this.subName = subName;
        this.coordinator = coordinator;
        this.contact = contact;
        this.badge = badge;
        this.photoCount = photoCount;
        if (activities != null) {
            this.activities = activities;
        }
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCityKey() {
        return cityKey;
    }

    public void setCityKey(String cityKey) {
        this.cityKey = cityKey;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSubName() {
        return subName;
    }

    public void setSubName(String subName) {
        this.subName = subName;
    }

    public String getCoordinator() {
        return coordinator;
    }

    public void setCoordinator(String coordinator) {
        this.coordinator = coordinator;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getBadge() {
        return badge;
    }

    public void setBadge(String badge) {
        this.badge = badge;
    }

    public int getPhotoCount() {
        return photoCount;
    }

    public void setPhotoCount(int photoCount) {
        this.photoCount = photoCount;
    }

    public List<String> getActivities() {
        return activities;
    }

    public void setActivities(List<String> activities) {
        this.activities = activities;
    }
}
