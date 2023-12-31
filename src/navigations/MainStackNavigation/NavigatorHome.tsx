import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/Main/HomeScreen';
import APP_COLORS from '../../common/colors';
import {StackParamList} from '../../interfaces';

const Stack = createStackNavigator<StackParamList>();

const NavigatorHome = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default NavigatorHome;
