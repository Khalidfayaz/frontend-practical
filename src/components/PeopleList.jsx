import React, { useState } from 'react';
import PersonCard from './PersonCard';
import Pagination from './Pagination';
import './PeopleList.css';

const PeopleList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const people = [
    { name: 'Ethan Lee', role: 'IT Specialist' },
    { name: 'Emily Baker', role: 'Marketing Manager' },
    { name: 'Michael Shaun', role: 'Sales Director' },
    { name: 'Liam Carter', role: 'Product Designer' },
    { name: 'Grace Kim', role: 'Customer Lead' },
    { name: 'Noah Williams', role: 'Finance Head' },
    { name: 'Isabella Rossi', role: 'Operations Manager' },
    { name: 'Ava Thompson', role: 'HR Executive' }
  ];

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="people-container">
      <div className="people-header">
        <h1 className="people-title">People</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by Employee Name or Number"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="people-grid">
        {filteredPeople.map((person, index) => (
          <PersonCard key={index} name={person.name} role={person.role} />
        ))}
      </div>

      <Pagination 
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalItems={500}
      />
    </div>
  );
};

export default PeopleList;