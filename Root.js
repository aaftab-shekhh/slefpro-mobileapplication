import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import AuthStack from './source/stacks/AuthStack';
import {useSelector} from 'react-redux';
import AppStack from './source/stacks/AppStack';

const Root = () => {
  const user = useSelector(state => state?.auth?.user);

  return user ? <AppStack /> : <AuthStack />;
};

export default memo(Root);

const styles = StyleSheet.create({});
