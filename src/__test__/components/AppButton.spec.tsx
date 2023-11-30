import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import AppButton, {AppButtonPropType} from '../../components/AppButton';

describe('AppButton Component', () => {
  const mockOnPress = jest.fn();

  const defaultProps: AppButtonPropType = {
    title: 'Test Button',
    backgroundColor: 'blue',
    width: 100,
    height: 50,
    onPress: mockOnPress,
  };

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByText} = render(<AppButton {...defaultProps} />);

    const button = getByText('Test Button');

    expect(button).toBeDefined();
    expect(button).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const {getByText} = render(<AppButton {...defaultProps} />);

    const button = getByText('Test Button');
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledWith();
  });
});
