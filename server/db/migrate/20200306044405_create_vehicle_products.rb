# frozen_string_literal: true

class CreateVehicleProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :vehicle_products do |t|
      t.string :make, null: false
      t.string :model, null: false
      t.string :description, null: false
      t.string :manufacture, null: false
      t.integer :year, null: false

      t.timestamps null: false
    end
  end
end
