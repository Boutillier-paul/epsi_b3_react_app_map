import './style.css'

import React, { useState } from 'react';
import { Grid } from '@mui/material';

const api_key = 'b664b142db6566b9fc9503906ed7a763';

function Weather({ location }) {
    const [weatherData, setWeatherData] = useState(null);
    const [cityName, setCityName] = useState(null);
  
    useEffect(() => {
        const getWeather = async (lat, lon) => {
            const response = await fetch(
                `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&lang=fr`
            );
            const data = await response.json();
            setWeatherData(data)
        };

        if (!location) return null;
        if (location.city && Object.keys(location.city).length !== 0) {
            getWeather(location.city.gps_lat, location.city.gps_lng)
            setCityName(location.city.label)
        }
    })

    // DOC
    // https://openweathermap.org/api/one-call-3
    // https://openweathermap.org/weather-conditions

    return (
        <div className='Weather'>
            { weatherData &&
                <Grid container rowSpacing={3} columnSpacing={3}>
                    <Grid item xs={12}>
                        <Item>{cityName}</Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item>{tempMoy} °C</Item>
                    </Grid>

                    //TODO 
                    // Mettre l'icon
                    // Mettre le ressenti, la temp min, temp max et le description
                    <Grid item xs={6}>
                        <Item>{tempMoy}</Item>
                    </Grid>
                </Grid>
            }
        </div>
    );
}


export default Weather