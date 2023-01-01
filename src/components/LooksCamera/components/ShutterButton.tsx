import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {Colors} from 'res/Colors';

const ShutterButton = ({onPress}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.button} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: Colors.white,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.white,
  },
});

export default ShutterButton;
