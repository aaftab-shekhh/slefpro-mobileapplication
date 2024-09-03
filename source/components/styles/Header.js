import React, {memo} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../../assets/images';
import {colors} from '../../constants/constants';
import Font400 from '../fonts/Font400';

const Header = ({onSearch, title, subTitle}) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.root, {marginTop: top + 10}]}>
      <Pressable>
        <Image
          style={styles.userImage}
          resizeMode="contain"
          source={images.user_image}
        />
      </Pressable>

      <View style={styles.detailContainer}>
        <Font400 style={styles.title}>{'Aaftab shekh'}</Font400>
        <Font400 style={styles.subTitle}>{'Welcome back '}</Font400>
      </View>

      <Pressable onPress={onSearch} style={styles.searchContainer}>
        <FastImage
          style={styles.searchIcon}
          resizeMode="contain"
          source={images.search}
        />
      </Pressable>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    justifyContent: 'space-between',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  title: {
    fontSize: 22,
  },
  subTitle: {
    fontSize: 18,
    color: colors.darkLightGray,
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  searchContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
});
