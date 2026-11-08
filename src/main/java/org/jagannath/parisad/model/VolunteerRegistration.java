package org.jagannath.parisad.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDateTime;

/**
 * Entity representing a devotee volunteer interest submission
 * from the website contact/registration form.
 */
@Entity
@Table(name = "volunteer_registrations")
public class VolunteerRegistration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Full name is required")
    @Column(nullable = false)
    private String fullName;

    @NotBlank(message = "City or district is required")
    @Column(nullable = false)
    private String city;

    @NotBlank(message = "Seva interest area is required")
    @Column(nullable = false)
    private String sevaInterest;

    @NotBlank(message = "Phone number is required")
    @Column(nullable = false)
    private String phone;

    @Column(length = 1000)
    private String notes;

    private LocalDateTime registeredAt;

    @PrePersist
    public void prePersist() {
        if (this.registeredAt == null) {
            this.registeredAt = LocalDateTime.now();
        }
    }

    public VolunteerRegistration() {
    }

    public VolunteerRegistration(String fullName, String city, String sevaInterest, String phone, String notes) {
        this.fullName = fullName;
        this.city = city;
        this.sevaInterest = sevaInterest;
        this.phone = phone;
        this.notes = notes;
        this.registeredAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getSevaInterest() {
        return sevaInterest;
    }

    public void setSevaInterest(String sevaInterest) {
        this.sevaInterest = sevaInterest;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public LocalDateTime getRegisteredAt() {
        return registeredAt;
    }

    public void setRegisteredAt(LocalDateTime registeredAt) {
        this.registeredAt = registeredAt;
    }
}
