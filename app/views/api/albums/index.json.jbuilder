json.array! @albums do |album|
  json.extract! album, :title, :artist, :id
  json.photoUrl url_for(album.photo)
end
