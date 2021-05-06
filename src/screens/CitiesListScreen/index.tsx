import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getCitiesWeather, getWeatherByLocation} from '../../api';
import {CityWeather} from '../../types/cityWeather';
import Geolocation from '@react-native-community/geolocation';

const CitiesListScreen = () => {
  const navigation = useNavigation();
  const [localWeather, setLocalWeather] = useState<CityWeather>();
  const [citiesWeather, setCitiesWeather] = useState<CityWeather[]>([]);
  const cities = [
    'Lisbon,PT',
    'Madrid,ES',
    'Paris,FR',
    'Berlin,DE',
    'Copenhagen,DK',
    'Rome,IT',
    'London,GB',
    'Dublin,IE',
    'Prague,CZ',
    'Viena,AT',
  ];

  useEffect(() => {
    getWeathers();
    getLocalWeather();
  }, []);

  const getLocalWeather = async () => {
    try {
      Geolocation.getCurrentPosition(async info => {
        const weather = await getWeatherByLocation(
          info.coords.latitude,
          info.coords.longitude,
        );
        setLocalWeather(weather);
      });
      console.log('pegou a localizacao');
    } catch (error) {
      Alert.alert(
        'Falha',
        'O Aplicativo não conseguiu recuperar a sua posição, por gentileza autorize e reinicie o app.',
      );
    }
  };

  const getWeathers = async () => {
    let weathers = (await getCitiesWeather(cities)) as CityWeather[];
    setCitiesWeather(weathers);
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Weather</Text>
          {localWeather ? (
            <Text
              onPress={() =>
                navigation.navigate('DetailWeatherScreen', {
                  cityWeather: localWeather,
                })
              }>
              {localWeather.name} - {localWeather.weather[0].description} -{' '}
              {localWeather.main.temp}
            </Text>
          ) : null}
          {citiesWeather.map(city => {
            return (
              <Text
                onPress={() =>
                  navigation.navigate('DetailWeatherScreen', {
                    cityWeather: city,
                  })
                }>
                {city.name} - {city.weather[0].description} - {city.main.temp}
              </Text>
            );
          })}
        </View>
      </SafeAreaView>
    </>
  );
};

export default CitiesListScreen;
