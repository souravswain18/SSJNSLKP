package org.jagannath.parisad.repository;

import org.jagannath.parisad.model.ActivityPhoto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityPhotoRepository extends JpaRepository<ActivityPhoto, Long> {

    List<ActivityPhoto> findByCityKey(String cityKey);

    List<ActivityPhoto> findByCategory(String category);

    List<ActivityPhoto> findByCityKeyAndCategory(String cityKey, String category);

    @Query("SELECT p FROM ActivityPhoto p WHERE " +
           "LOWER(p.title) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(p.city) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(p.description) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(p.location) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<ActivityPhoto> searchPhotos(@Param("query") String query);
}
