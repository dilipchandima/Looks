import React from 'react';
import type {ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Colors} from 'res/Colors';

type Props = {
  onPress(): void;
  title: string;
  icon?: ReactElement;
};

const Button = ({onPress, title, icon}: Props) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Button;
