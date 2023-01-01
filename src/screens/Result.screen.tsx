import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useImage} from '../store/useImage';

const ResultScreen = () => {
  const {image} = useImage();
  return (
    <View style={styles.root}>
      <Image style={styles.logo} source={{uri: image}} />
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
