import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { images } from '../../assets/images';
import { colors } from '../../constants/constants';

const CoWorkerItem = () => {
  return (
    <Pressable>
      <Image
        style={styles.userImage}
        resizeMode="contain"
        source={images.user_image}>
        <View style={styles.status} />
      </Image>
    </Pressable>
  );
};

export default CoWorkerItem;

const styles = StyleSheet.create({
  userImage: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 30,
    overflow: 'visible',
  },
  status: {
    height: 12,
    width: 12,
    borderRadius: 12,
    backgroundColor: colors.green,
    position: 'absolute',
    bottom: 3,
    right: 3,
    zIndex: 1,
  },
});
