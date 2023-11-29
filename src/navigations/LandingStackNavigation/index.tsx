import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/Landing/LoginScreen';
import {useSelector} from 'react-redux';
import {RootLanguageStateModel} from '../../interfaces';
import {changeLanguage} from '../../localization';

const Stack = createStackNavigator();

const LandingStackNavigation = () => {
  const settings = useSelector(
    (state: RootLanguageStateModel) => state.settings.languageData,
  );
  changeLanguage(settings?.language || 'en');
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default LandingStackNavigation;
