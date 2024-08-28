import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from '../../constants/constants';
import Font400 from '../fonts/Font400';

const Button = ({loader, onPress, style, children, icon, iconStyle}) => {
  return (
    <Pressable
      disabled={loader}
      onPress={onPress}
      style={({pressed}) => [
        styles.buttonContainer,
        style?.buttonContainer,
        {opacity: pressed || loader ? 0.8 : 1},
      ]}>
      <Font400 style={[styles.buttonText, style?.buttonText]}>
        {loader ? 'Processing...' : children}
      </Font400>
      {icon ? (
        <FastImage style={iconStyle} resizeMode="contain" source={icon} />
      ) : null}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 47,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorE43958,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: colors.white,
  },
});
