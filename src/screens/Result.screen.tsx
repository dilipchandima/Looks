import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {Dimensions} from 'react-native';

import ScreenContainer from 'components/ScreenContainer';
import {useImage} from 'store/useImage';

const {width} = Dimensions.get('screen');

const ResultScreen = () => {
  const {image} = useImage();

  return (
    <ScreenContainer>
      <Image source={{uri: image}} style={styles.logo} />
      <Text>result{image}</Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  logo: {
    width,
    height: width * (4 / 3),
    borderRadius: 20,
  },
});

export default ResultScreen;
