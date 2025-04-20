import { useQuery } from '@tanstack/react-query';
import { searchCities } from '@/utils/api';
import { useState, useEffect } from 'react';
import type { City } from '@/types/city';

interface UseSearchCityReturn {
  query: string;
  setQuery: (value: string) => void;
  suggestions: City[];
  showSuggestions: boolean;
  setShowSuggestions: (show: boolean) => void;
  error: Error | null;
  isLoading: boolean;
  handleSearch: () => void;
}

export const useSearchCity = (): UseSearchCityReturn => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [shouldSearch, setShouldSearch] = useState(false);

  const { data: suggestions = [], error, isLoading } = useQuery({
    queryKey: ['cities', query],
    queryFn: () => searchCities(query),
    enabled: shouldSearch && !!query.trim(),
  });

  useEffect(() => {
    if (suggestions.length > 0 && shouldSearch) {
      setShowSuggestions(true);
      setShouldSearch(false);
    }
  }, [suggestions, shouldSearch]);

  const handleSearch = () => {
    if (!query.trim()) return;
    setShouldSearch(true);
  };

  return {
    query,
    setQuery: (value: string) => {
      setQuery(value);
      if (showSuggestions) {
        setShowSuggestions(false);
        setShouldSearch(false);
      }
    },
    suggestions,
    showSuggestions,
    setShowSuggestions,
    error,
    isLoading,
    handleSearch,
  };
};
