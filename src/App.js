import './App.css';
import React, { useEffect, useState } from 'react';
import Map from './components/Map'
import Nav from './components/Nav'

function App() {
  const [locationTo, setLocationTo] = useState()
  const [locationFrom, setLocationFrom] = useState()


  // Todo 
  // Quand il y a une "city" dans "location" :
  //  - ajouter "location" à l'historique de recherche
  //  - afficher la météo de la "location"
  //  - Afficher la route lorsque les "location" sont set


  const handleLocationToChange = (value) => {
    setLocationTo(value);
  }

  const handleLocationFromChange = (value) => {
    setLocationFrom(value);
  }

  useEffect(() => {
    console.log(locationTo);
    console.log(locationFrom);
  }, [locationTo, locationFrom])

  return (
    <div className="App">
      <Map to={locationTo} from={locationFrom}/>
      <Nav locationTo={locationTo} onLocationToChange={handleLocationToChange} locationFrom={locationFrom} onLocationFromChange={handleLocationFromChange}/>
    </div>
  );
}

export default App;
