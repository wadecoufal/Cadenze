@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :album_id, :duration
    json.artistName song.artist.name
    json.albumTitle song.album.title
    json.soundUrl url_for(song.song)
    json.photoUrl url_for(song.album.photo)
  end
end
