/**
 *  Making API call using GET and JSON format
 *  XMLHttpRequest is a built-in object that allows us to consume APIs with javaScript
 **/ 

//Completed API data call into HTML table
//Iterated over the data that is coming from our API
const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var tableRows = [];
    var el = document.getElementById("data");

    getData(type, function(data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];
            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                //Truncating data allows us to shorten the data so it fits in nicely without being oversize
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`)
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}





// Creating variables
var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

// Deserialising our JSON. JavaScript can deal with this with TIMEOUTS! and CALLBACKS!
/*function setData() {
    data = jsonData;
    console.log(data);
}
*/

xhr.onreadystatechange = function() {
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    // readyState == 4 means we are checking to see operation is complete
    // a http code of 200 means "OK" -> this.status == 200
    // console.log(typeof(this.responseText)) -> 
    // typeof will check the data type
    // Logging our data variables but doesn't work as we need functional programming. 
    // As the data only true when (this.readyState == 4 && this.status == 200)
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
    };
};

// Our timeout function takes two parameters. Our data variable and time 500 milliseconds as the second argument
// Furthermore this gives our on readystatechange function time to get to readyState 4 before the data variable is called
setTimeout(function () {
    console.log(data);
}, 500);

/*
JSON.parse()
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(typeof(JSON.parse(this.responseText)));
    };
};
*/


// However this is not JSON it is instead a string that is formatted similarly to JSON, can check this using console.log(typeof);
/*
xhr.onreadystatechange = function() {
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    // readyState == 4 means we are checking to see operation is complete
    // a http code of 200 means "OK" -> this.status == 200
    if (this.readyState == 4 && this.status == 200) {
        console.log(typeof(this.responseText));
    };
};

xhr.onreadystatechange = function() {
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    // readyState == 4 means we are checking to see operation is complete
    // a http code of 200 means "OK" -> this.status == 200
    // console.log(typeof(this.responseText)) -> 
    // typeof will check the data type
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('data').innerHTML = this.responseText;
    };
};
*/

// Callback functions are useful as they allow us not to use setTimeout() functions
// Writing a callback function (cb - callback)
function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET, "https://ci-swapi.herokuapp.com/api");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.responseText == 200) {
            cb(JSON.parse(this.responseText));
        };
    };
}

// This function will pass it self into the function above as an argument and log the data to the console.
getData(function (data) {
    console.log(data);
})

// Remember typeof() checks the data type
// Moving base API URL to outside the function

//Getting the data onto the DOM
//Const -> because it never changes


//Our API call has came in the form of one big object we need to unpack containing an array of objects
//Unpacking our Data onto the DOM 
//Using console.dir(), where dir stands for directory, going to parse in our data and browse the properties
//Rewriting our variable data into data.results to make it easier to see
const baseURL = "https://ci-swapi.herokuapp.com/api";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.responseText == 200) {
            cb(JSON.parse(this.responseText));
        };
    };
}

function writeToDocument(type) {
    //creating an element variable to store each part into
    var el = document.getElementById("data");
    //will add the element above to an empty string each time the button is pressed
    el.innerHTML = "";
    getData(type, function() {
        //console.dir("data");
        data = data.results;
        //creating for a foreach loop to unpack the object "for each" property/value
        data.foreach(function(item) {
            //need a += to add each element
            //adding paragraph tags <p></p> to make it display the data more clear 
            document.getElementById("data").innerHTML += "<p>" + item.name + "</p>";
        });
    });
};

//Creating tables for data
//Storing data as tablular data
const baseURL = "https://ci-swapi.herokuapp.com/api";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.responseText == 200) {
            cb(JSON.parse(this.responseText));
        };
    };
}

function getTableHeaders(obj) {
    var tableHeaders = [];
    //Iterating over each object
    Object.keys(obj).forEach(function(keys) {
        //push each key and <td></td> to create a new table cell at the same time, using backticks`` - template literals to put key inside table cell
        tableHeaders.push(`<td>${key}</td>`);
    });
    //``backticks allowing us to interpolate strings and variables as such
    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var tableRows = [];

    var el = document.getElementById("data");
    el.innerHTML = "";
    getData(type, function(data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.foreach(function(item) {
            //Want to iterate over all keys to create a table
            Object.keys(item).forEach(function() {
            });
            var dataRow = [];

            //Pushing each element into our row by iteration
            Object.keys(item).forEach(function() {
                dataRow.push(`<td>${item[key]}</td>`)
            });
            tableRows.push(dataRow);
            //will create a new row for each record in the array
            //el.innerHTML += "<p>" + item.name + "</p>";
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
};

