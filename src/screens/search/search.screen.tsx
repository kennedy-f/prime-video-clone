import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {TextField} from '../../shared/components/TextField';

export function SearchScreen() {
  return (
    <SafeAreaView>
      <View>
        <TextField
          label={'Search'}
          noLabel
          placeholder="Search"
          placeholderTextColor={'#fff'}
        />
      </View>
    </SafeAreaView>
  );
}
