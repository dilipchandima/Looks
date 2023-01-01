import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native';

import {Colors} from 'res/Colors';

const ScreenContainer = ({children}) => {
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.contentContainer}>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: 100,
  },
  contentContainer: {
    flex: 1,
  },
});

export default ScreenContainer;
