import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatState, TMessage } from '../../@types';
import type { RootState } from '..';

const initialState: ChatState = {
  messages: [
    {
      id: crypto.randomUUID(),
      author: 'YsT',
      content: 'Coucou',
    },
    {
      id: crypto.randomUUID(),
      author: 'YsT',
      content: 'Montres-moi ton Strappi..',
    },
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addNewMessage(state, action: PayloadAction<TMessage>) {
      state.messages.push(action.payload);
    },
  },
});

export const { addNewMessage } = chatSlice.actions;

export const selectIsMine = (author: string) => (state: RootState) =>
  state.loginForm.pseudo === author;

export default chatSlice.reducer;
