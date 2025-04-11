import React from 'react';
import './financials.css';
import { FaChartBar, FaChartLine, FaChartPie, FaArrowUp } from 'react-icons/fa';

const Financials = () => {
  const quarterlyData = [
    { quarter: 'Q4 2023', revenue: '₹15M', growth: '28%', profit: '₹3.2M' },
    { quarter: 'Q3 2023', revenue: '₹13M', growth: '25%', profit: '₹2.8M' },
    { quarter: 'Q2 2023', revenue: '₹12M', growth: '22%', profit: '₹2.5M' },
    { quarter: 'Q1 2023', revenue: '₹10M', growth: '20%', profit: '₹2.1M' }
  ];

  const metrics = [
    { title: 'Annual Revenue', value: '₹50M', growth: '+25%', icon: <FaChartBar /> },
    { title: 'Net Profit', value: '₹10.6M', growth: '+30%', icon: <FaChartLine /> },
    { title: 'Market Share', value: '35%', growth: '+5%', icon: <FaChartPie /> }
  ];

  return (
    <div className="financials-container">
      <div className="financials-header">
        <h1>Financial Performance</h1>
        <p>Fiscal Year 2023</p>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-info">
              <h3>{metric.title}</h3>
              <p className="metric-value">{metric.value}</p>
              <p className="metric-growth">
                <FaArrowUp /> {metric.growth}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="quarterly-performance">
        <h2>Quarterly Performance</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Quarter</th>
                <th>Revenue</th>
                <th>Growth</th>
                <th>Net Profit</th>
              </tr>
            </thead>
            <tbody>
              {quarterlyData.map((quarter, index) => (
                <tr key={index}>
                  <td>{quarter.quarter}</td>
                  <td>{quarter.revenue}</td>
                  <td className="growth-cell">
                    <FaArrowUp className="growth-icon" /> {quarter.growth}
                  </td>
                  <td>{quarter.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="revenue-breakdown">
        <h2>Revenue Breakdown</h2>
        <div className="breakdown-grid">
          <div className="breakdown-card">
            <h3>Prescription Medicines</h3>
            <p className="percentage">45%</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '45%' }}></div>
            </div>
          </div>
          <div className="breakdown-card">
            <h3>OTC Products</h3>
            <p className="percentage">30%</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '30%' }}></div>
            </div>
          </div>
          <div className="breakdown-card">
            <h3>Healthcare Services</h3>
            <p className="percentage">25%</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financials;