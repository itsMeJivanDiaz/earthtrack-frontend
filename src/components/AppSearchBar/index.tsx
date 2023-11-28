import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import APP_COLORS from '../../common/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface AppSearchBarPropType {
  placeholder: string;
  onSearchPress: (text: string) => void;
}

const AppSearchBar = (props: AppSearchBarPropType): JSX.Element => {
  const {placeholder, onSearchPress} = props;

  const [value, setValue] = useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={APP_COLORS.dark}
        onChangeText={text => setValue(text)}
      />
      <TouchableOpacity onPress={() => onSearchPress(value)}>
        <Icon name="search" size={25} color={APP_COLORS.light} />
      </TouchableOpacity>
    </View>
  );
};

export type {AppSearchBarPropType};

export default AppSearchBar;
