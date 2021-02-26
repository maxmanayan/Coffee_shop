import React from "react";

const Coffee = (props) => {
  const {shop, coffee} = props

  return(
    <div>
      <h1>Coffee Page</h1>
      <a href={`/shops/${shop.id}`}>Return to {shop.name}</a>
      <div>
        <h2>{coffee.blend} by {shop.name}</h2>
        <p>origin: {coffee.origin}</p>
        <p>notes: {coffee.description}</p>
      </div>
    </div>
  )
}


export default Coffee;