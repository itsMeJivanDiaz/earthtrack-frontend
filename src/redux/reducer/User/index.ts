import {createSlice} from '@reduxjs/toolkit';
import {UserModel} from '../../../interfaces';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';

const initialUser = {
  id: '',
  firstname: '',
  lastname: '',
  role: '',
  username: '',
};

const slice = createSlice({
  name: 'user',
  initialState: {
    userData: initialUser as UserModel,
  },
  reducers: {
    setUserData: (state, action: PayloadAction<UserModel>) => {
      state.userData = action.payload;
    },
    resetUserData: state => {
      state.userData = initialUser;
    },
  },
});

export const {setUserData, resetUserData} = slice.actions;

export default slice.reducer;
