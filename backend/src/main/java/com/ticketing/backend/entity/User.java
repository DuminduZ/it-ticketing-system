package com.ticketing.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "users") // We use "users" because "user" is a reserved word in many SQL dialects
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String role; // e.g., "EMPLOYEE" or "IT_SUPPORT"
}