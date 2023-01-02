import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import CameraScreen from 'screens/Camera.screen';
import ResultScreen from 'screens/Result.screen';
import {ImageContextProvider} from 'store/Image.provider';

import {CAMERA_SCREEN, RESULT_SCREEN} from './ScreenNames';

export type RootStackParamList = {
  [CAMERA_SCREEN]: undefined;
  [RESULT_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {headerShown: false};

const AppNavigator = () => {
  return (
    <ImageContextProvider>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen component={CameraScreen} name={CAMERA_SCREEN} />
        <Stack.Screen component={ResultScreen} name={RESULT_SCREEN} />
      </Stack.Navigator>
    </ImageContextProvider>
  );
};

export default AppNavigator;
