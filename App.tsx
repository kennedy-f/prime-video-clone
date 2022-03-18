import React from 'react';
import Navigation from './src/navigation/navigator';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Host} from 'react-native-portalize';

export function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <Host>
          <Navigation />
        </Host>
      </Provider>
    </GestureHandlerRootView>
  );
}
