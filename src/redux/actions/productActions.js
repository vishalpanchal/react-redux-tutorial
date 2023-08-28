import { ActionTypes } from "../contants/actionTypes";
import fakestoreapi from "../../apis/fakeStoreApis";

export const fetchProducts = () => async (dispatch) => {
  const responce = await fakestoreapi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: responce.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const responce = await fakestoreapi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: responce.data });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
