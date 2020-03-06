# frozen_string_literal: true

class CreateProductSources < ActiveRecord::Migration[6.0]
  def change
    create_table :product_sources do |t|
      t.string :name, null: false
      t.string :slug, null: false
      t.string :description, null: false
      t.string :source_name, null: false

      t.timestamps null: false
    end

    add_index :product_sources, :slug, unique: true
  end
end
