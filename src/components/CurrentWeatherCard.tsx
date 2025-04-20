import React from 'react';
import Image from 'next/image';
import { WeatherData } from '@/types/weather';
import { format } from 'date-fns';
import { DATE_FORMAT } from '@/constants/common';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { getOpenWeatherIcon, toKm } from '@/utils/common';
import { SlideUpContainer } from '@/components/SlideUpContainer';
import Card from '@/components/Card';

type WeatherCardProps = Pick<
  WeatherData,
  'weather' | 'wind' | 'main' | 'visibility'
>;

const CurrentWeatherCard: React.FC<WeatherCardProps> = ({
  weather,
  wind,
  main,
  visibility,
}) => {
  return (
    <SlideUpContainer>
      <Card className="min-h-[240px]">
        <div className="text-left text-gray-500">
          <h6>{format(new Date(), DATE_FORMAT)}</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 my-4">
            <Image
              src={getOpenWeatherIcon(weather[0].icon, '@2x')}
              alt={weather[0].description}
              width={80}
              height={80}
              className="w-20 h-20 drop-shadow-xl/25"
            />
            <div>
              <p className="text-4xl font-bold tracking-wider">
                {Math.round(main.temp)}
                °C
              </p>
              <p className="text-gray-500 capitalize">
                {weather[0].description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 text-sm sm:text-base">
            <div className="flex flex-col items-center justify-between gap-2">
              <span className="text-gray-500">Humidity</span>
              <span>
                {main.humidity}
                <span className="text-gray-600">%</span>
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-gray-500">Winds</span>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-5 h-5 mr-2 ">
                  <FaLongArrowAltDown
                    style={{
                      rotate: `${wind.deg}deg`,
                    }}
                  />
                </div>
                <span className="whitespace-nowrap">
                  {wind.speed}{' '}
                  <span className="text-gray-600 text-sm">m/s</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-gray-500">Visibility</span>
              <div className="flex items-center">
                <span>
                  {toKm(visibility)}{' '}
                  <span className="text-gray-600 text-sm">km</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </SlideUpContainer>
  );
};

export default CurrentWeatherCard;
