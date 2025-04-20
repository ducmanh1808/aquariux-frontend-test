import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '@/utils/api';

export function useWeather(city: string, country: string) {
  return useQuery({
    queryKey: ['weather', city, country],
    queryFn: () => fetchWeather(`${city},${country}`),
    enabled: !!city && !!country,
  });
}
