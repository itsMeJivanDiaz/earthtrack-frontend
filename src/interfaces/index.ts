import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// INTERFACES

export interface AuthModel {
  username: string;
  userpassword: string;
}

export interface UserModel {
  id: string;
  firstname: string;
  lastname: string;
  role: string;
  username: string;
  access_token?: string;
}

export interface ApiCallModel {
  apiEndpoint: string;
  apiData?: any;
  apiToken?: string;
  method: string;
  apiPointTo?: string;
  timeout?: number;
}

export interface ProductModel {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
}

export interface LanguageModel {
  language: string;
}

export interface SettingsModel {
  limit: number;
}

export interface RootSettingsStateModel {
  settings: {
    settingsData: SettingsModel;
  };
}

export interface RootLanguageStateModel {
  settings: {
    languageData: LanguageModel;
  };
}

export interface RootUserStateModel {
  user: {
    userData: UserModel;
  };
}

export interface ProductSearchModel {
  isSearch: boolean;
  query: string;
}

// TYPES

export type StackParamList = {
  Home: undefined | {};
  Profile: undefined | {};
  Product: ProductSearchModel;
  Settings: undefined | {};
  BottomNav: undefined | {};
  HomeNav: undefined | {};
  ProductNav: ProductSearchModel;
  SettingsNav: undefined | {};
  ProfileNav: undefined | {};
};

export type RootStackNavigationProps<RouteName extends keyof StackParamList> = {
  navigation: StackNavigationProp<StackParamList, RouteName>;
  route: RouteProp<StackParamList, RouteName>;
};
