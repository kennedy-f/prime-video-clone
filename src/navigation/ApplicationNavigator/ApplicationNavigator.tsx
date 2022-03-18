import React from 'react';
import {Text, View} from 'react-native';
import {CatalogScreen} from '../../screens/catalog';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen} from '../../screens/search/search.screen';
import {SettingsScreen} from '../../screens/settings/settings.screen';

const Tab = createBottomTabNavigator();

export function ApplicationNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: '#173242',
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name="Home" component={CatalogScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Downloads" component={View} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
