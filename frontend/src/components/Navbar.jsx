import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  
  // Pull the user data from storage to display their name
  const userStr = localStorage.getItem('ticketingUser');
  const user = userStr ? JSON.parse(userStr) : null;

  const handleLogout = () => {
    // 1. Wipe the saved session data
    localStorage.removeItem('ticketingUser');
    // 2. Kick the user back to the login screen
    navigate('/'); 
  };

  // If no user is logged in, don't render the navbar
  if (!user) return null;

  return (
    <nav className="navbar">
      <div className="navbar-brand">IT Ticketing System</div>
      <div className="navbar-user">
        <span className="welcome-text">Welcome, {user.username}</span>
        <button onClick={handleLogout} className="logout-btn">Log Out</button>
      </div>
    </nav>
  );
}