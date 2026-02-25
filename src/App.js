import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; 
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default page is Login */}
          <Route path="/" element={<Login />} />
          {/* Path for Forgot Password */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Path for Reset Password */}
          <Route path="/reset-password" element={<ResetPassword />} />
/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;