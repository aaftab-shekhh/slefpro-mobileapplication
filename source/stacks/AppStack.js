import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import screens from '../constants/screens';
import TaskDetail from '../screens/app/TaskDetail';
import BottomStack from './BottomStack';
import colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: colors.colorECF0F7},
        }}>
        <Stack.Screen component={BottomStack} name={screens.BottomStack} />
        <Stack.Screen
          component={TaskDetail}
          name={screens.TaskDetail}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(AppStack);

const styles = StyleSheet.create({});
