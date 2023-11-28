import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AppButton from '../../../components/AppButton';
import APP_COLORS from '../../../common/colors';
import {AuthModel, UserModel} from '../../../interfaces';
import {jwtDecode} from 'jwt-decode';
import {
  ApiCall,
  ApiEndpoints,
  ApiMethod,
} from '../../../services/AxiosInstance';
import {decode} from 'base-64';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../../redux/reducer/User';

global.atob = decode;

const LoginScreen = (): JSX.Element => {
  const users = [
    {
      username: 'admin',
      userpassword: 'admin',
      role: 'Admin',
      name: 'John Doe',
    },
    {
      username: 'auditor',
      userpassword: 'auditor',
      role: 'Auditor',
      name: 'Erick Krueger',
    },
    {
      username: 'guest',
      userpassword: 'guest',
      role: 'Guest',
      name: 'Jivan Diaz',
    },
  ];

  const dispatch = useDispatch();

  const login = async (data: AuthModel) => {
    try {
      const response = await ApiCall({
        apiEndpoint: ApiEndpoints().AUTH,
        apiData: data,
        method: ApiMethod.POST,
      });
      const access_token: string = response.data.access_token;
      const decoded: UserModel = jwtDecode(access_token);
      dispatch(
        setUserData({
          ...decoded,
          access_token: access_token,
        }),
      );
    } catch (e) {
      console.error(`login error: ${e}`);
    }
  };

  const renderUsers = (): JSX.Element[] => {
    if (users.length > 0) {
      return users.map((user, index) => {
        const auth = {
          username: user.username,
          userpassword: user.userpassword,
        };
        return (
          <AppButton
            onPress={() => login(auth)}
            key={index}
            title={`${user.role} as ${user.name}`}
            backgroundColor={APP_COLORS.dark}
            height={50}
            width={'100%'}
          />
        );
      });
    }
    return [<></>];
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>EarthTrack</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.loginText}>Login with</Text>
        <View style={styles.buttonContainer}>{renderUsers()}</View>
      </View>
    </View>
  );
};

export default LoginScreen;
