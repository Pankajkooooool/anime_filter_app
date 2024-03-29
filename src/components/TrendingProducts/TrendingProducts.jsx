import React from "react";
import Card from "../Card/Card";
import "./TrendingProducts.scss";
import useFetch from "../../hooks/useFetch";

const TrendingProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
      Keeping up with the glory of rising anime trends and New characters with each rising season  
      Anime Filters'
      {/* weaboo */}
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default TrendingProducts;
