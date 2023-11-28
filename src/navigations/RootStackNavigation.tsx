import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigation from './MainStackNavigation';
import {useSelector} from 'react-redux';
import {RootUserStateModel} from '../interfaces';
import LandingStackNavigation from './LandingStackNavigation';

const RootStackNavigation = (): JSX.Element => {
  const userData = useSelector(
    (state: RootUserStateModel) => state.user.userData,
  );

  const getStack = () => {
    if (!userData.id) {
      return <LandingStackNavigation />;
    }
    return <MainStackNavigation />;
  };

  return <NavigationContainer>{getStack()}</NavigationContainer>;
};

export default RootStackNavigation;
