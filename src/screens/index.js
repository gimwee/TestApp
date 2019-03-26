import React from 'react';
import { Navigation } from 'react-native-navigation';
// import InitialScreen from './InitialScreen';
import FooScreen from './FooScreen';

export const registerScreens = () => {
  Navigation.registerComponent(`FooScreen`, () => FooScreen);
  Navigation.registerComponent(`QuaScreen`, () => QuaScreen);
};
