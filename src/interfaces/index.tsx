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

export interface SettingsModel {
  limit: number;
}

export interface RootSettingsStateModel {
  settings: {
    settingsData: SettingsModel;
  };
}

export interface RootUserStateModel {
  user: {
    userData: UserModel;
  };
}
