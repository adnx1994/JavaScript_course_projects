
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn=document.getElementById("dokmeh");







btn.addEventListener("click", function () {
    let obj = { "email": email.value, "password": password.value };
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    let downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "data.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
});