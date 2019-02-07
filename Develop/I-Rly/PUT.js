
let attr = 'specialties';
let id = 5;


let url = "http://localhost:9966/petclinic/api/" + attr + "/" + id;

var data = {
  "id": '5',
  "name": "wasd"
};

var jsonString;
var xhttp = new XMLHttpRequest();

xhttp.open("PUT", url, true);

xhttp.whenReady = function(){

xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');

xhttp.onload = function () {
  
    var users = JSON.parse(xhttp.responseText);

    if (xhttp.readyState == 4 && xhttp.status == "200") 
    {
		console.table(users);
    } 
    else 
    {
		console.error(users);
	}
}
}


xhttp.send(jsonString);