import React, {memo, useMemo} from 'react';
import {Pressable} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Backdrop = ({animatedIndex, style, onPress}) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [1, 1],
      [0.3, 0.5],
      Extrapolate.CLAMP,
  ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      containerAnimatedStyle,
      style,
      {
        backgroundColor: 'black',
      },
    ],
    [style, containerAnimatedStyle],
  );

  return (
    <Animated.View style={containerStyle}>
      <Pressable style={{flex: 1}} onPress={onPress}></Pressable>
    </Animated.View>
  );
};

export default memo(Backdrop);
