# Liri-Node-App
LIRI is a command line node app that takes in parameters and gives you back data based off the following parameters:

* concert-this
* spotify-this-song
* movie-this
* do-what-it-says

## How It Works:
### concert-this:
`node liri.js concert-this <artist/band>`
![concert-this-image](/concert-this.png)

This will search the Bands in Town Artist Events API for an artist and display the following information about each event to the terminal/bash window:

* Name of the venue
* Venue location
* Date of the Event (MM/DD/YYYY)

### spotify-this-song:
`node liri.js spotify-this-song <song>`
![spotify-this-song-image](/spotify-this-song.png)

This will search the Spotify API and display the following information about the song in the terminal/bash window:

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

*If no song is provided then the program will default to "The Sign" by Ace of Base (This particular one shows "Sign" by Harry Styles.*
![spotify-this-song-no-command](/spotify-this-song-no-command.png)

### movie-this:
`node liri.js movie-this <movie>`
![movie-this](/movie-this.png)

This will search the OMDB API and display the following information to the terminal/bash window:

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.

*If a movie in is not entered, the program will output data for the movie 'Mr. Nobody.'*
![movie-this-no-command](/movie-this-no-command.png)

### do-what-it-says:
`node liri.js do-what-it-says`
![do-what-it-says](/do-what-it-says.png)

With this command LIRI will use the text from the “random.txt” file and call one of LIRI’s commands. It should run spotify-this-song for “I want it That way”.

### Technologies used:
* Spotify API
* OMDB API
* Bands In Town API
* Node.js
* Javascript
* NPM packages
