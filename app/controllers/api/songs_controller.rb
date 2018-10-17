class Api::SongsController < ApplicationController
  def index
    if params[:search_query]
      @songs = Song.where('title LIKE ? OR title LIKE ?', "% #{params[:search_query].capitalize}%", "#{params[:search_query].capitalize}%")
    elsif params[:song_ids] === 'NoSongsHere'
      @songs = []
    elsif params[:song_ids]
      @songs = Song.includes(:artist).includes(:album).where(id: params[:song_ids])
    else
      @songs = Song.all.includes(:artist).includes(:album)
    end
  end
end
