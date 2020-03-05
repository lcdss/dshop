# frozen_string_literal: true

class UserBlueprint < Blueprinter::Base
  identifier :id

  fields :name, :email
end
