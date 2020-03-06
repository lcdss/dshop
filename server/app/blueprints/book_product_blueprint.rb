# frozen_string_literal: true

class BookProductBlueprint < Blueprinter::Base
  identifier :id

  fields :isbn, :title, :description, :author, :publisher, :genre
end
