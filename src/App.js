import React from 'react';
import Sidebar from './components/Sidebar';
import PeopleList from './components/PeopleList';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <PeopleList />
      </main>
    </div>
  );
}

export default App;