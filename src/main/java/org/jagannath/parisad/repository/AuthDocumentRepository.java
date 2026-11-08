package org.jagannath.parisad.repository;

import org.jagannath.parisad.model.AuthDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuthDocumentRepository extends JpaRepository<AuthDocument, Long> {

    List<AuthDocument> findByCategoryIgnoreCase(String category);

    @Query("SELECT d FROM AuthDocument d WHERE " +
           "LOWER(d.title) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(d.documentNumber) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(d.issuingAuthority) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(d.description) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<AuthDocument> searchDocuments(@Param("query") String query);

    List<AuthDocument> findAllByOrderByUploadDateDesc();
}
