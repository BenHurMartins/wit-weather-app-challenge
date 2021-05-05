import React, {useEffect, useState} from 'react';
// import SplashScreen from 'react-native-splash-screen';
// import {api} from './api/index';
import {Colors} from './constants/';

import {View, Text} from 'react-native';
//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
// import QuestionsListScreen from './screens/QuestionsListScreen';
// import DetailScreen from './screens/DetailScreen';

const Routes = props => {
  const Stack = createStackNavigator();

  //   const mainStack = () => {
  //     return (
  //       <Stack.Navigator>
  //         <Stack.Screen
  //           name="QuestionsListScreen"
  //           component={QuestionsListScreen}
  //           options={{headerShown: false}}
  //         />
  //         <Stack.Screen
  //           name="DetailScreen"
  //           component={DetailScreen}
  //           options={{headerShown: false}}
  //         />
  //       </Stack.Navigator>
  //     );
  //   };

  return (
    <>
      <NavigationContainer>
        {/* <>{mainStack()}</> */}
        <View>
          <Text>Teste</Text>
        </View>
      </NavigationContainer>
    </>
  );
};

export default Routes;
