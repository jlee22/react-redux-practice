const API_KEY = '3ba6f382faa642444091af739525d3d8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchweather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  
  return {
    type: FETCH_WEATHER
  };
}
