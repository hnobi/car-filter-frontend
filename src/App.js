import React from 'react';
import Filter from './Components/Filter';
import './App.css';
import filter from './Components/filter.png'

function App() {
  return (
    <div className="App">
      <div className="filter-icon">
        <img src={filter} alt="filter" />
        <p> Filter</p>
      </div>
      <Filter />
    </div>
  );
}

export default App;

// width: 50px;
//     margin-top: -29px;
//     margin-left: 25px;
//     margin-bottom: 30px;