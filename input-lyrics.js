const prompt = require('prompt-sync')();
const getLyrics = require("genius-lyrics-api").getLyrics;
const getSong = require("genius-lyrics-api").getSong;
require('dotenv').config();

var title = prompt('What is the title: ');
var artist = prompt('Who is the artist: ');

var options = {
	apiKey: '***REMOVED***',
	title: title,
	artist: artist,
	optimizeQuery: true
};

function geniusLyrics() {
    getSong(options).then((song) => console.log(`${song.lyrics}`));
}

geniusLyrics();