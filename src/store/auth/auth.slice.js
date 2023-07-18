import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const authToken = () => {
  try {
    return localStorage.getItem("authToken");
  } catch (error) {
    return null;
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authToken: authToken(),
    user: null,
  },
  reducers: {
    authSetState: (state, { payload }) => {
      if (Array.isArray(payload)) {
        for (const obj of payload) {
          _.set(state, obj.key, obj.value);
        }
      } else {
        _.set(state, payload.key, payload.value);
      }
    },
  },
});

export const { authSetState } = authSlice.actions;

export default authSlice.reducer;
