let queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
const apiKey = 'KRAvNPZoD6_9lLB6ajZEmG25SExG5IsGIVCXREs7Wtdz2SYJ3d3Vy0M6KaGS3CmBbH6kXm8gfeDAOW18O9f3y2Ql8b_73f7ucC3atH2QPmlrPTFgVw3oJ7LHyX9NZXYx' //Add your key here

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