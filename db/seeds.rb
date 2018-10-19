# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Album.destroy_all
Song.destroy_all
Artist.destroy_all
User.destroy_all

def create_album(params, filename)
  album = Album.new(params)
  file = EzDownload.open("https://s3-us-west-1.amazonaws.com/cadenze-dev/#{filename}")
  album.photo.attach(io: file, filename: filename)
  album.save
  return album
end

def create_artist(params, headshot, header)
  artist = Artist.new(params)
  headshot_file = EzDownload.open("https://s3-us-west-1.amazonaws.com/cadenze-dev/#{headshot}")
  header_file = EzDownload.open("https://s3-us-west-1.amazonaws.com/cadenze-dev/#{header}")
  artist.photo.attach(io: headshot_file, filename: headshot)
  artist.save
  return artist
end

def create_song(params, filename)
  song = Song.new(params)
  file = EzDownload.open("https://s3-us-west-1.amazonaws.com/cadenze-dev/#{filename}")
  song.song.attach(io: file, filename: filename)
  song.save
  return song
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

missy = create_artist({  name: 'Missy Mazzoli', bio: 'Composer'}, 'missy.jpeg')
ash = create_artist({  name: 'Vladimir Ashkenazy', bio: 'Pianist'}, 'ashkenazy.jpg')
baren = create_artist({  name: 'Daniel Barenboim', bio: 'Pianist'}, 'barenboim.jpg')
gould = create_artist({  name: 'Glenn Gould', bio: 'Pianist'}, 'gould.jpg')
itzhak = create_artist({  name: 'Itzhak Perlman', bio: 'Violinist'}, 'itzhak.jpg')
jessye = create_artist({  name: 'Jessye Norman', bio: 'Singer'}, 'jessye_norman.jpg')
victoire = create_artist({  name: 'Victoire', bio: 'Group'}, 'victoire.jpg')
yannick = create_artist({  name: 'Yannick Nézet-Séguin', bio: 'Conductor'}, 'yannick.jpeg')

cathedral = create_album({title: 'Cathedral City', year: 2010, genre: 'Classical', artist_id: missy.id}, 'victoire_door.jpg')
vespers = create_album({title: 'Vespers for a New Dark Age', year: 2015, genre: 'Classical', artist_id: victoire.id}, 'victoire_vespers.jpg')
missy3 = create_album({title: 'Song From the Uproar', year: 2012, genre: 'Classical', artist_id: missy.id}, 'missy_album_3.jpeg')
spring = create_album({title: 'Spring Sonata', year: 1974, genre: 'Classical', artist_id: itzhak.id}, 'spring.jpg')
spring2 = create_album({title: 'Beethoven', year: 1984, genre: 'Classical', artist_id: ash.id}, 'spring2.jpg')
goldberg = create_album({title: 'Goldberg Variations', year: 1964, genre: 'Classical', artist_id: gould.id}, 'gould.jpg')
goldberg2 = create_album({title: 'Bach', year: 1981, genre: 'Classical', artist_id: gould.id}, 'gould2.jpg')

strauss = create_album({title: 'Four Last Songs', year: 1980, genre: 'Classical', artist_id: jessye.id}, 'jessye_album.jpg')

songs1 = create_album({title: 'Songs Without Words', year: 1970, genre: 'Classical', artist_id: baren.id}, 'songs_without.jpeg')
songs2 = create_album({title: 'Songs Without Words', year: 1962, genre: 'Classical', artist_id: baren.id}, 'songs_without_2.jpg')
songs3 = create_album({title: 'Songs Without Words', year: 1977, genre: 'Classical', artist_id: baren.id}, 'songs_without_3.jpg')

philly = create_album({title: 'Stravinsky & Bach', year: 2016, genre: 'Classical', artist_id: yannick.id}, 'philly.jpg')


create_song({title: 'BWV 988 Variation',album_id: goldberg.id,duration: 221}, 'GoldbergVariationsBWV988Aria.mp3')
create_song({title: 'BWV 988 Aria',album_id: goldberg.id,duration: 121}, 'GoldbergVariationsBWV988Variation1aClav.mp3')

create_song({title: 'BWV 988 Variation',album_id: goldberg2.id,duration: 221}, 'GoldbergVariationsBWV988Aria.mp3')
create_song({title: 'BWV 988 Aria',album_id: goldberg2.id,duration: 121}, 'GoldbergVariationsBWV988Variation1aClav.mp3')

