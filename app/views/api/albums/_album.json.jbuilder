json.extract! album, :title, :id
json.artistName album.artist.name
json.photoUrl url_for(album.photo)
