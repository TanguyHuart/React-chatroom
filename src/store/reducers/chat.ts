import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatState, Message } from '../../@types';

const initialState: ChatState = {
  messages: [
    {
      content: 'Coucou',
    },
    {
      content: 'Montres-moi ton Strappi..',
    },
  ],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addNewMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
    },
  },
});

export const { addNewMessage } = chatSlice.actions;

export default chatSlice.reducer;
