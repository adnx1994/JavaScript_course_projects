let mes = document.getElementById("payam");
const btnHead = document.getElementById("head");
const btnTail = document.getElementById("tail");

const array_coin = ["head", "tail"];
let score = [0, 0];





function toss_coin() {
    let computer_toss = Math.floor(Math.random() * 2);
    return array_coin[computer_toss];
}




function player_chooser(choice) {
    console.log("user choose " + choice);
    let computerChoice = toss_coin();
    console.log("computer choose " + computerChoice);

    if (choice === computerChoice) {
        score[0] += 1;
    } else {
        score[1] += 1;
    }
    mes.innerHTML = "player score " + score[0] + " || " + " computer score " + score[1];
}




btnHead.addEventListener("click", function () {
    player_chooser("head");
});

btnTail.addEventListener("click", function () {
    player_chooser("tail");
});


