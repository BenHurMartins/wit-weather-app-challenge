import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {CityWeather, CityWeatherRouteParameter} from '../../types/cityWeather';
import {useRoute} from '@react-navigation/native';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, Dimensions} from '../../constants/';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

Icon.loadFont();
const DetailWeather = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {cityWeather} = route.params as CityWeatherRouteParameter;

  const sunset = moment.unix(cityWeather.sys.sunset);
  const sunrise = moment.unix(cityWeather.sys.sunrise);
  const test = moment(Date());
  return (
    <>
      <View style={{flex: 1}}>
        <Header
          title={cityWeather.name}
          leftIcon={'chevron-left'}
          leftAction={navigation.goBack}
        />
        <View style={styles.contentContainer}>
          {/* Decription */}
          <View style={styles.dataContainer}>
            <Text style={styles.textInfo}>
              {cityWeather.weather[0].description.charAt(0).toUpperCase() +
                cityWeather.weather[0].description.slice(1)}
            </Text>
          </View>
          {/* Temperature */}
          <View style={styles.dataContainer}>
            <Text style={styles.textInfo}>Temperatura: </Text>
            <Text style={styles.textData}>{cityWeather.main.temp}˚C</Text>
          </View>
          {/* Min and Mac */}
          <View style={styles.sunContainer}>
            <View style={styles.sunContentContainer}>
              <Text style={styles.textInfo}>Min: </Text>
              <Text style={styles.textData}>{cityWeather.main.temp_min}˚C</Text>
            </View>
            <View style={styles.sunContentContainer}>
              <Text style={styles.textInfo}>Max: </Text>
              <Text style={styles.textData}>{cityWeather.main.temp_max}˚C</Text>
            </View>
          </View>
          {/* Feels Like */}
          <View style={styles.dataContainer}>
            <Text style={styles.textInfo}>Sensação térmica: </Text>
            <Text style={styles.textData}>{cityWeather.main.feels_like}˚C</Text>
          </View>
          {/* Humidity */}
          <View style={styles.dataContainer}>
            <Text style={styles.textInfo}>Umidade do ar: </Text>
            <Text style={styles.textData}>{cityWeather.main.humidity}%</Text>
          </View>

          <View style={styles.sunContainer}>
            <View style={styles.sunContentContainer}>
              <Icon
                name={'weather-sunset-up'}
                size={40}
                color={Colors.darkBlue}
              />
              <Text style={styles.textInfo}>{sunrise.format('hh:mm')}</Text>
            </View>
            <View style={styles.sunContentContainer}>
              <Icon
                name={'weather-sunset-down'}
                size={40}
                color={Colors.darkBlue}
              />
              <Text style={styles.textInfo}>{sunset.format('hh:mm')}</Text>
            </View>
          </View>

          <Text style={styles.textInfo}></Text>
        </View>
      </View>
    </>
  );
};

export default DetailWeather;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    width: Dimensions.maxWidth,
    alignItems: 'center',
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  sunContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  sunContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '50%',
  },
  textInfo: {
    fontSize: 20,
    color: Colors.darkBlue,
  },
  textData: {
    fontSize: 20,
    color: Colors.darkBlue,
    fontWeight: 'bold',
  },
});
