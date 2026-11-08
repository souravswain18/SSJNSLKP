package org.jagannath.parisad.service;

import org.jagannath.parisad.model.VolunteerRegistration;
import org.jagannath.parisad.repository.VolunteerRegistrationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VolunteerService {

    private final VolunteerRegistrationRepository volunteerRepository;

    public VolunteerService(VolunteerRegistrationRepository volunteerRepository) {
        this.volunteerRepository = volunteerRepository;
    }

    public VolunteerRegistration registerVolunteer(VolunteerRegistration registration) {
        return volunteerRepository.save(registration);
    }

    public List<VolunteerRegistration> getAllRegistrations() {
        return volunteerRepository.findAll();
    }

    public long getCount() {
        return volunteerRepository.count();
    }
}
