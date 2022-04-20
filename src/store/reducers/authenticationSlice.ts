import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { LoginInput, LoginOutput } from "../types/authentication.types";

export interface Statistics {
    femaleCount: number;
    maleCount: number;
    highMarkCount: number;
    lowMarkCount: number;
}

export interface AuthenticationState {
  loading: boolean;
  accessToken: string;
  refreshToken: string;
  expireTime: number;
}

const statisticsState: Statistics = {
    femaleCount: 0,
    maleCount: 0,
    highMarkCount: 0,
    lowMarkCount: 0,
}

const initialState: AuthenticationState = {
  loading: false,
  accessToken: '',
  refreshToken: '',
  expireTime: 0,
}

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    fetchData(state, action: PayloadAction) {
      state.loading = true;
    },
    fetchDataSuccess(state, action: PayloadAction) {
      state.loading = false;
    },
    fetchDataFailed(state, action: PayloadAction) {
        state.loading = false;
    },
    setSession(state, action: PayloadAction<LoginOutput>) {
      const { accessToken, refreshToken, expireTime } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.expireTime = expireTime;
    },
    removeSession(state, action: PayloadAction) {
      state = initialState;
    }
  }
})
// Action
export const authenticationActions = authenticationSlice.actions; 

// Selector
export const selectLoading = (state: RootState) => state.authentication.loading;

// Reducers
const authenticationReducer = authenticationSlice.reducer;
export default authenticationReducer;
