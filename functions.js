function setSongs (jb) {
    for (var i = jb.songs.length - 1; i >= 0; i--) {
        $('#song-list').after("<div class='song'>" + jb.songs[i].name + "</div>");
    };
}