import React from 'react';
import { useSelector } from 'react-redux';

const List = () => {
  const { data, loading, error } = useSelector(state => state.weather);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No weather data available.</p>;

  return (
    <div>
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temp: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

export default List;
