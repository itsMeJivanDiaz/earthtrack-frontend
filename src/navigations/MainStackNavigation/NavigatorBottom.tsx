import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import APP_COLORS from '../../common/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {t} from '../../localization';

import NavigatorHome from './NavigatorHome';
import NavigatorSettings from './NavigatorSettings';
import NavigatorProfile from './NavigatorProfile';

const Tab = createBottomTabNavigator();

const HomeIcon = (color: string): JSX.Element => (
  <Icon name="home" size={22} color={color} />
);

const ProfileIcon = (color: string): JSX.Element => (
  <Icon name="person" size={22} color={color} />
);

const SettingsIcon = (color: string): JSX.Element => (
  <Icon name="settings" size={22} color={color} />
);

const NavigatorBottom = (): JSX.Element => {
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
              tabBarLabel: t.home,
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
              tabBarLabel: t.settings,
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
              tabBarLabel: t.profile,
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

export default NavigatorBottom;
