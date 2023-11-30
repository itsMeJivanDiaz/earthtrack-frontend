import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import SettingsScreen from '../../screens/Main/SettingsScreen';
import store from '../../redux/store';
import {Provider} from 'react-redux';
import {setLanguageData, setSettingsData} from '../../redux/reducer/Settings';

describe('SettingsScreen', () => {
  it('updates the limit value on input change', async () => {
    const {getByPlaceholderText} = render(
      <Provider store={store().store}>
        <SettingsScreen />
      </Provider>,
    );

    const limit = getByPlaceholderText('Records per page');
    fireEvent.changeText(limit, '20');

    expect(limit.props.value).toBe('20');
  });

  it('handles setting changes with valid limit', async () => {
    const {getByPlaceholderText, getByText} = render(
      <Provider store={store().store}>
        <SettingsScreen />
      </Provider>,
    );

    const limitInput = getByPlaceholderText('Records per page');
    fireEvent.changeText(limitInput, '50');

    const saveButton = getByText('Save Settings');
    fireEvent.press(saveButton);

    expect(store().store).toContainEqual(setSettingsData({limit: 50}));
  });

  it('handles language change and modal visibility', async () => {
    const {getByText} = render(
      <Provider store={store().store}>
        <SettingsScreen />
      </Provider>,
    );

    const japaneseLanguageButton = getByText('Japanese');
    fireEvent.press(japaneseLanguageButton);

    const continueButton = getByText('Continue');
    fireEvent.press(continueButton);

    expect(store().store).toContainEqual(setLanguageData({language: 'jp'}));

    await waitFor(() => {
      expect(getByText('changing_language')).toBeTruthy();
    });
  });
});
