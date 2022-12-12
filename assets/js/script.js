var limit = 3
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/jokes?limit=1', /*+ limit,*/
    
    headers: { 'X-Api-Key': 'Zx/7z3+LnT83tllYBTvk+A==t3oKjDpCz5DD8Tyw'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});





$.ajax(settings).done(function (response) {
    console.log(response);
    document.querySelector('#random-joke').textContent = response[0].text;
});