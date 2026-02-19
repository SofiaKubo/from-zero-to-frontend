import { useState } from 'react';
import { TemperatureInput } from '../components/temperature-input';
import { TemperatureScale } from '../types';
import { tryConvert, toCelsius, toFahrenheit } from '../utils';
import './styles.css';

export const App = () => {
  const [celcius, setCelcius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelciusChange = (temperature: string) => {
    setCelcius(temperature);

    if (temperature === '') {
      setFahrenheit('');
    } else {
      const fahrenheit = tryConvert(temperature, toFahrenheit);
      setFahrenheit(fahrenheit);
    }
  };

  const handleFahrenheitChange = (temperature: string) => {
    setFahrenheit(temperature);

    if (temperature === '') {
      setCelcius('');
    } else {
      const celsius = tryConvert(temperature, toCelsius);
      setCelcius(celsius);
    }
  };

  return (
    <div className="page">
      <h1>Конвертер температуры</h1>
      <div className="content">
        <TemperatureInput scale={TemperatureScale.CELCIUS} value={celcius} onChange={handleCelciusChange} />
        <TemperatureInput scale={TemperatureScale.FAHRENHEIT} value={fahrenheit} onChange={handleFahrenheitChange} />
      </div>
    </div>
  );
};
