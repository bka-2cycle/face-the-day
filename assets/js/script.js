//Global Variables
//Display Modification Variable
var resultsPage = $('.results-page-hidden');
var resultsPageShow = $('.results-page-shown');
var resultsPageHidden = $('.results-page-hidden');

//Event Listener Variables      
var buttonHappy = $('.button-smile');
var buttonSad = $('.button-frown');
var isHappy = false;
var isSad = false;

//Music, Books, Movie Variables
var mixUrl = "https://api.mixcloud.com/search/?q=";
var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
var movieUrl = "https://www.omdbapi.com/"

// Static API Variables for Time & Count
var currentDay = parseInt(dayjs().format("DD"));
var currentMonth = parseInt(dayjs().format("MM"));
var limit = 3;

// Variable for Start Over Button
var againBtn = $('#button-again');

//Event Listener Variable
var buttonResults = $('.button-results');

//Array Start
//Movie Arrays
var happyMoviesArray = [
  "?t=Little-Miss-Sunshine&apikey=189f17cc",
  "?t=Love-Actually&apikey=189f17cc",
  "?t=Good-Will-Hunting&apikey=189f17cc",
  "?t=Forrest%20Gump&apikey=189f17cc",
  "?t=Despicable-Me&apikey=189f17cc",
  "?t=Sound-of-Music&apikey=189f17cc",
  "?t=It%27s-A-Wonderful-Life&apikey=189f17cc",
  "?t=singin-in-the-rain&apikey=189f17cc",
  "?t=Inside-Out&apikey=189f17cc",
  "?t=Goonies&apikey=189f17cc",
]

var sadMoviesArray = [
  "?t=Requiem-for-a-Dream&apikey=189f17cc",
  "?t=Sophie%27s-Choice&apikey=189f17cc",
  "?t=Schindler%27s-List&apikey=189f17cc",
  "?t=Boys-Don%27t-Cry&apikey=189f17cc",
  "?t=Philadelphia&apikey=189f17cc",
  "?t=Finding%20Neverland&apikey=189f17cc",
  "?t=The-Green-Mile&apikey=189f17cc",
  "?t=The%20Sisterhood%20of%20the%20Traveling%20Pants&apikey=189f17cc",
  "?t=Titanic&apikey=189f17cc",
  "?t=The%20Notebook&apikey=189f17cc",
]

//Book Arrays
var sadBooks = [
  {
    Title: 'A Little Life',
    Author: 'Hanya Yanagihara',
    Cover: './images/sad-book-img/a-little-life.jpg'
  },
  {
    Title: 'Allegedly',
    Author: 'Tiffany D Jackson',
    Cover: './images/sad-book-img/allegedly.jpg'
  },
  {
    Title: 'No Longer Human',
    Author: 'Osamu Dazai',
    Cover: './images/sad-book-img/no-longer-human.jpg'
  },
  {
    Title: 'Girl in Pieces',
    Author: 'Kathleen Gasglow',
    Cover: './images/sad-book-img/girl-in-pieces.jpg'
  },
  {
    Title: 'Snitch',
    Author: 'Allison van Diepen',
    Cover: './images/sad-book-img/snitch.jpg'
  },
  {
    Title: 'This Is Where It Ends',
    Author: 'Marieke Nijkamp',
    Cover: './images/sad-book-img/this-is-where-it-ends.jpg'
  },
  {
    Title: 'Things We Never Got Over',
    Author: 'Lucy Score',
    Cover: './images/sad-book-img/things-we-never-got-over.jpg'
  },
  {
    Title: 'If He Had Been With Me',
    Author: 'Laura Nowlin',
    Cover: './images/sad-book-img/if-he-had-been-there-with-me.jpg'
  },
  {
    Title: 'Obsession',
    Author: 'Jesse Q Sutanto',
    Cover: './images/sad-book-img/obsession.jpg'
  },
  {
    Title: 'They Both Die in the End',
    Author: 'Adam Silvera',
    Cover: './images/sad-book-img/they-both-die-in-the-end.jpg'
  },
  {
    Title: 'The Silent Patient',
    Author: 'Alex Michaelides',
    Cover: './images/sad-book-img/the-silent-patient.jpg'
  }];

