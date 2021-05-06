export interface Coord {
  lat: number;
  long: number;
}

export interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Sys {
  country: string;
  id: number;
  sunrise: Date;
  sunset: Date;
  type: number;
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
export interface Wind {
  deg: number;
  speed: number;
}

export interface Clouds {
  all: number;
}

export interface CityWeather {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: Date;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Array<Weather>;
  wind: Wind;
}

export interface CityWeatherRouteParameter {
  cityWeather: CityWeather;
}
