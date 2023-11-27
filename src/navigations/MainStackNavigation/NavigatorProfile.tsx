import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../../screens/Main/ProfileScreen';
import APP_COLORS from '../../common/colors';

const Stack = createStackNavigator();

const NavigatorProfile = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: true,
        gestureEnabled: false,
        headerStyle: {
          backgroundColor: APP_COLORS.secondary,
        },
        headerTitleStyle: {
          fontFamily: 'Urbanist-Bold',
          color: APP_COLORS.dark,
        },
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default NavigatorProfile;
