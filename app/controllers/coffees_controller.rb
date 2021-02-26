class CoffeesController < ApplicationController
  def show
    @shop = Shop.find(params[:shop_id])
    @coffee = @shop.coffees.find(params[:id])

    render component: "Coffee", props: {shop: @shop, coffee: @coffee}
  end
end
