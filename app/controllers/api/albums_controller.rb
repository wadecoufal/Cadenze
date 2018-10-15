class Api::AlbumsController < ApplicationController
  def index
    if params[:album_ids] === 'NoAlbumsHere'
      @albums = []
    elsif params[:album_ids]
      @albums = Album.where(id: params[:album_ids]).includes(:artist)
    else
      @albums = Album.with_attached_photo.all.includes(:artist)
    end
  end

  def show
    @album = Album.find(params[:id])
  end
end
