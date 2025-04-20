import { useQuery } from '@tanstack/react-query';
import { fetchForecast } from '@/utils/api';

export function useForecast(city: string, country: string) {
  return useQuery({
    queryKey: ['forecast', city, country],
    queryFn: () => fetchForecast(`${city},${country}`),
    enabled: !!city && !!country,
  });
}
