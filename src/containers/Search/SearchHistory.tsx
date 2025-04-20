import React from 'react';
import { useWeatherStore } from '@/store/weatherStore';
import { useShallow } from 'zustand/react/shallow';
import { LuSearch, LuTrash } from 'react-icons/lu';
import { useRouter } from 'next/navigation';

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

  const handleRemoveFromHistory = (event: React.MouseEvent, city: string) => {
    event.stopPropagation();
    removeFromHistory(city);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-gray-800 font-medium">Search History</h2>
      </div>
      <div className=" bg-white text-black rounded-lg p-4 shadow-lg">
        {searchHistory.length > 0 ? (
          searchHistory.map(({ city, countryCode }) => (
            <div
              key={`${city}-${countryCode}`}
              className="flex items-center justify-between w-full px-4 py-2 text-left rounded-lg text-gray-900"
            >
              {city}, {countryCode}
              <div className="flex gap-4">
                <LuSearch
                  className="cursor-pointer"
                  onClick={() => handleClickHistoryItem(city, countryCode)}
                />
                <LuTrash
                  className="cursor-pointer"
                  onClick={(event) => handleRemoveFromHistory(event, city)}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="min-h-[120px] text-sm text-gray-500 flex items-center justify-center">
            Empty Search History
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchHistory;
