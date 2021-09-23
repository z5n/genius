const fetch = require('node-fetch');
const prompt = require('prompt-sync')();
const getLyrics = require("genius-lyrics-api").getLyrics;
const getSong = require("genius-lyrics-api").getSong;
var request = require('request'); // "Request" library
const fs = require('fs');
require('dotenv').config()

const spotifyToken = "***REMOVED***"
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;


/*var authOptions = {
  url: 'https://api.spotify.com/v1/me/player/currently-playing?market=US',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
}


request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {

        // use the access token to access the Spotify Web API
        *//*var spotifyRequestToken = body.access_token*//*
        var spotifyRequestToken = process.env.SPOTIFY_TOKEN
        console.log(spotifyRequestToken)


    }
})*/




fetch("https://api.spotify.com/v1/me/player/currently-playing?market=US", {
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${spotifyToken}`,
        "Content-Type": "application/json"
    }
})
.then(data=>{
    return data.json()
})
.then(response=>{
    const song = response.item.name;
    const artist = response.item.artists[0].name;
    // console.log(song); // console.log not needed since all we're doing is fetching lyrics
    // console.log(artist); // console.log not needed since all we're doing is fetching lyrics
    var options = {
        apiKey: process.env.GENIUS_API_KEY,
        title: song,
        artist: artist,
        optimizeQuery: true
    };
    
    function search_word(text, word){
        var x = 0, y=0;
        for (i=0;i< text.length;i++)
            {
            if(text[i] == word[0])
                {
                for(j=i;j< i+word.length;j++)
                    {
                    if(text[j]==word[j-i])
                        {
                        y++;
                        }
                    if (y==word.length){
                        x++;
                    }
                }
                y=0;
            }
        }
        return "'" + word + "' was found " + x + " times.";
    }
    
    function geniusLyrics() {
        getSong(options).then((song) => console.log(`${song.lyrics}`));
    }

    geniusLyrics();

}).catch(err => {
    console.log(err)
});