import React from 'react';
import {
  requireNativeComponent,
  StyleSheet,
  NativeModules,
  View,
  ViewStyle,
} from 'react-native';

import ShutterButton from './components/ShutterButton';

const LooksCameraNativeComponent = requireNativeComponent('LooksCamera');
const {LooksCameraManager} = NativeModules;

export type LooksCameraProps = {
  /**
   * Callback that is called when the user capture a image.
   */
  onCapture: (url: string) => void;
  /**
   * Outer container styles
   */
  containerStyle: ViewStyle;
  /**
   * Camera view styles
   */
  cameraViewStyle: ViewStyle;
};

const LooksCamera = ({
  onCapture,
  containerStyle,
  cameraViewStyle,
}: LooksCameraProps) => {
  const onTake = (e: any) => {
    onCapture(e.nativeEvent.resultUrl);
  };

  const captureImage = () => {
    LooksCameraManager.takePhoto();
  };

  return (
    <View style={containerStyle}>
      <LooksCameraNativeComponent
        style={cameraViewStyle}
        onResultImageExported={onTake}
      />
      <View style={styles.buttonContainer}>
        <ShutterButton onPress={captureImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default LooksCamera;
