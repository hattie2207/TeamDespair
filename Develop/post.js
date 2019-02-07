"use strict";

// Post a user
var url = "http://localhost:9966/petclinic/api/users";

var data = 
{
  "enabled": true,
  "password": "password",
  "roles": [
    {
      "id": 7,
      "name": "fluffy"
    }
  ],
  "username": "harry"
};

var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "201") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(json);