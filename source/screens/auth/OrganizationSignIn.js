import React, {memo, useCallback, useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
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

const {title, subTitle, continueButton} = screensContent.OrganizationSignIn;
const {organization} = label;

const OrganizationSignIn = () => {
  const {top} = useSafeAreaInsets();

  const organizationRef = useRef();

  useEffect(() => {
    organizationRef?.current?.set('finscanner');
  }, []);

  const {navigate} = useNavigation();

  const onNavigateUserSignIn = useCallback(() => {
    const organization = organizationRef?.current?.get();

    navigate(screens.UserSignIn, {organization: organization});
  }, []);

  return (
    <View style={[styles.root, {paddingTop: top}]}>
      <FastImage
        source={images.logo}
        resizeMode="contain"
        style={styles.logo}
      />
      <Font400 style={styles.title}>{title}</Font400>
      <Font400 style={styles.subTitle}>{subTitle}</Font400>
      <Input
        ref={organizationRef}
        config={{placeholder: organization}}
        style={styles.input}
      />
      <Button onPress={onNavigateUserSignIn}> {continueButton}</Button>
    </View>
  );
};

export default memo(OrganizationSignIn);

const styles = StyleSheet.create({
  logo: {
    width: 69,
    height: 74,
    marginTop: 120,
    marginBottom: 16,
    alignSelf: 'center',
  },
  title: {
    marginBottom: 13,
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
      marginBottom: 39,
      marginHorizontal: 22,
    },
  },
});
