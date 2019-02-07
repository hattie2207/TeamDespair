const requestURL = "http://localhost:9966/petclinic/api/";

function getData(attribute) {
    "use strict";  

    var request = new XMLHttpRequest();
    request.open("GET", requestURL + attribute);
    request.responseType = "json";
    request.send();
    request.onload = function () {

        var result = request.response;
        let resultStr = JSON.stringify(result);
        // document.body.innerHTML += resultStr;

    }
}

getData("owners");