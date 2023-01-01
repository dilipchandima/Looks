import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from 'screens/Camera.screen';
import ResultScreen from 'screens/Result.screen';
import {CAMERA_SCREEN, RESULT_SCREEN} from './ScreenNames';
import {ImageContextProvider} from 'store/Image.provider';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <ImageContextProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={CAMERA_SCREEN} component={CameraScreen} />
        <Stack.Screen name={RESULT_SCREEN} component={ResultScreen} />
      </Stack.Navigator>
    </ImageContextProvider>
  );
};

export default AppNavigator;
