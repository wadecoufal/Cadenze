json.extract! @playlist, :title, :song_ids, :id
json.set! 'user' do
  json.extract! @playlist.user, :username, :id
end
