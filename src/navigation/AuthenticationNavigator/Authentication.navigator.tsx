import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, WelcomeScreen} from '../../screens';

export type AuthenticationNavigatorParamList = {
  Welcome: undefined;
  SignIn: undefined;
};

const AuthStack =
  createNativeStackNavigator<AuthenticationNavigatorParamList>();

export function AuthenticationNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      defaultScreenOptions={{
        contentStyle: {
          flex: 1,
        },
      }}>
      <AuthStack.Screen name={'Welcome'} component={WelcomeScreen} />
      <AuthStack.Screen name="SignIn" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}
