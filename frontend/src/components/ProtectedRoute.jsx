import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const userStr = localStorage.getItem('ticketingUser');
  
  if (!userStr) {
    // If there is no active session, instantly bounce them to the root URL (Login)
    return <Navigate to="/" replace />;
  }
  
  // If they are logged in, render the page they asked for
  return children;
}