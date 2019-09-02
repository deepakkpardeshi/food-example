import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
import DetailsScreen from './src/components/DetailsScreen'

const AppNavigator = createStackNavigator(
  {
    Home: SearchScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Food'
    }
  },
);

export default createAppContainer(AppNavigator);
