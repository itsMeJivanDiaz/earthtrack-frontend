import React from 'react';
import styles from './styles';
import {View, Image, Text, ImageSourcePropType} from 'react-native';

interface AppProductListCardPropType {
  title: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
}

const AppProductListCard = (props: AppProductListCardPropType): JSX.Element => {
  const {title, description, price, image} = props;
  return (
    <View style={styles.listCardContainer}>
      <View style={styles.flex1}>
        <View style={styles.imageContainer}>
          <Image
            source={image}
            style={styles.image}
            accessibilityLabel="component-image"
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.description}>
            {description}
          </Text>
        </View>
      </View>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

export type {AppProductListCardPropType};

export default AppProductListCard;
