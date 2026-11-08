package org.jagannath.parisad.repository;

import org.jagannath.parisad.model.CityChapter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CityChapterRepository extends JpaRepository<CityChapter, Long> {
    Optional<CityChapter> findByCityKey(String cityKey);
    boolean existsByCityKey(String cityKey);
}
