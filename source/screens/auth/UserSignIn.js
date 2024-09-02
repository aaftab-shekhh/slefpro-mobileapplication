import {useNavigation} from '@react-navigation/native';
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
import {useDispatch} from 'react-redux';
import {login} from '../../redux/store';

const {subTitle, loginButton} = screensContent.UserSignIn;

const {your_work_email, password, forgot_password} = label;

const UserSignIn = ({route}) => {
  const {top} = useSafeAreaInsets();

  const {organization} = route?.params;

  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const {navigate} = useNavigation();

  useEffect(() => {
    emailRef?.current?.set('aaftab.shaikh@finsanner.ai');
    passwordRef?.current?.set('aaftab@1234');
  }, []);

  const onLogin = useCallback(() => {
    const email = emailRef?.current?.get();

    dispatch(login({email: email}));
  }, []);

  const onNavigateForget = useCallback(() => {
    navigate(screens.Forgot);
  }, []);

  return (
    <View style={[styles.root, {paddingTop: top}]}>
      <View style={styles.titleContainer}>
        <FastImage
          source={images.logo}
          resizeMode="contain"
          style={styles.logo}
        />
        <Font400 style={styles.title}>{organization}</Font400>
      </View>
      <Font400 style={styles.subTitle}>{subTitle}</Font400>
      <Input
        ref={emailRef}
        config={{placeholder: your_work_email}}
        style={styles.input}
      />
      <Input
        secureTextEntry
        ref={passwordRef}
        config={{placeholder: password}}
        style={styles.input}
      />
      <Pressable onPress={onNavigateForget}>
        <Font400 style={styles.forgotPassword}>{forgot_password}</Font400>
      </Pressable>
      <Button onPress={onLogin}>{loginButton}</Button>
    </View>
  );
};

export default memo(UserSignIn);

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 120,
    marginBottom: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: 29,
    height: 30,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  title: {
    textAlign: 'center',
  },
  subTitle: {
    marginBottom: 24,
    textAlign: 'center',
    paddingHorizontal: 28,
    color: colors.darkLightGray,
  },
  input: {
    inputContainer: {
      marginBottom: 16,
      marginHorizontal: 22,
    },
  },
  forgotPassword: {
    color: colors.darkLightGray,
    textAlign: 'right',
    paddingHorizontal: 22,
    marginBottom: 24,
  },
});
