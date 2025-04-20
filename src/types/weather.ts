export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherWind {
  speed: number;
  deg: number;
}

export interface WeatherSys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherCoord {
  lon: number;
  lat: number;
}

export interface WeatherData {
  coord: WeatherCoord;
  weather: WeatherCondition[];
  main: WeatherMain;
  wind: WeatherWind;
  visibility: number;
  dt: number;
  sys: WeatherSys;
  name: string;
}

export interface ForecastItem {
  dt: number;
  main: WeatherMain;
  weather: WeatherCondition[];
  wind: WeatherWind;
  visibility: number;
  dt_txt: string;
}

export interface ForecastCity {
  name: string;
  country: string;
}

export interface ForecastData {
  list: ForecastItem[];
  city: ForecastCity;
}

export interface SearchHistory {
  city: string;
  countryCode: string;
}
