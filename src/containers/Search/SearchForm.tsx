'use client';

import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useRef } from 'react';
import type { City } from '@/types/city';
import { useSearchCity } from '@/hooks/useSearchCity';
import { useWeatherStore } from '@/store/weatherStore';
import CitySuggestions from '@/components/CitySuggestions';

const SearchForm = () => {
  const router = useRouter();
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const {
    query,
    setQuery,
    suggestions,
    showSuggestions,
    setShowSuggestions,
    error,
    isLoading,
    handleSearch,
  } = useSearchCity();
  const { setCity, addToHistory } = useWeatherStore();

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      handleSearch();
    }
  };

  const handleSelectCity = (city: City) => {
    setCity(city.name, city.country);
    addToHistory(city.name, city.country);
    router.push(`/`);
  };

  return (
    <div className="relative w-full">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter city name..."
          className="flex-1 p-2 border rounded-md bg-white text-gray-900 border-gray-400 focus:outline-0"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600"
          disabled={isLoading || !query.trim()}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {error && <p className="text-red-500 mt-2">{error.message}</p>}

      {showSuggestions && suggestions.length > 0 && (
        <CitySuggestions
          suggestions={suggestions}
          onSelectCity={handleSelectCity}
          suggestionsRef={suggestionsRef}
        />
      )}
    </div>
  );
};

export default SearchForm;
