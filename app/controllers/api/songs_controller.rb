class Api::SongsController < ApplicationController
  def index
    if params[:song_ids]
      @songs = Song.where(id: params[:song_ids])
    else
      @songs = Song.all
    end
  end
end
