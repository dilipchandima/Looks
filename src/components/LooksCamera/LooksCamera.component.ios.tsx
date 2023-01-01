import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  requireNativeComponent,
  Button,
  StyleSheet,
  NativeModules,
} from 'react-native';
import {RESULT_SCREEN} from '../../navigation/ScreenNames';

const LooksCamera = requireNativeComponent('LooksCamera');
const {LooksCameraManager} = NativeModules;

console.log(LooksCameraManager);

const MyNativeView = ({setImage}) => {
  const navigation = useNavigation();

  const onTake = e => {
    setImage(e.nativeEvent.resultUrl);
  };

  const captureImage = () => {
    navigation.navigate(RESULT_SCREEN);
    LooksCameraManager.takePhoto();
  };

  return (
    <>
      <LooksCamera style={styles.cameraView} onResultImageExported={onTake} />
      <Button title="PHOTO" onPress={captureImage} />
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  cameraView: {
    flex: 1,
  },
  logo: {
    flex: 1,
  },
});

export default MyNativeView;
