class Api::AlbumsController < ApplicationController
  def index
    if params[:album_ids]
      @albums = Album.where(id: params[:album_ids])
    else
      @albums = Album.all
    end
  end

  def show
    @album = Album.find(params[:id])
  end
end
