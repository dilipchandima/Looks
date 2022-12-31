import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CameraScreen from './screens/Camera.screen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <CameraScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
