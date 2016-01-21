// Jon Wexler 2016
// Main JukeBox Objects
function JukeBox (songs) {
    this.songs = songs;
    this.currentIndex = 0;
    this.currentSong = this.songs[this.currentIndex];
    this.audio = new Audio(this.currentSong.path);

    this.play = function(){
     this.audio = new Audio(this.currentSong.path);
     this.audio.play();
    }   
    this.stop = function(){
        this.audio.pause();
    };
    this.resume = function(){
        this.audio.play();
    }
    this.next = function(){
        this.stop();
        this.currentSong = this.songs[this.increment()];
        this.play();
    };

    this.increment = function(){
        if (++this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        };
        return this.currentIndex;
    }
}

function Song(path, name){
    this.setPath = function(path){
        if (path.substring(0,5) == "local") {
            return "mp3/" + path.substring(5);
        };
        return path;
    }
    this.path = this.setPath(path);
    console.log("Song Path: " + this.path);
    this.name = name;

}