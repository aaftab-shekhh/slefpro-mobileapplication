import React, {memo, useCallback, useEffect, useRef} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../../assets/images';
import Font400 from '../../components/fonts/Font400';
import Button from '../../components/styles/Button';
import {
  colors,
  label,
  screens,
  screensContent,
} from '../../constants/constants';
import Input from '../../components/styles/Input';
import {useNavigation} from '@react-navigation/native';
import OtpInput from '../../components/styles/OtpInput';

const {title, subTitle, verifyButton} = screensContent.OtpVerification;
const {your_work_email, resend_code} = label;

const OtpVerification = () => {
  const {top} = useSafeAreaInsets();

  const emailRef = useRef();

  const {navigate, goBack} = useNavigation();

  const onNavigateUpdatePassword = useCallback(() => {
    navigate(screens.UpdatePassword);
  }, []);

  return (
    <View style={[styles.root, {paddingTop: top}]}>
      <Pressable onPress={goBack}>
        <FastImage
          source={images.arrow_left}
          resizeMode="contain"
          style={styles.backIcon}
        />
      </Pressable>
      <Font400 style={styles.title}>{title}</Font400>
      <Font400 style={styles.subTitle}>{subTitle}</Font400>
      <Input
        ref={emailRef}
        config={{placeholder: your_work_email}}
        style={styles.input}
      />
      <OtpInput />
      <Pressable>
        <Font400 style={styles.resendCode}>{resend_code}</Font400>
      </Pressable>
      <Button onPress={onNavigateUpdatePassword}>{verifyButton}</Button>
    </View>
  );
};

export default memo(OtpVerification);

const styles = StyleSheet.create({
  backIcon: {
    width: 22,
    height: 22,
    marginBottom: 16,
    marginHorizontal: 22,
  },
  title: {
    marginBottom: 13,
    marginHorizontal: 22,
  },
  subTitle: {
    marginBottom: 16,
    paddingHorizontal: 22,
    color: colors.darkLightGray,
  },
  input: {
    inputContainer: {
      marginBottom: 39,
      marginHorizontal: 22,
    },
  },
  resendCode: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 81,
    textAlign: 'right',
    paddingHorizontal: 22,
    color: colors.darkLightGray,
  },
});
