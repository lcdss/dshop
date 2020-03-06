# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users, only: %i[index show create]
  resources :product_sources, only: [:index]
  resources :book_products, only: [:index]
  resources :vehicle_products, only: [:index]
  resources :computer_products, only: [:index]

  get '/auth/me', to: 'auth#me'
  post '/auth/login', to: 'auth#login'
end
