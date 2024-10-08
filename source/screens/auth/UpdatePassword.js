import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useRef} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../../assets/images';
import Font400 from '../../components/fonts/Font400';
import Button from '../../components/styles/Button';
import Input from '../../components/styles/Input';
import colors from '../../constants/colors';
import label from '../../constants/label';
import screens from '../../constants/screens';
import screensContent from '../../constants/screensContent';

const {title, subTitle, updateButton} = screensContent.UpdatePassword;
const {new_password, confirm_password} = label;

const UpdatePassword = () => {
  const {top} = useSafeAreaInsets();

  const emailRef = useRef();

  const {navigate, goBack} = useNavigation();

  const onNavigateOtpVerification = useCallback(() => {
    navigate(screens.OtpVerification);
  }, []);

  return (
    <View style={[styles.root, {paddingTop: top}]}>
      <Pressable onPress={goBack}>
        <Image
          source={images.arrow_left}
          resizeMode="contain"
          style={styles.backIcon}
        />
      </Pressable>
      <Font400 style={styles.title}>{title}</Font400>
      <Font400 style={styles.subTitle}>{subTitle}</Font400>
      <Input
        secureTextEntry
        ref={emailRef}
        config={{placeholder: new_password}}
        style={styles.input}
      />
      <Input
        secureTextEntry
        ref={emailRef}
        config={{placeholder: confirm_password}}
        style={styles.input}
      />
      <Button onPress={onNavigateOtpVerification}>{updateButton}</Button>
    </View>
  );
};

export default memo(UpdatePassword);

const styles = StyleSheet.create({
  backIcon: {
    width: 22,
    height: 22,
    marginBottom: 16,
    marginHorizontal: 22,
  },
  title: {
    marginBottom: 25,
    marginHorizontal: 22,
  },
  subTitle: {
    marginBottom: 32,
    paddingHorizontal: 22,
    color: colors.darkLightGray,
  },
  input: {
    inputContainer: {
      marginBottom: 25,
      marginHorizontal: 22,
    },
  },
});
