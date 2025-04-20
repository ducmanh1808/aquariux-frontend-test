import { searchCities } from '@/utils/api';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useSearchCity = () => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const {
    data: suggestions,
    error,
    isPending: isLoading,
    mutate: mutateCity,
  } = useMutation({
    mutationKey: ['cities', query],
    mutationFn: () => searchCities(query),
  });

  useEffect(() => {
    if (suggestions) setShowSuggestions(true);
  }, [suggestions]);

  const handleSearch = () => {
    if (!query.trim()) return;
    mutateCity();
  };

  return {
    query,
    setQuery: (value: string) => {
      setQuery(value);
      if (showSuggestions) {
        setShowSuggestions(false);
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
