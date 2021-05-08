import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors, Dimensions} from '../constants';
import {CityWeather} from '../types/cityWeather';

Icon.loadFont();

interface Props {
  cityWeather: CityWeather;
  isLocal?: boolean;
}

const ListItem = (props: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('DetailWeatherScreen', {
          cityWeather: props.cityWeather,
        })
      }>
      {props.isLocal ? (
        <Icon
          name={'map-marker'}
          size={20}
          color={Colors.darkBlue}
          style={styles.iconIsLocal}
        />
      ) : null}
      <View>
        <Text style={styles.weatherTitle}>{props.cityWeather.name}</Text>
        <Text style={styles.weatherSubtitle}>
          {props.cityWeather.weather[0].description}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <View>
          <Text style={styles.weatherTemperature}>
            {props.cityWeather.main.temp} ˚C
          </Text>
        </View>
        <Icon name={'chevron-right'} size={20} color={Colors.darkBlue} />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    width: Dimensions.width80,
    height: 80,
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  rightContainer: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weatherTitle: {
    fontSize: 22,
    color: Colors.darkBlue,
  },
  weatherSubtitle: {
    fontSize: 12,
    color: Colors.darkBlue,
    fontStyle: 'italic',
  },
  weatherTemperature: {
    fontSize: 20,
    color: Colors.darkBlue,
    fontWeight: 'bold',
  },
  iconIsLocal: {
    position: 'absolute',
    top: 3,
    left: 10,
  },
});
