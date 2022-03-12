import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../../screens';

const AuthStack = createNativeStackNavigator();

export function AuthenticationNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      defaultScreenOptions={{
        contentStyle: {
          flex: 1,
        },
      }}>
      <AuthStack.Screen name="Authentication" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}
