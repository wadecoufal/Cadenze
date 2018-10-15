json.extract! album, :title, :id, :song_ids
json.artistName album.artist.name
json.photoUrl url_for(album.photo)
