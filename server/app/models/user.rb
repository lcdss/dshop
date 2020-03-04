# frozen_string_literal: true

class User < ApplicationRecord
  include EmailValidatable

  has_secure_password

  validates :name, :email, presence: true
  validates :email, email: true
  validates :email, uniqueness: true, on: :create
end
