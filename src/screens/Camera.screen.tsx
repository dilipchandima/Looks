import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CameraScreen = () => {
  return (
    <View style={styles.root}>
      <Text>sample</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CameraScreen;
