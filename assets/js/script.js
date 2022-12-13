//omdb movie links. add key 
//change url after variables are established
//this link is only to one movie but with data function having all listed vars, pulling from all will be as easy as pullign from one
//happy movies array using API links(Praying it wokrs)
var happyMoviesArray = [
  "https://www.omdbapi.com/?t=Little-Miss-Sunshine&apikey=189f17cc",
  "https://www.omdbapi.com/?t=Love-Actually&apikey=189f17cc",
  "https://www.omdbapi.com/?t=Good-Will-Hunting&apikey=189f17cc",
  "https://www.omdbapi.com/?t=Forrest%20Gump&apikey=189f17cc",
  "https://www.omdbapi.com/?t=Despicable-Me&apikey=189f17cc",
  "https://www.omdbapi.com/?t=Sound-of-Music&apikey=189f17cc",
  "https://www.omdbapi.com/?t=It%27s-A-Wonderful-Life&apikey=189f17cc",
  "https://www.omdbapi.com/?t=singin-in-the-rain&apikey=189f17cc",
  "https://www.omdbapi.com/?t=Inside-Out&apikey=189f17cc",
  "https://www.omdbapi.com/?t=Goonies&apikey=189f17cc",
]
//same for sad movies
var sadMovieArray = []


function renderHappy(){
  var movieUrl = genNextMovie(happyMoviesArray)
  fetchMovie(movieUrl)
}
//do same for sad
function renderSad(){
  var movieUrl = genNextMovie(sadMovieArray)
}

// var movieUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=189f17cc"

//function calls fetch
//random link by index
function fetchMovie(movieUrl){
fetch (movieUrl, {

  cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var movieName = data.Title;
    document.querySelector('#movie-title').textContent = movieName
    // var movieGenre = data.Genre;
    // document.querySelector('#movie-genre').textContent = movieGenre;
    var moviePoster = data.Poster;
    document.querySelector('#movie-poster').setAttribute("src", moviePoster);
    var moviePlot =data.Plot;
    document.querySelector('#movie-plot').textContent = moviePlot
    var movieReleaseDate = data.Released;
document.querySelector("#movie-release-date").textContent = movieReleaseDate

  });
}

// google books API only searching The Outsiders, change to wider range at later time
//because google API only goes by Volume ID its best to pivot to a local array of "happy" or "sad" books

