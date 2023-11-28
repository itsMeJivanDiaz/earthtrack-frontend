import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from '../../screens/Main/SettingsScreen';
import APP_COLORS from '../../common/colors';

const Stack = createStackNavigator();

const NavigatorSettingsScreen = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        headerStyle: {
          backgroundColor: APP_COLORS.secondary,
        },
        headerTitleStyle: {
          fontFamily: 'Urbanist-Bold',
          color: APP_COLORS.dark,
        },
      }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default NavigatorSettingsScreen;
