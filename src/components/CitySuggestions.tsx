import React from 'react';
import type { City } from '@/types/city';

interface CitySuggestionsProps {
  suggestions: City[] | undefined;
  onSelectCity: (city: City) => void;
  suggestionsRef: React.RefObject<HTMLDivElement | null>;
}

const CitySuggestions = ({
  suggestions,
  onSelectCity,
  suggestionsRef,
}: CitySuggestionsProps) => {
  return !!suggestions?.length ? (
    <div
      ref={suggestionsRef}
      className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto"
    >
      {suggestions.map((city, index) => (
        <button
          key={`${city.name}-${city.lat}-${city.lon}-${index}`}
          onClick={() => onSelectCity(city)}
          className="w-full px-4 py-2 text-left text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none cursor-pointer"
        >
          {city.state ? `${city.name}, ${city.state}` : city.name}
          <span className="text-gray-500">, {city.country}</span>
        </button>
      ))}
    </div>
  ) : (
    <p className="text-red-500 mt-2">Invalid Country or City</p>
  );
};
export default CitySuggestions;
