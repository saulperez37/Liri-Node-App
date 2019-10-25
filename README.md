# Liri-Node-App
LIRI is a command line node app that takes in parameters and gives you back data based off the following parameters:

* concert-this
* Spotify-this-song
* movie-this
* do-what-it-says

## How It Works:
### concert-this:
Screen shot here

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")

### Spotify-this-song:
Screen shot here

This will show the following information about the song in your terminal/bash window

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

### movie-this:
Screen shot here

This will output the following information to your terminal/bash window:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Rotten Tomatoes Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
do-what-it-says:
Screen shot

LIRI will use the text from “random.txt” and call on of LIRI’s commands. It should run Spotify-this-song for “I want it That way”.

### Technologies used:
* Spotify API
* OMDB API
* Bands In Town API
* Node.js
* Javascript
* NPM packages
