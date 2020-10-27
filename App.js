/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './src/navigation/StackNavigator';

const App= (props) => {
  return (
    <NavigationContainer>
      <StackScreen navigation={props.navigation}/>
    </NavigationContainer>
  );
};


export default App;