create_song({title: 'Andante con moto',album_id: songs1.id,duration: 321}, 'songs_without_no_4_a_major.mp3')
create_song({title: 'Andante espressivo',album_id: songs1.id,duration: 432}, 'songs_without_no_2_a_minor.mp3')
create_song({title: 'Molto allegro e vivace',album_id: songs1.id,duration: 132}, 'songs_without_no_1_e_major.mp3')
create_song({title: 'Poco agitato',album_id: songs2.id,duration: 129}, 'no_3_a_major.mp3')
create_song({title: 'Venetianisches Gondellied',album_id: songs2.id,duration: 222}, 'no_2_f_sharp_minor.mp3')
create_song({title: 'Molto allegro e vivace',album_id: songs2.id,duration: 132}, 'songs_without_no_1_e_major.mp3')
create_song({title: 'Poco agitato',album_id: songs3.id,duration: 129}, 'no_3_a_major.mp3')
create_song({title: 'Venetianisches Gondellied',album_id: songs3.id,duration: 222}, 'no_2_f_sharp_minor.mp3')
create_song({title: 'Molto allegro e vivace',album_id: songs3.id,duration: 132}, 'songs_without_no_1_e_major.mp3')

create_song({title: 'The Rite of Spring',album_id: philly.id,duration: 111}, 'le_sacre.mp3')
create_song({title: 'Pastorale',album_id: philly.id,duration: 321}, 'pastorale.mp3')
create_song({title: 'Passacaglia',album_id: philly.id,duration: 631}, 'passacaglia.mp3')

create_song({title: 'Frühling',album_id: strauss.id,duration: 333}, 'fruhling.mp3')
create_song({title: 'September',album_id: strauss.id,duration: 222}, 'september.mp3')
create_song({title: 'Beim Schlafengehen',album_id: strauss.id,duration: 111}, 'beim.mp3')
create_song({title: 'Im Abendrot',album_id: strauss.id,duration: 313}, 'abendrot.mp3')

create_song({title: 'Allegro',album_id: spring.id,duration: 212}, 'spring_1.mp3')
create_song({title: 'Adagio molto espressivo',album_id: spring.id,duration: 313}, 'spring_2.mp3')
create_song({title: 'A Door in the Dark',album_id: spring.id,duration: 412}, 'spring_3.mp3')

create_song({title: 'A Door in the Dark',album_id: cathedral.id,duration: 122}, '01+A+Door+in+the+Dark+copy.m4a')
create_song({title: 'I Am Coming for My Things',album_id: cathedral.id,duration: 229}, '02+I+Am+Coming+for+My+Things+copy.m4a')
create_song({title: 'Cathedral City',album_id: missy3.id,duration: 312}, '03+Cathedral+City+copy.m4a')
create_song({title: 'Like a Miracle',album_id: missy3.id,duration: 124}, '04+Like+a+Miracle+copy.m4a')
create_song({title: 'The Diver',album_id: cathedral.id,duration: 229}, '05+The+Diver+copy.m4a')
create_song({title: 'A Song for Mick Kelly',album_id: cathedral.id,duration: 429}, '06+A+Song+for+Mick+Kelly+copy.m4a')
create_song({title: 'A Song for Arthur Russell',album_id: missy3.id,duration: 529}, '07+A+Song+for+Arthur+Russell+copy.m4a')
create_song({title: 'India Whiskey',album_id: missy3.id,duration: 229}, '08+India+Whiskey+copy.m4a')

create_song({title: 'I. Wayward Free Radical Dreams',album_id: vespers.id,duration: 139}, '01+Vespers+for+a+New+Dark+Age_+I.+Wayward+Free+Radical+Dreams+copy.m4a')
create_song({title: 'II. Hello Lord',album_id: vespers.id,duration: 129}, '02+Vespers+for+a+New+Dark+Age_+II.+Hello+Lord+copy.m4a')
create_song({title: 'III. Interlude',album_id: vespers.id,duration: 432}, '03+Vespers+for+a+New+Dark+Age_+III.+Interlude+1+copy.m4a')
create_song({title: 'IV. Come On All You',album_id: vespers.id,duration: 329}, '04+Vespers+for+a+New+Dark+Age_+IV.+Come+On+All+You+copy.m4a')
