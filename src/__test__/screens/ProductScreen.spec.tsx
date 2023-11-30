import React from 'react';
import {render, fireEvent, act, waitFor} from '@testing-library/react-native';
import ProductScreen from '../../screens/Main/ProductScreen';
import {ProductModel} from '../../interfaces';
import {Provider} from 'react-redux';
import store from '../../redux/store';

describe('ProductScreen', () => {
  const mockedProducts: ProductModel[] = [
    {
      id: '1',
      name: 'Product 1',
      category: 'Category 1',
      description: 'This is a mocked product 1',
      price: 1.95,
    },
    {
      id: '2',
      name: 'Product 2',
      category: 'Category 2',
      description: 'This is a mocked product 2',
      price: 1.92,
    },
    {
      id: '3',
      name: 'Product 3',
      category: 'Category 3',
      description: 'This is a mocked product 3',
      price: 1.91,
    },
  ];

  const navigation = {navigate: jest.fn(), canGoBack: jest.fn()};

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render products based on query  - Category', async () => {
    const params = {isSearch: false, query: 'Category 1'};

    jest
      .spyOn(require('../../services/AxiosInstance'), 'ApiCall')
      .mockImplementation(async () => {
        const query = mockedProducts.filter(
          (product: ProductModel) => product.category === params.query,
        );
        return {
          data: {
            data: query,
            total: query.length,
          },
        };
      });

    const {getByText, getByLabelText} = render(
      <Provider store={store().store}>
        <ProductScreen
          navigation={navigation as any}
          route={{params: params} as any}
        />
      </Provider>,
    );

    await act(async () => {
      await require('../../services/AxiosInstance').ApiCall();
    });

    await waitFor(() => {
      expect(getByLabelText('component-image')).toBeTruthy();
      expect(getByText('Product 1')).toBeTruthy();
      expect(getByText('This is a mocked product 1')).toBeTruthy();
      expect(getByText('$1.95')).toBeTruthy();
      expect(
        require('../../services/AxiosInstance').ApiCall,
      ).toHaveBeenCalledWith({
        apiEndpoint: '/product/category/Category 1?page=1&limit=10',
        apiToken: undefined,
        method: 'GET',
      });
    });
  });

  it('render products based on query  - Description/name', async () => {
    const params = {isSearch: true, query: 'mocked product'};

    jest
      .spyOn(require('../../services/AxiosInstance'), 'ApiCall')
      .mockImplementation(async () => {
        const query = mockedProducts.filter(
          (product: ProductModel) =>
            product.description
              .toLowerCase()
              .includes(params.query.toLowerCase()) ||
            product.name.toLowerCase().includes(params.query.toLowerCase()),
        );
        return {
          data: {
            data: query,
            total: query.length,
          },
        };
      });

    const {getByText} = render(
      <Provider store={store().store}>
        <ProductScreen
          navigation={navigation as any}
          route={{params: params} as any}
        />
      </Provider>,
    );

    await act(async () => {
      await require('../../services/AxiosInstance').ApiCall();
    });

    await waitFor(() => {
      mockedProducts.map(product => {
        expect(getByText(product.name)).toBeTruthy();
        expect(getByText(product.description)).toBeTruthy();
        expect(getByText(`$${product.price}`)).toBeTruthy();
      });
      expect(
        require('../../services/AxiosInstance').ApiCall,
      ).toHaveBeenCalledWith({
        apiEndpoint: '/product/search?query=mocked product&page=1&limit=10',
        apiToken: undefined,
        method: 'GET',
      });
    });
  });

  it('handles search and renders filtered products', async () => {
    const searchQuery = 'Product 1';
    const params = {isSearch: true, query: searchQuery};

    jest
      .spyOn(require('../../services/AxiosInstance'), 'ApiCall')
      .mockImplementation(async () => {
        const query = mockedProducts.filter(
          (product: ProductModel) =>
            product.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        return {
          data: {
            data: query,
            total: query.length,
          },
        };
      });

    const {getByLabelText, getByText} = render(
      <Provider store={store().store}>
        <ProductScreen
          navigation={navigation as any}
          route={{params: params} as any}
        />
      </Provider>,
    );

    act(() => {
      const searchButton = getByLabelText('search-button');
      fireEvent.press(searchButton);
    });

    await waitFor(() => {
      expect(getByLabelText('component-image')).toBeTruthy();
      expect(getByText('Product 1')).toBeTruthy();
      expect(getByText('This is a mocked product 1')).toBeTruthy();
      expect(getByText('$1.95')).toBeTruthy();
      expect(
        require('../../services/AxiosInstance').ApiCall,
      ).toHaveBeenCalledWith({
        apiEndpoint: '/product/search?query=Product 1&page=1&limit=10',
        apiToken: undefined,
        method: 'GET',
      });
    });
  });
});
