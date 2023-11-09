import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState } from '../../@types';

const initialState: FormState = {
  author: 'YsT',
  input: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
  },
});

export const { changeInput } = formSlice.actions;

export default formSlice.reducer;
