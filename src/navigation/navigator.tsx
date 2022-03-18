import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {DarkApplicationTheme} from '../theme';
import {AuthenticationNavigator} from './AuthenticationNavigator/Authentication.navigator';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {initializeAuth, selectHasToken} from '../store/modules/auth';
import {useAppSelector} from '../store/hook';
import {ApplicationNavigator} from './ApplicationNavigator/ApplicationNavigator';

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
        {isLogged ? <ApplicationNavigator /> : <AuthenticationNavigator />}
      </NavigationContainer>
    </>
  );
}
