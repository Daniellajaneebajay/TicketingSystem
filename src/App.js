import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login'; 
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Minutes from './pages/Minutes';
import ActivityLog from './pages/ActivityLog';
import UserManagement from './pages/UserManagement';
import Sidebar from './pages/Sidebar';
import Report from './pages/Report';
import ReportSettle from './pages/ReportSettle';
import ReportUnsettle from './pages/ReportUnsettle'; 
import Settings from './pages/Settings'; 

// This wrapper handles the Sidebar visibility and the page margin
const AppLayout = ({ children }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  // Define paths that should NOT have a sidebar
  const authPaths = ['/', '/forgot-password', '/reset-password'];
  const isAuthPage = authPaths.includes(location.pathname);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#030a49' }}>
      {/* Show sidebar only if it's NOT a login/auth page */}
      {!isAuthPage && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
      
      <main style={{ 
        flex: 1, 
        transition: 'margin-left 0.3s ease-in-out',
        // Push content to the right if sidebar is open, otherwise use full screen
        marginLeft: (!isAuthPage && isOpen) ? '180px' : '0',
        width: '100%'
      }}>
        {children}
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/minutes" element={<Minutes />} />
          <Route path="/activity-log" element={<ActivityLog />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/report" element={<Report />} />
          <Route path="/report-settle" element={<ReportSettle />} />
          <Route path="/report-unsettle" element={<ReportUnsettle />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;