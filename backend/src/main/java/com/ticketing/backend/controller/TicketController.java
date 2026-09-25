package com.ticketing.backend.controller;

import com.ticketing.backend.entity.Ticket;
import com.ticketing.backend.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/tickets")
@CrossOrigin(origins = "http://localhost:5173") // Crucial: Allows your React app to make requests without CORS errors
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;

    // GET Request to fetch all tickets
    @GetMapping
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    // POST Request to create a new ticket
    @PostMapping
    public Ticket createTicket(@RequestBody Ticket newTicket) {
        // For now, we hardcode the creator ID until we implement proper login/security
        if (newTicket.getCreatorId() == null) {
            newTicket.setCreatorId(1L);
        }
        
        // Ensure the date is set to today if the frontend doesn't provide it
        if (newTicket.getDate() == null) {
            newTicket.setDate(LocalDate.now());
        }
        
        // Save to database and return the saved ticket (which will now have a generated ID)
        return ticketRepository.save(newTicket);
    }
    
    // PUT Request to update a ticket's status
    @PutMapping("/{id}")
    public Ticket updateTicketStatus(@PathVariable Long id, @RequestBody Ticket updatedTicket) {
        return ticketRepository.findById(id).map(ticket -> {
            ticket.setStatus(updatedTicket.getStatus());
            return ticketRepository.save(ticket);
        }).orElseThrow(() -> new RuntimeException("Ticket not found with id " + id));
    }

    // DELETE Request to remove a ticket
    @DeleteMapping("/{id}")
    public void deleteTicket(@PathVariable Long id) {
        ticketRepository.deleteById(id);
    }
}