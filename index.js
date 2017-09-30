var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId : 'c11d380eadd04921a083d5637c108f8c',
    clientSecret : 'f8db5475fa7748e28203dd0ebac181e4',
    redirectUri : ''
});

const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


function getToken() {
  spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
        console.log('Something went wrong when retrieving an access token', err);
  });
}

getToken()

// Refresh token before 1h.
setInterval(getToken, 3598000)

app.get('/search/:name', function(req, res) {
    spotifyApi.searchTracks(req.params.name)
        .then(function(data) {
            res.send(data)
        }, function(err) {
        console.error(err);
        });
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/file.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(8888, function () {
  console.log('Example app listening on port 8888!')
})

// --------------------------- Functions ---------------------------------

var players = []
var hostSocket
var leader

function addNewPlayer(nick) {
  if (host) {
    players.push(nick)
  }
};

function setHost(socket) {
  hostSocket = socket
};

function play(players){

};

function pickLeader() {
  if (!leader){
    leader = players[0]
  } else {
    leader = players[players.indexOf(leader)+1]
  }
};


function leaderChooseSong() {
  io.send({players:players, leader:leader})
}

function chooseSong() {
  io.send({players:players, leader:leader})
}

// -------------- IO - Events --------------

io.on('leaderSong', function (socket, songUri) {

})

io.on('guess', function (socket, guess){

})

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});
