import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomStack from './BottomStack';
import {screens} from '../constants/constants';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={BottomStack} name={screens.BottomStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(AppStack);

const styles = StyleSheet.create({});
