import React from "react";


const Shop = (props) => {
  const {shop, coffees} = props
  const renderShop = () => {
    return coffees.map(coffee => {
      return(
        <div className="coffee-container">
          <div className="coffee-container-content">
            <h2>{coffee.blend}</h2>
            <p>origin: {coffee.origin}</p>
            <p>notes: {coffee.description}</p>
          </div>
          <div className="coffee-container-links">
            <a href={`/shops/${shop.id}/coffees/${coffee.id}`}>View Blend</a>
            <a href={`/shops/${shop.id}/coffees/${coffee.id}/edit`}>Edit Blend</a>
            <a href={`/shops/${shop.id}/coffees/${coffee.id}`} data-method="delete">Delete Blend</a>
          </div>
          
        </div>
      )
    })
  }

  return(
    <div className="body">
      <h1 className="shop-header">The Roast ☕</h1>
      <div className="shop-sub-header">
        <h1>{shop.name} Blends</h1>
        <a href={`/shops/${shop.id}/coffees/new`}>Add New Blend</a>
        <a href="/">Return to List</a>
      </div>
      
      <div>
        {renderShop()}
      </div>
    </div>
  )
}


export default Shop;