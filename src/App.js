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
      history.push({ locationTo, locationFrom });
      localStorage.setItem('history', JSON.stringify(history));
    }
  }, [locationTo, locationFrom, localStorage.getItem('history')]);

  const handleLocationToChange = (value) => {
    setLocationTo(value);
  }

  const handleLocationFromChange = (value) => {
    setLocationFrom(value);
  }

  return (
    <div className="App">
      <ItineraryMap locationTo={locationTo} locationFrom={locationFrom}/>
      <Nav locationTo={locationTo} onLocationToChange={handleLocationToChange} locationFrom={locationFrom} onLocationFromChange={handleLocationFromChange}/>
    </div>
  );
}

export default App;
