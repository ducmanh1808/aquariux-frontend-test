import { useState } from 'react';
import { searchCities } from '@/utils/api';
import type { City } from '@/types/city';

export const useSearchCity = () => {
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchCity = async (query: string) => {
    if (!query.trim()) return;

    try {
      setIsLoading(true);
      setError('');
      const cities = await searchCities(query);

      if (cities.length === 0) {
        setError('Invalid country or city');
        setSuggestions([]);
        return;
      }

      setSuggestions(cities);
      return cities;
    } catch {
      setError('Failed to fetch suggestions');
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    suggestions,
    error,
    isLoading,
    searchCity,
  };
};
