import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTicketContext } from '../context/TicketContext';
import './NewTicket.css';

export default function NewTicket() {
  const navigate = useNavigate();
  const { addTicket } = useTicketContext();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('LOW');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTicket = {
      id: Math.floor(Math.random() * 1000) + 200,
      title: title,
      description: description,
      priority: priority,
      status: 'NEW',
      date: new Date().toISOString().split('T')[0]
    };

    addTicket(newTicket);
    navigate('/dashboard');
  };

  return (
    <div className="new-ticket-container">
      <div className="new-ticket-header">
        <h2>Create New Ticket</h2>
        <button className="back-btn" onClick={() => navigate('/dashboard')}>
          Cancel
        </button>
      </div>
      
      <form className="new-ticket-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Issue Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Brief summary of the issue" 
            required 
          />
        </div>
        
        <div className="input-group">
          <label>Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Provide details about what went wrong..." 
            rows="5" 
            required 
          />
        </div>
        
        <div className="input-group">
          <label>Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
            <option value="URGENT">Urgent</option>
          </select>
        </div>
        
        <button type="submit" className="submit-btn">Submit Ticket</button>
      </form>
    </div>
  );
}