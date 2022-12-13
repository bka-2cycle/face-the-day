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
var sadMovieArray = [
  "https://www.omdbapi.com/?t=Requiem-for-a-Dream&apikey=189f17cc",
  "https://www.omdbapi.com/?t=Sophie%27s-Choice&apikey=189f17cc",
  "https://www.omdbapi.com/?t=Schindler%27s-List&apikey=189f17cc",
  "https://www.omdbapi.com/?t=Boys-Don%27t-Cry&apikey=189f17cc",
  "https://www.omdbapi.com/?t=Philadelphia&apikey=189f17cc",
  "https://www.omdbapi.com/?t=Finding%20Neverland&apikey=189f17cc",
  "https://www.omdbapi.com/?t=The-Green-Mile&apikey=189f17cc",
  "https://www.omdbapi.com/?t=The%20Sisterhood%20of%20the%20Traveling%20Pants&apikey=189f17cc",
  "https://www.omdbapi.com/?t=Titanic&apikey=189f17cc",
  "https://www.omdbapi.com/?t=The%20Notebook&apikey=189f17cc",
]
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
  "https://www.googleapis.com/books/v1/volumes?q=A%20Tree%20Grows%20in%20Brooklyn",
  "https://www.googleapis.com/books/v1/volumes?q=The%20Help",
  "https://www.googleapis.com/books/v1/volumes?q=Lucky%20Go%20Happy:%20Make%20Happiness%20Happen!",
  "https://www.googleapis.com/books/v1/volumes?q=The%20Ultimate%20Hitchhiker%27s%20Guide%20to%20the%20Galaxy%20(Hitchhiker%27s%20Guide%20to%20the%20Galaxy,%20#1-5)",
  "https://www.googleapis.com/books/v1/volumes?q=Bournemouth%20Boys%20and%20Boscombe%20Girls",
  "https://www.googleapis.com/books/v1/volumes?q=Bossypants",
  "https://www.googleapis.com/books/v1/volumes?q=The%20Garden",
  ""
]
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
var sadMixArray = [
  "https://api.mixcloud.com/search/?q=sad&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=really-upset&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=heartbroken&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=miserable&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=sorrow&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=melancholy&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=saddened&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=gloomy&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=unhinged&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=crying&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA"
]


// var sadMix = "https:api.mixcloud.com/search/?q=sad-all&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA";
function fetchSadMix(sadMixArray){
fetch(sadMixArray, {
  cache: "reload",
})
.then(function (response) {
  return response.json();
})
.then(function (data) {
console.log (data.data[0]);
var sadMixName = data.data[0].name;
document.querySelector("#sadmix-name").textContent = sadMixName;
var mixLink = data.data[0].url;
document.querySelector("#sadmix-link").setAttribute("href", mixLink);
var mixImage = data.data[0].pictures.large; 
document.querySelector("#sadmix-image").setAttribute("src", mixImage);
})
}
//happy mix fetching set up
var happyMixArray = [
  "https://api.mixcloud.com/search/?q=happy-soul-music&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=surf&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=good-times&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=postive&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=uplifting&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=exciting&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=katamari&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=katamari&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=katamari&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "https://api.mixcloud.com/search/?q=katamari&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
]

// var happyMix = "https://api.mixcloud.com/search/?q=happy-vibes&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA"
function fetchHappyMix(happyMixArray){
fetch(happyMixArray, {
  cache: "reload",
})
.then(function (response) {
  return response.json();
})
.then(function (data) {
console.log(data)
var happyMixName = data.data[0].name;
document.querySelector("#happymix-name").textContent = happyMixName;
var happyMixLink = data.data[0].url;
document.querySelector("#happymix-image").setAttribute("href", happyMixLink);
var happyMixImage = data.data[0].pictures.large;
document.querySelector("#happymix-image").setAttribute("src", happyMixImage);
})
}
function genNext(array){
  const randomNum = Math.floor(Math.random()*array.length)
  return array[randomNum];
}
function renderHappy(){
  var happyMix = genNext(happyMixArray); 
  fetchHappyMix(happyMix);
  var happyMovies= genNext(happyMoviesArray);
  fetchHappyMovie(happyMovies);
  var happyBooks= genNext(happyBooksArray)
  fetchHappyBook(happyBooks);
}
function renderSad(){
  var sadMix = genNext(sadMixArray);
  fetchSadMix(sadMix);
  var sadMovies= genNext(sadMovieArray);
  fetchSadMovie(sadMovies);
  var sadBooks= genNext(sadBooksArray)
  fetchSadBook(sadBooks);

}
//happy sad button functionality
$("#happyBtn").on("click", function() {
  renderHappy()
});
$("#sadBtn").on("click", function(){
  renderSad()
})


