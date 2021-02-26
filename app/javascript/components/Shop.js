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
          <a href={`/shops/${shop.id}/coffees/${coffee.id}`}>View Coffee</a>
        </div>
      )
    })
  }

  return(
    <div>
      <h1>Coffee Shop Page</h1>
      <div>
        {renderShop()}
      </div>
    </div>
  )
}


export default Shop;