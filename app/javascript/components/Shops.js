import React from "react";


const Shops = (props) => {
  const {shops} = props
  const renderShops = () => {
    return shops.map(shop => {
      return(
        <div className="shop-container">
          <h2>{shop.name}</h2>
          <p>{shop.location}</p>
          <a href={`/shops/${shop.id}`}>Visit Shop</a>
        </div>
      )
    })
  }

  return(
    <div>
      <h1>List of Coffee Shops</h1>
      <a href={`/shops/new`}>Add a Coffee Shop</a>
      <div className="shops-container">
        {renderShops()}
      </div>
    </div>
  )
};


export default Shops;