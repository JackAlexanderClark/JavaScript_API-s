/**
 *  Making API call using GET and JSON format
 *  XMLHttpRequest is a built-in object that allows us to consume APIs with javaScript
 **/ 

// Creating variables
var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

// Deserialising our JSON. JavaScript can deal with this with TIMEOUTS! and CALLBACKS!
function setData() {
    data = jsonData;
    console.log(data);
}

xhr.onreadystatechange = function() {
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    // readyState == 4 means we are checking to see operation is complete
    // a http code of 200 means "OK" -> this.status == 200
    // console.log(typeof(this.responseText)) -> 
    // typeof will check the data type
    // Logging our data variables but doesn't work as we need functional programming. 
// As the data only true when (this.readyState == 4 && this.status == 200)
    if (this.readyState == 4 && this.status == 200) {
        data = this.responseText;
        console.log(data);
        // This will now send through a JSON parsed object into our setData function
        setData(json.parse(this.responseText));
    };
};



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

