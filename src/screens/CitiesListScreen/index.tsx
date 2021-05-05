import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CitiesListScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text onPress={() => navigation.navigate('DetailWeather')}>
            CitiesListScreen
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CitiesListScreen;
