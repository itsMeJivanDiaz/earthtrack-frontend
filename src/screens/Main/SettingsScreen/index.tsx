import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {TextInput, Text, Modal} from 'react-native';
import Toast from 'react-native-toast-message';
import AppButton from '../../../components/AppButton';
import APP_COLORS from '../../../common/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  setLanguageData,
  setSettingsData,
} from '../../../redux/reducer/Settings';
import {
  RootLanguageStateModel,
  RootSettingsStateModel,
} from '../../../interfaces';
import RadioGroup from 'react-native-radio-buttons-group';
import {t} from '../../../localization';
import RNExitApp from 'react-native-exit-app';

const SettingsScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const settingsData = useSelector(
    (state: RootSettingsStateModel) => state.settings.settingsData,
  );
  const languageData = useSelector(
    (state: RootLanguageStateModel) => state.settings.languageData,
  );
  const [limitValue, setLimitValue] = useState<string>('');
  const [selectedId, setSelectedId] = useState<string>(
    languageData?.language || 'en',
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentSelectedId, setCurrentSelectedId] = useState<string>('');

  const radioButtons = [
    {
      id: 'en',
      label: t.english,
      value: 'en',
      color: APP_COLORS.primary,
      labelStyle: {
        fontSize: 17,
        fontFamily: 'Urbanist-Regular',
      },
    },
    {
      id: 'jp',
      label: t.japanese,
      value: 'jp',
      color: APP_COLORS.primary,
      labelStyle: {
        fontSize: 17,
        fontFamily: 'Urbanist-Regular',
      },
    },
  ];

  const onLimitChange = (value: string) => {
    const numericRegex = /^[0-9]*$/;
    if (!numericRegex.test(value) || value.startsWith('0')) {
      Toast.show({
        type: 'error',
        text1: t.wrong_input_type,
        text2: t.valid_number,
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
        text1: t.not_empty,
        text2: t.must_value_range,
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

  const handleLanguageChange = async () => {
    setSelectedId(currentSelectedId);
    dispatch(
      setLanguageData({
        language: currentSelectedId,
      }),
    );
    setTimeout(() => {
      RNExitApp.exitApp();
    }, 100);
  };

  const renderModal = () => {
    return (
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{t.changing_language}</Text>
            <AppButton
              title={t.continue}
              width={'100%'}
              height={45}
              onPress={() => handleLanguageChange()}
              backgroundColor={APP_COLORS.primary}
            />
            <AppButton
              title={t.cancel}
              width={'100%'}
              height={45}
              onPress={() => {
                setCurrentSelectedId('');
                setShowModal(false);
              }}
              backgroundColor={APP_COLORS.dark}
            />
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.limitText}>{`${t.current_record_per_page}: ${
        settingsData.limit ?? 0
      }`}</Text>
      <TextInput
        value={limitValue}
        style={styles.input}
        keyboardType="numeric"
        placeholder={t.records_per_page}
        onChangeText={text => onLimitChange(text)}
      />
      <AppButton
        title={t.save_settings}
        backgroundColor={APP_COLORS.primary}
        height={45}
        width={'100%'}
        onPress={() => setSettings()}
      />
      <RadioGroup
        radioButtons={radioButtons}
        onPress={(id: string) => {
          setCurrentSelectedId(id);
          setShowModal(true);
        }}
        selectedId={selectedId}
        layout="row"
      />
      {renderModal()}
    </View>
  );
};

export default SettingsScreen;
