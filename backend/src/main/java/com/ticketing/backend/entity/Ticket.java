package com.ticketing.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "tickets")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 1000)
    private String description;

    @Column(nullable = false)
    private String priority;

    @Column(nullable = false)
    private String status;

    private LocalDate date;

    // We will establish the formal @ManyToOne relationship later, 
    // but for now, we just store the ID of the user who created it.
    @Column(name = "creator_id")
    private Long creatorId;
}