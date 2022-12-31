import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyNativeView from '../components/LooksCamera.component';

const CameraScreen = () => {
  return (
    <View style={styles.root}>
      <MyNativeView />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default CameraScreen;
