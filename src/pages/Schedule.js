import React from 'react';
import './Dashboard.css';

const Schedule = () => {
  // Mock data for calendar colors based on your UI
  const calendarDays = [
    { n: 1, c: 'blue' }, { n: 2, c: 'red' }, { n: 3, c: 'red' }, { n: 4, c: 'green' }, { n: 5, c: 'green' }, { n: 6, c: 'pink' }, { n: 7, c: 'pink' },
    { n: 8, c: 'grey' }, { n: 9, c: 'grey' }, { n: 10, c: 'red' }, { n: 11, c: 'grey' }, { n: 12, c: 'blue' }, { n: 13, c: 'pink' }, { n: 14, c: 'pink' },
    { n: 15, c: 'green' }, { n: 16, c: 'red' }, { n: 17, c: 'green' }, { n: 18, c: 'green' }, { n: 19, c: 'red' }, { n: 20, c: 'pink' }, { n: 21, c: 'pink' },
    { n: 22, c: 'blue' }, { n: 23, c: 'green' }, { n: 24, c: 'green' }, { n: 25, c: 'blue' }, { n: 26, c: 'red' }, { n: 27, c: 'pink' }, { n: 28, c: 'pink' },
  ];

  return (
    <div className="schedule-view-wrapper">
      {/* Header Section */}
      <div className="schedule-header-nav">
        <button className="back-arrow-btn">←</button>
        <h1 className="header-text">Schedule a Meeting</h1>
      </div>

      <div className="schedule-layout-grid">
        
        {/* LEFT CARD: Create New Schedule */}
        <section className="form-card-container">
          <h2 className="card-title">Create New Schedule</h2>
          
          <div className="field-group">
            <label>Purpose</label>
            <input type="text" placeholder="Type here" className="ui-input" />
          </div>

          <div className="field-row">
            <div className="field-group">
              <label>Available day</label>
              <select className="ui-select"><option>Tuesday 13 Feb, 2026</option></select>
            </div>
            <div className="field-group">
              <label>Available time</label>
              <select className="ui-select"><option>09:30 AM - 10:30 AM</option></select>
            </div>
          </div>

          <p className="claims-label">Claims/Issues</p>
          <div className="field-row">
            <div className="field-group">
              <label>Labor Standards Violations</label>
              <select className="ui-select"><option>Select</option></select>
            </div>
            <div className="field-group">
              <label>Other Issues</label>
              <select className="ui-select"><option>Select</option></select>
            </div>
          </div>

          <div className="field-group">
            <label>Available Hearing Officer</label>
            <select className="ui-select"><option>Select Officer Name</option></select>
          </div>

          <p className="event-info-text">
            Hearing Event: <strong>February 13, from 9:30 am - 10:30 am</strong>
          </p>

          <button className="btn-create-schedule">Create Schedule</button>
        </section>

        {/* RIGHT SIDEBAR: Calendar & Recent */}
        <aside className="schedule-activity-sidebar">
          <div className="calendar-card-ui">
            <div className="legend-row">
              <span><i className="dot-ui green"></i> Available</span>
              <span><i className="dot-ui blue"></i> Limited Slots</span>
              <span><i className="dot-ui red"></i> Fully Booked</span>
            </div>
            
            <div className="month-navigation">
              <button className="nav-arrow">‹</button>
              <span className="month-name">February 2026</span>
              <button className="nav-arrow">›</button>
            </div>

            <div className="calendar-days-labels">
              <span>Monday</span><span>Tuesday</span><span>Wednesday</span><span>Thursday</span><span>Friday</span><span>Saturday</span><span>Sunday</span>
            </div>
            <div className="calendar-grid-numbers">
              {calendarDays.map((day, idx) => (
                <span key={idx} className={`day-num-ui ${day.c}`}>{day.n}</span>
              ))}
            </div>
          </div>

          <div className="recent-hearings-list">
            <h3 className="sidebar-subtitle">Recent Hearings</h3>
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="hearing-entry-card">
                <div className="entry-date-box">
                  <span className="entry-day-name">Tuesday</span>
                  <span className="entry-day-val">10</span>
                </div>
                <div className="entry-content">
                  <h4>Hearing Review</h4>
                  <p>09:00 to 10:00 am • <span className="entry-duration">30 min</span></p>
                </div>
                <button className="entry-view-btn">View</button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Schedule;