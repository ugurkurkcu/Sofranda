import api from "../../utils/api";

// 1.yontem
export const setLoading = () => ({
  type: "SET_LOADING",
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const setProducts = (payload) => ({
  type: "SET_PRODUCTS",
  payload,
});

// 2. yontem

export const getProducts = () => {
  return (dispatch) => {
    dispatch(setLoading());

    api
      .get("/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };
};

