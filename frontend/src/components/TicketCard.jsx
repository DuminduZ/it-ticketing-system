export default function TicketCard({ ticket, updateTicketStatus, deleteTicket }) {
  return (
    <div className="ticket-card">
      <div className="ticket-info">
        <h3>{ticket.title}</h3>
        {/* Fallback to 'Unknown' if date isn't set yet */}
        <p>#{ticket.id} • Opened on {ticket.date || 'Unknown'}</p>
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
  );
}