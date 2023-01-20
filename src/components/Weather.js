import './style.css'

import React, { useState, useEffect } from 'react';
import { Grid, Item } from '@mui/material';

const api_key = 'b664b142db6566b9fc9503906ed7a763';

function Weather({ location }) {
    const [weatherData, setWeatherData] = useState(null);
    const [cityName, setCityName] = useState(null);
  
    useEffect(() => {
        const getWeather = async (lat, lon) => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&lang=fr`
            );
            const data = await response.json();
            setWeatherData(data);
            console.log(data);
        };

        if (location && location.city && Object.keys(location.city).length !== 0 && !weatherData) {
            getWeather(location.city.gps_lat, location.city.gps_lng);
            setCityName(location.city.label);
        }

        if (!location) {
            setWeatherData(null);
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
                        {cityName}
                    </Grid>

                    <Grid item xs={6}>
                        {weatherData.main.temp}°C
                    </Grid>

                    <Grid item xs={6}>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
                    </Grid>

                    <Grid item xs={12}>
                        {weatherData.weather[0].description}
                    </Grid>

                    <Grid item xs={12}>
                        Ressenti {weatherData.main.feels_like}°C
                    </Grid>
                </Grid>
            }
        </div>
    );
}


export default Weather