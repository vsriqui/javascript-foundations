module.exports = {  
  createCollection,
  createTrack,
  reviewTrack,
  addTrack,
  getTotalDuration,
  findTracksByArtist
}

function createCollection(name, description){
  return {
    name: name,
    description: description,
    tracks: [],
  }
}

function createTrack (title, artist, duration){
  track = {
    title: title,
    artist: artist,
    duration: duration,
  }
  if (!track.title) {
    track.title = 'unknown'
    
  }
  if (!track.artist) {
    track.artist = 'unknown'
    
  }
  if (!track.duration) {
    track.duration = 0
  }
  return track
}

function reviewTrack(track) {
  if (track.title.includes("Californication")) {
    return 'The song Californication rules!';
  } else if (track.title.includes("Otherside")) {
    return 'The song Otherside rules!';
  } else {
    return 'I wish this was a Red Hot Chili Peppers song.';
  }

}

function addTrack(collect, track) {
  collect.tracks.push(track)
  return collect
}

function getTotalDuration(collection) {
  
  dur = 0;
  for (i=0; i<collection.tracks.length; i++){
    console.log(collection)
    dur += collection.tracks[i].duration
  }
  return dur
}

function findTracksByArtist(collect, findArtist) {
  found = []
  for (i=0; i<collect.tracks.length; i++){
    if (collect.tracks[i].artist === findArtist)
    found.push(collect.tracks[i])
  }
  return found
}


