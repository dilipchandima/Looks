import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {useImage} from 'store/useImage';

const ResultScreen = () => {
  const {image} = useImage();
  return (
    <View style={styles.root}>
      <Image source={{uri: image}} style={styles.logo} />
      <Text>result{image}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  logo: {
    flex: 1,
  },
});

export default ResultScreen;
