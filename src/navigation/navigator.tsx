import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '../screens/home';
import {LoginScreen} from '../screens/login';
import {DarkApplicationTheme} from '../theme';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer theme={DarkApplicationTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
