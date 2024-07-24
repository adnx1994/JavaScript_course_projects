let request;


if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "info.txt", true);
request.onreadystatechange = function () {


    if (request.readyState == 4 && request.status == 200) {
        let modify = document.getElementById("demo");
        modify.innerHTML = request.responseText;
    }

}


request.send();

