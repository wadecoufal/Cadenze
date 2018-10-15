class Api::PlaylistsController < ApplicationController
  def index
    if params[:curr_user_id]
      @playlists = Playlist.where(user_id: params[:curr_user_id])
    else
      @playlists = Playlist.all.includes(:songs).includes(:user)
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end

  end

  private
  def playlist_params
    params.require(:playlist).permit(:title)
  end
end
