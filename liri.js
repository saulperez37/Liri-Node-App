require("dotenv").config();

let keys = require("./keys.js");
let fs = require("fs");
let axios = require("axios");
let moment = require("moment");
let Spotify = require("node-spotify-api");
let spotify = new Spotify(keys.spotify);
let bandsInTown = keys.bandsInTown;
let omdbKey = keys.omdb.id;

let command1 = process.argv[2];
let command2 = process.argv.slice(3).join(" ");

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
    case "do-what-it-says":
        doIt(command2)
        break;
    default:
        break;
}

function getConcert(command2) {
    axios.get(`https://rest.bandsintown.com/artists/${command2}/events?app_id=${bandsInTown}`)
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
            console.log(`Sorry but we don't have concert info for ${command2} at this time.`)
            console.log();
            console.log(`================================`)
            console.log();
            console.log(error);
        })
};

function getSong(command2) {
    if (command2 === "") {
        command2 = "The Sign";
    }

    spotify.search({ type: 'track', query: command2 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(`===============TRACK INFO===============`);
        console.log();
        console.log(`Artist(s): ${data.tracks.items[0].album.artists[0].name}`);
        console.log(`Song Name: ${data.tracks.items[0].name}`);
        console.log(`Song Preview Link: ${data.tracks.items[0].preview_url}`);
        console.log(`Album: ${data.tracks.items[0].album.name}`);
        console.log();
        console.log(`========================================`);
    });
};

function getMovie(command2) {
    if (command2 === "") {
        command2 = "Mr. Nobody";
        console.log();
        console.log(`If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/`);
        console.log(`It's on Netflix!`);
        console.log();
    }

    axios.get(`https://www.omdbapi.com/?apikey=${omdbKey}&t=${command2}`)
        .then(function (response) {

            console.log(`===========MOVIE INFO===========`);
            console.log();
            console.log(`Movie Title: ${response.data.Title}`);
            console.log(`Release Year: ${response.data.Year}`);
            console.log(`IMDB Rating: ${response.data.Ratings[0].Value}`);
            console.log(`Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}`);
            console.log(`Country Where Movie Was Produced: ${response.data.Country}`);
            console.log(`Language: ${response.data.Language}`);
            console.log(`Plot: ${response.data.Plot}`);
            console.log(`Actors: ${response.data.Actors}`);
            console.log();
            console.log(`===================================`);
        })
        .catch(function (error) {
            console.log(error);
        })
};

function doIt() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }

        let command = data.split(",")

        getSong(command[1]);

    })
};


