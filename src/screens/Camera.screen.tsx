import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LooksCamera from 'components/LooksCamera/LooksCamera.component';
import ScreenContainer from 'components/ScreenContainer';
import {RootStackParamList} from 'navigation/AppNavigator';
import {RESULT_SCREEN} from 'navigation/ScreenNames';
import {useImage} from 'store/useImage';

const {width} = Dimensions.get('screen');

type Props = NativeStackScreenProps<RootStackParamList, 'CameraScreen'>;

const CameraScreen = ({navigation}: Props) => {
  const {setImage} = useImage();

  const onCapture = (url: string) => {
    setImage(url);
    navigation.navigate(RESULT_SCREEN);
  };

  return (
    <ScreenContainer>
      <LooksCamera
        cameraViewStyle={styles.cameraViewStyle}
        containerStyle={styles.cameraContainer}
        onCapture={onCapture}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  },
  cameraViewStyle: {
    width,
    height: width * (4 / 3),
    borderRadius: 20,
  },
});
export default CameraScreen;
