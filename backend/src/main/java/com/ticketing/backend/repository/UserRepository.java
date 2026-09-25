package com.ticketing.backend.repository;

import com.ticketing.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    
    // Spring automatically writes the SQL: SELECT * FROM users WHERE username = ?
    Optional<User> findByUsername(String username);
    
    // Spring automatically writes the SQL: SELECT * FROM users WHERE email = ?
    Optional<User> findByEmail(String email);
}