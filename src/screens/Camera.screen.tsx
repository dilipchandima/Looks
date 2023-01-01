import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyNativeView from '../components/LooksCamera/LooksCamera.component';
import {useImage} from '../store/useImage';

const CameraScreen = () => {
  const {setImage} = useImage();
  return (
    <View style={styles.root}>
      <MyNativeView setImage={setImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default CameraScreen;
