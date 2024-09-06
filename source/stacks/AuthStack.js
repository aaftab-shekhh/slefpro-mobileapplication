import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import screens from '../constants/screens';
import colors from '../constants/colors';
import Forgot from '../screens/auth/Forgot';
import OrganizationSignIn from '../screens/auth/OrganizationSignIn';
import OtpVerification from '../screens/auth/OtpVerification';
import UserSignIn from '../screens/auth/UserSignIn';
import WellCome from '../screens/auth/WellCome';
import UpdatePassword from '../screens/auth/UpdatePassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: colors.colorECF0F7},
        }}>
        <Stack.Screen component={WellCome} name={screens.WellCome} />
        <Stack.Screen
          component={OrganizationSignIn}
          name={screens.OrganizationSignIn}
        />
        <Stack.Screen component={UserSignIn} name={screens.UserSignIn} />
        <Stack.Screen component={Forgot} name={screens.Forgot} />
        <Stack.Screen
          component={OtpVerification}
          name={screens.OtpVerification}
        />
        <Stack.Screen
          component={UpdatePassword}
          name={screens.UpdatePassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(AuthStack);

const styles = StyleSheet.create({});
