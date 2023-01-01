import React from 'react';
import {Image, StyleSheet, Text, Dimensions, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Button from 'components/Button';
import ScreenContainer from 'components/ScreenContainer';
import {RootStackParamList} from 'navigation/AppNavigator';
import ArrowLeft from 'res/icons/ArrowLeft';
import Check from 'res/icons/Check';
import {useImage} from 'store/useImage';

const {width} = Dimensions.get('screen');

type Props = NativeStackScreenProps<RootStackParamList, 'ResultScreen'>;

const ResultScreen = ({navigation}: Props) => {
  const {image} = useImage();

  const onPressRetake = () => {
    navigation.goBack();
  };

  const onPressUsePhoto = () => {
    return;
  };

  return (
    <ScreenContainer>
      <Image source={{uri: image}} style={styles.logo} />
      <Text>result{image}</Text>
      <View style={styles.buttonContainer}>
        <Button icon={<ArrowLeft />} title="Retake" onPress={onPressRetake} />
        <Button icon={<Check />} title="Use photo" onPress={onPressUsePhoto} />
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});

export default ResultScreen;
