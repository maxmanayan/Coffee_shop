import React from "react";


const Shops = (props) => {
  const {shops} = props
  const renderShops = () => {
    return shops.map(shop => {
      return(
        <div className="shop-container">
          <div className="shop-container-content">
            <h2>{shop.name}</h2>
            <p>{shop.location}</p>
          </div>
          
          <div className="shop-container-links">
            <a href={`/shops/${shop.id}`}>Visit Shop</a>
            <a href={`/shops/${shop.id}/edit`}>Edit Shop</a>
            <a href={`/shops/${shop.id}`} data-method="delete">Delete Shop</a>
          </div>
          
        </div>
      )
    })
  }

  return(
    <div className="body">
      <h1 className="header">The Roast ☕</h1>
      <div className="sub-header"> 
        <h1>Best Coffee Shops of 2021</h1>
        <a href={`/shops/new`}>Add a Coffee Shop</a>
      </div>
      
      <div className="shops-container">
        {renderShops()}
      </div>
    </div>
  )
};


export default Shops;