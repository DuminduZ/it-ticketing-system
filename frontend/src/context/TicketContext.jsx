import { createContext, useState, useContext, useEffect } from 'react';

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [tickets, setTickets] = useState([]);

  // Fetch all tickets from Spring Boot when the app loads
  useEffect(() => {
    fetch('http://localhost:8080/api/tickets')
      .then(res => res.json())
      .then(data => setTickets(data))
      .catch(err => console.error("Failed to fetch tickets:", err));
  }, []);

  // Send a new ticket to Spring Boot
  const addTicket = (newTicket) => {
    fetch('http://localhost:8080/api/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // We no longer need to generate a random ID here; the database handles it
      body: JSON.stringify({
        title: newTicket.title,
        description: newTicket.description,
        priority: newTicket.priority,
        status: 'NEW'
      })
    })
    .then(res => res.json())
    .then(savedTicket => {
      // Add the database-generated ticket to the UI
      setTickets(prev => [...prev, savedTicket]);
    })
    .catch(err => console.error("Failed to save ticket:", err));
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket }}>
      {children}
    </TicketContext.Provider>
  );
}

export const useTicketContext = () => useContext(TicketContext);