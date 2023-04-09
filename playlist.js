// Playlist
// Add: Pushes the passed-through song to the songs array
// Play: Plays current song based on array index
// Stop: Holds place in array, but calls above stop song prototype function
// Next: Sets the next song in the songs array, calling the above play prototype function
// Song should take in two arguments, title and artist, which should both be added as properties when
// the Song constructor function is used.
// Play: Sets the song as playing using isPlaying
// Stop: Sets the song as not playing (isPlaying = false)

function Song(title,artist){
    this.title=title
    this.artist=artist
    this.isPlaying=false
  }
  
  Song.prototype.stop=function(){
    this.isPlaying=false
    console.log(`${this.title} stopped`)
  }
  
  Song.prototype.play=function(){
    this.isPlaying=true
    console.log(`${this.title} started to play`)
  }
  
  function Playlist(){
    this.songs=[]
    this.currentSongIdx=0
  }
  
  Playlist.prototype.add=function (...songs){
    for(let i=0;i<songs.length;i++){
      if (songs[i] instanceof Song) {
        this.songs.push(songs[i]);
      }
    }
  }
  
  Playlist.prototype.stop=function(){
    this.songs[this.currentSongIdx].stop();
  }
  
  Playlist.prototype.play=function(){
    this.songs[this.currentSongIdx].play();
  }
  
  Playlist.prototype.next=function(){
    this.stop();
    this.currentSongIdx++;
    if(this.currentSongIdx===this.songs.length){
      this.currentSongIdx=0;
    }
    this.play();
  }
  
  let playlist = new Playlist();
  let heyJude = new Song("Hey Jude", "The Beatles");
  let jaded = new Song("Jaded", "Aerosmith");
  playlist.add(heyJude);
  playlist.add(jaded);
  playlist.play(); // Hey Jude started to play
  playlist.next(); // Hey Jude stopped, Jaded started
  playlist.next(); // Jaded stopped, Hey Jude started
  playlist.stop(); // Hey Jude stopped
  playlist.play(); // Hey Jude started
  


  