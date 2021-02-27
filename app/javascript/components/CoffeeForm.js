import React from "react";


const CoffeeForm = (props) => {
  const {shop, coffee} = props
  const actionPath = coffee.id ? `/shops/${shop.id}/coffees/${coffee.id}` : `/shops/${shop.id}/coffees`
  const defaultBlend = coffee.blend ? coffee.blend : "" 
  const defaultOrigin = coffee.origin ? coffee.origin : ""
  const defaultNotes = coffee.description ? coffee.description : ""


  return(
    <div>
      <h1>{coffee.id ? "Edit Blend" : "Add New Blend"}</h1>
      <div>
        <form action={actionPath} method="post">
        {coffee.id && <input type="hidden" name="_method" value="patch"/>}
          <p>Blend</p>
          <input defaultValue={defaultBlend} name="coffee[blend]" />

          <p>Origin</p>
          <input defaultValue={defaultOrigin} name="coffee[origin]" />

          <p>Notes</p>
          <input defaultValue={defaultNotes} name="coffee[description]" />

          <button>{coffee.id ? "Update" : "Create"}</button>
          <a href={`/shops/${shop.id}`}>Cancel</a>
        </form>
      </div>
    </div>
  )
}


export default CoffeeForm;