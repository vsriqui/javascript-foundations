module.exports = { 
    createSong,
    playSong,
    makePlaylist,
    addSongToPlaylist,
    playAllSongs,
};

function createSong(name, artist) {
    return {
        name: name,
        artist: artist,
        hasBeenPlayed: false,
    }
}

function playSong(song){
    song.hasBeenPlayed = true
    return song
}

function makePlaylist(name, songs){
    return {
        name: name,
        songs: songs
    }
}

function addSongToPlaylist(playlist, song){
    playlist.songs.push(song)
    return playlist
}

function playAllSongs(playlist){
    for (i=0; i<playlist.songs.length; i++){
        playlist.songs[i].hasBeenPlayed = true
    }
    return playlist
}