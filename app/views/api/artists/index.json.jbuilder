json.array! @artists do |artist|
  json.partial! 'artist', artist: artist
end
