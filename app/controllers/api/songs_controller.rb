class Api::SongsController < ApplicationController
  def index
    if params[:search_query]
      @songs = Song.where('lower(title) LIKE ? OR lower(title) LIKE ?', 
      "% #{params[:search_query].downcase}%", "#{params[:search_query].downcase}%")
    elsif params[:song_ids] === 'NoSongsHere'
      @songs = []
    elsif params[:song_ids]
      @songs = Song.includes(:artist).includes(:album).where(id: params[:song_ids])
    else
      @songs = Song.all.includes(:artist).includes(:album)
    end
  end
end
