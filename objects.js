  
$(document).ready(function(){

    var the_songs = ["mp3/1.mp3", "mp3/2.mp3", "mp3/3.mp3"]
    var j = new JukeBox(the_songs);

    console.log(j.songs);
    setSongs(j);
    j.play();

    $('.song').click(function(){
        console.log($(this).text());
        $(this).fadeOut();
        $('#song-list-end').after("<div class='song'>" + $(this).text()+ "</div>");
        j.next();
    }); 

    $('.juke-body').click(function(){
        // var val = $(this).text();
        $(this).toggleClass('paused').promise().done(function(){
            $(this).hasClass('paused') ? j.resume() : j.stop();
        });
        
        
    });

});

function setSongs (jb) {
    for (var i = jb.songs.length - 1; i >= 0; i--) {
        $('#song-list').after("<div class='song'>" + jb.songs[i] + "</div>");
    };
}

function JukeBox (songs) {
    this.songs = songs;
    this.current = 0;
    this.audio = new Audio(songs[this.current]);

    this.play = function(){
     this.audio = new Audio(songs[this.current]);
     this.audio.play();
    }
    this.stop = function(){
        this.audio.pause();
    };
this.resume = function(){
    this.audio.play();
}
this.next = function(){
    j.stop();
    console.log(this.songs.length + "PLAYING" + this.increment());

    this.play();
};

this.increment = function(){
    if (++this.current >= this.songs.length) {
        console.log("OVER");
        this.current = 0;
    };
    return this.current;
}
}




