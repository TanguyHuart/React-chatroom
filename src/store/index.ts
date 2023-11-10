import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './reducers/chat';
import messageFormReducer from './reducers/formMessage';
import loginFormReducer from './reducers/formLogin';

const store = configureStore({
  reducer: {
    chat: chatReducer,
    messageForm: messageFormReducer,
    loginForm: loginFormReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
