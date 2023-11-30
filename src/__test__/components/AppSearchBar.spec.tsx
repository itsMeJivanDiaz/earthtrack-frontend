import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AppSearchBar, {
  AppSearchBarPropType,
} from '../../components/AppSearchBar';

describe('AppSearchBar Component', () => {
  const mockSearchPress = jest.fn();
  const mockBackButtonPress = jest.fn();

  const defaultProps: AppSearchBarPropType = {
    placeholder: 'Test placeholder',
    onSearchPress: mockSearchPress,
    showBackButton: true,
    onBackButtonPress: mockBackButtonPress,
    preValue: 'Test initial value',
  };

  jest.mock('react-native-vector-icons/MaterialIcons', () => jest.fn());

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByLabelText, getByPlaceholderText} = render(
      <AppSearchBar {...defaultProps} />,
    );

    const placeholder = getByPlaceholderText('Test placeholder');
    const backButton = getByLabelText('back-button');
    const searhButton = getByLabelText('search-button');

    expect(placeholder).toBeTruthy();
    expect(backButton).toBeTruthy();
    expect(searhButton).toBeTruthy();
  });

  it('calls onSearchPress and onBackButtonPress when pressed', () => {
    const {getByLabelText} = render(<AppSearchBar {...defaultProps} />);

    const backButton = getByLabelText('back-button');
    const searhButton = getByLabelText('search-button');

    fireEvent.press(searhButton);
    fireEvent.press(backButton);

    expect(mockSearchPress).toHaveBeenCalledWith('Test initial value');
    expect(mockBackButtonPress).toHaveBeenCalled();
  });
});
