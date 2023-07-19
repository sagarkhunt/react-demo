import AxiosRequest from "../../AxiosRequest";
import { productSetState } from "./product.slice";

export const getProduct = (params) => async (dispatch) => {
  try {
    dispatch(productSetState([{ key: "products.loading", value: true }]));
    const { data } = await AxiosRequest.get("products", { params });
    console.log("🚀 ~ file: product.fetch.js:8 ~ getProduct ~ data:", data);
    dispatch(
      productSetState([
        { key: "products.loading", value: false },
        { key: "products.records", value: data?.products },
        { key: "products.total", value: data?.total },
      ]),
    );
  } catch (error) {
    console.log(error);
  }
};
