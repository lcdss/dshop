# frozen_string_literal: true

class VehicleProductBlueprint < Blueprinter::Base
  identifier :id

  fields :make, :model, :description, :manufacture, :year
end
