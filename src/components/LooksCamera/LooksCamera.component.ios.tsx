import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  requireNativeComponent,
  Button,
  StyleSheet,
  NativeModules,
  Image,
} from 'react-native';
import {RESULT_SCREEN} from '../../navigation/ScreenNames';

const LooksCamera = requireNativeComponent('LooksCamera');
const {LooksCameraManager} = NativeModules;

console.log(LooksCameraManager);

const MyNativeView = () => {
  const [capturedImage, setImage] = useState(null);
  const navigation = useNavigation();

  const onTake = e => {
    setImage(e.nativeEvent.resultUrl);
  };

  const captureImage = () => {
    setImage(null);
    navigation.navigate(RESULT_SCREEN);
    LooksCameraManager.takePhoto();
  };

  return (
    <>
      <LooksCamera
        style={styles.cameraView}
        onResultImageExported={onTake}
        count={20}
      />
      <Image style={styles.logo} source={{uri: capturedImage}} />
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
