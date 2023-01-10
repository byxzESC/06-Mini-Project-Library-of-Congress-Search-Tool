// variable 
var formEl = $('#search-form');
var textInputEl = $('#search-input');
var formatEl = $('#format-input');
var submitBtn = $('#submit-button');
var resultURL = './result.html';

var search;
console.log('script is working');

// fetch function
function getSearchResult (search, searchTerm) {
    // determined the parameters
    if (search && searchTerm) {
        var apiURL = 'https://www.loc.gov/' + searchTerm + '/?q=' + search + '&fo=json';
    } else {
        var apiURL = 'https://www.loc.gov/search/?q=' + search + '&fo=json';
    }

    console.log(apiURL);
    // fetches information with api URL
    fetch(apiURL)
        .then(function (response) {
            if (response.ok) {
            response.json()
            .then(function (data) {
                // data.content.results[]
                // inside result we want date, description, title, URL
                // data will be what we get from the api
                // search will be the item user entered
                displayResult(data, search, searchTerm);
            });
            } else {
            alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('unable to connect');
        });
    
}

// display result html
function displayResult (data, search, searchTerm) {
    console.log('location', document.location);
    location.replace(resultURL);
}


// listens to form input
formEl.on('submit', function(event) {
    event.preventDefault();
    
    var search = event.target[0].value.trim();
    var format = event.target[1].value;

    if (search && format) {
        getSearchResult(search, format);

        textInputEl.textContent = '';
    } else if (search) {
        getSearchResult(search);
        textInputEl.textContent = '';
    } else {
        alert('Please enter your search');
    }

});



// fetch congress search URL: 'https://www.loc.gov/search/?q=' + search + '&fo=json'
//                            'https://www.loc.gov/' + format + '/?q=' + search + '&fo=json' 