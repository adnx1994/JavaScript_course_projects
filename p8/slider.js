
let soal = document.getElementById('soal');
let btn = document.getElementById("ask_btn");
let payam = document.getElementById("result");


let answer_array = ["i love you", "you are beautiful", "yoou are very hot", "charismatic", "lovely"]



btn.addEventListener("click", function () {
    if (soal.value != "") {
        let res = Math.floor(Math.random() * answer_array.length);
        payam.innerHTML = soal.value + " " + "|" + answer_array[res];
        soal.value = "";
    }

    else {
        payam.innerHTML = "please enter your question!!!!!!!!!!";

    }
})



