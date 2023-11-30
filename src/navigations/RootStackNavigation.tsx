import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigation from './MainStackNavigation';
import {useSelector} from 'react-redux';
import {RootLanguageStateModel, RootUserStateModel} from '../interfaces';
import LandingStackNavigation from './LandingStackNavigation';
import {changeLanguage} from '../localization';

const RootStackNavigation = (): JSX.Element => {
  const userData = useSelector(
    (state: RootUserStateModel) => state.user.userData,
  );

  const settings = useSelector(
    (state: RootLanguageStateModel) => state.settings.languageData,
  );

  changeLanguage(settings?.language || 'en');

  const getStack = () => {
    if (!userData.id) {
      return <LandingStackNavigation />;
    }
    return <MainStackNavigation />;
  };

  return <NavigationContainer>{getStack()}</NavigationContainer>;
};

export default RootStackNavigation;
