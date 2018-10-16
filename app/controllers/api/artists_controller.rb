class Api::ArtistsController < ApplicationController
  def index
    if params[:search_query]
      @artists = Artist.where('name LIKE ?', "#{params[:search_query]}%")
    elsif params[:followed_artist_ids] === 'NoArtistsHere'
      @artists = []
    elsif params[:followed_artist_ids]
      @artists = Artist.with_attached_photo.where(id: params[:followed_artist_ids]).includes(:albums)
    else
      @artists = Artist.with_attached_photo.all.includes(:albums)
    end
  end

  def show
    @artist = Artist.find(params[:id])
  end
end
