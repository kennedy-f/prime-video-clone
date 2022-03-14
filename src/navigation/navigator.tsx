import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {DarkApplicationTheme} from '../theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthenticationNavigator} from './AuthenticationNavigator/Authentication.navigator';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {initializeAuth, selectHasToken} from '../store/modules/auth';
import {useAppSelector} from '../store/hook';
import {CatalogScreen} from '../screens/catalog';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuth());
  });

  const isLogged = useAppSelector(selectHasToken);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer theme={DarkApplicationTheme}>
        {isLogged ? (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={CatalogScreen} />
          </Tab.Navigator>
        ) : (
          <AuthenticationNavigator />
        )}
      </NavigationContainer>
    </>
  );
}
