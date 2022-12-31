import React from 'react';
import {
  requireNativeComponent,
  Button,
  StyleSheet,
  NativeModules,
  Image,
} from 'react-native';

const LooksCamera = requireNativeComponent('LooksCamera');
const {LooksCameraManager} = NativeModules;

console.log(LooksCameraManager);

class MyNativeView extends React.Component {
  onTake = e => {
    this.setState({image: e.nativeEvent.resultUrl});
  };

  captureImage = () => {
    this.setState({image: null});
    LooksCameraManager.takePhoto();
  };

  render() {
    return (
      <>
        <LooksCamera
          style={styles.cameraView}
          onResultImageExported={this.onTake}
          count={20}
        />
        <Image style={styles.logo} source={{uri: this.state?.image}} />
        <Button title="PHOTO" onPress={this.captureImage} />
      </>
    );
  }
}

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
