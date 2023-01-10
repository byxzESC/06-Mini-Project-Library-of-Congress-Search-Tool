// variable 
var formEl = $('#search-form');
var formatEl = $('#format');
var submitBtn = $('#submit-button');


console.log('script is working');





// function submitSearch (search) {

// }

formEl.on('submit', function(event) {
    event.preventDefault();
    console.log('event is ', event.val().trim());
});
// listener for the submit button
// submitBtn.on('click', function(event) {
//     event.preventDefault();

//     // get input text

// });
// listener for the input

// fetch congress search URL: 'https://www.loc.gov/search/?q=' + search + '&fo=json'
//                            'https://www.loc.gov/' + format + '/?q=' + search + '&fo=json' 