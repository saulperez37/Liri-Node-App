require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

let command1 = process.argv[2];
let command2 = process.argv[3];

switch (command1) {
    case "concert-this":
        getConcert(command2)
        break;
    case "spotify-this-song":
        getSong(command2)
        break;
    case "movie-this":
        getMovie(command2)
        break;
    case "do-what-it-this":
        doIt(command2)
        break;
    default:
        break;
}

function getConcert(command2) {
    axios.get(`https://rest.bandsintown.com/artists/${command2}/events?app_id=codingbootcamp`)
        .then(function (response) {
            console.log(`==========CONCERT INFO==========`);
            console.log();
            console.log(`Venue Name: ${response.data[0].venue.name}`)
            console.log(`Venue Location: ${response.data[0].venue.city}`)
            console.log(`Event Date: ${moment(response.data[0].datetime).format('L')}`);
            console.log();
            console.log(`================================`)
        })
        .catch(function (error) {
            console.log(error);
        })
}