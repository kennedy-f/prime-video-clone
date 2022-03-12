import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootState} from '../../store';

export interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

export const initializeAuth = createAsyncThunk(
  'auth/initialize',
  async () => await AsyncStorage.getItem('@authorization_token'),
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    makeLogin: (state, action: PayloadAction<string>) => {
      AsyncStorage.setItem('@authorization_token', action.payload);
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(initializeAuth.fulfilled, (state, action) => {
      console.log('chamou');
      state.token = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {makeLogin} = authSlice.actions;

export const selectHasToken = (state: RootState) => state.auth.token;
