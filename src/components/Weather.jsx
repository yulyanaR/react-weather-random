import React, { useEffect, useState } from 'react';
import Emoji from './Emoji';
import WeatherInfo from './WeatherInfo';
import { REACT_APP_WEATHER_API_KEY } from '../../Keys';

const weatherAPIKey = REACT_APP_WEATHER_API_KEY;
const cities = [
    "London",
    "New York",
    "Tokyo",
    "Sydney",
    "Berlin",
    "Beijing",
    "Toronto",
    "Amsterdam",
    "Bangkok",
    "Cairo",
    "Dubai",
    "Hong Kong",
    "Istanbul",
    "Rio de Janeiro",
    "Singapore"
];
const randomCity = cities[Math.floor(Math.random() * cities.length)];
const weatherAPICurrentWeatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&appid=${weatherAPIKey}&units=metric`;

function Weather() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [icons, setIcons] = useState(null);

    useEffect(() => {
        fetch(weatherAPICurrentWeatherEndpoint)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .then(data => {
                setData(data);
                setIcons(data.weather.map(({ icon }) => icon));
            })
            .catch(error => setError(error.message));
    }, []);

    if (error) return <p>{error}</p>;
    if (!data) return <p>Loading...</p>;

    return (
        <div>
            <div className="container main-grid">
                <Emoji icons={icons} className="pod" />
                <WeatherInfo data={data} className="pod" />
            </div>
        </div>
    );
}

export default Weather;