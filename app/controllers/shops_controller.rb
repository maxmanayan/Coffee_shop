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
    @shop = Shop.create(check_params)

    redirect_to shops_path
  end


  def edit 
    @shop = Shop.find(params[:id])
    render component: "ShopForm", props: {shop: @shop}
  end


  def update 
    @shop = Shop.find(params[:id])
    @shop.update(check_params)

    redirect_to shops_path
  end


  def destroy 
    @shop = Shop.find(params[:id])
    @shop.destroy

    redirect_to shops_path
  end


  private

  def check_params
    params.require(:shop).permit(:name, :location)
  end

end
