
var matn = document.getElementById("matn");
var word = document.getElementById("word_counter");
var chara = document.getElementById("chara_counter");
var x = document.getElementById("x_counter");
var facebook = document.getElementById("facebook_counter");



matn.addEventListener("input", function () {
    var matn_chara = matn.value.length;
    var x_value = 280;
    var facebook_value = 2200;

    var matn_word = matn.value.split(" ").length;
    word.innerHTML = matn_word;

    chara.innerHTML = matn_chara;
    x.innerHTML = x_value - matn_chara;
    facebook.innerHTML = facebook_value - matn_chara;



    if (matn_chara > 280) {
        x.style.color = "red";
    } else {
        x.style.color = "black";
    }

    if (matn_chara > 2200) {
        facebook.style.color = "red";
    } else {
        facebook.style.color = "black";
    }


    if (matn_chara == 0) {
        word.innerHTML = 0;
    }


})





