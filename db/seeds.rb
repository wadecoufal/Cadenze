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
Song.destroy_all
Artist.destroy_all
User.destroy_all

def create_album(params, filename)
  album = Album.new(params)
  file = EzDownload.open("https://s3-us-west-1.amazonaws.com/cadenze-dev/#{filename}")
  album.photo.attach(io: file, filename: filename)
  album.save
end

def create_artist(params, headshot, header)
  artist = Artist.new(params)
  headshot_file = EzDownload.open("https://s3-us-west-1.amazonaws.com/cadenze-dev/#{headshot}")
  header_file = EzDownload.open("https://s3-us-west-1.amazonaws.com/cadenze-dev/#{header}")
  artist.photo.attach(io: headshot_file, filename: headshot)
  artist.header_photo.attach(io: header_file, filename: header)
  artist.save
end

def create_song(params, filename)
  song = Song.new(params)
  file = EzDownload.open("https://s3-us-west-1.amazonaws.com/cadenze-dev/#{filename}")
  song.song.attach(io: file, filename: filename)
  song.save
end

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
#
#
create_artist({  name: 'Missy Mazzoli', bio: 'Composer'}, 'missy.jpeg', 'missy_header.jpeg')
# create_artist({ name: 'Jacqueline du Pré', bio: 'French Cellist'}, 'jacqueline-du-pre.jpg')
# create_artist({ name: 'Lili Boulanger', bio: 'French Composer'}, 'boulanger.jpg')
# create_artist({ name: 'Nadia Boulanger', bio: 'French Composer'}, 'Nadia-Boulanger.jpg')
# create_artist({ name: 'Tan Dun', bio: 'Chinese Composer'}, 'tan_dun.jpg')
# create_artist({ name: 'Jessye Norman', bio: 'Opera Singer'}, 'jessye_norman.jpg')
# create_artist({ name: 'Florence Price', bio: 'Composer'}, 'florence_price.jpg')
# create_artist({ name: 'Angele Dubeau', bio: 'Violinist'}, 'angele_dubeau.jpg')
# create_artist({ name: 'Unsuk Chin', bio: 'Composer'}, 'unsuk.jpg')
# create_artist({ name: 'Sergei Prokofiev', bio: 'Russian Composer'}, 'prokofiev.jpg')
# create_artist({ name: 'Igor Stravinsky', bio: 'Russian Composer'}, 'stravinsky.jpg')
# create_artist({ name: 'Lang Lang', bio: 'Pianist'}, 'lang_lang.jpg')
# create_artist({ name: 'George Walker', bio: 'Composer'}, 'george_walker.jpg')
# create_artist({ name: 'Philip Glass', bio: 'Composer'}, 'glass.jpg')
# # create_artist({ name: 'Johannes Brahms', bio: 'Composer'}, 'brahms.jpeg')
#
# create_artist({  name: 'Leonard Bernstein', bio: 'Great Conductor'}, 'bernstein.jpg')
# create_artist({ name: 'Jacqueline du Pré', bio: 'French Cellist'}, 'jacqueline-du-pre.jpg')
# create_artist({ name: 'Lili Boulanger', bio: 'French Composer'}, 'boulanger.jpg')
# create_artist({ name: 'Nadia Boulanger', bio: 'French Composer'}, 'Nadia-Boulanger.jpg')
# create_artist({ name: 'Tan Dun', bio: 'Chinese Composer'}, 'tan_dun.jpg')
# create_artist({ name: 'Jessye Norman', bio: 'Opera Singer'}, 'jessye_norman.jpg')
# create_artist({ name: 'Florence Price', bio: 'Composer'}, 'florence_price.jpg')
# create_artist({ name: 'Angele Dubeau', bio: 'Violinist'}, 'angele_dubeau.jpg')
# create_artist({ name: 'Unsuk Chin', bio: 'Composer'}, 'unsuk.jpg')
# create_artist({ name: 'Sergei Prokofiev', bio: 'Russian Composer'}, 'prokofiev.jpg')
# create_artist({ name: 'Igor Stravinsky', bio: 'Russian Composer'}, 'stravinsky.jpg')
# create_artist({ name: 'Lang Lang', bio: 'Pianist'}, 'lang_lang.jpg')
# create_artist({ name: 'George Walker', bio: 'Composer'}, 'george_walker.jpg')
# create_artist({ name: 'Philip Glass', bio: 'Composer'}, 'glass.jpg')
# # create_artist({ name: 'Johannes Brahms', bio: 'Composer'}, 'brahms.jpeg')
#
create_album({title: 'Cathedral City', year: 2010, genre: 'Classical', artist_id: 1}, 'victoire_door.jpg')
create_album({title: 'Vespers for a New Dark Age', year: 2015, genre: 'Classical', artist_id: 1}, 'victoire_vespers.jpg')
# create_album({title: 'Mozart Piano Concerti', year: 1972, genre: 'Classical', artist_id: 12}, 'mozart_piano.png')
# create_album({title: 'Anders String Quartet', year: 2014, genre: 'Classical', artist_id: 3}, 'anders.jpg')
# create_album({title: 'Pathetique Symphony', year: 1980, genre: 'Classical', artist_id: 11}, 'pathetique.jpg')
# create_album({title: 'Bartok & Stravinsky', year: 1980, genre: 'Classical', artist_id: 2}, 'Bartok-Stravinsky.jpg')
# create_album({title: 'Tavole per Orfeo', year: 1980, genre: 'Classical', artist_id: 3}, 'tavole.png')
# create_album({title: 'Stravinsky & Stokowski', year: 1980, genre: 'Classical', artist_id: 4}, 'philadelphia.jpg')
# create_album({title: 'The Rite of Spring', year: 1976, genre: 'Classical', artist_id: 5}, 'bernstein_rite.jpg')
# create_album({title: 'Haydn & Boccherini', year: 1980, genre: 'Classical', artist_id: 6}, 'cello_violin.jpg')
# create_album({title: 'Dances & Rhapsodies', year: 1980, genre: 'Classical', artist_id: 7}, 'danse.jpg')
# create_album({title: 'Mozart 5, Vieuxtemps 4', year: 1980, genre: 'Classical', artist_id: 8}, 'hahn_album.jpg')
# create_album({title: 'Arvo Pärt: Portrait', year: 1980, genre: 'Classical', artist_id: 9}, 'piete.jpg')
#
# create_album({title: 'The Rite of Spring', year: 1980, genre: 'Classical', artist_id: 1}, 'rite_of_spring.jpg')
# create_album({title: 'Mozart Piano Concerti', year: 1972, genre: 'Classical', artist_id: 12}, 'mozart_piano.png')
# create_album({title: 'Anders String Quartet', year: 2014, genre: 'Classical', artist_id: 3}, 'anders.jpg')
# create_album({title: 'Pathetique Symphony', year: 1980, genre: 'Classical', artist_id: 11}, 'pathetique.jpg')
# create_album({title: 'Bartok & Stravinsky', year: 1980, genre: 'Classical', artist_id: 2}, 'Bartok-Stravinsky.jpg')
# create_album({title: 'Tavole per Orfeo', year: 1980, genre: 'Classical', artist_id: 3}, 'tavole.png')
# create_album({title: 'Stravinsky & Stokowski', year: 1980, genre: 'Classical', artist_id: 4}, 'philadelphia.jpg')
# create_album({title: 'The Rite of Spring', year: 1976, genre: 'Classical', artist_id: 5}, 'bernstein_rite.jpg')
# create_album({title: 'Haydn & Boccherini', year: 1980, genre: 'Classical', artist_id: 6}, 'cello_violin.jpg')
# create_album({title: 'Dances & Rhapsodies', year: 1980, genre: 'Classical', artist_id: 7}, 'danse.jpg')
# create_album({title: 'Mozart 5, Vieuxtemps 4', year: 1980, genre: 'Classical', artist_id: 8}, 'hahn_album.jpg')
# create_album({title: 'Arvo Pärt: Portrait', year: 1980, genre: 'Classical', artist_id: 9}, 'piete.jpg')
#
create_song({title: 'A Door in the Dark',album_id: 1,duration: 129}, '01+A+Door+in+the+Dark+copy.m4a')
create_song({title: 'I Am Coming for My Things',album_id: 1,duration: 229}, '02+I+Am+Coming+for+My+Things+copy.m4a')
create_song({title: 'Cathedral City',album_id: 1,duration: 312}, '03+Cathedral+City+copy.m4a')
create_song({title: 'Like a Miracle',album_id: 1,duration: 124}, '04+Like+a+Miracle+copy.m4a')
create_song({title: 'The Diver',album_id: 1,duration: 229}, '05+The+Diver+copy.m4a')
create_song({title: 'A Song for Mick Kelly',album_id: 1,duration: 429}, '06+A+Song+for+Mick+Kelly+copy.m4a')
create_song({title: 'A Song for Arthur Russell',album_id: 1,duration: 529}, '07+A+Song+for+Arthur+Russell+copy.m4a')
create_song({title: 'India Whiskey',album_id: 1,duration: 229}, '08+India+Whiskey+copy.m4a')
# create_song({title: 'Cercles mystérieux des adolescentes',album_id: 1,duration: 119}, 'bensound-erf.mp3')
create_song({title: 'I. Wayward Free Radical Dreams',album_id: 2,duration: 139}, '01+Vespers+for+a+New+Dark+Age_+I.+Wayward+Free+Radical+Dreams+copy.m4a')
create_song({title: 'II. Hello Lord',album_id: 2,duration: 129}, '02+Vespers+for+a+New+Dark+Age_+II.+Hello+Lord+copy.m4a')
create_song({title: 'III. Interlude',album_id: 2,duration: 432}, '03+Vespers+for+a+New+Dark+Age_+III.+Interlude+1+copy.m4a')
create_song({title: 'IV. Come On All You',album_id: 2,duration: 329}, '04+Vespers+for+a+New+Dark+Age_+IV.+Come+On+All+You+copy.m4a')
#
# create_song({title: 'Introduction',album_id: 1,duration: 129}, 'bensound-betterdays.mp3')
# create_song({title: 'Les Augures printaniers',album_id: 1,duration: 229}, 'bensound-erf.mp3')
# create_song({title: 'Jeu du rapt',album_id: 1,duration: 312}, 'bensound-summer.mp3')
# create_song({title: 'Rondes printanières',album_id: 1,duration: 124}, 'bensound-betterdays.mp3')
# create_song({title: 'Jeux des cités rivales',album_id: 1,duration: 229}, 'bensound-summer.mp3')
# create_song({title: 'Cortège du sage: Le Sage',album_id: 1,duration: 429}, 'bensound-betterdays.mp3')
# create_song({title: 'Danse de la terre',album_id: 1,duration: 529}, 'bensound-betterdays.mp3')
# create_song({title: 'Part II: Introduction',album_id: 1,duration: 229}, 'bensound-summer.mp3')
# create_song({title: 'Cercles mystérieux des adolescentes',album_id: 1,duration: 119}, 'bensound-erf.mp3')
# create_song({title: 'Glorification de l\'élue',album_id: 1,duration: 139}, 'bensound-erf.mp3')
# create_song({title: 'Évocation des ancêtres',album_id: 1,duration: 129}, 'bensound-betterdays.mp3')
# create_song({title: 'Action rituelle des ancêtres',album_id: 1,duration: 432}, 'bensound-erf.mp3')
# create_song({title: 'Danse sacrale',album_id: 1,duration: 329}, 'bensound-summer.mp3')
# create_album({
#     title: 'Stravinsky Stokowski',
#     year: 2016,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/field4_550x550.jpg',
#     'field4_550x550.jpg'
# )
#
# create_album({
#     title: 'Mozart Piano Concerto 11 & 22',
#     year: 1980,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/02_classical_covers_2_A.png',
#     '02_classical_covers_2_A.png'
# )
# create_album({
#     title: 'Mozart 5, Vieuxtemps 4',
#     year: 2014,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/71edpE8WPVL._SX522_.jpg',
#     '71edpE8WPVL._SX522_.jpg'
# )
# create_album({
#     title: 'Anders Koppel String Quartet',
#     year: 2018,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/Anders-Koppel-String-Quartets.jpg',
#     'Anders-Koppel-String-Quartets.jpg'
# )
# create_album({
#     title: 'Bartok & Stravinsky',
#     year: 2016,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/Bartok-Stravinsky.jpg',
#     'Bartok-Stravinsky.jpg'
# )
# create_album({
#     title: 'Dances & Rhapsodies',
#     year: 2016,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/Concert Hal letslookupandsmile fl.jpg',
#     'Concert Hal letslookupandsmile fl.jpg'
# )
# create_album({
#     title: 'Tavole per Orfeo',
#     year: 2016,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/tavole.png',
#     'tavole.png'
# )
# create_album({
#     title: 'Pathetique',
#     year: 1976,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/tchaikovsky.jpg',
#     'tchaikovsky.jpg'
# )
#
# create_album({
#     title: 'The Rite of Spring',
#     year: 2003,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/a2014818508_10.jpg',
#     'a2014818508_10.jpg'
# )
# create_album({
#     title: 'Stravinsky Stokowski',
#     year: 2016,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/field4_550x550.jpg',
#     'field4_550x550.jpg'
# )
#
# create_album({
#     title: 'Mozart Piano Concerto 11 & 22',
#     year: 1980,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/02_classical_covers_2_A.png',
#     '02_classical_covers_2_A.png'
# )
# create_album({
#     title: 'Mozart 5, Vieuxtemps 4',
#     year: 2014,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/71edpE8WPVL._SX522_.jpg',
#     '71edpE8WPVL._SX522_.jpg'
# )
# create_album({
#     title: 'Anders Koppel String Quartet',
#     year: 2018,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/Anders-Koppel-String-Quartets.jpg',
#     'Anders-Koppel-String-Quartets.jpg'
# )
# create_album({
#     title: 'Bartok & Stravinsky',
#     year: 2016,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/Bartok-Stravinsky.jpg',
#     'Bartok-Stravinsky.jpg'
# )
# create_album({
#     title: 'Dances & Rhapsodies',
#     year: 2016,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/Concert Hal letslookupandsmile fl.jpg',
#     'Concert Hal letslookupandsmile fl.jpg'
# )
# create_album({
#     title: 'Tavole per Orfeo',
#     year: 2016,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/tavole.png',
#     'tavole.png'
# )
# create_album({
#     title: 'Pathetique',
#     year: 1976,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/tchaikovsky.jpg',
#     'tchaikovsky.jpg'
# )
# create_album({
#     title: 'The Rite of Spring',
#     year: 1980,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/bernstein2.jpg',
#     'bernstein2.jpg'
# )
# create_album({
#     title: 'The Rite of Spring',
#     year: 2003,
#     genre: 'Classical',
#     artist_id: 1
#     },
#     '../album_covers/a2014818508_10.jpg',
#     'a2014818508_10.jpg'
# )
