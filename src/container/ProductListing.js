import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  //console.log(products)

  // const fetchProducts = async () => {
  //   const responce = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   dispatch(setProducts(responce.data));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
