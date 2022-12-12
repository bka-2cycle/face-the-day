//omdb movie links. add key 
//change url after variables are established
//this link is only to one movie but with data function having all listed vars, pulling from all will be as easy as pullign from one

var movieUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=189f17cc"


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
// google books API only searching The Outsiders, change to wider range at later time
var booksURL= "https://www.googleapis.com/books/v1/volumes?q=The-Outsiders"

fetch(booksURL, {
    cache: "reload",
})
.then(function (response) {
    return response.json();
  })
.then(function (data) {
console.log (data.items[0].volumeInfo.title);
var bookName = data.items[0].volumeInfo.title;
document.querySelector("#book-name").textContent = bookName;
var bookPlot = data.items[1].volumeInfo.description;
document.querySelector("#book-plot").textContent = bookPlot;
var bookImage = data.items[0].volumeInfo.imageLinks.thumbnail;
document.querySelector("#book-img").setAttribute("src", bookImage)
})

//Mixcloud "Sad" API search

var sadMix = "https:api.mixcloud.com/search/?q=sad&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA";
fetch(sadMix, {
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
document.querySelector("#mix-link").setAttribute("a", mixLink)
})
