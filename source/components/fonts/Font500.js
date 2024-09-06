import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';

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
    color: colors.black,
    includeFontPadding: false,
    fontFamily: fontFamily.Font500,
  },
});
