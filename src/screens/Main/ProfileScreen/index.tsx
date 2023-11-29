import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {user} from '../../../assets/images/index';
import {useSelector} from 'react-redux';
import {RootUserStateModel} from '../../../interfaces';
import {capitalize} from '../../../utilities';
import AppButton from '../../../components/AppButton';
import APP_COLORS from '../../../common/colors';
import {useDispatch} from 'react-redux';
import {resetUserData} from '../../../redux/reducer/User';
import {setSettingsData} from '../../../redux/reducer/Settings';
import {t} from '../../../localization';

const ProfileScreen = (): JSX.Element => {
  const dispatch = useDispatch();

  const userData = useSelector(
    (state: RootUserStateModel) => state.user.userData,
  );

  const logout = () => {
    dispatch(resetUserData());
    dispatch(setSettingsData({limit: 0}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.userImageContainer}>
        <Image source={user} style={styles.userImage} />
        <Text
          style={
            styles.nameText
          }>{`${userData.firstname} ${userData.lastname}`}</Text>
        <Text style={styles.subText}>{`${capitalize(
          t.getString(userData.role.toLowerCase()),
        )}`}</Text>
        <Text style={styles.subText}>{`${userData.username}`}</Text>
      </View>
      <AppButton
        title={t.change_user}
        backgroundColor={APP_COLORS.primary}
        height={45}
        width={'100%'}
        onPress={() => logout()}
      />
    </View>
  );
};

export default ProfileScreen;
