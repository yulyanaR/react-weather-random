import React from 'react';

function Emoji({ icons }) {
    if (!icons) return <p>Weather Icon Not Loaded</p>;

    return (
        <div className='pod'>
            {icons.map((icon, index) => (
                <img key={index} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
            ))}
        </div>
    );
}

export default Emoji;