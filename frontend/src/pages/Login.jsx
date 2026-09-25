import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Assuming you have some styles here

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const userData = await response.json();
        // Save user to local storage to keep them logged in
        localStorage.setItem('ticketingUser', JSON.stringify(userData));
        navigate('/dashboard'); // Navigate to your dashboard
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Server connection failed. Is Spring Boot running?');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>IT Ticketing Login</h2>
        
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}