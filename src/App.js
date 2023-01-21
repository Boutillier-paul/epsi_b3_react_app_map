import './App.css';
import React, { useState } from 'react';
import ItineraryMap from './components/Map'
import Nav from './components/Nav'

function App() {
  const [locationTo, setLocationTo] = useState()
  const [locationFrom, setLocationFrom] = useState()


  // Todo 
  // Quand il y a une "city" dans "location" :
  //  - ajouter "location" à l'historique de recherche
  //  - afficher la météo de la "location"
  

  // TODO
  // Faire en sorte que la carte se centre et zoom lorsqu'il y a une route


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
