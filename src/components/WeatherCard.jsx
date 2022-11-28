import React, { useState } from "react";

const WeatherCard = ({ weather, temp }) => {
  const [isCelcius, setIsCelcius] = useState(true);

  const handleClick = () => {
    setIsCelcius(!isCelcius);
  };

  return (
    <article className='card'>
      <header className='card__header'>
        <h1 className='card__title'>Weather App</h1>
        <h2 className='card__subtitle'>
          {weather?.name}, {weather?.sys.country}
        </h2>
      </header>
      <section className='card__icon-container'>
        {weather ? (
          <img
            className='card__icon'
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=''
          />
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <section className='card__info'>
        <h3 className='card__description'>
          "{weather?.weather[0].description}"
        </h3>
        <ul className='card__list'>
          <li className='card__item'>
            <span className='card__span'>Wind Speed </span>
            {weather?.wind.speed} m/s
          </li>
          <li className='card__item'>
            <span className='card__span'>Clouds </span>
            {weather?.clouds.all}%
          </li>
          <li className='card__item'>
            <span className='card__span'>presure </span>
            {weather?.main.pressure}hPa
          </li>
        </ul>
      </section>
      <h3 className='card__temp'>
        {isCelcius ? `${temp?.celcius} °C` : `${temp?.farenheith} °K`}
      </h3>
      <footer className='card__footer'>
        <button className='card__btn' onClick={handleClick}>
          Change to {isCelcius ? "°F" : "°C"}
        </button>
      </footer>
    </article>
  );
};

export default WeatherCard;
