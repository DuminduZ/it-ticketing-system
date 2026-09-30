import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // We can reuse the login styles!

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      if (response.ok) {
        // Registration successful, send them to login page
        navigate('/'); 
      } else {
        const errorText = await response.text();
        setError(errorText || 'Registration failed');
      }
    } catch (err) {
      setError('Server connection failed.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleRegister}>
        <h2>Create an Account</h2>
        
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        
        <div className="input-group">
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>

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
        
        <button type="submit">Register</button>
        
        <div style={{ marginTop: '15px', textAlign: 'center', fontSize: '14px' }}>
          Already have an account? <Link to="/">Log in here</Link>
        </div>
      </form>
    </div>
  );
}