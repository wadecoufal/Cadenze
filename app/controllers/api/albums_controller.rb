class Api::AlbumsController < ApplicationController
  def index
    if params[:search_query]
      @albums = Album.where('title LIKE ? OR title LIKE ?', "% #{params[:search_query].capitalize}%", "#{params[:search_query].capitalize}%")
    elsif params[:album_ids] === 'NoAlbumsHere'
      @albums = []
    elsif params[:album_ids]
      @albums = Album.with_attached_photo.where(id: params[:album_ids]).includes(:artist)
    else
      @albums = Album.with_attached_photo.all.includes(:artist)
    end
  end

  def show
    @album = Album.find(params[:id])
  end
end
