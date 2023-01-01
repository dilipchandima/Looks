import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MyNativeView = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Android Camera is under construction</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
  },
});

export default MyNativeView;
