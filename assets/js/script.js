//happy movies array using Omdb API links(Praying it wokrs)(edit:Thanks Bryan)
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
var sadMoviesArray = [
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
//fetch function for happy/sad movies
function fetchHappyMovie(happyMoviesArray){
fetch (happyMoviesArray, {

  cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var happyMovieName = data.Title;
    document.querySelector('#happymovie-title').textContent = happyMovieName;
    // var movieGenre = data.Genre;
    // document.querySelector('#movie-genre').textContent = movieGenre;
    var happyMoviePoster = data.Poster;
    document.querySelector('#movie-poster').setAttribute("src", happyMoviePoster);
    var happyMoviePlot =data.Plot;
    document.querySelector('#movie-plot').textContent = happyMoviePlot;
    var happyMovieReleaseDate = data.Released;
document.querySelector("#movie-release-date").textContent = happyMovieReleaseDate;

  });
}
//fetch function for sad Movies
function fetchSadMovie(sadMoviesArray){
  fetch (sadMoviesArray, {
  
    cache: 'reload',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var sadMovieName = data.Title;
      document.querySelector('#sadmovie-title').textContent = sadMovieName;
      var sadMoviePoster = data.Poster;
      document.querySelector('#sadmovie-poster').setAttribute("src", sadMoviePoster);
      var sadMoviePlot =data.Plot;
      document.querySelector('#sadmovie-plot').textContent = sadMoviePlot;
      var sadMovieReleaseDate = data.Released;
  document.querySelector("#sadmovie-release-date").textContent = sadMovieReleaseDate;
  
    });
  }
//books array
var happyBooksArray = [
  "https://www.googleapis.com/books/v1/volumes?q=A%20Tree%20Grows%20in%20Brooklyn",
  "https://www.googleapis.com/books/v1/volumes?q=The%20Help",
  "https://www.googleapis.com/books/v1/volumes?q=Lucky%20Go%20Happy:%20Make%20Happiness%20Happen!",
  "https://www.googleapis.com/books/v1/volumes?q=The%20Ultimate%20Hitchhiker%27s%20Guide%20to%20the%20Galaxy%20(Hitchhiker%27s%20Guide%20to%20the%20Galaxy,%20#1-5)",
  "https://www.googleapis.com/books/v1/volumes?q=Bournemouth%20Boys%20and%20Boscombe%20Girls",
  "https://www.googleapis.com/books/v1/volumes?q=Bossypants",
  "https://www.googleapis.com/books/v1/volumes?q=The%20Garden",
  "https://www.googleapis.com/books/v1/volumes?q=The%20Rainbow%20Bridge:%20Bridge%20to%20Inner%20Peace%20and%20to%20World%20Peace",
  "https://www.googleapis.com/books/v1/volumes?q=50%20Shades%20of%20Yay:%20Great%20Thinkers%20on%20Happiness",
  "https://www.googleapis.com/books/v1/volumes?q=Definitely%20Cool",
]
var sadBooksArray = [
  "https://www.googleapis.com/books/v1/volumes?q=The%20Fault%20in%20Our%20Stars",
  "https://www.googleapis.com/books/v1/volumes?q=Ugly%20Love",
  "https://www.googleapis.com/books/v1/volumes?q=Archer%27s%20Voice",
  "https://www.googleapis.com/books/v1/volumes?q=The%20Sea%20of%20Tranquility",
  "https://www.googleapis.com/books/v1/volumes?q=The%20Book%20Thief",
  "https://www.googleapis.com/books/v1/volumes?q=Unlit%20Star",
  "https://www.googleapis.com/books/v1/volumes?q=Forbidden",
  "https://www.googleapis.com/books/v1/volumes?q=A%20Thousand%20Boy%20Kisses",
  "https://www.googleapis.com/books/v1/volumes?q=Making%20Faces",
  "https://www.googleapis.com/books/v1/volumes?q=Confess",

]
//end of books array

//book function that is fetch request templates
function fetchHappyBook(happyBooksArray)
fetch(happyBooksArray, {
    cache: "reload",
})
.then(function (response) {
    return response.json();
  })
.then(function (data) {
var happyBookName = data.items[0].volumeInfo.title;
document.querySelector("#happybook-name").textContent = happyBookName;
var happyBookPlot = data.items[5].volumeInfo.description;
document.querySelector("#happybook-plot").textContent = happyBookPlot;
var happyBookImage = data.items[0].volumeInfo.imageLinks.thumbnail;
document.querySelector("#happybook-img").setAttribute("src", happyBookImage)
})
//fetch function
function fetchSadBook(sadBooksArray)
fetch(sadBooksArray, {
    cache: "reload",
})
.then(function (response) {
    return response.json();
  })
.then(function (data) {
var sadBookName = data.items[0].volumeInfo.title;
document.querySelector("#sadbook-name").textContent = sadBookName;
var sadBookPlot = data.items[5].volumeInfo.description;
document.querySelector("#sadbook-plot").textContent = sadBookPlot;
var sadBookImage = data.items[0].volumeInfo.imageLinks.thumbnail;
document.querySelector("#sadbook-img").setAttribute("src", sadBookImage)
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
//function to randomize choice
function genNext(array){
  const randomNum = Math.floor(Math.random()*array.length)
  return array[randomNum];
}
//render happy options of books mixes and movies 
function renderHappy(){
  var happyMix = genNext(happyMixArray); 
  fetchHappyMix(happyMix);
  var happyMovies= genNext(happyMoviesArray);
  fetchHappyMovie(happyMovies);
  var happyBooks= genNext(happyBooksArray)
  fetchHappyBook(happyBooks);
}
//render sad options of books mixes and movies
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

var buttonHappy = $('.button-smile');
var buttonSad = $('.button-frown');

var isHappy = false;
var isSad = false;

buttonHappy.on('click', function () {
    isHappy = true;
    isSad = false;
    if (isHappy = true) {
    document.getElementById("goodtext").classList.remove('good-txt');
    console.log("happy button is pushed!!!!!");
    }
});
    
buttonSad.on('click', function () {
        isHappy = false;
        isSad = true;
    if (isSad = true) {
        document.getElementById("badtext").classList.remove('bad-txt'); 
        console.log("sad button is pushed!!!!!");
    }
});

var resultsPageShow = $('.results-page-shown');
var resultsPageHidden = $('.results-page-hidden');

 // INCORPORATE LOOP HERE!!! TO SEARCH HAPPY OR SAD ARRAYS
var buttonResults = $('.button-results');
buttonResults.on('click', function () {
if (isSad === true || isHappy === true){
    document.getElementById("test").classList.add('results-page-shown');
    document.getElementById("test").classList.remove('results-page-hidden');
    console.log("results button pushed!!");
}
     else {
        alert("You Must Choose Happy or Sad First"); 
        return;
       }
});

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
//Joke API
var limit = 3
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/jokes?limit=1', /*+ limit,*/
    headers: { 'X-Api-Key': 'Zx/7z3+LnT83tllYBTvk+A==t3oKjDpCz5DD8Tyw'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        document.querySelector('#random-joke').textContent = result[0].joke;
    }

});

