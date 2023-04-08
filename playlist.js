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
function Playlist(){
 this.songs=[]
 let currentSongIdx=0
}

Playlist.prototype.add=function (...songs){
    for(let i=0;i<songs.length;i++){
        if (songs[i] instanceof Song) {
            this.songs.push(songs[i]);
        }
    }
   }
Playlist.prototype.play=function(...songs){
       
            let currentSong = this.songs[this.currentSongIdx]
            if (currentSong) {
            console.log(`${this.title}  started to play`)
            currentSong.isPlaying = true
            }
   }
Playlist.prototype.stop=function(...songs){
    let currentSong = this.songs[this.currentSongIdx]
    if(currentSong){
    console.log(` ${currentSong.title} stopped `);
    currentSong.isPlaying = false
    } 
}

Playlist.prototype.next=function(...songs){
    let currentSong = this.songs[this.currentSongIdx]
    if(currentSong){
    currentSong.isPlaying = false
    } 
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
        this.play()
}

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
playlist.add(heyJude);
playlist.add(jaded);
playlist.play(); // Hey Jude started to play
playlist.next(); // Hey Jude stopped, Jaded started
playlist.next(); // Jaded stopped, Hey Jude started
playlist.stop(); // Hey Jude stopped
playlist.play(); // Hey Jude started


  