import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../constants/constants';

const Font500 = ({children, style, config}) => {
  return (
    <Text {...config} style={[styles.font, style]}>
      {children}
    </Text>
  );
};

export default memo(Font500);

const styles = StyleSheet.create({
  font: {
    fontSize: 16,
    fontWeight: 500,
    color: colors.black,
    includeFontPadding: false,
  },
});
