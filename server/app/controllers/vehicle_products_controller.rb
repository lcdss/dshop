# frozen_string_literal: true

class VehicleProductsController < ApplicationController
  include HasQueryBuilder

  def index
    vehicle_products, meta = paginate(VehicleProduct)

    render json: VehicleProductBlueprint.render(vehicle_products, root: :vehicle_products, meta: meta)
  end
end
