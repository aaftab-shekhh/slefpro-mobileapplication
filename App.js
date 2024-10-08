import React, {memo} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import AppRoot from './AppRoot';
import store, {persistor} from './source/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {PortalProvider} from '@gorhom/portal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import colors from './source/constants/colors';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <PortalProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StatusBar
              translucent={true}
              barStyle={'dark-content'}
              backgroundColor={colors.transparent}
            />
            <AppRoot />
          </PersistGate>
        </Provider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
};

export default memo(App);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
