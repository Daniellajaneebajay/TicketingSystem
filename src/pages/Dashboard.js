import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // 'dashboard' or 'schedule'
  const [activeView, setActiveView] = useState('dashboard');

  // Mock Data for Dashboard
  const officers = [
    { id: 1, name: "APARECIO, Harold D.", role: "SR. LEO", status: "Available", color: "#4caf50" },
    { id: 2, name: "CALING, Mhardy Mae V.", role: "SR. LEO", status: "Available", color: "#4caf50" },
  ];

  return (
    <div className="app-container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="profile">
          <div className="avatar">NW</div>
          <h3>Nancy Wheeler</h3>
        </div>
        <nav className="menu">
          <button 
            className={activeView === 'dashboard' ? 'active' : ''} 
            onClick={() => setActiveView('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={activeView === 'schedule' ? 'active' : ''} 
            onClick={() => setActiveView('schedule')}
          >
            Schedule
          </button>
          <button>Logout</button>
        </nav>
      </aside>

      {/* DYNAMIC CONTENT AREA */}
      <main className="content">
        {activeView === 'dashboard' ? (
          <div className="view-dashboard">
            <h1 className="title">Availability of Officers</h1>
            <div className="dark-box">
              <div className="grid">
                {officers.map(o => (
                  <div key={o.id} className="card">
                    <h4>{o.name}</h4>
                    <p>{o.role}</p>
                    <span style={{color: o.color}}>● {o.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="view-schedule">
            <h1 className="title">Schedule a Meeting</h1>
            <div className="schedule-layout">
              <div className="form-card">
                <h3>Create New Schedule</h3>
                <input type="text" placeholder="Purpose" />
                <button className="submit-btn">Create Schedule</button>
              </div>
              <div className="calendar-card">
                <h3>February 2026</h3>
                <p>Calendar View goes here...</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;