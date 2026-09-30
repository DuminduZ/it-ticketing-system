import { useNavigate } from 'react-router-dom';
import { useTicketContext } from '../context/TicketContext';
import Navbar from '../components/Navbar';
import TicketCard from '../components/TicketCard'; // Our new component
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const { tickets, updateTicketStatus, deleteTicket } = useTicketContext();

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2>My Tickets</h2>
          <button className="new-ticket-btn" onClick={() => navigate('/new-ticket')}>
            + New Ticket
          </button>
        </div>
        
        <div className="ticket-list">
          {tickets.map(ticket => (
            <TicketCard 
              key={ticket.id} 
              ticket={ticket} 
              updateTicketStatus={updateTicketStatus} 
              deleteTicket={deleteTicket} 
            />
          ))}
        </div>
      </div>
    </>
  );
}