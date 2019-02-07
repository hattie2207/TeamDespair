
"use strict";
var requestURL = "http://localhost:9966/petclinic/api/owners";

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {

    var result = request.response;
    let resultStr = JSON.stringify(result);
    document.body.innerHTML += resultStr;

}


