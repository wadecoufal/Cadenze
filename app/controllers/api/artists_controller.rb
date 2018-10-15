class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.with_attached_photo.all
  end

  def show
    @artist = Artist.find(params[:id])
  end
end
