import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Ubuntu({
  title,
  color = 'black',
  size,
  type = 'Regular',
  space = 1,
}) {
  return (
    <Text
      style={{
        color: color,
        fontSize: size,
        fontFamily: `Ubuntu-${type}`,
        letterSpacing: space,
      }}>
      {title}
    </Text>
  );
}
