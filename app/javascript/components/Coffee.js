import React from "react";

const Coffee = (props) => {
  const {shop, coffee} = props

  return(
    <div className="body">
      <h1 className="shop-header">The Roast ☕</h1>
      <div className="coffee-page-sub-header">
        <h1>About the Blend</h1>
        <a href={`/shops/${shop.id}`}>Return to {shop.name}</a>
      </div>
      
      <div className="coffee-page">
        <h2>{coffee.blend} by {shop.name}</h2>
        <p>origin: {coffee.origin}</p>
        <p>notes: {coffee.description}</p>
      </div>
    </div>
  )
}


export default Coffee;