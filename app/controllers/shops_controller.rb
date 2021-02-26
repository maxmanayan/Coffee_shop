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

  def new
    @shop = Shop.new
    render component: "ShopForm", props: {shop: @shop}
  end

  def create

  end


  def edit 
    @shop = Shop.find(params[:id])
    render component: "ShopForm", props: {shop: @shop}
  end


  def update 
  end


  def destroy 

  end


end
