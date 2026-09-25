import { createContext, useState, useContext, useEffect } from 'react';

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/tickets')
      .then(res => res.json())
      .then(data => setTickets(data))
      .catch(err => console.error("Failed to fetch tickets:", err));
  }, []);

  const addTicket = (newTicket) => {
    fetch('http://localhost:8080/api/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: newTicket.title,
        description: newTicket.description,
        priority: newTicket.priority,
        status: 'NEW'
      })
    })
    .then(res => res.json())
    .then(savedTicket => setTickets(prev => [...prev, savedTicket]))
    .catch(err => console.error("Failed to save ticket:", err));
  };

  // NEW: Update ticket status
  const updateTicketStatus = (id, newStatus) => {
    fetch(`http://localhost:8080/api/tickets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    })
    .then(res => res.json())
    .then(updatedTicket => {
      setTickets(prev => prev.map(t => t.id === id ? updatedTicket : t));
    })
    .catch(err => console.error("Failed to update ticket:", err));
  };

  // NEW: Delete a ticket
  const deleteTicket = (id) => {
    fetch(`http://localhost:8080/api/tickets/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setTickets(prev => prev.filter(t => t.id !== id));
    })
    .catch(err => console.error("Failed to delete ticket:", err));
  };

  return (
    // Added the new functions to the value object
    <TicketContext.Provider value={{ tickets, addTicket, updateTicketStatus, deleteTicket }}>
      {children}
    </TicketContext.Provider>
  );
}

export const useTicketContext = () => useContext(TicketContext);