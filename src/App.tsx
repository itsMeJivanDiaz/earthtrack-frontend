import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from './redux/store';
import RootStackNavigation from './navigations/RootStackNavigation';
import {enableScreens} from 'react-native-screens';
import {StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';

enableScreens();

const App = (): JSX.Element => {
  const {store, persistor} = reduxStore();

  const styles = StyleSheet.create({
    safeviewArea: {
      flex: 1,
    },
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView
            edges={['bottom', 'left', 'right']}
            style={styles.safeviewArea}>
            <RootStackNavigation />
            <Toast />
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
