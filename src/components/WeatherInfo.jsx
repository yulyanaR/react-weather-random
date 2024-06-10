import React from 'react';

function WeatherInfo({ data }) {
    if (!data) return <p>Weather Data Not Loaded</p>;

    return (
        <>
            <div className="pod">
                <div className='title'>City</div>
                <div>{data.name}, {data.sys.country}</div>
                <div className='title'>Forecast</div>
                <div>{data.main.temp}&deg;C</div>
                <div>
                    <div>
                        {data.weather.map((weather, index) => (
                            <div key={index}>{weather.main} ({weather.description})</div>
                        ))}
                    </div>
                </div>
                <div className='title'>Wind</div>
                <div>{data.wind.speed}kts at {data.wind.deg} degrees</div>
            </div>
        </>
    );
}

export default WeatherInfo;