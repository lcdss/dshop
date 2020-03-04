# frozen_string_literal: true

class ApplicationController < ActionController::API
  before_action :authorized

  protected

  def authorized
    unless logged_in?
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end

  def decoded_token
    if authorization_header
      token = authorization_header.split(' ')[1]

      begin
        JWT.decode(token, ENV['JWT_SECRET'], true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def default_claims
    {
      iss: DShop.name.downcase,
      exp: (Time.now + 1.day).to_i,
      nbf: (Time.now - 1.hour).to_i,
      iat: Time.now.to_i
    }
  end

  def encode_token(payload)
    JWT.encode(default_claims.merge(payload), ENV['JWT_SECRET'])
  end

  def authorization_header
    request.headers['Authorization']
  end
end
