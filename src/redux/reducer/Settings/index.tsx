import {createSlice} from '@reduxjs/toolkit';
import {SettingsModel} from '../../../interfaces';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';

const slice = createSlice({
  name: 'settings',
  initialState: {
    settingsData: {} as SettingsModel,
  },
  reducers: {
    setSettingsData: (state, action: PayloadAction<SettingsModel>) => {
      state.settingsData = action.payload;
    },
  },
});

export const {setSettingsData} = slice.actions;

export default slice.reducer;
