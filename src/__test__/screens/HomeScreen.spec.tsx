import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import HomeScreen from '../../screens/Main/HomeScreen';
import store from '../../redux/store';
import {Provider} from 'react-redux';

describe('HomeScreen', () => {
  const mockCategories = ['ios', 'android', 'windows'];

  const mockNavigate = jest.fn();
  const navigation = {navigate: mockNavigate};

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders components correctly after fetching, navigate when card is clicked', async () => {
    jest
      .spyOn(require('../../services/AxiosInstance'), 'ApiCall')
      .mockImplementation(async () => {
        return {data: mockCategories};
      });

    const {getByText} = render(
      <Provider store={store().store}>
        <HomeScreen navigation={navigation as any} route={{} as any} />
      </Provider>,
    );

    await waitFor(() => {
      expect(getByText('ios')).toBeTruthy();
      expect(getByText('android')).toBeTruthy();
      expect(getByText('windows')).toBeTruthy();
    });

    const categoryCardIOS = getByText('ios');
    fireEvent.press(categoryCardIOS);

    expect(mockNavigate).toHaveBeenCalledWith('ProductNav', {
      isSearch: false,
      query: 'ios',
    });
  });
});
