'use client';

import CurrentWeatherCard from '@/components/CurrentWeatherCard';
import ForecastByDate from '@/components/ForecastByDate';
import { useWeatherStore } from '@/store/weatherStore';
import { useWeather } from '@/hooks/useWeather';
import { useForecast } from '@/hooks/useForecast';
import { FaSpinner } from 'react-icons/fa';
import React from 'react';

const WeatherByCity: React.FC = () => {
  const { city, countryCode } = useWeatherStore();

  const {
    data: weatherData,
    isLoading: isLoadingWeather,
    error: weatherError,
  } = useWeather(city, countryCode);

  const {
    data: forecastData,
    isLoading: isLoadingForecast,
    error: forecastError,
  } = useForecast(city, countryCode);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {isLoadingWeather ? (
        <div className="min-h-[240px] flex items-center justify-center bg-white rounded-lg p-6 shadow-lg">
          <FaSpinner className="icon-spin text-gray-600" />
        </div>
      ) : weatherError ? (
        <div className="bg-white rounded-lg p-6 shadow-lg text-red-500 text-center capitalize">
          {weatherError.message}
        </div>
      ) : weatherData ? (
        <CurrentWeatherCard {...weatherData} />
      ) : null}

      {forecastError ? (
        <div className="bg-white rounded-lg p-6 shadow-lg text-red-500 text-center">
          {forecastError.message}
        </div>
      ) : (
        <ForecastByDate
          forecastData={forecastData}
          isLoading={isLoadingForecast}
        />
      )}
    </div>
  );
};

export default WeatherByCity;
