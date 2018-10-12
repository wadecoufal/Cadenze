# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create([
#   {username: 'Guest1', password: 'password1', email: 'guest1@guest.com'},
#   {username: 'Guest2', password: 'password2', email: 'guest2@guest.com'},
#   {username: 'Guest3', password: 'password3', email: 'guest3@guest.com'},
#   {username: 'Guest4', password: 'password4', email: 'guest4@guest.com'},
#   {username: 'Guest5', password: 'password5', email: 'guest5@guest.com'},
#   {username: 'Guest6', password: 'password6', email: 'guest6@guest.com'},
#   {username: 'Guest7', password: 'password7', email: 'guest7@guest.com'},
#   {username: 'Guest8', password: 'password8', email: 'guest8@guest.com'},
#   {username: 'Guest9', password: 'password9', email: 'guest9@guest.com'},
#   {username: 'Guest10', password: 'password10', email: 'guest10@guest.com'}
#   ])
Album.destroy_all

def create_album(params, image_url, filename)
  album = Album.new(params)
  file = File.open(image_url)
  album.photo.attach(io: file, filename: filename)
  album.save
end


create_album({
    title: 'Stravinsky Stokowski',
    year: 2016,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/field4_550x550.jpg',
    'field4_550x550.jpg'
)

create_album({
    title: 'Mozart Piano Concerto 11 & 22',
    year: 1980,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/02_classical_covers_2_A.png',
    '02_classical_covers_2_A.png'
)
create_album({
    title: 'Mozart 5, Vieuxtemps 4',
    year: 2014,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/71edpE8WPVL._SX522_.jpg',
    '71edpE8WPVL._SX522_.jpg'
)
create_album({
    title: 'Anders Koppel String Quartet',
    year: 2018,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/Anders-Koppel-String-Quartets.jpg',
    'Anders-Koppel-String-Quartets.jpg'
)
create_album({
    title: 'Bartok & Stravinsky',
    year: 2016,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/Bartok-Stravinsky.jpg',
    'Bartok-Stravinsky.jpg'
)
create_album({
    title: 'Dances & Rhapsodies',
    year: 2016,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/Concert Hal letslookupandsmile fl.jpg',
    'Concert Hal letslookupandsmile fl.jpg'
)
create_album({
    title: 'Tavole per Orfeo',
    year: 2016,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/tavole.png',
    'tavole.png'
)
create_album({
    title: 'Pathetique',
    year: 1976,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/tchaikovsky.jpg',
    'tchaikovsky.jpg'
)
create_album({
    title: 'The Rite of Spring',
    year: 1980,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/bernstein2.jpg',
    'bernstein2.jpg'
)
create_album({
    title: 'The Rite of Spring',
    year: 2003,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/a2014818508_10.jpg',
    'a2014818508_10.jpg'
)
create_album({
    title: 'Stravinsky Stokowski',
    year: 2016,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/field4_550x550.jpg',
    'field4_550x550.jpg'
)

create_album({
    title: 'Mozart Piano Concerto 11 & 22',
    year: 1980,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/02_classical_covers_2_A.png',
    '02_classical_covers_2_A.png'
)
create_album({
    title: 'Mozart 5, Vieuxtemps 4',
    year: 2014,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/71edpE8WPVL._SX522_.jpg',
    '71edpE8WPVL._SX522_.jpg'
)
create_album({
    title: 'Anders Koppel String Quartet',
    year: 2018,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/Anders-Koppel-String-Quartets.jpg',
    'Anders-Koppel-String-Quartets.jpg'
)
create_album({
    title: 'Bartok & Stravinsky',
    year: 2016,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/Bartok-Stravinsky.jpg',
    'Bartok-Stravinsky.jpg'
)
create_album({
    title: 'Dances & Rhapsodies',
    year: 2016,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/Concert Hal letslookupandsmile fl.jpg',
    'Concert Hal letslookupandsmile fl.jpg'
)
create_album({
    title: 'Tavole per Orfeo',
    year: 2016,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/tavole.png',
    'tavole.png'
)
create_album({
    title: 'Pathetique',
    year: 1976,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/tchaikovsky.jpg',
    'tchaikovsky.jpg'
)
create_album({
    title: 'The Rite of Spring',
    year: 1980,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/bernstein2.jpg',
    'bernstein2.jpg'
)
create_album({
    title: 'The Rite of Spring',
    year: 2003,
    genre: 'Classical',
    artist_id: 1
    },
    '../album_covers/a2014818508_10.jpg',
    'a2014818508_10.jpg'
)
