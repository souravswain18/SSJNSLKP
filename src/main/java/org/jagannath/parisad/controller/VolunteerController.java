package org.jagannath.parisad.controller;

import jakarta.validation.Valid;
import org.jagannath.parisad.model.VolunteerRegistration;
import org.jagannath.parisad.service.VolunteerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/volunteers")
@CrossOrigin(origins = "*")
public class VolunteerController {

    private final VolunteerService volunteerService;

    public VolunteerController(VolunteerService volunteerService) {
        this.volunteerService = volunteerService;
    }

    @PostMapping
    public ResponseEntity<?> registerVolunteer(@Valid @RequestBody VolunteerRegistration registration) {
        VolunteerRegistration saved = volunteerService.registerVolunteer(registration);

        Map<String, Object> response = new HashMap<>();
        response.put("status", "SUCCESS");
        response.put("message", "Jai Jagannath! Your devotional registration has been recorded successfully.");
        response.put("data", saved);

        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<VolunteerRegistration>> getAllRegistrations() {
        return ResponseEntity.ok(volunteerService.getAllRegistrations());
    }

    @GetMapping("/count")
    public ResponseEntity<Map<String, Long>> getCount() {
        Map<String, Long> res = new HashMap<>();
        res.put("totalVolunteers", volunteerService.getCount());
        return ResponseEntity.ok(res);
    }
}
