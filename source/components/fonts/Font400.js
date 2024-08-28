import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../constants/constants';

const Font400 = ({children, style, config}) => {
  return (
    <Text {...config} style={[styles.font, style]}>
      {children}
    </Text>
  );
};

export default memo(Font400);

const styles = StyleSheet.create({
  font: {
    fontSize: 16,
    fontWeight: 400,
    color: colors.black,
    includeFontPadding: false,
  },
});
