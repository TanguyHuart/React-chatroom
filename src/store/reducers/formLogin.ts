import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginFormState } from '../../@types';

const initialState: LoginFormState = {
  loginFormIsVisible: false,
  emailInput: '',
  passwordInput: '',
};

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    changeLoginState(state) {
      state.loginFormIsVisible = !state.loginFormIsVisible;
    },
    changeEmailInput(state, action: PayloadAction<string>) {
      state.emailInput = action.payload;
    },
    changePasswordInput(state, action: PayloadAction<string>) {
      state.passwordInput = action.payload;
    },
  },
});

export const { changeLoginState, changeEmailInput, changePasswordInput } =
  loginFormSlice.actions;

export default loginFormSlice.reducer;
