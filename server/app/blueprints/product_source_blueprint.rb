# frozen_string_literal: true

class ProductSourceBlueprint < Blueprinter::Base
  identifier :id

  fields :slug, :name, :description, :source_name

  field :source_attributes do |source|
    source.source_name.constantize.columns_hash.transform_values(&:type)
  end
end
