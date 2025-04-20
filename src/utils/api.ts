import { City } from '@/types/city';
import { ForecastData, WeatherData } from '@/types/weather';

export async function fetchWeather(query: string): Promise<WeatherData> {
  const response = await fetch(`/api/weather?q=${encodeURIComponent(query)}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to fetch weather');
  }

  return data;
}

export async function fetchForecast(query: string): Promise<ForecastData> {
  const response = await fetch(`/api/forecast?q=${encodeURIComponent(query)}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to fetch forecast');
  }

  return data;
}

export async function searchCities(
  query: string,
  limit: number = 5,
): Promise<City[]> {
  const url = `/api/geocoding?q=${encodeURIComponent(query)}&limit=${limit}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to fetch suggestions');
  }

  return data;
}
