import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getCitiesWeather} from '../../api';
import {CityWeather} from '../../types/cityWeather';

const CitiesListScreen = () => {
  const navigation = useNavigation();
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
    'Brasilia,BR',
  ];

  useEffect(() => {
    getWeathers();
  }, []);

  const getWeathers = async () => {
    const weathers = await getCitiesWeather(cities);
    setCitiesWeather(weathers);
    console.log(weathers);
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {citiesWeather.map(city => {
            return (
              <Text>
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
