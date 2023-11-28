import React from 'react';
import styles from './styles';
import {TouchableOpacity, Text, DimensionValue} from 'react-native';

interface AppButtonPropType {
  title: string;
  backgroundColor: string;
  width: DimensionValue;
  height: DimensionValue;
  onPress: () => void;
}

const AppButton = (props: AppButtonPropType) => {
  const {title, onPress} = props;

  const getDynamicStyles = styles(props);

  return (
    <TouchableOpacity style={getDynamicStyles.button} onPress={() => onPress()}>
      <Text style={getDynamicStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export type {AppButtonPropType};

export default AppButton;
