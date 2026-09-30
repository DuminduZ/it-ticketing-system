import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewTicket from './pages/NewTicket'; // Adjust path if needed
import ProtectedRoute from './components/ProtectedRoute'; // Import our new checkpoint
import { TicketProvider } from './context/TicketContext';

export default function App() {
  return (
    <TicketProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/new-ticket" 
            element={
              <ProtectedRoute>
                <NewTicket />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </TicketProvider>
  );
}