//insert array of books 50 being happy other 50 being sad.
var happyBooksArray = [
  {
    title: "Beetlejuice",
    year: "1988",
    runtime: "92",
    genres: ["Comedy", "Fantasy"],
    director: "Tim Burton",
    actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
    plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg",
  },
  {
    title: "Crocodile Dundee",
    year: "1986",
    runtime: "97",
    genres: ["Adventure", "Comedy"],
    director: "Peter Faiman",
    actors: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
    plot: "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
  },
  {
    title: "Ratatouille",
    year: "2007",
    runtime: "111",
    genres: ["Animation", "Comedy", "Family"],
    director: "Brad Bird, Jan Pinkava",
    actors: "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
    plot: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
  },
  {
    title: "The Intouchables",
    year: "2011",
    runtime: "112",
    genres: ["Biography", "Comedy", "Drama"],
    director: "Olivier Nakache, Eric Toledano",
    actors: "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
    plot: "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg",
  },
  {
    title: "Planet 51",
    year: "2009",
    runtime: "91",
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Jorge Blanco, Javier Abad, Marcos Martínez",
    actors: "Jessica Biel, John Cleese, Gary Oldman, Dwayne Johnson",
    plot: "An alien civilization is invaded by Astronaut Chuck Baker, who believes that the planet was uninhabited. Wanted by the military, Baker must get back to his ship before it goes into orbit without him.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTUyOTAyNTA5Ml5BMl5BanBnXkFtZTcwODU2OTM0Mg@@._V1_SX300.jpg",
  },
  {
    title: "Chasing Amy",
    year: "1997",
    runtime: "113",
    genres: ["Comedy", "Drama", "Romance"],
    director: "Kevin Smith",
    actors: "Ethan Suplee, Ben Affleck, Scott Mosier, Jason Lee",
    plot: "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's gay.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM3MTg2MGUtZDM0MC00NzMwLWE5NjItOWFjNjA2M2I4YzgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    title: "Snatch",
    year: "2000",
    runtime: "102",
    genres: ["Comedy", "Crime"],
    director: "Guy Ritchie",
    actors: "Benicio Del Toro, Dennis Farina, Vinnie Jones, Brad Pitt",
    plot: "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    title: "Lock, Stock and Two Smoking Barrels",
    year: "1998",
    runtime: "107",
    genres: ["Comedy", "Crime"],
    director: "Guy Ritchie",
    actors: "Jason Flemyng, Dexter Fletcher, Nick Moran, Jason Statham",
    plot: "A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    title: "Midnight in Paris",
    year: "2011",
    runtime: "94",
    genres: ["Comedy", "Fantasy", "Romance"],
    director: "Woody Allen",
    actors: "Owen Wilson, Rachel McAdams, Kurt Fuller, Mimi Kennedy",
    plot: "While on a trip to Paris with his fiancée's family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s everyday at midnight.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_SX300.jpg",
  },
  {
    title: "The Hangover",
    year: "2009",
    runtime: "100",
    genres: ["Comedy"],
    director: "Todd Phillips",
    actors: "Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha",
    plot: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_SX300.jpg",
  },
  {
    title: "Mary and Max",
    year: "2009",
    runtime: "92",
    genres: ["Animation", "Comedy", "Drama"],
    director: "Adam Elliot",
    actors: "Toni Collette, Philip Seymour Hoffman, Barry Humphries, Eric Bana",
    plot: "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1NDIyNTA1Nl5BMl5BanBnXkFtZTcwMjc2Njk3OA@@._V1_SX300.jpg",
  },
  {
    title: "The Truman Show",
    year: "1998",
    runtime: "103",
    genres: ["Comedy", "Drama", "Sci-Fi"],
    director: "Peter Weir",
    actors: "Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone",
    plot: "An insurance salesman/adjuster discovers his entire life is actually a television show.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    title: "The Artist",
    year: "2011",
    runtime: "100",
    genres: ["Comedy", "Drama", "Romance"],
    director: "Michel Hazanavicius",
    actors: "Jean Dujardin, Bérénice Bejo, John Goodman, James Cromwell",
    plot: "A silent movie star meets a young dancer, but the arrival of talking pictures sends their careers in opposite directions.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzk0NzQxMTM0OV5BMl5BanBnXkFtZTcwMzU4MDYyNQ@@._V1_SX300.jpg",
  },
  {
    title: "Forrest Gump",
    year: "1994",
    runtime: "142",
    genres: ["Comedy", "Drama"],
    director: "Robert Zemeckis",
    actors:
      "Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys",
    plot: "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYThjM2MwZGMtMzg3Ny00NGRkLWE4M2EtYTBiNWMzOTY0YTI4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
  },
  {
    title: "Despicable Me 2",
    year: "2013",
    runtime: "98",
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Pierre Coffin, Chris Renaud",
    actors: "Steve Carell, Kristen Wiig, Benjamin Bratt, Miranda Cosgrove",
    plot: "When Gru, the world's most super-bad turned super-dad has been recruited by a team of officials to stop lethal muscle and a host of Gru's own, He has to fight back with new gadgetry, cars, and more minion madness.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_SX300.jpg",
  },
  {
    title: "Madagascar",
    year: "2005",
    runtime: "86",
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Eric Darnell, Tom McGrath",
    actors: "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
    plot: "Spoiled by their upbringing with no idea what wild life is really like, four animals from New York Central Zoo escape, unwittingly assisted by four absconding penguins, and find themselves in Madagascar, among a bunch of merry lemurs",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NDUwMzQxMF5BMl5BanBnXkFtZTcwMDgwNjgyMQ@@._V1_SX300.jpg",
  },
  {
    title: "Madagascar 3: Europe's Most Wanted",
    year: "2012",
    runtime: "93",
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Eric Darnell, Tom McGrath, Conrad Vernon",
    actors: "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
    plot: "Alex, Marty, Gloria and Melman are still fighting to get home to their beloved Big Apple. Their journey takes them through Europe where they find the perfect cover: a traveling circus, which they reinvent - Madagascar style.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTIzNzk2MF5BMl5BanBnXkFtZTcwMDcwMzQxNw@@._V1_SX300.jpg",
  },
  {
    title: "God Bless America",
    year: "2011",
    runtime: "105",
    genres: ["Comedy", "Crime"],
    director: "Bobcat Goldthwait",
    actors:
      "Joel Murray, Tara Lynne Barr, Melinda Page Hamilton, Mackenzie Brooke Smith",
    plot: "On a mission to rid society of its most repellent citizens, terminally ill Frank makes an unlikely accomplice in 16-year-old Roxy.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMTc1MzA4NF5BMl5BanBnXkFtZTcwNzQwMTgzNw@@._V1_SX300.jpg",
  },
  {
    title: "The Wolf of Wall Street",
    year: "2013",
    runtime: "180",
    genres: ["Biography", "Comedy", "Crime"],
    director: "Martin Scorsese",
    actors: "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
    plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
  },
  {
    title: "I-See-You.Com",
    year: "2006",
    runtime: "92",
    genres: ["Comedy"],
    director: "Eric Steven Stahl",
    actors: "Beau Bridges, Rosanna Arquette, Mathew Botuchis, Shiri Appleby",
    plot: "A 17-year-old boy buys mini-cameras and displays the footage online at I-see-you.com. The cash rolls in as the site becomes a major hit. Everyone seems to have fun until it all comes crashing down....",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMDUzNzA5Nl5BMl5BanBnXkFtZTcwMjQ2Njk3MQ@@._V1_SX300.jpg",
  },
  {
    title: "The Grand Budapest Hotel",
    year: "2014",
    runtime: "99",
    genres: ["Adventure", "Comedy", "Crime"],
    director: "Wes Anderson",
    actors: "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric, Adrien Brody",
    plot: "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    year: "2005",
    runtime: "109",
    genres: ["Adventure", "Comedy", "Sci-Fi"],
    director: "Garth Jennings",
    actors: "Bill Bailey, Anna Chancellor, Warwick Davis, Yasiin Bey",
    plot: 'Mere seconds before the Earth is to be demolished by an alien construction crew, journeyman Arthur Dent is swept off the planet by his friend Ford Prefect, a researcher penning a new edition of "The Hitchhiker\'s Guide to the Galaxy."',
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMjEwOTk4NjU2MF5BMl5BanBnXkFtZTYwMDA3NzI3._V1_SX300.jpg",
  },
  {
    title: "Silver Linings Playbook",
    year: "2012",
    runtime: "122",
    genres: ["Comedy", "Drama", "Romance"],
    director: "David O. Russell",
    actors: "Bradley Cooper, Jennifer Lawrence, Robert De Niro, Jacki Weaver",
    plot: "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_SX300.jpg",
  },
  {
    title: "Kiss Kiss Bang Bang",
    year: "2005",
    runtime: "103",
    genres: ["Comedy", "Crime", "Mystery"],
    director: "Shane Black",
    actors: "Robert Downey Jr., Val Kilmer, Michelle Monaghan, Corbin Bernsen",
    plot: "A murder mystery brings together a private eye, a struggling actress, and a thief masquerading as an actor.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTY5NDExMDA3M15BMl5BanBnXkFtZTYwNTc2MzA3._V1_SX300.jpg",
  },
  {
    title: "The Rum Diary",
    year: "2011",
    runtime: "120",
    genres: ["Comedy", "Drama"],
    director: "Bruce Robinson",
    actors: "Johnny Depp, Aaron Eckhart, Michael Rispoli, Amber Heard",
    plot: "American journalist Paul Kemp takes on a freelance job in Puerto Rico for a local newspaper during the 1960s and struggles to find a balance between island culture and the expatriates who live there.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5ODA4MjYxM15BMl5BanBnXkFtZTcwMTM3NTE5Ng@@._V1_SX300.jpg",
  },
  {
    title: "Calvary",
    year: "2014",
    runtime: "102",
    genres: ["Comedy", "Drama"],
    director: "John Michael McDonagh",
    actors: "Brendan Gleeson, Chris O'Dowd, Kelly Reilly, Aidan Gillen",
    plot: "After he is threatened during a confession, a good-natured priest must battle the dark forces closing in around him.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MjQ1MjE2M15BMl5BanBnXkFtZTgwNTMzNjE4MTE@._V1_SX300.jpg",
  },
  {
    title: "Birdman or (The Unexpected Virtue of Ignorance)",
    year: "2014",
    runtime: "119",
    genres: ["Comedy", "Drama", "Romance"],
    director: "Alejandro G. Iñárritu",
    actors: "Michael Keaton, Emma Stone, Kenny Chin, Jamahl Garrison-Lowe",
    plot: "Illustrated upon the progress of his latest Broadway play, a former popular actor's struggle to cope with his current life as a wasted actor is shown.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_SX300.jpg",
  },
  {
    title: "Big Nothing",
    year: "2006",
    runtime: "86",
    genres: ["Comedy", "Crime", "Thriller"],
    director: "Jean-Baptiste Andrea",
    actors: "David Schwimmer, Simon Pegg, Alice Eve, Natascha McElhone",
    plot: "A frustrated, unemployed teacher joining forces with a scammer and his girlfriend in a blackmailing scheme.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NTc2NjYwOV5BMl5BanBnXkFtZTcwMzk5OTY0MQ@@._V1_SX300.jpg",
  },
  {
    title: "Shrek 2",
    year: "2004",
    runtime: "93",
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Andrew Adamson, Kelly Asbury, Conrad Vernon",
    actors: "Mike Myers, Eddie Murphy, Cameron Diaz, Julie Andrews",
    plot: "Princess Fiona's parents invite her and Shrek to dinner to celebrate her marriage. If only they knew the newlyweds were both ogres.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg",
  },
  {
    title: "Nebraska",
    year: "2013",
    runtime: "115",
    genres: ["Adventure", "Comedy", "Drama"],
    director: "Alexander Payne",
    actors: "Bruce Dern, Will Forte, June Squibb, Bob Odenkirk",
    plot: "An aging, booze-addled father makes the trip from Montana to Nebraska with his estranged son in order to claim a million-dollar Mega Sweepstakes Marketing prize.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2Mjk2NDkyMl5BMl5BanBnXkFtZTgwNTk0NzcyMDE@._V1_SX300.jpg",
  },
  {
    title: "Shrek",
    year: "2001",
    runtime: "90",
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Andrew Adamson, Vicky Jenson",
    actors: "Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow",
    plot: "After his swamp is filled with magical creatures, an ogre agrees to rescue a princess for a villainous lord in order to get his land back.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTE1NTE0M15BMl5BanBnXkFtZTgwNjY4NTYxMTE@._V1_SX300.jpg",
  },
  {
    title: "Mr. & Mrs. Smith",
    year: "2005",
    runtime: "120",
    genres: ["Action", "Comedy", "Crime"],
    director: "Doug Liman",
    actors: "Brad Pitt, Angelina Jolie, Vince Vaughn, Adam Brody",
    plot: "A bored married couple is surprised to learn that they are both assassins hired by competing agencies to kill each other.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_SX300.jpg",
  },
  {
    title: "Shrek Forever After",
    year: "2010",
    runtime: "93",
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Mike Mitchell",
    actors: "Mike Myers, Eddie Murphy, Cameron Diaz, Antonio Banderas",
    plot: "Rumpelstiltskin tricks a mid-life crisis burdened Shrek into allowing himself to be erased from existence and cast in a dark alternate timeline where Rumpel rules supreme.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTY0OTU1NzkxMl5BMl5BanBnXkFtZTcwMzI2NDUzMw@@._V1_SX300.jpg",
  },
  {
    title: "Despicable Me",
    year: "2010",
    runtime: "95",
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Pierre Coffin, Chris Renaud",
    actors: "Steve Carell, Jason Segel, Russell Brand, Julie Andrews",
    plot: "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_SX300.jpg",
  },
  {
    title: "Ice Age",
    year: "2002",
    runtime: "81",
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Chris Wedge, Carlos Saldanha",
    actors: "Ray Romano, John Leguizamo, Denis Leary, Goran Visnjic",
    plot: "Set during the Ice Age, a sabertooth tiger, a sloth, and a wooly mammoth find a lost human infant, and they try to return him to his tribe.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzI1ODA0MF5BMl5BanBnXkFtZTYwODIxODY3._V1_SX300.jpg",
  },
  {
    title: "The Big Short",
    year: "2015",
    runtime: "130",
    genres: ["Biography", "Comedy", "Drama"],
    director: "Adam McKay",
    actors: "Ryan Gosling, Rudy Eisenzopf, Casey Groves, Charlie Talbert",
    plot: "Four denizens in the world of high-finance predict the credit and housing bubble collapse of the mid-2000s, and decide to take on the big banks for their greed and lack of foresight.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    title: "The Beach",
    year: "2000",
    runtime: "119",
    genres: ["Adventure", "Drama", "Romance"],
    director: "Danny Boyle",
    actors:
      "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
    plot: "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
];

var movieSad = [
  {
    title: "The Cotton Club",
    year: "1984",
    runtime: "127",
    genres: ["Crime", "Drama", "Music"],
    director: "Francis Ford Coppola",
    actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
    plot: "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
  },
  {
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
  },
  {
    title: "Valkyrie",
    year: "2008",
    runtime: "121",
    genres: ["Drama", "History", "Thriller"],
    director: "Bryan Singer",
    actors: "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
    plot: "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg",
  },
  {
    title: "City of God",
    year: "2002",
    runtime: "130",
    genres: ["Crime", "Drama"],
    director: "Fernando Meirelles, Kátia Lund",
    actors:
      "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
    plot: "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg",
  },
  {
    title: "Apocalypto",
    year: "2006",
    runtime: "139",
    genres: ["Action", "Adventure", "Drama"],
    director: "Mel Gibson",
    actors:
      "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
    plot: "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg",
  },
  {
    title: "Taxi Driver",
    year: "1976",
    runtime: "113",
    genres: ["Crime", "Drama"],
    director: "Martin Scorsese",
    actors: "Diahnne Abbott, Frank Adu, Victor Argo, Gino Ardito",
    plot: "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    title: "No Country for Old Men",
    year: "2007",
    runtime: "122",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Ethan Coen, Joel Coen",
    actors: "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
    plot: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
  },
  {
    title: "Looper",
    year: "2012",
    runtime: "119",
    genres: ["Action", "Crime", "Drama"],
    director: "Rian Johnson",
    actors: "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
    plot: "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTY3NTY0MjEwNV5BMl5BanBnXkFtZTcwNTE3NDA1OA@@._V1_SX300.jpg",
  },
  {
    title: "Corpse Bride",
    year: "2005",
    runtime: "77",
    genres: ["Animation", "Drama", "Family"],
    director: "Tim Burton, Mike Johnson",
    actors: "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
    plot: "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_SX300.jpg",
  },

  {
    title: "Scarface",
    year: "1983",
    runtime: "170",
    genres: ["Crime", "Drama"],
    director: "Brian De Palma",
    actors:
      "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
    plot: "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg",
  },

  {
    title: "Black Swan",
    year: "2010",
    runtime: "108",
    genres: ["Drama", "Thriller"],
    director: "Darren Aronofsky",
    actors: "Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey",
    plot: 'A committed dancer wins the lead role in a production of Tchaikovsky\'s "Swan Lake" only to find herself struggling to maintain her sanity.',
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg",
  },
  {
    title: "The Deer Hunter",
    year: "1978",
    runtime: "183",
    genres: ["Drama", "War"],
    director: "Michael Cimino",
    actors: "Robert De Niro, John Cazale, John Savage, Christopher Walken",
    plot: "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzYmRmZTQtYjk2NS00MDdlLTkxMDAtMTE2YTM2ZmNlMTBkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    title: "Django Unchained",
    year: "2012",
    runtime: "165",
    genres: ["Drama", "Western"],
    director: "Quentin Tarantino",
    actors: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington",
    plot: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
  },
  {
    title: "The Silence of the Lambs",
    year: "1991",
    runtime: "118",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Jonathan Demme",
    actors:
      "Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz",
    plot: "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg",
  },
  {
    title: "Midnight Express",
    year: "1978",
    runtime: "121",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Alan Parker",
    actors: "Brad Davis, Irene Miracle, Bo Hopkins, Paolo Bonacelli",
    plot: "Billy Hayes, an American college student, is caught smuggling drugs out of Turkey and thrown into prison.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg",
  },
  {
    title: "Pulp Fiction",
    year: "1994",
    runtime: "154",
    genres: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    actors: "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
    plot: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg",
  },

  {
    title: "Rear Window",
    year: "1954",
    runtime: "112",
    genres: ["Mystery", "Thriller"],
    director: "Alfred Hitchcock",
    actors: "James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter",
    plot: "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    title: "Pan's Labyrinth",
    year: "2006",
    runtime: "118",
    genres: ["Drama", "Fantasy", "War"],
    director: "Guillermo del Toro",
    actors: "Ivana Baquero, Sergi López, Maribel Verdú, Doug Jones",
    plot: "In the falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
    posterUrl: "",
  },
  {
    title: "Reservoir Dogs",
    year: "1992",
    runtime: "99",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Quentin Tarantino",
    actors: "Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn",
    plot: "After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5ZDJiZTQtOGE2YS00ZTc5LTk0OGUtOTg2NjdjZmVlYzE2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg",
  },
  {
    title: "The Shining",
    year: "1980",
    runtime: "146",
    genres: ["Drama", "Horror"],
    director: "Stanley Kubrick",
    actors: "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
    plot: "A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BODMxMjE3NTA4Ml5BMl5BanBnXkFtZTgwNDc0NTIxMDE@._V1_SX300.jpg",
  },
  {
    title: "L.A. Confidential",
    year: "1997",
    runtime: "138",
    genres: ["Crime", "Drama", "Mystery"],
    director: "Curtis Hanson",
    actors: "Kevin Spacey, Russell Crowe, Guy Pearce, James Cromwell",
    plot: "As corruption grows in 1950s LA, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNWEwNDhhNWUtYWMzNi00ZTNhLWFiZDAtMjBjZmJhMTU0ZTY2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    title: "Flight",
    year: "2012",
    runtime: "138",
    genres: ["Drama", "Thriller"],
    director: "Robert Zemeckis",
    actors:
      "Nadine Velazquez, Denzel Washington, Carter Cabassa, Adam C. Edwards",
    plot: "An airline pilot saves almost all his passengers on his malfunctioning airliner which eventually crashed, but an investigation into the accident reveals something troubling.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjI1OTMxNl5BMl5BanBnXkFtZTcwNjc3NTY1OA@@._V1_SX300.jpg",
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    year: "1975",
    runtime: "133",
    genres: ["Drama"],
    director: "Milos Forman",
    actors: "Michael Berryman, Peter Brocco, Dean R. Brooks, Alonzo Brown",
    plot: "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYmJkODkwOTItZThjZC00MTE0LWIxNzQtYTM3MmQwMGI1OWFiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  },
  {
    title: "Lost in Translation",
    year: "2003",
    runtime: "101",
    genres: ["Drama"],
    director: "Sofia Coppola",
    actors:
      "Scarlett Johansson, Bill Murray, Akiko Takeshita, Kazuyoshi Minamimagoe",
    plot: "A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2NDI5ODk4N15BMl5BanBnXkFtZTYwMTI3NTE3._V1_SX300.jpg",
  },
  {
    title: "Match Point",
    year: "2005",
    runtime: "119",
    genres: ["Drama", "Romance", "Thriller"],
    director: "Woody Allen",
    actors:
      "Jonathan Rhys Meyers, Alexander Armstrong, Paul Kaye, Matthew Goode",
    plot: "At a turning point in his life, a former tennis pro falls for an actress who happens to be dating his friend and soon-to-be brother-in-law.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzNzY4MzE5NF5BMl5BanBnXkFtZTcwMzQ1MDMzMQ@@._V1_SX300.jpg",
  },
  {
    title: "Downfall",
    year: "2004",
    runtime: "156",
    genres: ["Biography", "Drama", "History"],
    director: "Oliver Hirschbiegel",
    actors:
      "Bruno Ganz, Alexandra Maria Lara, Corinna Harfouch, Ulrich Matthes",
    plot: "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1OTI1MjE2Nl5BMl5BanBnXkFtZTcwMTEwMzc4NA@@._V1_SX300.jpg",
  },
  {
    title: "The Pianist",
    year: "2002",
    runtime: "150",
    genres: ["Biography", "Drama", "War"],
    director: "Roman Polanski",
    actors: "Adrien Brody, Emilia Fox, Michal Zebrowski, Ed Stoppard",
    plot: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTc4OTkyOTA3OF5BMl5BanBnXkFtZTYwMDIxNjk5._V1_SX300.jpg",
  },

  {
    title: "Casablanca",
    year: "1942",
    runtime: "102",
    genres: ["Drama", "Romance", "War"],
    director: "Michael Curtiz",
    actors: "Humphrey Bogart, Ingrid Bergman, Paul Henreid, Claude Rains",
    plot: "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwNDYyNTk2N15BMl5BanBnXkFtZTgwMjQ0OTMyMjE@._V1_SX300.jpg",
  },

  {
    title: "Chocolat",
    year: "2000",
    runtime: "121",
    genres: ["Drama", "Romance"],
    director: "Lasse Hallström",
    actors:
      "Alfred Molina, Carrie-Anne Moss, Aurelien Parent Koenig, Antonio Gil",
    plot: "A woman and her daughter open a chocolate shop in a small French village that shakes up the rigid morality of the community.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MDI3NTQwMV5BMl5BanBnXkFtZTcwNjIzNDcyMQ@@._V1_SX300.jpg",
  },
  {
    title: "Sunset Boulevard",
    year: "1950",
    runtime: "110",
    genres: ["Drama", "Film-Noir", "Romance"],
    director: "Billy Wilder",
    actors: "William Holden, Gloria Swanson, Erich von Stroheim, Nancy Olson",
    plot: "A hack screenwriter writes a screenplay for a former silent-film star who has faded into Hollywood obscurity.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTc3NDYzODAwNV5BMl5BanBnXkFtZTgwODg1MTczMTE@._V1_SX300.jpg",
  },
  {
    title: "V for Vendetta",
    year: "2005",
    runtime: "132",
    genres: ["Action", "Drama", "Thriller"],
    director: "James McTeigue",
    actors: "Natalie Portman, Hugo Weaving, Stephen Rea, Stephen Fry",
    plot: 'In a future British tyranny, a shadowy freedom fighter, known only by the alias of "V", plots to overthrow it with the help of a young woman.',
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg",
  },
  {
    title: "Gattaca",
    year: "1997",
    runtime: "106",
    genres: ["Drama", "Sci-Fi", "Thriller"],
    director: "Andrew Niccol",
    actors: "Ethan Hawke, Uma Thurman, Gore Vidal, Xander Berkeley",
    plot: "A genetically inferior man assumes the identity of a superior one in order to pursue his lifelong dream of space travel.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDQxOTc0MzMtZmRlOS00OWQ5LWI2ZDctOTAwNmMwOTYxYzlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },

  {
    title: "The Quiet American",
    year: "2002",
    runtime: "101",
    genres: ["Drama", "Mystery", "Romance"],
    director: "Phillip Noyce",
    actors: "Michael Caine, Brendan Fraser, Do Thi Hai Yen, Rade Serbedzija",
    plot: "An older British reporter vies with a young U.S. doctor for the affections of a beautiful Vietnamese woman.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMjE2NTUxNTE3Nl5BMl5BanBnXkFtZTYwNTczMTg5._V1_SX300.jpg",
  },
  {
    title: "The Great Gatsby",
    year: "2013",
    runtime: "143",
    genres: ["Drama", "Romance"],
    director: "Baz Luhrmann",
    actors: "Lisa Adam, Frank Aldridge, Amitabh Bachchan, Steve Bisley",
    plot: "A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg",
  },
  {
    title: "Cloud Atlas",
    year: "2012",
    runtime: "172",
    genres: ["Drama", "Sci-Fi"],
    director: "Tom Tykwer, Lana Wachowski, Lilly Wachowski",
    actors: "Tom Hanks, Halle Berry, Jim Broadbent, Hugo Weaving",
    plot: "An exploration of how the actions of individual lives impact one another in the past, present and future, as one soul is shaped from a killer into a hero, and an act of kindness ripples across centuries to inspire a revolution.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg",
  },
  {
    title: "Spirited Away",
    year: "2001",
    runtime: "125",
    genres: ["Animation", "Adventure", "Family"],
    director: "Hayao Miyazaki",
    actors: "Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naitô",
    plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjYxMDcyMzIzNl5BMl5BanBnXkFtZTYwNDg2MDU3._V1_SX300.jpg",
  },
  {
    title: "Interstellar",
    year: "2014",
    runtime: "169",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    director: "Christopher Nolan",
    actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
  },
];

//Books array

var books = [
  {
    author: "David Eagleman",
    country: "United States",
    imageLink:
      "https://i0.wp.com/eagleman.com/wp-content/uploads/2019/11/Book-2@2x.png?fit=383%2C600&ssl=1",
    language: "English",
    link: "https://eagleman.com/books/sum/",
    pages: 128,
    title: "Sum: Forty Tales from the Afterlives",
    year: 2010,
  },
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    imageLink: "images/things-fall-apart.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    imageLink: "images/fairy-tales.jpg",
    language: "Danish",
    link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
  },
  {
    author: "Dante Alighieri",
    country: "Italy",
    imageLink: "images/the-divine-comedy.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
  },
  {
    author: "Unknown",
    country: "Sumer and Akkadian Empire",
    imageLink: "images/the-epic-of-gilgamesh.jpg",
    language: "Akkadian",
    link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: -1700,
  },
  {
    author: "Unknown",
    country: "Achaemenid Empire",
    imageLink: "images/the-book-of-job.jpg",
    language: "Hebrew",
    link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
    pages: 176,
    title: "The Book Of Job",
    year: -600,
  },
  {
    author: "Unknown",
    country: "India/Iran/Iraq/Egypt/Tajikistan",
    imageLink: "images/one-thousand-and-one-nights.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
    pages: 288,
    title: "One Thousand and One Nights",
    year: 1200,
  },
  {
    author: "Unknown",
    country: "Iceland",
    imageLink: "images/njals-saga.jpg",
    language: "Old Norse",
    link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
    pages: 384,
    title: "Njál's Saga",
    year: 1350,
  },
  {
    author: "Jane Austen",
    country: "United Kingdom",
    imageLink: "images/pride-and-prejudice.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
    pages: 226,
    title: "Pride and Prejudice",
    year: 1813,
  },
  {
    author: "Honoré de Balzac",
    country: "France",
    imageLink: "images/le-pere-goriot.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
    pages: 443,
    title: "Le Père Goriot",
    year: 1835,
  },
  {
    author: "Samuel Beckett",
    country: "Republic of Ireland",
    imageLink: "images/molloy-malone-dies-the-unnamable.jpg",
    language: "French, English",
    link: "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
    pages: 256,
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    year: 1952,
  },
  {
    author: "Giovanni Boccaccio",
    country: "Italy",
    imageLink: "images/the-decameron.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/The_Decameron\n",
    pages: 1024,
    title: "The Decameron",
    year: 1351,
  },
  {
    author: "Jorge Luis Borges",
    country: "Argentina",
    imageLink: "images/ficciones.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Ficciones\n",
    pages: 224,
    title: "Ficciones",
    year: 1965,
  },
  {
    author: "Emily Brontë",
    country: "United Kingdom",
    imageLink: "images/wuthering-heights.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
    pages: 342,
    title: "Wuthering Heights",
    year: 1847,
  },
  {
    author: "Albert Camus",
    country: "Algeria, French Empire",
    imageLink: "images/l-etranger.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
    pages: 185,
    title: "The Stranger",
    year: 1942,
  },
  {
    author: "Paul Celan",
    country: "Romania, France",
    imageLink: "images/poems-paul-celan.jpg",
    language: "German",
    link: "\n",
    pages: 320,
    title: "Poems",
    year: 1952,
  },
  {
    author: "Louis-Ferdinand Céline",
    country: "France",
    imageLink: "images/voyage-au-bout-de-la-nuit.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
    pages: 505,
    title: "Journey to the End of the Night",
    year: 1932,
  },
  {
    author: "Miguel de Cervantes",
    country: "Spain",
    imageLink: "images/don-quijote-de-la-mancha.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Don_Quixote\n",
    pages: 1056,
    title: "Don Quijote De La Mancha",
    year: 1610,
  },
  {
    author: "Geoffrey Chaucer",
    country: "England",
    imageLink: "images/the-canterbury-tales.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
    pages: 544,
    title: "The Canterbury Tales",
    year: 1450,
  },
  {
    author: "Anton Chekhov",
    country: "Russia",
    imageLink: "images/stories-of-anton-chekhov.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
    pages: 194,
    title: "Stories",
    year: 1886,
  },
  {
    author: "Joseph Conrad",
    country: "United Kingdom",
    imageLink: "images/nostromo.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Nostromo\n",
    pages: 320,
    title: "Nostromo",
    year: 1904,
  },
  {
    author: "Charles Dickens",
    country: "United Kingdom",
    imageLink: "images/great-expectations.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Great_Expectations\n",
    pages: 194,
    title: "Great Expectations",
    year: 1861,
  },
  {
    author: "Denis Diderot",
    country: "France",
    imageLink: "images/jacques-the-fatalist.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
    pages: 596,
    title: "Jacques the Fatalist",
    year: 1796,
  },
  {
    author: "Alfred Döblin",
    country: "Germany",
    imageLink: "images/berlin-alexanderplatz.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
    pages: 600,
    title: "Berlin Alexanderplatz",
    year: 1929,
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "images/crime-and-punishment.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
    pages: 551,
    title: "Crime and Punishment",
    year: 1866,
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "images/the-idiot.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/The_Idiot\n",
    pages: 656,
    title: "The Idiot",
    year: 1869,
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "images/the-possessed.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
    pages: 768,
    title: "The Possessed",
    year: 1872,
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "images/the-brothers-karamazov.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
    pages: 824,
    title: "The Brothers Karamazov",
    year: 1880,
  },
  {
    author: "George Eliot",
    country: "United Kingdom",
    imageLink: "images/middlemarch.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Middlemarch\n",
    pages: 800,
    title: "Middlemarch",
    year: 1871,
  },
  {
    author: "Ralph Ellison",
    country: "United States",
    imageLink: "images/invisible-man.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Invisible_Man\n",
    pages: 581,
    title: "Invisible Man",
    year: 1952,
  },
  {
    author: "Euripides",
    country: "Greece",
    imageLink: "images/medea.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Medea_(play)\n",
    pages: 104,
    title: "Medea",
    year: -431,
  },
  {
    author: "William Faulkner",
    country: "United States",
    imageLink: "images/absalom-absalom.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
    pages: 313,
    title: "Absalom, Absalom!",
    year: 1936,
  },
  {
    author: "William Faulkner",
    country: "United States",
    imageLink: "images/the-sound-and-the-fury.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
    pages: 326,
    title: "The Sound and the Fury",
    year: 1929,
  },
  {
    author: "Gustave Flaubert",
    country: "France",
    imageLink: "images/madame-bovary.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Madame_Bovary\n",
    pages: 528,
    title: "Madame Bovary",
    year: 1857,
  },
  {
    author: "Gustave Flaubert",
    country: "France",
    imageLink: "images/l-education-sentimentale.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Sentimental_Education\n",
    pages: 606,
    title: "Sentimental Education",
    year: 1869,
  },
  {
    author: "Federico García Lorca",
    country: "Spain",
    imageLink: "images/gypsy-ballads.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
    pages: 218,
    title: "Gypsy Ballads",
    year: 1928,
  },
  {
    author: "Gabriel García Márquez",
    country: "Colombia",
    imageLink: "images/one-hundred-years-of-solitude.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n",
    pages: 417,
    title: "One Hundred Years of Solitude",
    year: 1967,
  },
  {
    author: "Gabriel García Márquez",
    country: "Colombia",
    imageLink: "images/love-in-the-time-of-cholera.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n",
    pages: 368,
    title: "Love in the Time of Cholera",
    year: 1985,
  },
  {
    author: "Johann Wolfgang von Goethe",
    country: "Saxe-Weimar",
    imageLink: "images/faust.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Goethe%27s_Faust\n",
    pages: 158,
    title: "Faust",
    year: 1832,
  },
  {
    author: "Nikolai Gogol",
    country: "Russia",
    imageLink: "images/dead-souls.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Dead_Souls\n",
    pages: 432,
    title: "Dead Souls",
    year: 1842,
  },
  {
    author: "Günter Grass",
    country: "Germany",
    imageLink: "images/the-tin-drum.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Tin_Drum\n",
    pages: 600,
    title: "The Tin Drum",
    year: 1959,
  },
  {
    author: "João Guimarães Rosa",
    country: "Brazil",
    imageLink: "images/the-devil-to-pay-in-the-backlands.jpg",
    language: "Portuguese",
    link: "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n",
    pages: 494,
    title: "The Devil to Pay in the Backlands",
    year: 1956,
  },
  {
    author: "Knut Hamsun",
    country: "Norway",
    imageLink: "images/hunger.jpg",
    language: "Norwegian",
    link: "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n",
    pages: 176,
    title: "Hunger",
    year: 1890,
  },
  {
    author: "Ernest Hemingway",
    country: "United States",
    imageLink: "images/the-old-man-and-the-sea.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n",
    pages: 128,
    title: "The Old Man and the Sea",
    year: 1952,
  },
  {
    author: "Homer",
    country: "Greece",
    imageLink: "images/the-iliad-of-homer.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Iliad\n",
    pages: 608,
    title: "Iliad",
    year: -735,
  },
  {
    author: "Homer",
    country: "Greece",
    imageLink: "images/the-odyssey-of-homer.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Odyssey\n",
    pages: 374,
    title: "Odyssey",
    year: -800,
  },
  {
    author: "Henrik Ibsen",
    country: "Norway",
    imageLink: "images/a-Dolls-house.jpg",
    language: "Norwegian",
    link: "https://en.wikipedia.org/wiki/A_Doll%27s_House\n",
    pages: 68,
    title: "A Doll's House",
    year: 1879,
  },
  {
    author: "James Joyce",
    country: "Irish Free State",
    imageLink: "images/ulysses.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Ulysses_(novel)\n",
    pages: 228,
    title: "Ulysses",
    year: 1922,
  },
  {
    author: "Franz Kafka",
    country: "Czechoslovakia",
    imageLink: "images/stories-of-franz-kafka.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n",
    pages: 488,
    title: "Stories",
    year: 1924,
  },
  {
    author: "Franz Kafka",
    country: "Czechoslovakia",
    imageLink: "images/the-trial.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Trial\n",
    pages: 160,
    title: "The Trial",
    year: 1925,
  },
  {
    author: "Franz Kafka",
    country: "Czechoslovakia",
    imageLink: "images/the-castle.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Castle_(novel)\n",
    pages: 352,
    title: "The Castle",
    year: 1926,
  },
]
//sad books array below
var sadBooksArray = [

  {
    author: "Kālidāsa",
    country: "India",
    imageLink: "images/the-recognition-of-shakuntala.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n",
    pages: 147,
    title: "The recognition of Shakuntala",
    year: 150,
  },
  {
    author: "Yasunari Kawabata",
    country: "Japan",
    imageLink: "images/the-sound-of-the-mountain.jpg",
    language: "Japanese",
    link: "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n",
    pages: 288,
    title: "The Sound of the Mountain",
    year: 1954,
  },
  {
    author: "Nikos Kazantzakis",
    country: "Greece",
    imageLink: "images/zorba-the-greek.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Zorba_the_Greek\n",
    pages: 368,
    title: "Zorba the Greek",
    year: 1946,
  },
  {
    author: "D. H. Lawrence",
    country: "United Kingdom",
    imageLink: "images/sons-and-lovers.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Sons_and_Lovers\n",
    pages: 432,
    title: "Sons and Lovers",
    year: 1913,
  },
  {
    author: "Halldór Laxness",
    country: "Iceland",
    imageLink: "images/independent-people.jpg",
    language: "Icelandic",
    link: "https://en.wikipedia.org/wiki/Independent_People\n",
    pages: 470,
    title: "Independent People",
    year: 1934,
  },
  {
    author: "Giacomo Leopardi",
    country: "Italy",
    imageLink: "images/poems-giacomo-leopardi.jpg",
    language: "Italian",
    link: "\n",
    pages: 184,
    title: "Poems",
    year: 1818,
  },
  {
    author: "Doris Lessing",
    country: "United Kingdom",
    imageLink: "images/the-golden-notebook.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
    pages: 688,
    title: "The Golden Notebook",
    year: 1962,
  },
  {
    author: "Astrid Lindgren",
    country: "Sweden",
    imageLink: "images/pippi-longstocking.jpg",
    language: "Swedish",
    link: "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
    pages: 160,
    title: "Pippi Longstocking",
    year: 1945,
  },
  {
    author: "Lu Xun",
    country: "China",
    imageLink: "images/diary-of-a-madman.jpg",
    language: "Chinese",
    link: "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
    pages: 389,
    title: "Diary of a Madman",
    year: 1918,
  },
  {
    author: "Naguib Mahfouz",
    country: "Egypt",
    imageLink: "images/children-of-gebelawi.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
    pages: 355,
    title: "Children of Gebelawi",
    year: 1959,
  },
  {
    author: "Thomas Mann",
    country: "Germany",
    imageLink: "images/buddenbrooks.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Buddenbrooks\n",
    pages: 736,
    title: "Buddenbrooks",
    year: 1901,
  },
  {
    author: "Thomas Mann",
    country: "Germany",
    imageLink: "images/the-magic-mountain.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
    pages: 720,
    title: "The Magic Mountain",
    year: 1924,
  },
  {
    author: "Herman Melville",
    country: "United States",
    imageLink: "images/moby-dick.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Moby-Dick\n",
    pages: 378,
    title: "Moby Dick",
    year: 1851,
  },
  {
    author: "Michel de Montaigne",
    country: "France",
    imageLink: "images/essais.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
    pages: 404,
    title: "Essays",
    year: 1595,
  },
  {
    author: "Elsa Morante",
    country: "Italy",
    imageLink: "images/history.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/History_(novel)\n",
    pages: 600,
    title: "History",
    year: 1974,
  },
  {
    author: "Toni Morrison",
    country: "United States",
    imageLink: "images/beloved.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
    pages: 321,
    title: "Beloved",
    year: 1987,
  },
  {
    author: "Murasaki Shikibu",
    country: "Japan",
    imageLink: "images/the-tale-of-genji.jpg",
    language: "Japanese",
    link: "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
    pages: 1360,
    title: "The Tale of Genji",
    year: 1006,
  },
  {
    author: "Robert Musil",
    country: "Austria",
    imageLink: "images/the-man-without-qualities.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
    pages: 365,
    title: "The Man Without Qualities",
    year: 1931,
  },
  {
    author: "Vladimir Nabokov",
    country: "Russia/United States",
    imageLink: "images/lolita.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Lolita\n",
    pages: 317,
    title: "Lolita",
    year: 1955,
  },
  {
    author: "George Orwell",
    country: "United Kingdom",
    imageLink: "images/nineteen-eighty-four.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
    pages: 272,
    title: "Nineteen Eighty-Four",
    year: 1949,
  },
  {
    author: "Ovid",
    country: "Roman Empire",
    imageLink: "images/the-metamorphoses-of-ovid.jpg",
    language: "Classical Latin",
    link: "https://en.wikipedia.org/wiki/Metamorphoses\n",
    pages: 576,
    title: "Metamorphoses",
    year: 100,
  },
  {
    author: "Fernando Pessoa",
    country: "Portugal",
    imageLink: "images/the-book-of-disquiet.jpg",
    language: "Portuguese",
    link: "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
    pages: 272,
    title: "The Book of Disquiet",
    year: 1928,
  },
  {
    author: "Edgar Allan Poe",
    country: "United States",
    imageLink: "images/tales-and-poems-of-edgar-allan-poe.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
    pages: 842,
    title: "Tales",
    year: 1950,
  },
  {
    author: "Marcel Proust",
    country: "France",
    imageLink: "images/a-la-recherche-du-temps-perdu.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
    pages: 2408,
    title: "In Search of Lost Time",
    year: 1920,
  },
  {
    author: "François Rabelais",
    country: "France",
    imageLink: "images/gargantua-and-pantagruel.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
    pages: 623,
    title: "Gargantua and Pantagruel",
    year: 1533,
  },
  {
    author: "Juan Rulfo",
    country: "Mexico",
    imageLink: "images/pedro-paramo.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
    pages: 124,
    title: "Pedro Páramo",
    year: 1955,
  },
  {
    author: "Rumi",
    country: "Sultanate of Rum",
    imageLink: "images/the-masnavi.jpg",
    language: "Persian",
    link: "https://en.wikipedia.org/wiki/Masnavi\n",
    pages: 438,
    title: "The Masnavi",
    year: 1236,
  },
  {
    author: "Salman Rushdie",
    country: "United Kingdom, India",
    imageLink: "images/midnights-children.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
    pages: 536,
    title: "Midnight's Children",
    year: 1981,
  },
  {
    author: "Saadi",
    country: "Persia, Persian Empire",
    imageLink: "images/bostan.jpg",
    language: "Persian",
    link: "https://en.wikipedia.org/wiki/Bustan_(book)\n",
    pages: 298,
    title: "Bostan",
    year: 1257,
  },
  {
    author: "Tayeb Salih",
    country: "Sudan",
    imageLink: "images/season-of-migration-to-the-north.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
    pages: 139,
    title: "Season of Migration to the North",
    year: 1966,
  },
  {
    author: "José Saramago",
    country: "Portugal",
    imageLink: "images/blindness.jpg",
    language: "Portuguese",
    link: "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
    pages: 352,
    title: "Blindness",
    year: 1995,
  },
  {
    author: "William Shakespeare",
    country: "England",
    imageLink: "images/hamlet.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Hamlet\n",
    pages: 432,
    title: "Hamlet",
    year: 1603,
  },
  {
    author: "William Shakespeare",
    country: "England",
    imageLink: "images/king-lear.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/King_Lear\n",
    pages: 384,
    title: "King Lear",
    year: 1608,
  },
  {
    author: "William Shakespeare",
    country: "England",
    imageLink: "images/othello.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Othello\n",
    pages: 314,
    title: "Othello",
    year: 1609,
  },
  {
    author: "Sophocles",
    country: "Greece",
    imageLink: "images/oedipus-the-king.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
    pages: 88,
    title: "Oedipus the King",
    year: -430,
  },
  {
    author: "Stendhal",
    country: "France",
    imageLink: "images/le-rouge-et-le-noir.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
    pages: 576,
    title: "The Red and the Black",
    year: 1830,
  },
  {
    author: "Laurence Sterne",
    country: "England",
    imageLink: "images/the-life-and-opinions-of-tristram-shandy.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
    pages: 640,
    title: "The Life And Opinions of Tristram Shandy",
    year: 1760,
  },
  {
    author: "Italo Svevo",
    country: "Italy",
    imageLink: "images/confessions-of-zeno.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n",
    pages: 412,
    title: "Confessions of Zeno",
    year: 1923,
  },
  {
    author: "Jonathan Swift",
    country: "Ireland",
    imageLink: "images/gullivers-travels.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
    pages: 178,
    title: "Gulliver's Travels",
    year: 1726,
  },
  {
    author: "Leo Tolstoy",
    country: "Russia",
    imageLink: "images/war-and-peace.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/War_and_Peace\n",
    pages: 1296,
    title: "War and Peace",
    year: 1867,
  },
  {
    author: "Leo Tolstoy",
    country: "Russia",
    imageLink: "images/anna-karenina.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Anna_Karenina\n",
    pages: 864,
    title: "Anna Karenina",
    year: 1877,
  },
  {
    author: "Leo Tolstoy",
    country: "Russia",
    imageLink: "images/the-death-of-ivan-ilyich.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n",
    pages: 92,
    title: "The Death of Ivan Ilyich",
    year: 1886,
  },
  {
    author: "Mark Twain",
    country: "United States",
    imageLink: "images/the-adventures-of-huckleberry-finn.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
    pages: 224,
    title: "The Adventures of Huckleberry Finn",
    year: 1884,
  },
  {
    author: "Valmiki",
    country: "India",
    imageLink: "images/ramayana.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Ramayana\n",
    pages: 152,
    title: "Ramayana",
    year: -450,
  },
  {
    author: "Virgil",
    country: "Roman Empire",
    imageLink: "images/the-aeneid.jpg",
    language: "Classical Latin",
    link: "https://en.wikipedia.org/wiki/Aeneid\n",
    pages: 442,
    title: "The Aeneid",
    year: -23,
  },
  {
    author: "Vyasa",
    country: "India",
    imageLink: "images/the-mahab-harata.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Mahabharata\n",
    pages: 276,
    title: "Mahabharata",
    year: -700,
  },
  {
    author: "Walt Whitman",
    country: "United States",
    imageLink: "images/leaves-of-grass.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Leaves_of_Grass\n",
    pages: 152,
    title: "Leaves of Grass",
    year: 1855,
  },
  {
    author: "Virginia Woolf",
    country: "United Kingdom",
    imageLink: "images/mrs-dalloway.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
    pages: 216,
    title: "Mrs Dalloway",
    year: 1925,
  },
  {
    author: "Virginia Woolf",
    country: "United Kingdom",
    imageLink: "images/to-the-lighthouse.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/To_the_Lighthouse\n",
    pages: 209,
    title: "To the Lighthouse",
    year: 1927,
  },
  {
    author: "Marguerite Yourcenar",
    country: "France/Belgium",
    imageLink: "images/memoirs-of-hadrian.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
    pages: 408,
    title: "Memoirs of Hadrian",
    year: 1951,
  },
];

//end of books array

//book fetch request set up
var booksURL= "https://www.googleapis.com/books/v1/volumes?q=katamari"

fetch(booksURL, {
    cache: "reload",
})
.then(function (response) {
    return response.json();
  })
.then(function (data) {
var bookName = data.items[0].volumeInfo.title;
document.querySelector("#book-name").textContent = bookName;
var bookPlot = data.items[5].volumeInfo.description;
document.querySelector("#book-plot").textContent = bookPlot;
var bookImage = data.items[0].volumeInfo.imageLinks.thumbnail;
document.querySelector("#book-img").setAttribute("src", bookImage)
})

//Mixcloud "Sad" API search

var sadMix = "https:api.mixcloud.com/search/?q=sad-all&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA";
var sadmixIndex= 0;
fetch(sadMix, {
  cache: "reload",
})
.then(function (response) {
  return response.json();
})
.then(function (data) {
console.log (data.data[0]);
var sadMixName = data.data[3].name;
document.querySelector("#sadmix-name").textContent = sadMixName;
var mixLink = data.data[6].url;
document.querySelector("#mix-link").setAttribute("href", mixLink);
var mixImage = data.data[7].pictures.large; 
document.querySelector("#mix-image").setAttribute("src", mixImage);
})

//happy mix fetching set up

// var happyMix = "https://api.mixcloud.com/search/?q=happy-vibes&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA"
// fetch(happyMix, {
//   cache: "reload",
// })
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
// console.log(data)
// var happyMixNames = data.data[0]
// })


//happy sad button functionality
$("#happyBtn").on("click", {
  renderHappy()
});
$("#sadBtn").on("click");


//functions to cycle options on click of button
function genNextMovie(array){
  const randomNum = Math.floor(Math.random()*array.length)
  return array[randomNum];
}
// function genRandomHappyBook(params){
// //for loop for happyBooksArray
// for (let i = 0; i< happyBooksArray.length; i++) {
//   const element = happyBooksArray[i];
    
//   }
// }
// function genRandomSadBook(params){
// //for loop for sadBooksArray
// for (let i = 0; i < sadBooksArray.length; i++) {
//   const element = sadBooksArray[i];
  
// }
// }
// function genHappyMix(params){
// //for loop for happy mix
// for (let i = 0; i < happyMix.length; i++) {
//   const element = happyMix[i];
  
// }
// }
// function genSadMix(params) {
//  //for loop for sad mix
// for (let i = 0; i < sadMix.length; i++) {
//   const element = sadMix[i];
  
// }
// }

//Notable Quotes

const settings = {
  async: true,
  crossDomain: true,
  url: "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e6ab228e65mshf0a15a955207dcfp148d7bjsn0ee9210e05e0",
    "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
  document.querySelector("#notable-quotes").textContent = response[0].text;
  document.querySelector("#notable-author").textContent = response[0].author;
});

// This Day in History
var currentDay = parseInt(dayjs().format("DD"));
var currentMonth = parseInt(dayjs().format("MM"));
$.ajax({
  method: "GET",
  url:
    "https://api.api-ninjas.com/v1/historicalevents?month= " +
    currentMonth +
    "&day=" +
    currentDay,
  headers: { "X-Api-Key": "2BBnkoXLrjGGiNAQH2Ro4w==NOgSn3Rp69M1b94m" },
  contentType: "application/json",
  success: function (result) {
    console.log(result[0]);
    document.querySelector("#event-history").textContent = result[0].event;
  },
  error: function ajaxError(jqXHR) {
    console.error("Error: ", jqXHR.responseText);
  },
});