
let game_area = document.getElementById("game");
let btn = document.getElementById("btn");
let play = false;



btn.addEventListener("click", function () {
    if (play == false) {
        play = true;
        btn.innerHTML = "combo";
    }
    else {
        maker();
        let numbers = document.getElementsByTagName("input");
        for (let i = 0; i < numbers.length; i++) {

            if (numbers[i].value == numbers[i].random_adad) {
                numbers[i].style.backgroundColor = "lime";
            }


            else {
                numbers[i].style.backgroundColor = "red";
            }

        }

    }

})



function maker() {
    var tedad_adad = 6;

    if ((document.getElementsByTagName("input").length) < tedad_adad) {


        for (let x = 0; x < tedad_adad; x++) {


            let eleman = document.createElement("input");
            eleman.setAttribute("type", "number");
            eleman.max = 9;
            eleman.min = 0;
            eleman.random_adad = Math.floor(Math.random() * 10);
            eleman.value = 0;
            eleman.size = 1;
            eleman.style.width = "50px";
            eleman.className = "ali"

            game_area.appendChild(eleman);

            console.log(eleman.random_adad);

        }
    }
}


