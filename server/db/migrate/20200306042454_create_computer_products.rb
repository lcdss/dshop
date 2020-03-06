# frozen_string_literal: true

class CreateComputerProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :computer_products do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :brand, null: false
      t.string :model, null: false
      t.integer :year, null: false

      t.timestamps null: false
    end
  end
end
