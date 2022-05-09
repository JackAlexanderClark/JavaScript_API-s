// XMLHttpRequest is a built-in object that allows us to consume APIs with javaScript
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('data').innerHTML = this.responseText;
    }

}