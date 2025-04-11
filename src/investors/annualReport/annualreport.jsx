import React from 'react';
import { FaDownload, FaChartLine, FaUsers, FaStore } from 'react-icons/fa';
import './annualreport.css';

const AnnualReport = () => {
  const financialData = [
    { year: '2023', revenue: '₹50M', growth: '25%', customers: '50K+' },
    { year: '2022', revenue: '₹40M', growth: '20%', customers: '40K+' },
    { year: '2021', revenue: '₹33M', growth: '15%', customers: '35K+' }
  ];

  const downloadReports = [
    { year: '2023', fileSize: '5.2 MB', link: '/reports/2023.pdf' },
    { year: '2022', fileSize: '4.8 MB', link: '/reports/2022.pdf' },
    { year: '2021', fileSize: '4.5 MB', link: '/reports/2021.pdf' }
  ];

  return (
    <div className="annual-report">
      <div className="report-header">
        <h1>Annual Report 2023</h1>
        <p>Financial Year 2022-2023</p>
      </div>

      <div className="highlights-section">
        <div className="highlight-card">
          <FaChartLine className="highlight-icon" />
          <h3>Revenue Growth</h3>
          <p className="highlight-number">25%</p>
          <p>Year over Year</p>
        </div>
        <div className="highlight-card">
          <FaUsers className="highlight-icon" />
          <h3>Customer Base</h3>
          <p className="highlight-number">50K+</p>
          <p>Active Customers</p>
        </div>
        <div className="highlight-card">
          <FaStore className="highlight-icon" />
          <h3>Stores</h3>
          <p className="highlight-number">25+</p>
          <p>Across Region</p>
        </div>
      </div>

      <div className="financial-section">
        <h2>Financial Overview</h2>
        <div className="financial-table">
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Revenue</th>
                <th>Growth</th>
                <th>Customer Base</th>
              </tr>
            </thead>
            <tbody>
              {financialData.map((data, index) => (
                <tr key={index}>
                  <td>{data.year}</td>
                  <td>{data.revenue}</td>
                  <td>{data.growth}</td>
                  <td>{data.customers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="download-section">
        <h2>Download Reports</h2>
        <div className="downloads-grid">
          {downloadReports.map((report, index) => (
            <div key={index} className="download-card">
              <h3>Annual Report {report.year}</h3>
              <p>{report.fileSize}</p>
              <a href={report.link} className="download-btn">
                <FaDownload /> Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnualReport;