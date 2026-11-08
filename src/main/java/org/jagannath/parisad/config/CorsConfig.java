package org.jagannath.parisad.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Expose uploaded photos directory statically
        String uploadDirLocation = Paths.get("uploads/photos/").toAbsolutePath().toUri().toString();
        registry.addResourceHandler("/uploads/photos/**")
                .addResourceLocations(uploadDirLocation);

        // Expose uploaded authentication documents directory statically
        String docUploadDirLocation = Paths.get("uploads/documents/").toAbsolutePath().toUri().toString();
        registry.addResourceHandler("/uploads/documents/**")
                .addResourceLocations(docUploadDirLocation);
    }
}
