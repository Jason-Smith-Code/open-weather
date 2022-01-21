import React from 'react';
import { Result } from '../components/Result';
import { Search } from '../components/Search';
import { MeasurementTypeToggle } from '../components/MeasurementTypeToggle';

function App() {

  
  return (
    <div className='App'>
      <Search />
      <Result />
      <MeasurementTypeToggle />
    </div>
  );
}

export default App;

// I need to access appstate from every file - Redux?