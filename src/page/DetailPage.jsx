import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Summary from "../components/detail-components/Summary";
import Detail from "../components/detail-components/Detail";

const DetailPage = () => {
  const searchParams = useSearchParams()[0].get("id");
  const productsList = useSelector(
    (state) => state.productsList.allProductList
  );
  const currentProduct = productsList.find(
    (product) => product._id.$oid === searchParams
  );
  const relatedProducts = productsList.filter(
    (product) => currentProduct.category === product.category
  );
  return (
    <>
      <Summary {...currentProduct} />
      <Detail {...currentProduct} relatedProducts={relatedProducts} />
    </>
  );
};

export default DetailPage;
