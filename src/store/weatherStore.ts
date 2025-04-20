import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SearchHistory } from '@/types/weather';
import { DEFAULT_CITY, DEFAULT_COUNTRY_CODE } from '@/constants/common';

interface WeatherStore {
  searchHistory: SearchHistory[];
  city: string;
  countryCode: string;
  addToHistory: (city: string, countryCode: string) => void;
  removeFromHistory: (city: string) => void;
  setCity: (city: string, countryCode: string) => void;
}

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set) => ({
      searchHistory: [],
      city: DEFAULT_CITY,
      countryCode: DEFAULT_COUNTRY_CODE,
      addToHistory: (city: string, countryCode: string) =>
        set((state) => {
          const removedDuplicates = state.searchHistory.filter(
            (item) => item.city !== city,
          );
          return {
            searchHistory: [
              {
                city,
                countryCode,
              },
              ...removedDuplicates.slice(0, 9), // Keep only last 10 searches
            ],
          };
        }),
      removeFromHistory: (city: string) =>
        set((state) => ({
          searchHistory: state.searchHistory.filter(
            (item) => item.city !== city,
          ),
        })),
      setCity: (city: string, countryCode: string) =>
        set({ city, countryCode }),
    }),
    {
      name: 'weather-history',
    },
  ),
);
