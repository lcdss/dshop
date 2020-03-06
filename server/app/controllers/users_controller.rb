# frozen_string_literal: true

class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def index
    @users = User.all

    render json: UserBlueprint.render(@users, root: :users)
  end

  def show
    @user = User.find(params.fetch(:id))

    render json: UserBlueprint.render(@user, root: :user)
  end

  def create
    @user = User.create(user_params)

    if @user.valid?
      token = encode_token({ user_id: @user.id })
      render json: { user: UserBlueprint.render_as_hash(@user), access_token: token }, status: :created
    else
      render json: { errors: @user.errors }, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
