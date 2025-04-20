import React from 'react';
import type { ForecastData, ForecastItem } from '@/types/weather';
import WeatherRow from '@/components/WeatherRow';
import { formatSecondTimestamp } from '@/utils/common';
import { isToday } from 'date-fns';
import { FaSpinner } from 'react-icons/fa';
import { SlideUpContainer } from '@/components/SlideUpContainer';

type ForecastByDateProps = {
  forecastData: ForecastData | undefined;
  isLoading: boolean;
};

function groupForecastByDate(
  items: ForecastItem[] | undefined,
): Record<string, ForecastItem[]> {
  return !!items?.length
    ? items.reduce(
        (acc, item) => {
          const date = formatSecondTimestamp(item.dt, 'dd MMMM');
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(item);
          return acc;
        },
        {} as Record<string, ForecastItem[]>,
      )
    : {};
}

const ForecastByDate: React.FC<ForecastByDateProps> = ({
  forecastData,
  isLoading,
}) => {
  const forecastGroupByDate = groupForecastByDate(forecastData?.list);

  return (
    <>
      <h2 className="text-lg text-gray-800 font-medium mb-4">5-Day Forecast</h2>
      {isLoading ? (
        <div className="min-h-[240px] flex items-center justify-center rounded-lg p-6  bg-white md:bg-transparent shadow-lg md:shadow-transparent">
          <FaSpinner className="icon-spin text-gray-600" />
        </div>
      ) : (
        forecastData && (
          <SlideUpContainer>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-0 md:shadow-transparent md:bg-transparent">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(forecastGroupByDate).map(([date, items]) => {
                  const label = isToday(new Date(items[0].dt * 1000))
                    ? 'Today'
                    : date;
                  return (
                    <div
                      key={date}
                      className="bg-transparent md:bg-white md:p-4 md:shadow-lg md:rounded-lg"
                    >
                      <span className="text-gray-500">{label}</span>
                      {items.map((item: ForecastItem) => (
                        <WeatherRow key={item.dt} {...item} />
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </SlideUpContainer>
        )
      )}
    </>
  );
};

export default ForecastByDate;
