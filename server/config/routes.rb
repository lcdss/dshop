# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users, only: [:create]

  get '/auth/me', to: 'auth#me'
  post '/auth/login', to: 'auth#login'
end
