import React, { useEffect, useState } from 'react';

function App() {
  
  const [appState, setAppState] = useState({
    loading: false,
    data: null,
  });

  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=amble&appid=9c386e0118890725b196ccbcd09691e5"
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setAppState({ loading: false, data: data });
      });
  }, [setAppState]);

  const CheckState = () => {
    if(appState.data != null) {
      console.log(appState.data.name)
      return <p>{appState.data.name} </p>
    }
  }
  const dataPresent = appState.data;
  
  return (
    <div className='App'>
      {dataPresent == null ? <p> No data present</p>: <p>{appState.data.name}</p>}
    </div>
  );
}
export default App;