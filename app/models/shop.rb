class Shop < ApplicationRecord
  has_many :coffees, dependent: :destroy
end
