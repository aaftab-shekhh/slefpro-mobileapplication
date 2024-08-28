import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../assets/images';
import {colors, screens} from '../constants/constants';
import HRM from '../screens/app/HRM';
import Home from '../screens/app/Home';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: 500,
        },
        tabBarStyle: {
          backgroundColor: colors.colorECF0F7,
        },
        tabBarActiveTintColor: colors.colorE43958,
        tabBarInactiveTintColor: colors.colorCAC4D0,
        headerShown: false,
      }}>
      <Tab.Screen
        component={Home}
        name={screens.Home}
        options={{
          tabBarIcon: ({focused}) => (
            <FastImage
              source={images[focused ? 'active_home' : 'home']}
              resizeMode="contain"
              style={styles[focused ? 'activeIcon' : 'icon']}
            />
          ),
        }}
      />
      <Tab.Screen
        component={HRM}
        name={screens.HRM}
        options={{
          tabBarIcon: ({focused}) => (
            <FastImage
              source={images[focused ? 'active_hrm' : 'hrm']}
              resizeMode="contain"
              style={styles[focused ? 'activeIcon' : 'icon']}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default memo(BottomStack);

const styles = StyleSheet.create({
  activeIcon: {
    height: 32,
    width: 32,
  },
  icon: {
    height: 24,
    width: 24,
  },
});
