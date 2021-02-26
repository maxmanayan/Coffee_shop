class CoffeesController < ApplicationController
  before_action :get_shop
  # before_action :get_coffee, only: {:show, :edit, :update, :destroy}

  def show
    # @shop = Shop.find(params[:shop_id])
    @coffee = @shop.coffees.find(params[:id])

    render component: "Coffee", props: {shop: @shop, coffee: @coffee}
  end



  def new

  end


  def create

  end


  def edit

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

  end
end
