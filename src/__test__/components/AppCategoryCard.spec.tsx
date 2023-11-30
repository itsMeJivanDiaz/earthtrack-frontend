import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {android} from '../../assets/images';
import AppCategoryCard, {
  AppCategoryCardPropType,
} from '../../components/AppCategoryCard';

describe('AppCategoryCard Component', () => {
  const mockOnPress = jest.fn();

  const defaultProps: AppCategoryCardPropType = {
    image: android,
    title: 'Test Card',
    onPress: mockOnPress,
  };

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByText, getByLabelText} = render(
      <AppCategoryCard {...defaultProps} />,
    );

    const card = getByText('Test Card');
    const categoryImage = getByLabelText('category-image');

    expect(card).toBeTruthy();
    expect(categoryImage).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const {getByText} = render(<AppCategoryCard {...defaultProps} />);

    const card = getByText('Test Card');
    fireEvent.press(card);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
