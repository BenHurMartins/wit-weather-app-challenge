import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {CityWeather, CityWeatherRouteParameter} from '../../types/cityWeather';
import {useRoute} from '@react-navigation/native';

const DetailWeather = () => {
  const route = useRoute();
  const {cityWeather} = route.params as CityWeatherRouteParameter;

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>DetailWeather</Text>
          <Text>Sensação térmica {cityWeather.main.feels_like}</Text>
          <Text>umidade do ar{cityWeather.main.humidity}</Text>
          <Text>Temperatura{cityWeather.main.temp}</Text>
          <Text>Temperatura Máxima{cityWeather.main.temp_max}</Text>
          <Text>Temperatura Mínima{cityWeather.main.temp_min}</Text>
          <Text>Nome{cityWeather.name}</Text>
          <Text>{cityWeather.sys.sunrise}</Text>
          <Text>{cityWeather.sys.sunset}</Text>
          <Text>{cityWeather.weather[0].description}</Text>
          <Text>{cityWeather.weather[0].main}</Text>
          <Image
            style={{height: 50, width: 50, resizeMode: 'contain'}}
            source={{
              uri: `https://openweathermap.org/img/w/${cityWeather.weather[0].icon}.png`,
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default DetailWeather;
