class Api::AlbumsController < ApplicationController
  def index
    if params[:search_query]
      @albums = Album.where('lower(title) LIKE ? OR lower(title) LIKE ?', 
      "% #{params[:search_query].downcase}%", "#{params[:search_query].downcase}%")
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
