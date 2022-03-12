import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AsyncStorage} from 'react-native';

export interface CounterState {
  token: string | undefined;
}

const initialState: CounterState = {
  token: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    makeLogin: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {makeLogin} = authSlice.actions;

export const authSliceReducer = authSlice.reducer;
