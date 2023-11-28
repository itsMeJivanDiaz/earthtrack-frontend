import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {TextInput, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import AppButton from '../../../components/AppButton';
import APP_COLORS from '../../../common/colors';
import {useDispatch, useSelector} from 'react-redux';
import {setSettingsData} from '../../../redux/reducer/Settings';
import {RootSettingsStateModel} from '../../../interfaces';

const SettingsScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const settingsData = useSelector(
    (state: RootSettingsStateModel) => state.settings.settingsData,
  );
  const [limitValue, setLimitValue] = useState<string>('');

  const onLimitChange = (value: string) => {
    const numericRegex = /^[0-9]*$/;
    if (!numericRegex.test(value) || value.startsWith('0')) {
      Toast.show({
        type: 'error',
        text1: 'Wrong Input Type',
        text2: 'Must be a valid positive number',
      });
      return;
    }
    setLimitValue(value);
  };

  const setSettings = () => {
    const limit = parseInt(limitValue, 10);
    if (!limit || limit > 100) {
      Toast.show({
        type: 'error',
        text1: 'Value Must Not Be Empty',
        text2: 'Value must be in range of 1 to 100',
      });
      return;
    }
    dispatch(
      setSettingsData({
        limit: limit,
      }),
    );
    setLimitValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.limitText}>{`Current record/s per page: ${
        settingsData.limit ?? 0
      }`}</Text>
      <TextInput
        value={limitValue}
        style={styles.input}
        keyboardType="numeric"
        placeholder="records per page"
        onChangeText={text => onLimitChange(text)}
      />
      <AppButton
        title="save settings"
        backgroundColor={APP_COLORS.primary}
        height={45}
        width={'100%'}
        onPress={() => setSettings()}
      />
    </View>
  );
};

export default SettingsScreen;
