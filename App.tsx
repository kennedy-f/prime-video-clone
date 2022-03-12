import React from 'react';
import Navigation from './src/navigation/navigator';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

export function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
