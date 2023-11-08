import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState } from '../../@types';

const initialState: FormState = {
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
