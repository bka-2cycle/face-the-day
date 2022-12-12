//Notable Quotes

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "e6ab228e65mshf0a15a955207dcfp148d7bjsn0ee9210e05e0",
		"X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
    document.querySelector('#notable-quotes').textContent = response[0].text;
    document.querySelector('#notable-author').textContent = response[0].author;
});


// This Day in History
var currentDay = parseInt(dayjs().format('DD'))
var currentMonth = parseInt(dayjs().format('MM'))
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/historicalevents?month= ' + currentMonth + '&day=' + currentDay,
    headers: { 'X-Api-Key': '2BBnkoXLrjGGiNAQH2Ro4w==NOgSn3Rp69M1b94m'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result[0]);
        document.querySelector('#event-history').textContent = result[0].event;
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});