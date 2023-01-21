import './style.css'

import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

const api_key = 'b664b142db6566b9fc9503906ed7a763';

function Weather({ location }) {
    const [weatherData, setWeatherData] = useState(null);
  
    useEffect(() => {
        const getWeather = async (lat, lon) => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&lang=fr`
            );
            const data = await response.json();
            setWeatherData(data);
        };

        if (location && location.city && Object.keys(location.city).length !== 0 && !weatherData) {
            getWeather(location.city.gps_lat, location.city.gps_lng);
        }

        if (!location || !location.city || Object.keys(location.city).length === 0) {
            setWeatherData(null);
        }
    })

    // DOC
    // https://openweathermap.org/api/one-call-3
    // https://openweathermap.org/weather-conditions

    // lorsque la route est tracée, si on retire les destinations et départs, la route persiste mais les Marker disparraissent

    return (
        <div className='Weather' style={ weatherData && {boxShadow: '-.1px -.1px 10px 0px rgba(0, 0, 0, .4)', borderRadius: '5%'}}>
            { weatherData &&
                <Grid container rowSpacing={3} columnSpacing={3}>
                    <Grid item xs={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        {weatherData.main.temp}°C
                    </Grid>

                    <Grid item xs={6}>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
                    </Grid>

                    <Grid item xs={12}>
                        {weatherData.weather[0].description.replace(/^\w/, c => c.toUpperCase())}
                    </Grid>

                    <Grid item xs={12}>
                        Ressenti: {weatherData.main.feels_like}°C
                    </Grid>
                </Grid>
            }
        </div>
    );
}


export default Weather