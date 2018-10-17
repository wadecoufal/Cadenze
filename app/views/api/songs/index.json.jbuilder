@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :album_id, :duration
    json.artistName song.artist.name
    json.artistId song.artist.id
    json.albumTitle song.album.title
    json.albumId song.album.id
    json.soundUrl url_for(song.song)
    json.photoUrl url_for(song.album.photo)
  end
end
