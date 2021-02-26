class ShopsController < ApplicationController
  def index
    render component: "Shops"
  end
end
