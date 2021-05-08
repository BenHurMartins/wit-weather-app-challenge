import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import {CityWeather} from '../types/cityWeather';
import {Colors, Dimensions} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

interface Props {
  title: string;
  leftIcon?: string;
  leftAction?: () => void;
}

const Header = (props: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {props.leftIcon ? (
        <TouchableOpacity
          style={styles.leftIconContainer}
          onPress={props.leftAction}>
          <Icon name={props.leftIcon} size={20} color={Colors.white} />
        </TouchableOpacity>
      ) : null}
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{props.title}</Text>
      </View>
      <LinearGradient
        colors={[
          Colors.red,
          Colors.red,
          Colors.red,
          Colors.red,
          Colors.redSemiOpacity,
          Colors.redOpacity,
        ]}
        // locations={[0.9, 1]}
        style={styles.leftView}></LinearGradient>
      <LinearGradient
        colors={[
          Colors.darkBlue,
          Colors.darkBlue,
          Colors.darkBlue,
          Colors.darkBlue,
          Colors.darkBlueSemiOpacity,
          Colors.darkBlueOpacity,
        ]}
        style={styles.rightView}></LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.maxWidth,
    height: Dimensions.headerHeight,
    flexDirection: 'row',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  leftView: {
    height: '100%',
    width: '30%',
    borderBottomLeftRadius: 50,
    justifyContent: 'center',
  },
  rightView: {
    zIndex: 1,
    position: 'relative',
    height: '100%',
    width: '70%',
    borderBottomRightRadius: 50,
  },
  titleStyle: {
    color: Colors.white,
    fontSize: 45,
  },
  titleContainer: {
    left: '15%',
    zIndex: 1111,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  leftIconContainer: {
    left: '2%',
    top: '25%',
    zIndex: 1111,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkBlue,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
