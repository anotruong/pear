let queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
const apiKey = '' //Add your key here

$.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${apiKey}`
    },
    data: {
        term: 'jerk chicken',
        location: 'Toronto'
    }
}).then(function (res) {
    let results = res.data
    console.log(results);
});

// https://medium.com/@zarinabliss/using-the-yelp-fusion-api-part-1-73d0259c705d