class CreateCoffees < ActiveRecord::Migration[6.1]
  def change
    create_table :coffees do |t|
      t.string :blend
      t.string :origin
      t.text :description
      t.belongs_to :shop, null: false, foreign_key: true

      t.timestamps
    end
  end
end
