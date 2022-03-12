import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {HomeScreen} from '../screens';

import {DarkApplicationTheme} from '../theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthenticationNavigator} from './AuthenticationNavigator/Authentication.navigator';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const isLogged = false;
  return (
    <NavigationContainer theme={DarkApplicationTheme}>
      {isLogged ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      ) : (
        <AuthenticationNavigator />
      )}
    </NavigationContainer>
  );
}
