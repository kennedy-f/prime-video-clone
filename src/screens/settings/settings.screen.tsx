import React from 'react';
import {View} from 'react-native';
import {UIButton} from '../../shared';
import {useDispatch} from 'react-redux';
import {makeLogout} from '../../store/modules/auth';
import {useNavigation} from '@react-navigation/native';

export function SettingsScreen() {
  const dispatch = useDispatch();
  const {} = useNavigation();

  const handleLogout = () => {
    dispatch(makeLogout());
  };

  return (
    <View>
      <UIButton onPress={handleLogout}>Logout</UIButton>
    </View>
  );
}
