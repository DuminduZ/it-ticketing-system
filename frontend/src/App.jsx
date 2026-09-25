import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewTicket from './pages/NewTicket';
import { TicketProvider } from './context/TicketContext'; // Import this

function App() {
  return (
    <TicketProvider> {/* Wrap the router */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-ticket" element={<NewTicket />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TicketProvider>
  );
}

export default App;