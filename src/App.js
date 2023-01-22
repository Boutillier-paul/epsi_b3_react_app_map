import './App.css';
import React, { useState, useEffect } from 'react';
import ItineraryMap from './components/Map'
import Nav from './components/Nav'

function App() {
  const [locationTo, setLocationTo] = useState()
  const [locationFrom, setLocationFrom] = useState()

  useEffect(() => {
    if (locationTo && locationFrom && locationTo.city && locationFrom.city) {
      let history = JSON.parse(localStorage.getItem('history')) || [];
      let date = new Date().toLocaleString();
      history.push({ date, locationTo, locationFrom });
      localStorage.setItem('history', JSON.stringify(history));
    }
  }, [locationTo, locationFrom, localStorage.getItem('history')]);

  const handleLocationToChange = (value) => {
    setLocationTo(value);
  }

  const handleLocationFromChange = (value) => {
    setLocationFrom(value);
  }

  const handleClear = (location) => {
    (location === locationTo) ? 
    setLocationTo({ region: null, department: null, city: null }) : 
    setLocationFrom({ region: null, department: null, city: null });
  }

  return (
    <div className="App">
      <ItineraryMap locationTo={locationTo} locationFrom={locationFrom}/>
      <Nav 
        locationTo={locationTo} 
        onLocationToChange={handleLocationToChange} 
        locationFrom={locationFrom} 
        onLocationFromChange={handleLocationFromChange}
        onClearClick={handleClear}
      />
    </div>
  );
}

export default App;
