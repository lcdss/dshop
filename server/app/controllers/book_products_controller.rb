# frozen_string_literal: true

class BookProductsController < ApplicationController
  include HasQueryBuilder

  def index
    book_products, meta = paginate(BookProduct)

    render json: BookProductBlueprint.render(book_products, root: :book_products, meta: meta)
  end
end
