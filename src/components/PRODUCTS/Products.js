import React from "react";
import ProductItem from './../ProductItem/ProductItem'
const Products = ({ data }) => {
  return(
  <ul>
    {data.map((item) => (
      <ProductItem data={item} />
    ))}
  </ul>
  )
};
export default Products;
