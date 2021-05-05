import axios from 'axios';

const baseURLApi = 'https://api.openweathermap.org/data/2.5/';

//I Would sabe apiKey in an Env file, but for this challenge purposes i will let it here
const apiKey = 'e5f1014337308b77306e4e245b4a046e';

export const api = axios.create({baseURL: baseURLApi});

export const getCitiesWeather = async cities => {
  let citiesWeathers = [];
  const urlRequests = cities.map(city => {
    return axios.get(
      `${baseURLApi}weather?q=${city}&appid=${apiKey}&lang=${'pt'}&units=metric`,
    );
  });
  await axios
    .all(urlRequests)
    .then(
      axios.spread((...responses) => {
        citiesWeathers = responses.map(element => {
          return element.data;
        });
      }),
    )
    .catch(errors => {
      console.log(errors);
    });
  return citiesWeathers;
};
