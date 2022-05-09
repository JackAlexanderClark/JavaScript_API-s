// XMLHttpRequest is a built-in object that allows us to consume APIs with javaScript
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    // ReadyState and status explained later
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('data').innerHTML = this.responseText;
    };
};

// Taking in our star wars API
xhr.open("GET", "https://ci-swapi.herokuapp.com/api");

xhr.send();
