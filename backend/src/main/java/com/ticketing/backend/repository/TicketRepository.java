package com.ticketing.backend.repository;

import com.ticketing.backend.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    
    // Spring automatically writes the SQL: SELECT * FROM tickets WHERE creator_id = ?
    List<Ticket> findByCreatorId(Long creatorId);
}