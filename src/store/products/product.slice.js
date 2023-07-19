import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: {
      loading: false,
      current: 0,
      from: 0,
      page: 0,
      records: [],
      to: 0,
      total: 0,
    },
  },
  reducers: {
    productSetState: (state, { payload }) => {
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

export const { productSetState } = productSlice.actions;

export default productSlice.reducer;
