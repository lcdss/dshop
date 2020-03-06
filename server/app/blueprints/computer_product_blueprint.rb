# frozen_string_literal: true

class ComputerProductBlueprint < Blueprinter::Base
  identifier :id

  fields :name, :description, :brand, :model, :year
end
