import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../constants/constants';

const Font800 = ({children, style, config}) => {
  return (
    <Text {...config} style={[styles.font, style]}>
      {children}
    </Text>
  );
};

export default memo(Font800);

const styles = StyleSheet.create({
  font: {
    fontSize: 16,
    fontWeight: 800,
    color: colors.black,
    includeFontPadding: false,
  },
});
