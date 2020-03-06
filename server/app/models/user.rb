# frozen_string_literal: true

class User < ApplicationRecord
  EMAIL_REGEX = /[a-z0-9\.-_]+@[a-z0-9\.-_]+\.[a-z]{2,}/i.freeze

  has_secure_password

  validates :name, :email, presence: true
  validates :email, format: { with: EMAIL_REGEX, message: 'is not an email' }
  validates :email, uniqueness: true, on: :create
end
