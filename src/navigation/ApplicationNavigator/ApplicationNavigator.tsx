import React from 'react';
import {Text, View} from 'react-native';
import {CatalogScreen} from '../../screens/catalog';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen} from '../../screens/search/search.screen';
import {SettingsScreen} from '../../screens/settings/settings.screen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export function ApplicationNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: '#1e1f28',
        tabBarActiveBackgroundColor: '#234a67',
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={CatalogScreen}
        options={{
          tabBarIcon: () => (
            <Icon name={'home-outline'} color={'#fff'} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <Icon name={'search-outline'} color={'#fff'} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={View}
        options={{
          tabBarIcon: () => (
            <Icon name={'cloud-download-outline'} color={'#fff'} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <Icon name={'settings-outline'} color={'#fff'} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
