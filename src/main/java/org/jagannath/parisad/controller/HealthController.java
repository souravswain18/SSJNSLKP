package org.jagannath.parisad.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;
import java.time.Instant;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Lightweight Health Check Endpoint for Cloud Hosting (Render, AWS, Docker)
 * and Uptime Monitors (UptimeRobot, BetterUptime).
 */
@RestController
@CrossOrigin(origins = "*")
public class HealthController {

    private final Instant startTime = Instant.now();

    @GetMapping({"/health", "/api/health"})
    public ResponseEntity<Map<String, Object>> healthCheck() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("status", "UP");
        response.put("service", "Sri Sri Jagannath Nam Sankirtan Loka Kala Parisad Odisha");
        response.put("activeDistricts", 18);
        response.put("timestamp", Instant.now().toString());
        response.put("uptimeSeconds", Duration.between(startTime, Instant.now()).getSeconds());
        return ResponseEntity.ok(response);
    }
}
