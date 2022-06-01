import React from "react";

const ShopCards = ({ ...rest }) => {
  const { urlImg, article, price, stock } = rest;
  return (
    <div className="shopCar__cards">
      <div className="shopCar__article">
        <img src={urlImg} alt="article" className="shopCard__img"></img>
      </div>
      <div className="shopCar__info">
        <p>article: {article}</p>
        <p>
          price:<span className="shopCar__price"> {price} €</span>{" "}
        </p>
        <p>stock: {stock}</p>
      </div>
      <button className="shopCar__button">shop</button>
    </div>
  );
};

export default ShopCards;
