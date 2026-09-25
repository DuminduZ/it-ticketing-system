import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In the future, we will validate credentials via Spring Boot here.
    // For now, we just redirect directly to the dashboard.
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>IT Support Login</h2>
        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="login-btn">Sign In</button>
      </form>
    </div>
  );
}