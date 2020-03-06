# frozen_string_literal: true

class ComputerProductsController < ApplicationController
  include HasQueryBuilder

  def index
    computer_products, meta = paginate(ComputerProduct)

    render json: ComputerProductBlueprint.render(computer_products, root: :computer_products, meta: meta)
  end
end
