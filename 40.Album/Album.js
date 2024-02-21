"use strict";
function makeAlbum(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Creating album dictionaries
const album1 = makeAlbum("Artist1", "Album Title 1");
const album2 = makeAlbum("Artist2", "Album Title 2", 12); // Example with tracks
const album3 = makeAlbum("Artist3", "Album Title 3");
// Printing album information
console.log(album1);
console.log(album2);
console.log(album3);
