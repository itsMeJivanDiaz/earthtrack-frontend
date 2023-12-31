import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import APP_COLORS from '../../common/colors';
import {TouchableOpacity} from 'react-native';

interface AppSearchBarPropType {
  placeholder: string;
  onSearchPress: (text: string) => void;
  showBackButton?: boolean;
  onBackButtonPress?: () => void;
  preValue?: string;
}

const AppSearchBar = (props: AppSearchBarPropType): JSX.Element => {
  const {
    placeholder,
    onSearchPress,
    showBackButton = false,
    onBackButtonPress,
    preValue = '',
  } = props;

  const [value, setValue] = useState<string>(preValue);

  const renderBackButton = (): JSX.Element => {
    if (showBackButton) {
      return (
        <TouchableOpacity
          accessibilityLabel="back-button"
          onPress={() => onBackButtonPress?.()}>
          <Icon name="chevron-left" size={25} color={APP_COLORS.light} />
        </TouchableOpacity>
      );
    }
    return <></>;
  };

  return (
    <View style={styles.container}>
      {renderBackButton()}
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={APP_COLORS.dark}
        onChangeText={text => setValue(text)}
      />
      <TouchableOpacity
        accessibilityLabel="search-button"
        onPress={() => {
          onSearchPress(value);
          setValue('');
        }}>
        <Icon name="search" size={25} color={APP_COLORS.light} />
      </TouchableOpacity>
    </View>
  );
};

export type {AppSearchBarPropType};

export default AppSearchBar;
