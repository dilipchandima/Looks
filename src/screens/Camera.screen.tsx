import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import LooksCamera from 'components/LooksCamera/LooksCamera.component';
import ScreenContainer from 'components/ScreenContainer';
import {RESULT_SCREEN} from 'navigation/ScreenNames';
import {useImage} from 'store/useImage';

const {width} = Dimensions.get('screen');

const CameraScreen = ({navigation}) => {
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
