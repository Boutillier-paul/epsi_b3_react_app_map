import './style.css'

import React, { useEffect } from 'react';
import {} from '@mui/material';

const api_key = 'b664b142db6566b9fc9503906ed7a763';

function Weather({ location }) {
  
    useEffect(() => {
        const getWeather = async (lat, lon) => {
            const response = await fetch(
                `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&lang=fr`
            );
            const data = await response.json();
            const coordinates = data.features[0].geometry.coordinates;
            setCoordinates(coordinates.map((coord) => coord.reverse()));
        };
    })

    return (
        <div className='Weather'>
            
        </div>
    );
}


export default Weather