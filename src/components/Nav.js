import React, { useState } from 'react';
import './style.css'
import Chips from './Chips';
import SearchInput from './SearchInput';
import Weather from './Weather';
import History from './History';

import regions from '../data/regions.json'
import departments from '../data/departments.json'
import cities from '../data/cities.json'


function Nav({ locationTo, locationFrom, onLocationToChange, onLocationFromChange, onClearClick}) {
  const [locations] = useState({
    regions : JSON.parse(JSON.stringify(regions)),
    departments : JSON.parse(JSON.stringify(departments)),
    cities: JSON.parse(JSON.stringify(cities))
  });

  const handleLocationTo = (newLocation) => {
    onLocationToChange(newLocation);
  }

  const handleLocationFrom = (newLocation) => {
    onLocationFromChange(newLocation);
  }

  const handleClear = (location) => {
    onClearClick(location);
  }

  return (
    <div className='Nav'>
      <h1>Navigaaaaaa</h1>

      <Chips location={locationTo} onClear={handleClear}/>
      <SearchInput id="destination" locations={locations} location={locationTo} onChange={handleLocationTo}/>
      <Weather location={locationTo}/>

      <Chips location={locationFrom} onClear={handleClear}/>
      <SearchInput id="départ" locations={locations} location={locationFrom} onChange={handleLocationFrom}/>
      <Weather location={locationFrom}/>

      <History />
    </div>
  );
}

export default Nav;

