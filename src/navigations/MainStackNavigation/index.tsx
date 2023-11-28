import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import APP_COLORS from '../../common/colors';

import NavigatorHome from './NavigatorHome';
import NavigatorProfile from './NavigatorProfile';
import NavigatorSettings from './NavigatorSettings';
import AppSearchBar from '../../components/AppSearchBar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeIcon = (color: string): JSX.Element => (
  <Icon name="home" size={22} color={color} />
);

const ProfileIcon = (color: string): JSX.Element => (
  <Icon name="person" size={22} color={color} />
);

const SettingsIcon = (color: string): JSX.Element => (
  <Icon name="settings" size={22} color={color} />
);

const BottomNav = (): JSX.Element => {
  const tabBarStyle = {
    backgroundColor: APP_COLORS.dark,
    height: 65,
    gap: 5,
    columnGap: 10,
    paddingTop: 10,
  };

  const tabBarLabelStyle = {
    fontSize: 14,
    fontFamily: 'Urbanist-Regular',
  };

  return (
    <>
      <Tab.Navigator
        backBehavior="history"
        screenOptions={() => {
          return {
            tabBarActiveTintColor: APP_COLORS.primary,
            tabBarInactiveTintColor: APP_COLORS.light,
            tabBarStyle: tabBarStyle,
            tabBarLabelStyle: tabBarLabelStyle,
            headerShown: false,
            tabBarHideOnKeyboard: true,
          };
        }}>
        <Tab.Screen
          name="HomeTab"
          component={NavigatorHome}
          options={() => {
            return {
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) => {
                let color = APP_COLORS.light;
                if (focused) {
                  color = APP_COLORS.primary;
                }
                return HomeIcon(color);
              },
            };
          }}
        />
        <Tab.Screen
          name="SettingsTab"
          component={NavigatorSettings}
          options={() => {
            return {
              tabBarLabel: 'Settings',
              tabBarIcon: ({focused}) => {
                let color = APP_COLORS.light;
                if (focused) {
                  color = APP_COLORS.primary;
                }
                return SettingsIcon(color);
              },
            };
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={NavigatorProfile}
          options={() => {
            return {
              tabBarLabel: 'Profile',
              tabBarIcon: ({focused}) => {
                let color = APP_COLORS.light;
                if (focused) {
                  color = APP_COLORS.primary;
                }
                return ProfileIcon(color);
              },
            };
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const CustomHeader = (): JSX.Element => {
  return (
    <AppSearchBar
      placeholder="search product..."
      onSearchPress={value => console.log(value)}
    />
  );
};

const MainStackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: 'black'},
        headerShown: true,
        header: () => CustomHeader(),
        gestureEnabled: true,
      }}>
      <Stack.Group
        screenOptions={{
          ...TransitionPresets.ModalFadeTransition,
        }}>
        <Stack.Screen name="main" component={BottomNav} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
