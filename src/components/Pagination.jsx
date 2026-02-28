import React from 'react';
import './Pagination.css';

const Pagination = ({ rowsPerPage, setRowsPerPage, totalItems }) => {
  return (
    <div className="pagination-container">
      <div className="pagination-controls">
        <span className="rows-per-page">
          Rows per page: 
          <select 
            value={rowsPerPage} 
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="rows-select"
          >
            <option value={100}>100</option>
            <option value={50}>50</option>
            <option value={25}>25</option>
            <option value={10}>10</option>
          </select>
          ▼
        </span>
        <span className="pagination-info">
          1–{rowsPerPage} of {totalItems}
        </span>
      </div>
    </div>
  );
};

export default Pagination;