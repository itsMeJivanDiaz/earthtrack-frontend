import {createSlice} from '@reduxjs/toolkit';
import {LanguageModel, SettingsModel} from '../../../interfaces';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';

const slice = createSlice({
  name: 'settings',
  initialState: {
    languageData: {} as LanguageModel,
    settingsData: {} as SettingsModel,
  },
  reducers: {
    setSettingsData: (state, action: PayloadAction<SettingsModel>) => {
      state.settingsData = action.payload;
    },
    setLanguageData: (state, action: PayloadAction<LanguageModel>) => {
      state.languageData = action.payload;
    },
  },
});

export const {setSettingsData, setLanguageData} = slice.actions;

export default slice.reducer;
