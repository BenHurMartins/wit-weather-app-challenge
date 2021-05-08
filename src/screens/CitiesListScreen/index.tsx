import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getCitiesWeather, getWeatherByLocation} from '../../api';
import {CityWeather} from '../../types/cityWeather';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListItem from '../../components/ListItem';
import Header from '../../components/Header';
import {Colors, Dimensions} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';

Icon.loadFont();

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
      <View style={styles.container}>
        <View style={{position: 'absolute', top: 0, zIndex: 2000}}>
          <Header title={'Clima'} />
        </View>
        {localWeather || citiesWeather.length > 0 ? (
          <ScrollView contentContainerStyle={styles.listContainer}>
            {localWeather ? (
              <ListItem cityWeather={localWeather} isLocal />
            ) : null}
            {citiesWeather.map(city => {
              return <ListItem cityWeather={city} />;
            })}
          </ScrollView>
        ) : (
          <ActivityIndicator color={Colors.darkBlue} size={'large'} />
        )}
      </View>
    </>
  );
};

export default CitiesListScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {flex: 1, backgroundColor: Colors.background},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingTop: Dimensions.headerHeight + 10,
    width: Dimensions.maxWidth,
    alignItems: 'center',
    // marginTop: -40,
  },
});
