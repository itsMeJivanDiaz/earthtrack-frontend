import React, {Fragment, useEffect, useState} from 'react';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {
  ProductModel,
  RootSettingsStateModel,
  RootStackNavigationProps,
  RootUserStateModel,
} from '../../../interfaces';
import AppProductListCard from '../../../components/AppProductListCard';
import {
  ApiCall,
  ApiEndpoints,
  ApiMethod,
} from '../../../services/AxiosInstance';
import {useSelector} from 'react-redux';
import {getImages} from '../../../utilities';
import AppSearchBar from '../../../components/AppSearchBar';
import APP_COLORS from '../../../common/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';
import {t} from '../../../localization';

const ProductScreen = (
  props: RootStackNavigationProps<'Product'>,
): JSX.Element => {
  const userData = useSelector(
    (state: RootUserStateModel) => state.user.userData,
  );
  const settingsData = useSelector(
    (state: RootSettingsStateModel) => state.settings.settingsData,
  );

  const {navigation} = props;
  const {isSearch, query} = props.route.params;
  const limit = settingsData.limit || 10;

  const [products, setProducts] = useState<ProductModel[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isBySearch, setIsBySearch] = useState<boolean>(isSearch);
  const [stringQuery, setStringQuery] = useState<string>(query);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const PAGE_RANGE_DISPLAY = 3;
  const totalPages = Math.ceil(total / limit);

  const fetchProductData = async () => {
    setIsLoading(true);

    Toast.show({
      type: 'info',
      text1: t.fetching_data,
      text2: t.fetching_data_wait,
    });

    let apiEndpoint = `${
      ApiEndpoints().SEARCH_PRODUCTS_BASE_ON_CATEGORY
    }/${stringQuery}?page=${currentPage}&limit=${limit}`;

    if (isBySearch) {
      apiEndpoint = `${
        ApiEndpoints().SEARCH_PRODUCTS_BASE_ON_QUERY
      }?query=${stringQuery}&page=${currentPage}&limit=${limit}`;
    }

    try {
      const response = await ApiCall({
        apiEndpoint: apiEndpoint,
        apiToken: userData.access_token,
        method: ApiMethod.GET,
      });

      const responseData = response.data;

      setProducts(responseData.data);
      setTotal(responseData.total);
      Toast.show({
        type: 'success',
        text1: t.fetching_data_complete,
        text2: t.data_successfully_rendered,
      });
    } catch (error) {
      console.error(`fetchQuery error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (isLoading) {
      return;
    }
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (isLoading) {
      return;
    }
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = (text: string) => {
    if (isLoading) {
      return;
    }
    setIsBySearch(true);
    setStringQuery(text);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchProductData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, stringQuery]);

  const renderPagination = (): JSX.Element[] => {
    const pages = [];
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > PAGE_RANGE_DISPLAY) {
      const halfRange = Math.floor(PAGE_RANGE_DISPLAY / 2);
      if (currentPage > halfRange) {
        startPage = currentPage - halfRange;
        endPage = currentPage + halfRange;
      }
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = totalPages - PAGE_RANGE_DISPLAY + 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Fragment key={i}>
          <TouchableOpacity
            key={i}
            style={[
              styles.pageButton,
              {
                backgroundColor:
                  currentPage === i ? APP_COLORS.primary : APP_COLORS.dark,
              },
            ]}
            onPress={() => handlePageClick(i)}>
            <Text style={styles.paginationText}>{i}</Text>
          </TouchableOpacity>
        </Fragment>,
      );
    }

    return pages;
  };

  const renderProducts = (): JSX.Element[] => {
    if (total > 0) {
      return products.map((product, index) => {
        return (
          <AppProductListCard
            key={index}
            title={product.name}
            description={product.description}
            price={product.price}
            image={getImages(product.category.toLowerCase())}
          />
        );
      });
    }
    return [];
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex1}>
        <AppSearchBar
          placeholder={t.search_product}
          onSearchPress={(text: string) => handleSearch(text)}
          showBackButton={navigation.canGoBack()}
          onBackButtonPress={() => navigation.goBack()}
          preValue={query}
        />
        <View style={styles.contentContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollview}
            showsVerticalScrollIndicator={false}>
            {renderProducts()}
          </ScrollView>
        </View>
      </View>
      <View style={styles.paginationContainer}>
        {products.length > 0 && (
          <TouchableOpacity onPress={() => handlePrevious()}>
            <Icon name="arrow-left" size={50} color={APP_COLORS.primary} />
          </TouchableOpacity>
        )}
        {renderPagination()}
        {products.length > 0 && (
          <TouchableOpacity onPress={() => handleNext()}>
            <Icon name="arrow-right" size={50} color={APP_COLORS.primary} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProductScreen;
