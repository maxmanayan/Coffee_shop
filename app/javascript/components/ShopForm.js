import React from "react";


const ShopForm = (props) => {
  const {shop} = props
  const actionPath = shop.id ? `/shops/${shop.id}` : "/shops"
  const defaultName = shop.name ? shop.name : ""
  const defaultAddress = shop.location ? shop.location : ""


  return(
    <div className="body">
      <h1 className="shop-header">The Roast ☕</h1>
      <h1 className="sub-header">{shop.id ? "Edit Shop" : "New Shop"}</h1>
      <div className="form">
        <form action={actionPath} method="post">
        {shop.id && <input type="hidden" name="_method" value="patch" />}
          <p>Name</p>
          <input defaultValue={defaultName} name="shop[name]"/>

          <p>Address</p>
          <input defaultValue={defaultAddress} name="shop[location]"/>

          <hr />
          <button type="input">{shop.id ? "Update" : "Create"}</button>
          <a href="/">Cancel</a>
        </form>
      </div>
    </div>
  )
}


export default ShopForm;