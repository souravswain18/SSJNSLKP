package org.jagannath.parisad;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main Entry Point for Sri Sri Jagannath Nam Sankirtan Lok Kalaparisad
 * Spring Boot Application.
 */
@SpringBootApplication
public class JagannathParisadApplication {

    public static void main(String[] args) {
        SpringApplication.run(JagannathParisadApplication.class, args);
        System.out.println("=================================================================");
        System.out.println("🚩 Sri Sri Jagannath Nam Sankirtan Loka Kala parisad Odisha Backend Ready!");
        System.out.println("🌐 Web Application: http://localhost:8080");
        System.out.println("📑 REST API Base:   http://localhost:8080/api/chapters");
        System.out.println("📸 Photos API:      http://localhost:8080/api/photos");
        System.out.println("💾 H2 DB Console:   http://localhost:8080/h2-console");
        System.out.println("=================================================================");
    }
}
