import { useNavigate } from 'react-router-dom';
import { useTicketContext } from '../context/TicketContext';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  // Destructure the new functions here
  const { tickets, updateTicketStatus, deleteTicket } = useTicketContext();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>My Tickets</h2>
        <button className="new-ticket-btn" onClick={() => navigate('/new-ticket')}>
          + New Ticket
        </button>
      </div>
      
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
              <div className="action-buttons" style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
                {ticket.status !== 'RESOLVED' && (
                  <button 
                    onClick={() => updateTicketStatus(ticket.id, 'RESOLVED')}
                    style={{ padding: '4px 8px', cursor: 'pointer', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}
                  >
                    Resolve
                  </button>
                )}
                <button 
                  onClick={() => deleteTicket(ticket.id)}
                  style={{ padding: '4px 8px', cursor: 'pointer', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}
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