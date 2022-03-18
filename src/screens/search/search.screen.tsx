import React from 'react';
import {View} from 'react-native';
import {TextField} from '../../shared/components/TextField';

export function SearchScreen() {
  return (
    <View>
      <TextField
        label={'Search'}
        noLabel
        placeholder="Search"
        placeholderTextColor={'#fff'}
      />
    </View>
  );
}
