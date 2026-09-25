import { useNavigate } from 'react-router-dom';
import { useTicketContext } from '../context/TicketContext'; // Import hook
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const { tickets } = useTicketContext(); // Get dynamic tickets

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>My Tickets</h2>
        <button className="new-ticket-btn" onClick={() => navigate('/new-ticket')}>
          + New Ticket
        </button>
      </header>

      <div className="ticket-list">
        {/* Use the dynamic tickets array here */}
        {tickets.map((ticket) => (
          <div key={ticket.id} className="ticket-card">
            <div className="ticket-info">
              <h3>{ticket.title}</h3>
              <span className="ticket-date">#{ticket.id} • Opened on {ticket.date}</span>
            </div>
            <div className="ticket-badges">
              <span className={`badge priority-${ticket.priority.toLowerCase()}`}>{ticket.priority}</span>
              <span className={`badge status-${ticket.status.toLowerCase()}`}>{ticket.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}