Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :playlists, only: [:create, :index, :show]
    resources :playlist_songs, only: [:create, :destroy]
    resources :songs, only: [:index]
    resources :follows, only: [:index, :create, :destroy]
    resources :user_follows, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end


end
