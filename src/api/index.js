import axios from 'axios';

const baseURLApi = 'https://api.openweathermap.org/data/2.5/';

//I Would save apiKey in an Env file, but for this challenge purposes i will let it here
const apiKey = 'e5f1014337308b77306e4e245b4a046e';

export const api = axios.create({baseURL: baseURLApi});

export const getCitiesWeather = async cities => {
  const urlRequests = cities.map(city => {
    return axios.get(
      `${baseURLApi}weather?q=${city}&appid=${apiKey}&lang=${'pt'}&units=metric`,
    );
  });
  const citiesWeathers = await axios
    .all(urlRequests)
    .then(
      axios.spread((...responses) => {
        return responses.map(element => {
          return element.data;
        });
      }),
    )
    .catch(errors => {
      console.log(errors);
    });
  return citiesWeathers;
};

export const getWeatherByLocation = async (lat, long) => {
  return (weather = await api
    .get(
      `weather?lat=${lat}&lon=${long}&appid=${apiKey}&lang=${'pt'}&units=metric`,
    )
    .then(response => response.data)
    .catch(err => console.log(err)));
};
