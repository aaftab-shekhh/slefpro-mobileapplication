import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../assets/images';
import {colors, screens} from '../constants/constants';
import HRM from '../screens/app/HRM';
import Home from '../screens/app/Home';
import Task from '../screens/app/Task';
import Project from '../screens/app/Project';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Message from '../screens/app/Message';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: 500,
        },
        tabBarStyle: {
          backgroundColor: colors.colorECF0F7,
          height: bottom + 55,
        },
        tabBarActiveTintColor: colors.colorE43958,
        tabBarInactiveTintColor: colors.colorCAC4D0,
        headerShown: false,
      }}
      sceneContainerStyle={{backgroundColor: colors.colorECF0F7}}>
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
        component={Task}
        name={screens.Task}
        options={{
          tabBarIcon: ({focused}) => (
            <FastImage
              source={images[focused ? 'active_task' : 'task']}
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
      <Tab.Screen
        component={Project}
        name={screens.Project}
        options={{
          tabBarIcon: ({focused}) => (
            <FastImage
              source={images[focused ? 'active_project' : 'project']}
              resizeMode="contain"
              style={styles[focused ? 'activeIcon' : 'icon']}
            />
          ),
        }}
      />
      <Tab.Screen
        component={Message}
        name={screens.Message}
        options={{
          tabBarIcon: ({focused}) => (
            <FastImage
              source={images[focused ? 'active_message' : 'message']}
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
