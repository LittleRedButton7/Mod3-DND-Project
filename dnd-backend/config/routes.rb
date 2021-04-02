Rails.application.routes.draw do
  resources :saved_monsters
  post '/save_monster', to: 'saved_monsters#save_monster'
  # post "users", to: "users#create"
  resources :users, only: [:create]
  post '/login', to: 'authentication#login'
  get '/profile', to: 'users#profile'
  # resources :monster, only: :index
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
