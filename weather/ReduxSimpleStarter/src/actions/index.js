import axios from 'axios';

const API_KEY = '6c9e3ca09834d510f7f842a68d83ecaf';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  console.log(city);
  const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
