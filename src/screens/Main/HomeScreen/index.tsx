import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppCategoryCard from '../../../components/AppCategoryCard';
import {useSelector} from 'react-redux';
import {
  RootUserStateModel,
  RootStackNavigationProps,
} from '../../../interfaces';
import {getImages} from '../../../utilities';
import {
  ApiCall,
  ApiMethod,
  ApiEndpoints,
} from '../../../services/AxiosInstance';
import Toast from 'react-native-toast-message';
import {t} from '../../../localization/index';

const HomeScreen = (props: RootStackNavigationProps<'Home'>): JSX.Element => {
  const {navigation} = props;

  const userData = useSelector(
    (state: RootUserStateModel) => state.user.userData,
  );

  const [categories, setCategories] = useState<string[]>([]);

  const fetchProducts = async () => {
    try {
      Toast.show({
        type: 'info',
        text1: t.fetching_data,
        text2: t.fetching_data_wait,
      });
      const response = await ApiCall({
        apiEndpoint: ApiEndpoints().PRODUCT_CATEGORIES,
        apiToken: userData.access_token,
        method: ApiMethod.GET,
      });
      setCategories(response.data);
      Toast.show({
        type: 'success',
        text1: t.fetching_data_complete,
        text2: t.data_successfully_rendered,
      });
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
          <AppCategoryCard
            key={index}
            image={getImages(category)}
            title={t.getString(category.toLowerCase())}
            onPress={() =>
              navigation.navigate('ProductNav', {
                isSearch: false,
                query: category,
              })
            }
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
