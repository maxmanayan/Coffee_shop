class ShopsController < ApplicationController
  def index
    @shops = Shop.all
    render component: "Shops", props: {shops: @shops}
  end

  def show
    @shop = Shop.find(params[:id])
    @coffees = @shop.coffees.all

    render component: "Shop", props: {shop: @shop, coffees: @coffees}
  end


end
