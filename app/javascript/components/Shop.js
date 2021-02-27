import React from "react";


const Shop = (props) => {
  const {shop, coffees} = props
  const renderShop = () => {
    return coffees.map(coffee => {
      return(
        <div className="coffee-container">
          <h2>{coffee.blend}</h2>
          <p>origin: {coffee.origin}</p>
          <p>notes: {coffee.description}</p>
          <a href={`/shops/${shop.id}/coffees/${coffee.id}`}>View Blend</a>
          <a href={`/shops/${shop.id}/coffees/${coffee.id}/edit`}>Edit Blend</a>
          <a href={`/shops/${shop.id}/coffees/${coffee.id}`} data-method="delete">Delete Blend</a>
        </div>
      )
    })
  }

  return(
    <div>
      <h1>Coffee Shop Page</h1>
      <a href={`/shops/${shop.id}/coffees/new`}>Add New Blend</a>
      <a href="/">Return to List</a>
      <div>
        {renderShop()}
      </div>
    </div>
  )
}


export default Shop;