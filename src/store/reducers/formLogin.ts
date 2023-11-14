import axios from 'axios';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginFormState } from '../../@types';

const initialState: LoginFormState = {
  loginFormIsVisible: true,
  credentials: {
    email: 'bouclierman@herocorp.io',
    password: 'jennifer',
  },
  pseudo: 'Moi',
  error: null,
  isLoading: false,
};

// je vais vouloir faire une requete a mon API , Redux Toolkit me met a disposition createAsyncThunk qui permet de créer une action qui a 3 état
// pending : la requête est en cours
//  fullfilled : lerequete est terminée et a reussi
// rejected : la requete est terminée et a échouée
// createAsyncThunk prend 2 paramêtres:
// le nom de l'action et une fonction qui retourne une promesse. C'est dans cette fonction que l'on fera notre appel API
type LoginCredentials = {
  email: string;
  password: string;
};

export const login = createAsyncThunk(
  'settings/login',
  async (credentials: LoginCredentials) => {
    const { data } = await axios.post<{ pseudo: string }>(
      'http://localhost:3001/login',
      credentials
    );
    return data;
  }
);

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    changeLoginState(state) {
      state.loginFormIsVisible = !state.loginFormIsVisible;
    },
    changeInputValue(
      state,
      action: PayloadAction<{
        fieldName: keyof LoginFormState['credentials'];
        value: string;
      }>
    ) {
      const { fieldName, value } = action.payload;
      state.credentials[fieldName] = value;
    },
  },
  // Pour pouvoir gérer d'autre action et particulièrement les actions asynchrone, je vais utiliser la propriété extraReducers.
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(login.rejected, (state) => {
        state.error = 'Email ou mot de passe incorrect';
        state.isLoading = false;
      })
      // dans le cas ou mon action de connexion est reussi , je modifie mon pseudo
      .addCase(login.fulfilled, (state, action) => {
        state.loginFormIsVisible = false;
        state.pseudo = action.payload.pseudo;
        state.isLoading = false;
      });
  },
});

export const { changeLoginState, changeInputValue } = loginFormSlice.actions;

export default loginFormSlice.reducer;
