# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create([
  {username: 'Guest1', password: 'password1', email: 'guest1@guest.com'},
  {username: 'Guest2', password: 'password2', email: 'guest2@guest.com'},
  {username: 'Guest3', password: 'password3', email: 'guest3@guest.com'},
  {username: 'Guest4', password: 'password4', email: 'guest4@guest.com'},
  {username: 'Guest5', password: 'password5', email: 'guest5@guest.com'},
  {username: 'Guest6', password: 'password6', email: 'guest6@guest.com'},
  {username: 'Guest7', password: 'password7', email: 'guest7@guest.com'},
  {username: 'Guest8', password: 'password8', email: 'guest8@guest.com'},
  {username: 'Guest9', password: 'password9', email: 'guest9@guest.com'},
  {username: 'Guest10', password: 'password10', email: 'guest10@guest.com'}
  ])


def create_album(params, image_url, filename)
  album = Album.new(params)
  file = File.open(image_url)
  album.photo.attach(io: file, filename: filename)
  album.save
end


album = Album.new({title: 'The Rite of Spring',
  year: 1988, genre: 'Classical', artist_id: 1})

file = File.open("https://s3.amazonaws.com/cadenze-dev/bernstein2.jpg")
album.photo.attach(io: file, filename: 'bernstein2.jpg')
album.save

file = File.open('../album_covers/a2014818508_10.jpg')
