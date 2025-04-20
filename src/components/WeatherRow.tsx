import React from 'react';
import { ForecastItem } from '@/types/weather';
import { formatSecondTimestamp, getOpenWeatherIcon } from '@/utils/common';
import Image from 'next/image';
import { TIME_FORMAT } from '@/constants/common';

type WeatherRowProps = ForecastItem;

const WeatherRow: React.FC<WeatherRowProps> = ({ dt, main, weather }) => {
  return (
    <div className="flex items-center gap-2 justify-between w-full py-4 [&:last-child]:pb-0 font-medium">
      <div className="flex items-center justify-between gap-4 text-xs sm:text-sm">
        <div className="text-gray-800">
          {formatSecondTimestamp(dt, TIME_FORMAT)}
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <div className="relative">
            <Image
              src={getOpenWeatherIcon(weather?.[0].icon)}
              alt={weather[0].description}
              width={48}
              height={48}
              className="min-w-12 min-h-12 drop-shadow-xl/25"
            />
          </div>
          <span className="text-gray-400 text-xs sm:text-sm">
            {main.temp_min}°C / {main.temp_max}°C
          </span>
        </div>
      </div>

      <div className="text-gray-700 capitalize text-xs sm:text-sm text-right">
        {weather[0].description}
      </div>
    </div>
  );
};

export default WeatherRow;
