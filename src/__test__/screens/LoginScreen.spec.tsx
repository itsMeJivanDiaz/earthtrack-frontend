import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginScreen from '../../screens/Landing/LoginScreen';
import {Provider} from 'react-redux';
import store from '../../redux/store';

describe('Login Screen', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders correctly and triggers when button is clicked login', async () => {
    const mockedToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImExMmVkYzhkLTBkYTUtNDUwNy04ZTk5LTUxZWMxNTAwMjFhOSIsImZpcnN0bmFtZSI6IkpvaG4iLCJsYXN0bmFtZSI6IkRvZSIsInVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDExNjcyMjh9.cZTBg1zavadkqQ4-oMzmOEQ5xvs08dr45MBrpS8XbUU';

    jest
      .spyOn(require('../../services/AxiosInstance'), 'ApiCall')
      .mockImplementation(async () => {
        return {
          data: {
            access_token: mockedToken,
          },
        };
      });

    const {getByText, getByLabelText} = render(
      <Provider store={store().store}>
        <LoginScreen />
      </Provider>,
    );

    const title = getByText('EarthTrack');
    const adminButton = getByText('Admin as John Doe');
    const users = getByLabelText('user-container');

    fireEvent.press(adminButton);

    expect(adminButton).toBeTruthy();
    expect(title).toBeTruthy();
    expect(users.children).toHaveLength(3);
    expect(
      await require('../../services/AxiosInstance').ApiCall,
    ).toHaveBeenCalledWith({
      apiData: {username: 'admin', userpassword: 'admin'},
      apiEndpoint: '/auth',
      method: 'POST',
    });
  });
});
