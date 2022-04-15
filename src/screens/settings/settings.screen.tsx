import React from 'react';
import {SafeAreaView, View} from 'react-native';
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
    <SafeAreaView>
      <View>
        <UIButton onPress={handleLogout}>Logout</UIButton>
      </View>
    </SafeAreaView>
  );
}
