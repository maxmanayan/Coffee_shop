class CoffeesController < ApplicationController
  before_action :get_shop
  # before_action :get_coffee, only: {:show, :edit, :update, :destroy}

  def show
    # @shop = Shop.find(params[:shop_id])
    @coffee = @shop.coffees.find(params[:id])

    render component: "Coffee", props: {shop: @shop, coffee: @coffee}
  end



  def new
    @coffee = Coffee.new
    render component: "CoffeeForm", props: {shop: @shop, coffee: @coffee}
  end


  def create
    @coffee = @shop.coffees.create(check_params)

    redirect_to shop_path(@shop)
  end


  def edit
    @coffee = @shop.coffees.find(params[:id])
    render component: "CoffeeForm", props: {shop: @shop, coffee: @coffee}
  end


  def update 

  end


  def destroy 

  end



  private

  def get_shop
    @shop = Shop.find(params[:shop_id])
  end


  # def get_coffee
  #   @coffee = @shop.coffees.find(params[:id])
  # end


  def check_params
    params.require(:coffee).permit(:blend, :origin, :decoration)
  end
end