var happyBooks = [
  {
    Title: 'Remarkably Bright Creatures',
    Author: 'Shelby Van Pelt',
    Cover: './images/happy-book-img/remarkable-bright-creatures.jpg'
  },
  {
    Title: 'The Comfort Book',
    Author: 'Matt Haig',
    Cover: './images/happy-book-img/the-comfort-book.jpg'
  },
  {
    Title: 'The Midnight Library',
    Author: 'Matt Haig',
    Cover: './images/happy-book-img/the-midnight-library.jpg'
  },
  {
    Title: 'The Keeper of Lost Things',
    Author: 'Ruth Hogan',
    Cover: './images/happy-book-img/the-keeper-of-lost-things.jpg'
  },
  {
    Title: 'The People We Keep',
    Author: 'Allison Larkin',
    Cover: './images/happy-book-img/the-people-we-keep.jpg'
  },
  {
    Title: 'Where the Forest Meets the Stars',
    Author: 'Glendy Vanderah',
    Cover: './images/happy-book-img/where-the-forest-meets-the-stars.jpg'
  },
  {
    Title: 'The Land Where Lemons Grow',
    Author: 'Helena Attlee',
    Cover: './images/happy-book-img/the-land-where-lemons-grow.jpg'
  },
  {
    Title: 'How High We Go In the Dark',
    Author: 'Sequoia Nagamatsu',
    Cover: './images/happy-book-img/how-high-we-go-in-the-dark.jpg'
  },
  {
    Title: 'In Five Years',
    Author: 'Rebecca Serle',
    Cover: './images/happy-book-img/in-five-years.jpg'
  },
  {
    Title: 'Ikigai',
    Author: 'Hector Garcia',
    Cover: './images/happy-book-img/ikigai.jpg'
  },
  {
    Title: 'Crying in H Mart',
    Author: 'Michelle Zauner',
    Cover: './images/happy-book-img/crying-in-h-mart.jpg'
  }];


//Music Array
var sadMixArray = [
  "sad&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "really-upset&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "heartbroken&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "miserable&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "sorrow&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "melancholy&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "saddened&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "gloomy&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "unhinged&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "crying&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA"
]

var happyMixArray = [
  "happy-soul-music&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "surf&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "good-times&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "postive&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "uplifting&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "exciting&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "katamari&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "katamari&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "katamari&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
  "katamari&type=cloudcast&_gl=1*1mx0sf6*_ga*MTQzMTE0MTQyMy4xNjcwODY3NTE1*_ga_F1JH45MWZ3*MTY3MDg2NzUxNC4xLjEuMTY3MDg2NzY5NC4wLjAuMA",
]

//Sad Arrays
//Sad Movie API Function
function getSadMovie() {
  var concatSadMovieUrl = movieUrl + sadMoviesArray[Math.floor(Math.random() * 10)];
  console.log(concatSadMovieUrl);

  $.ajax({
    url: concatSadMovieUrl,
    method: 'GET',
    type: 'POST',
    dataType: 'json',
  }).then(function (response) {
    console.log('Test');
    console.log(response);
    console.log(response.Title);

    var sadMovieName = response.Title;
    $('.sadmovie-title').append(sadMovieName);
    var sadMoviePoster = response.Poster;
    $('.sadmovie-poster').attr("src", sadMoviePoster);
    console.log(sadMoviePoster);
    var sadMoviePlot = response.Plot;
    $('.sadmovie-plot').append(sadMoviePlot);
  });
};

//Sad Book API Function
function getSadBook() {
  var sadBookCall = sadBooks[Math.floor(Math.random() * 11)];
  console.log(sadBookCall);
  var sadBookName = sadBookCall.Title;
  $('.sadbook-title').append(sadBookName);
  var sadBookCover = sadBookCall.Cover;
  $('.sadbook-cover').attr("src",);
  var sadBookAuthor = sadBookCall.Author;
  $('.sadbook-author').append(sadBookAuthor);
}


//Sad Mix API Function
function getSadMix() {
  var concatSadMixUrl = mixUrl + sadMixArray[Math.floor(Math.random() * 10)];
  console.log(concatSadMixUrl);
  $.ajax({
    url: concatSadMixUrl,
    method: 'GET',
    type: 'POST',
    dataType: 'json',
  }).then(function (response) {
    console.log(response);
    console.log(response.data[0].name);
    var sadMixName = response.data[0].name;
    $('.sadmix-title').append(sadMixName);
    var sadMixImage = response.data[0].pictures["320wx320h"];
    $('.sadmix-image').attr("src", sadMixImage);
    var sadMixArtist = response.data[0].user.name;
    $('.sadmix-artist').append(sadMixArtist);
    var sadMixUrl = response.data[0].user.url;
    $('.sadmix-url').append(sadMixUrl);
  });
};

