const url = "http://localhost:9966/petclinic/api/";

function deleteHttpRequest(id, attr)
{
    let deleteUrl = url + attr + "/" + id;
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

function parse()
{
    deleteHttpRequest(id, attr);
}

deleteHttpRequest();