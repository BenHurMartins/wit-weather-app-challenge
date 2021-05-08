import React, {useEffect, useState} from 'react';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import CitiesListScreen from './screens/CitiesListScreen';
import DetailWeatherScreen from './screens/DetailWeatherScreen';

import SplashScreen from 'react-native-splash-screen';

const Routes = props => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
