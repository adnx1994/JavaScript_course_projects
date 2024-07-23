var arz = 0;
let el = document.getElementById("result");






function pluser() {
    if (arz < 5) {
        arz = arz + 1;
        el.innerHTML = arz;
    }


    if (arz == 5) {
        el.style.backgroundColor = "red";
    } else {
        el.style.backgroundColor = "rgb(125, 189, 28)" ;
    }


}




document.getElementById("plus").addEventListener("click", pluser)



///////هر کلیدی زده شد یک واحد اضافه شود

document.addEventListener("keydown", pluser)





document.getElementById("minz").addEventListener("click", function () {
    if (arz > 0) {
        arz = arz - 1;
        el.innerHTML = arz;
    }

    if (arz == 5) {
        el.style.backgroundColor = "red";
    } else {
        el.style.backgroundColor = "rgb(125, 189, 28)" ;
    }



})




document.getElementById("reset").addEventListener("click", function () {
    arz = 0;
    el.innerHTML = arz;
    el.style.backgroundColor = "rgb(125, 189, 28)";
})


