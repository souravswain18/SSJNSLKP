package org.jagannath.parisad.repository;

import org.jagannath.parisad.model.VolunteerRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VolunteerRegistrationRepository extends JpaRepository<VolunteerRegistration, Long> {
    List<VolunteerRegistration> findByCityIgnoreCase(String city);
    List<VolunteerRegistration> findBySevaInterest(String sevaInterest);
}
