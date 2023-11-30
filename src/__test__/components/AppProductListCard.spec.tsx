import React from 'react';
import {render} from '@testing-library/react-native';
import {AppProductListCardPropType} from '../../components/AppProductListCard';
import {android} from '../../assets/images';
import AppProductListCard from '../../components/AppProductListCard';

describe('AppProductListCard Component', () => {
  const defaultProps: AppProductListCardPropType = {
    title: 'Test',
    description: 'test description',
    price: 1.99,
    image: android,
  };

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByText, getByLabelText} = render(
      <AppProductListCard {...defaultProps} />,
    );

    const title = getByText('Test');
    const description = getByText('test description');
    const price = getByText('$1.99');
    const image = getByLabelText('component-image');

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
    expect(price).toBeTruthy();
    expect(image).toBeTruthy();
  });
});
