import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import APP_COLORS from '../../common/colors';
import ProductScreen from '../../screens/Main/ProductScreen';
import {RootStackNavigationProps, StackParamList} from '../../interfaces';

const Stack = createStackNavigator<StackParamList>();

const NavigatorProduct = (
  props: RootStackNavigationProps<'ProductNav'>,
): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Product"
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
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        initialParams={{...props.route.params}}
      />
    </Stack.Navigator>
  );
};

export default NavigatorProduct;
