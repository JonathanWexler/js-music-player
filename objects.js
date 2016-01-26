  $(document).ready(function(){
    console.log("OK");

    var j = new JukeBox(setUp());
    console.log("started");
    setSongs(j);
    j.play();
    $(document).on('click', '.song', function(e) {
        var elem = $(this)
        elem.fadeOut(1000);
        j.next();
        setTimeout(function(){
            elem.hide().insertAfter($('#song-list-end')).fadeIn("slow");
            // elem.remove();
            // $('#song-list-end').after("<div class='song'>" + elem.text()+ "</div>").hide().fadeIn();
        }, 2000);

    });


  $('.juke-body').click(function(){
        // var val = $(this).text();
        $(this).toggleClass('paused').promise().done(function(){
            $(this).hasClass('paused') ? j.resume() : j.stop();
        }); 
    });
});

  function setUp () {
    var the_songs = [];
    var a = new Song("mp3/1.mp3", "Jaydiohead");
    the_songs.push(a);
    return the_songs;
}