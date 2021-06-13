import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 

import Home from './src/screen/Home';
import Detail from './src/screen/Detail';
import SplashScreen from './src/screen/SplashScreen';

const Stack = createStackNavigator();

function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Detail' component={Detail}/>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;