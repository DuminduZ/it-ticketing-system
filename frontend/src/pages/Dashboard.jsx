import { useNavigate } from 'react-router-dom';
import { useTicketContext } from '../context/TicketContext';
import Navbar from '../components/Navbar'; // Import the new Navbar
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const { tickets, updateTicketStatus, deleteTicket } = useTicketContext();

  return (
    <div>
      <Navbar /> {/* Render the Navbar here */}
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2>My Tickets</h2>
          <button className="new-ticket-btn" onClick={() => navigate('/new-ticket')}>
            + New Ticket
          </button>
        </div>
      </div> 
        {/* ... rest of your ticket list code remains exactly the same ... */}
      
      <div className="ticket-list">
        {tickets.map(ticket => (
          <div key={ticket.id} className="ticket-card">
            <div className="ticket-info">
              <h3>{ticket.title}</h3>
              <p>#{ticket.id} • Opened on {ticket.date}</p>
            </div>
            <div className="ticket-actions">
              <span className={`badge ${ticket.priority.toLowerCase()}`}>
                {ticket.priority}
              </span>
              <span className={`badge ${ticket.status.toLowerCase()}`}>
                {ticket.status}
              </span>
              
              {/* Action Buttons */}
              <div className="action-buttons" style={{ display: 'flex', gap: '8px' }}>
                {ticket.status !== 'RESOLVED' && (
                  <button 
                    onClick={() => updateTicketStatus(ticket.id, 'RESOLVED')}
                    style={{ padding: '6px 12px', cursor: 'pointer', background: 'var(--success)', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}
                  >
                    Resolve
                  </button>
                )}
                <button 
                  onClick={() => deleteTicket(ticket.id)}
                  style={{ padding: '6px 12px', cursor: 'pointer', background: 'transparent', color: 'var(--danger)', border: '1px solid var(--danger)', borderRadius: '4px', fontWeight: 'bold' }}
                >
                  Delete
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}