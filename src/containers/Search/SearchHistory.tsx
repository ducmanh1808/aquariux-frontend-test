import React from 'react';
import { useWeatherStore } from '@/store/weatherStore';
import { useShallow } from 'zustand/react/shallow';
import { LuSearch, LuTrash } from 'react-icons/lu';
import { useRouter } from 'next/navigation';
import Card from '@/components/Card';

const SearchHistory = () => {
  const router = useRouter();
  const searchHistory = useWeatherStore(
    useShallow((state) => state.searchHistory),
  );

  const removeFromHistory = useWeatherStore((state) => state.removeFromHistory);
  const setCity = useWeatherStore((state) => state.setCity);

  const handleClickHistoryItem = (city: string, countryCode: string) => {
    setCity(city, countryCode);
    router.push('/');
  };

  const handleRemoveFromHistory = (city: string) => {
    removeFromHistory(city);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-gray-800 font-medium">Search History</h2>
      </div>
      <Card>
        {searchHistory.length > 0 ? (
          searchHistory.map(({ city, countryCode }) => (
            <div
              key={`${city}-${countryCode}`}
              className="flex items-center justify-between w-full py-2 [&:last-child]:pb-0 [&:first-child]:pt-0 text-left rounded-lg text-gray-900"
            >
              {city}, {countryCode}
              <div className="flex gap-4">
                <LuSearch
                  className="cursor-pointer"
                  onClick={() => handleClickHistoryItem(city, countryCode)}
                />
                <LuTrash
                  className="cursor-pointer"
                  onClick={() => handleRemoveFromHistory(city)}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="min-h-[120px] text-sm text-gray-500 flex items-center justify-center">
            Empty Search History
          </div>
        )}
      </Card>
    </div>
  );
};

export default SearchHistory;
