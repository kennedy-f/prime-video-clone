import React from 'react';
import {SafeAreaView} from 'react-native';
import {UIButton} from './src/shared/components';

export function App() {
  return (
    <SafeAreaView>
      <UIButton title={' teste'} onPress={() => console.log(' click me ')} />
    </SafeAreaView>
  );
}
