# frozen_string_literal: true

class AuthController < ApplicationController
  skip_before_action :authorized, only: [:login]

  def me
    render json: { user: UserBlueprint.render_as_hash(current_user) }
  end

  def login
    @user = User.find_by(email: user_login_params[:email])

    if @user&.authenticate(user_login_params[:password])
      token = encode_token({ user_id: @user.id })
      render json: { user: UserBlueprint.render_as_hash(@user), access_token: token }, status: :accepted
    else
      render json: { message: 'invalid_credentials' }, status: :unauthorized
    end
  end

  private

  def user_login_params
    params.require(:user).permit(:email, :password)
  end
end
