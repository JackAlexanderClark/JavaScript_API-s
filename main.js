/**
 *  Making API call using GET and JSON format
 *  XMLHttpRequest is a built-in object that allows us to consume APIs with javaScript
 **/ 

var xhr = new XMLHttpRequest();

// Taking in our star wars API. Using GET as retreiving data, otherwise POST would send data
xhr.open("GET", "https://ci-swapi.herokuapp.com/api");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(typeof(this.responseText));
    };
};

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

