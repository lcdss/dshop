# frozen_string_literal: true

class ProductSourcesController < ApplicationController
  def index
    @product_sources = ProductSource.all

    render json: ProductSourceBlueprint.render(@product_sources, root: :product_sources)
  end
end
