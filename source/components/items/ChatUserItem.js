import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import FastImage from 'react-native-fast-image';
import {images} from '../../assets/images';
import Font500 from '../fonts/Font500';
import Font400 from '../fonts/Font400';
import moment from 'moment';
import Font700 from '../fonts/Font700';
import {colors} from '../../constants/constants';

const ChatUserItem = () => {
  return (
    <Pressable style={styles.itemContainer}>
      <FastImage
        style={styles.userImage}
        resizeMode="contain"
        source={images.user_image}
      />
      <View style={styles.detail}>
        <Font500 style={styles.userName}>{'User Name'}</Font500>
        <Font400 style={styles.userMessage}>{'User Message'}</Font400>
      </View>
      <View style={styles.container}>
        <Font400 style={styles.time}>{moment().format(' hh:mm a')}</Font400>
        <View style={styles.messageCountContainer}>
          <Font700 style={styles.messageCount}>{1}</Font700>
        </View>
      </View>
    </Pressable>
  );
};

export default memo(ChatUserItem);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  detail: {
    flex: 1,
    paddingHorizontal: 10,
  },
  userName: {
    fontSize: 17,
  },
  userMessage: {
    fontSize: 12,
    color: colors.color8A8F9B,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 11,
    color: colors.color8A8F9B,
  },
  messageCountContainer: {
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: colors.colorE43958,
  },
  messageCount: {
    fontSize: 12,
    color: colors.white,
  },
});
