import React, {useEffect, useState} from 'react';
import {View, ImageSourcePropType} from 'react-native';
import styles from './styles';
import {
  ApiCall,
  ApiMethod,
  ApiEndpoints,
} from '../../../services/AxiosInstance';
import AppCard from '../../../components/AppCard';
import {android, apple, windows, unknown} from '../../../assets/images';
import {useSelector} from 'react-redux';
import {RootUserStateModel} from '../../../interfaces';

const HomeScreen = (): JSX.Element => {
  const userData = useSelector(
    (state: RootUserStateModel) => state.user.userData,
  );

  const [categories, setCategories] = useState<string[]>([]);

  const getImages = (category: string): ImageSourcePropType => {
    if (category === 'apple') {
      return apple;
    } else if (category === 'android') {
      return android;
    } else if (category === 'windows') {
      return windows;
    }
    return unknown;
  };

  const fetchProducts = async () => {
    try {
      const response = await ApiCall({
        apiEndpoint: ApiEndpoints().PRODUCT_CATEGORIES,
        apiToken: userData.access_token,
        method: ApiMethod.GET,
      });
      setCategories(response.data);
    } catch (e) {
      console.error(`fetchProducts error ${e}`);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCategories = (): JSX.Element[] => {
    if (categories.length > 0) {
      return categories.map((category: string, index: number) => {
        category = category.toLowerCase();
        return (
          <AppCard
            key={index}
            image={getImages(category)}
            title={category}
            onPress={() => console.log(category)}
          />
        );
      });
    }
    return [];
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>{renderCategories()}</View>
    </View>
  );
};

export default HomeScreen;
