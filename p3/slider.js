
let request;


if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "data.json", true);
request.onreadystatechange = function () {


    if (request.readyState == 4 && request.status == 200) {
        let items = JSON.parse(request.responseText);

        let output = "<ul>";

        for (let key in items) {
            console.log(items[key]);
            output += "<li>" + " تاریخ معامله " + items[key].Date + " | " + " قیمت آخرین معامله " + items[key].Close + "</li>";

        }




        output += "</ul>";
        document.getElementById("jadval").innerHTML = output;
    }

}


request.send();


