import React from 'react';
import { Result } from '../components/Result';
import { Search } from '../components/Search';
import { MeasurementTypeToggle } from '../components/MeasurementTypeToggle';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Search />
      <div id="Results">
        <Result />
        <MeasurementTypeToggle />
      </div>
    </div>
  );
}

export default App;