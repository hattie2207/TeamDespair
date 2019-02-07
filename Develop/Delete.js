
function deleteHttpRequest()
{
    let url = "http://localhost:9966/petclinic/api/owners/6";
    let xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", url, true);

    xhttp.onreadystatechange = function()
    {
        //if valid
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            let response = JSON.parse(xhttp.responseText);
        }
    }
    xhttp.send(null);
}

deleteHttpRequest();