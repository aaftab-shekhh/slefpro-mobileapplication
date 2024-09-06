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

const {title, subTitle, continueButton} = screensContent.Forgot;
const {your_work_email} = label;

const Forgot = () => {
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
        ref={emailRef}
        config={{placeholder: your_work_email}}
        style={styles.input}
      />
      <Button onPress={onNavigateOtpVerification}>{continueButton}</Button>
    </View>
  );
};

export default memo(Forgot);

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
});
