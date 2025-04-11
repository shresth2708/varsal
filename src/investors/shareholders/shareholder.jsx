import React from 'react';
import { FaUsers, FaChartLine, FaCalendar, FaMoneyBillWave } from 'react-icons/fa';
import './shareholder.css';

const Shareholders = () => {
  const shareholderStructure = [
    { type: 'Promoter Group', percentage: '45%', shares: '4.5M' },
    { type: 'Institutional Investors', percentage: '30%', shares: '3M' },
    { type: 'Public Shareholders', percentage: '25%', shares: '2.5M' }
  ];

  const dividendHistory = [
    { year: '2023', amount: '₹15/share', date: 'Dec 15, 2023' },
    { year: '2022', amount: '₹12/share', date: 'Dec 15, 2022' },
    { year: '2021', amount: '₹10/share', date: 'Dec 15, 2021' }
  ];

  const upcomingEvents = [
    {
      event: 'Annual General Meeting',
      date: 'March 15, 2024',
      location: 'Company Headquarters'
    },
    {
      event: 'Q4 Earnings Call',
      date: 'April 30, 2024',
      location: 'Virtual Meeting'
    }
  ];

  return (
    <div className="shareholder-container">
      <div className="shareholder-header">
        <h1>Shareholder Information</h1>
        <p>Building Long-term Value for Our Investors</p>
      </div>

      <div className="ownership-structure">
        <h2><FaUsers /> Ownership Structure</h2>
        <div className="structure-grid">
          {shareholderStructure.map((item, index) => (
            <div key={index} className="structure-card">
              <h3>{item.type}</h3>
              <div className="percentage-circle">
                <span>{item.percentage}</span>
              </div>
              <p>Total Shares: {item.shares}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="dividend-section">
        <h2><FaMoneyBillWave /> Dividend History</h2>
        <div className="dividend-table">
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Amount</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {dividendHistory.map((dividend, index) => (
                <tr key={index}>
                  <td>{dividend.year}</td>
                  <td>{dividend.amount}</td>
                  <td>{dividend.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="events-section">
        <h2><FaCalendar /> Upcoming Events</h2>
        <div className="events-grid">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.event}</h3>
              <p><FaCalendar /> {event.date}</p>
              <p>{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shareholders;