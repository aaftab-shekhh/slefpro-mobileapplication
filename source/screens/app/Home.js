import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/styles/Header';

const Home = () => {
  return (
    <View>
      <Header />
    </View>
  );
};

export default memo(Home);

const styles = StyleSheet.create({});
