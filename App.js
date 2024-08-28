import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import Root from './Root';
import store, {persistor} from './source/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default memo(App);

const styles = StyleSheet.create({});
