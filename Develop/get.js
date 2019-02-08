const requestURL = "http://localhost:9966/petclinic/api/";

function getData(attribute, onload) {
    "use strict";

    var request = new XMLHttpRequest();
    request.open("GET", requestURL + attribute);
    request.responseType = "json";
    request.send();

    request.onload = () => onload(request.response);
}

function confirmChoice() {
    let attr = document.getElementById("selectedKey");
    populatePopup(attr.value);
}

function populatePopup(attribute) {
    function onDataLoaded(result) {
        deletePopup();
        let counter = 0;
        for (let name of result) {

            elementCreate("option", counter, "" + name.firstName, "options");
            counter++;
        }
    }
    getData(attribute, onDataLoaded);

}

function deletePopup() {
    deleteElementList("options");
}

function deleteElementList(className) {
    let list = document.getElementsByClassName(className);
    let length = list.length;
    for (let i = 0; i < length; i++) {
        list[0].remove();
    }
}

function elementCreate(tagName, id, value, className) {

    let element = document.createElement(tagName);
    element.className = className;
    element.id = id;
    element.value = value;
    element.textContent = value;
    document.getElementById("selectedValue").appendChild(element);
}

function viewData() {

}