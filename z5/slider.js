


var user_0=document.getElementById("user_0");

var demo_5=document.getElementById("demo_5");


url = "https://jsonplaceholder.typicode.com/posts";

api = fetch(url);

api.then(function (res) {
    return res.json()
}).then(function (data) {
    for (let i = 0; i < data.length; i++) {
        user_0.innerHTML=data[0].title;
        user_0.style.color="lime";

        demo_5.innerHTML=data[5].body;
        demo_5.style.color="blue";

        console.log(data[i]);

    }
})
    .catch(err => {
        console.log(err)
    });


