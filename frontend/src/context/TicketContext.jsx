import { createContext, useState, useContext, useEffect } from 'react';

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);

  // Helper function to inject the JWT into requests
  const getAuthHeaders = () => {
    const token = localStorage.getItem('ticketingToken');
    return {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    };
  };

  useEffect(() => {
    fetch('http://localhost:8080/api/tickets', { headers: getAuthHeaders() })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(data => setTickets(data))
      .catch(err => console.error("Failed to fetch tickets:", err));
  }, []);

  const addTicket = (newTicket) => {
    const loggedInUserStr = localStorage.getItem('ticketingUser');
    const loggedInUser = loggedInUserStr ? JSON.parse(loggedInUserStr) : null;
    const currentUserId = loggedInUser ? loggedInUser.id : 1;

    fetch('http://localhost:8080/api/tickets', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({
        title: newTicket.title,
        description: newTicket.description,
        priority: newTicket.priority,
        status: 'NEW',
        creatorId: currentUserId
      })
    })
    .then(res => res.json())
    .then(savedTicket => setTickets(prev => [...prev, savedTicket]))
    .catch(err => console.error("Failed to save ticket:", err));
  };

  const updateTicketStatus = (id, newStatus) => {
    fetch(`http://localhost:8080/api/tickets/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status: newStatus })
    })
    .then(res => res.json())
    .then(updatedTicket => {
      setTickets(prev => prev.map(t => t.id === id ? updatedTicket : t));
    })
    .catch(err => console.error("Failed to update ticket:", err));
  };

  const deleteTicket = (id) => {
    fetch(`http://localhost:8080/api/tickets/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    })
    .then(() => setTickets(prev => prev.filter(t => t.id !== id)))
    .catch(err => console.error("Failed to delete ticket:", err));
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket, updateTicketStatus, deleteTicket }}>
      {children}
    </TicketContext.Provider>
  );
}

export const useTicketContext = () => useContext(TicketContext);