# frozen_string_literal: true

class CreateBookProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :book_products do |t|
      t.string :isbn, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.string :author, null: false
      t.string :publisher, null: false
      t.string :genre, null: false

      t.timestamps null: false
    end

    add_index :book_products, :isbn, unique: true
  end
end
