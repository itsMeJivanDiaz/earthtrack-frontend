import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../../interfaces';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';

const slice = createSlice({
  name: 'user',
  initialState: {
    userData: {} as User,
  },
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
  },
});

export const {setUserData} = slice.actions;

export default slice.reducer;
