import React from 'react';
import styles from './styles';
import {View, Image, ImageSourcePropType, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface AppCardPropType {
  image: ImageSourcePropType;
  title: string;
  onPress: () => void;
}

const AppCard = (props: AppCardPropType) => {
  const {image, title, onPress} = props;
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppCard;
