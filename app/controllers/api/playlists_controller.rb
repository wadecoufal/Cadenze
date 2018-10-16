class Api::PlaylistsController < ApplicationController
  def index
    if params[:search_query]
      @playlists = Playlist.where('title LIKE ?', "#{params[:search_query]}%")
    elsif params[:followed_playlist_ids] === 'NoPlaylistsHere'
      @playlists = Playlist.where(user_id: params[:curr_user_id])
    elsif params[:followed_playlist_ids]
      @playlists = Playlist.where('id IN (?) OR user_id = ?',
          params[:followed_playlist_ids], params[:curr_user_id])
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
