import { DATE_FORMAT, ICON_URL } from '@/constants/common';
import { format } from 'date-fns';

export const getOpenWeatherIcon = (icon: string, scale?: string) =>
  `${ICON_URL}/img/wn/${icon}${scale || ''}.png`;

export const toKm = (meter: number) => (meter / 1000).toFixed(1);

export const formatSecondTimestamp = (
  timestamp: number,
  dateFormat = DATE_FORMAT,
) => format(new Date(timestamp * 1000), dateFormat);
