package com.github.florianehmke.graphqlnotes.persistence.repository;

import com.github.florianehmke.graphqlnotes.persistence.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {

  Optional<Author> findByUserId(String userId);
}
