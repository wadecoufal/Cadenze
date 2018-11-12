class Api::PlaylistsController < ApplicationController
  def index
    if params[:search_query]
      @playlists = Playlist.where('lower(title) LIKE ? OR lower(title) LIKE ?', 
      "% #{params[:search_query].downcase}%", "#{params[:search_query].downcase}%")
    elsif params[:followed_playlist_ids] == 'NoPlaylistsHere'
      @playlists = Playlist.where(user_id: params[:curr_user_id])
    elsif params[:followed_playlist_ids]
      @playlists = Playlist.where('id IN (?) OR user_id = ?', params[:followed_playlist_ids], params[:curr_user_id])
    else
      # not sure what to do here. works locally, throws an Internal Server Error on heroku...
      # debugger
      @playlists = Playlist.all.includes(:user)
      if @playlists.empty?
        render json: {}
      else
        render :index
      end
    end
  end

  def show
    @playlist = Playlist.includes(:user).find(params[:id])
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
