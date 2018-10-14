json.extract! @album, :title, :year, :id, :song_ids
json.artist @album.artist, :name, :id
json.photoUrl url_for(@album.photo)
