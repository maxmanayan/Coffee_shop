import React from "react";


const ShopForm = (props) => {
  const {shop} = props
  


  return(
    <div>
      <h1>{shop.id ? "Edit Shop" : "New Shop"}</h1>
      <div>
        <form >

          <p>Name</p>
          <input />

          <p>Address</p>
          <input />


          <button>{shop.id ? "Update" : "Create"}</button>
          <a href="/">Cancel</a>
        </form>
      </div>
    </div>
  )
}


export default ShopForm;