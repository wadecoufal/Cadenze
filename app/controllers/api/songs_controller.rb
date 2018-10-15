class Api::SongsController < ApplicationController
  def index
    if params[:song_ids]
      @songs = Song.includes(:artist).includes(:album).where(id: params[:song_ids])
    else
      @songs = Song.all.includes(:artist).includes(:album)
    end
  end
end
