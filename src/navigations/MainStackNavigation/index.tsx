import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {RootLanguageStateModel, StackParamList} from '../../interfaces';

import NavigatorBottom from './NavigatorBottom';
import NavigatorProduct from './NavigatorProduct';
import {useSelector} from 'react-redux';
import {changeLanguage, t} from '../../localization';
import AppSearchBar from '../../components/AppSearchBar';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator<StackParamList>();

const CustomHeader = (): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  return (
    <AppSearchBar
      placeholder={t.search_product}
      onSearchPress={(text: string) => {
        if (!text) {
          Toast.show({
            type: 'error',
            text1: t.empty_search,
            text2: t.enter_product,
          });
          return;
        }
        navigation.navigate('ProductNav', {isSearch: true, query: text});
      }}
    />
  );
};

const MainStackNavigation = (): JSX.Element => {
  const settings = useSelector(
    (state: RootLanguageStateModel) => state.settings.languageData,
  );
  changeLanguage(settings?.language || 'en');
  return (
    <Stack.Navigator
      initialRouteName="BottomNav"
      screenOptions={{
        cardStyle: {backgroundColor: 'black'},
        headerShown: true,
        gestureEnabled: true,
        header: () => CustomHeader(),
      }}>
      <Stack.Group>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ProductNav"
          component={NavigatorProduct}
        />
        <Stack.Screen name="BottomNav" component={NavigatorBottom} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
