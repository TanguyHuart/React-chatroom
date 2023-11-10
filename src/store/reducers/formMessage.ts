import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageFormState } from '../../@types';

const initialState: MessageFormState = {
  author: 'YsT',
  input: '',
};

const formMessageSlice = createSlice({
  name: 'formMessage',
  initialState,
  reducers: {
    changeInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
  },
});

export const { changeInput } = formMessageSlice.actions;

export default formMessageSlice.reducer;
