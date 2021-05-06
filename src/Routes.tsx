import React, {useEffect, useState} from 'react';
// import SplashScreen from 'react-native-splash-screen';
// import {api} from './api/index';
import {Colors} from './constants/';

import {View, Text} from 'react-native';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import CitiesListScreen from './screens/CitiesListScreen';
import DetailWeatherScreen from './screens/DetailWeatherScreen';

const Routes = props => {
  const Stack = createStackNavigator();

  const mainStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="CitiesListScreen"
          component={CitiesListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailWeatherScreen"
          component={DetailWeatherScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  return (
    <>
      <NavigationContainer>
        <>{mainStack()}</>
      </NavigationContainer>
    </>
  );
};

export default Routes;
