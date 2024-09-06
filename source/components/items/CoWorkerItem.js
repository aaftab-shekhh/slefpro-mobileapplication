import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {images} from '../../assets/images';
import colors from '../../constants/colors';

const CoWorkerItem = () => {
  return (
    <Pressable style={styles.itemContainer}>
      <Image
        style={styles.userImage}
        resizeMode="contain"
        source={images.user_image}
      />
      <View style={styles.status} />
    </Pressable>
  );
};

export default CoWorkerItem;

const styles = StyleSheet.create({
  itemContainer: {marginRight: 20},
  userImage: {
    width: 60,
    height: 60,
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