//Happy Arrays
//Happy Movie API Function
function getHappyMovie() {
  var concatHappyMovieUrl = movieUrl + happyMoviesArray[Math.floor(Math.random() * 10)];
  console.log(concatHappyMovieUrl);

  $.ajax({
    url: concatHappyMovieUrl,
    method: 'GET',
    type: 'POST',
    dataType: 'json',
  }).then(function (response) {
    console.log('Test');
    console.log(response);
    console.log(response.Title);
    var happyMovieName = response.Title;
    $('.happymovie-title').append(happyMovieName);
    var happyMoviePoster = response.Poster;
    $('.happymovie-poster').attr("src", happyMoviePoster);
    console.log(happyMoviePoster);
    var happyMoviePlot = response.Plot;
    $('.happymovie-plot').append(happyMoviePlot);
  });
};
//Happy Book API Function
function getHappyBook() {
  var happyBookCall = happyBooks[Math.floor(Math.random() * 11)];
  console.log(happyBookCall);
  var happyBookName = happyBookCall.Title;
  $('.happybook-title').append(happyBookName);
  var happyBookCover = happyBookCall.Cover;
  $('happybook-cover').attr("src", happyBookCover);
  var happyBookAuthor = happyBookCall.Author;
  $('.happybook-author').append(happyBookAuthor);
}
//Happy Mix API Function
function getHappyMix() {
  var concatHappyMixUrl = mixUrl + happyMixArray[Math.floor(Math.random() * 10)];
  console.log(concatHappyMixUrl);
  $.ajax({
    url: concatHappyMixUrl,
    method: 'GET',
    type: 'POST',
    dataType: 'json',
  }).then(function (response) {
    console.log('Test');
    console.log(response);
    console.log(response.Title);
    var happyMixName = response.data[0].name;
    $('.happymix-title').append(happyMixName);
    var happyMixImage = response.data[0].pictures["320wx320h"];
    $('.happymix-image').attr("src", happyMixImage);
    var happyMixArtist = response.data[0].user.name;
    $('.happymix-artist').append(happyMixArtist);
    var happyMixUrl = response.data[0].user.url;
    $('.happymix-url').append(happyMixUrl);
  });
};

//Event Listener Functions
//Event Listener Happy Button
buttonHappy.on('click', function () {
  isHappy = true;
  isSad = false;
  if (isHappy = true) {
    document.getElementById("goodtext").classList.remove('good-txt');
    console.log("happy button is pushed!!!!!");
  }
});
//Event Listener Sad Button
buttonSad.on('click', function () {
  isHappy = false;
  isSad = true;
  if (isSad = true) {
    document.getElementById("badtext").classList.remove('bad-txt');
    console.log("sad button is pushed!!!!!");
  }
});
//Event Listener Result Button 
buttonResults.on('click', function () {
  if (isSad === true) {
    getSadMovie();
    getSadBook();
    getSadMix();
    document.getElementById("test").classList.add('results-page-shown');
    document.getElementById("test").classList.remove('results-page-hidden');
  } else if (isHappy === true) {
    getHappyMovie();
    getHappyBook();
    getHappyMix();
    document.getElementById("test").classList.add('results-page-shown');
    document.getElementById("test").classList.remove('results-page-hidden');
  } else {
    alert("You Must Choose Happy or Sad First");
    return;
  }
});

//Static APIs
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
$.ajax({
  method: 'GET',
  url: 'https://api.api-ninjas.com/v1/jokes?limit=1', /*+ limit,*/
  headers: { 'X-Api-Key': 'Zx/7z3+LnT83tllYBTvk+A==t3oKjDpCz5DD8Tyw' },
  contentType: 'application/json',
  success: function (result) {
    console.log(result);
    document.querySelector('#random-joke').textContent = result[0].joke;
  }

});

//Start Over Function
function startOver() {
  againBtn.click(function () {
    location.reload();
  }
  )
};

startOver();