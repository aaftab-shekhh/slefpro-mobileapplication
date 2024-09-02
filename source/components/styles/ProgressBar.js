import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

const ProgressBar = ({progress, height, backgroundColor, barColor}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const widthInterpolation = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={[styles.container, {height, backgroundColor}]}>
      <Animated.View
        style={[
          styles.bar,
          {width: widthInterpolation, backgroundColor: barColor},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  bar: {
    height: '100%',
    borderRadius: 5,
  },
  title: {
    position: 'absolute',
    left: 20,
  },
});

export default ProgressBar;
