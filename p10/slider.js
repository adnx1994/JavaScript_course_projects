let tarikh = document.getElementById("tarikh");

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let saveButton = document.getElementById("save");
let timer;

tarikh.addEventListener("change", function () {
    clearInterval(timer); // Clear any previous timer
    timer = setInterval(update, 1000);

    function update() {
        let now = new Date();
        let input_zaman = new Date(tarikh.value);

        let delta = Date.parse(input_zaman) - Date.parse(now);

        if (delta <= 0) {
            clearInterval(timer);
            days.innerHTML = 0;
            hours.innerHTML = 0;
            minutes.innerHTML = 0;
            seconds.innerHTML = 0;
            return;
        }

        let s = Math.floor((delta / 1000) % 60);
        let m = Math.floor(((delta / 1000) / 60) % 60);
        let h = Math.floor((delta / (1000 * 60 * 60)) % 24);
        let d = Math.floor((delta / (1000 * 60 * 60 * 24)));

        days.innerHTML = d;
        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;

        let obj = { "t": delta, "days": d, "hours": h, "minutes": m, "seconds": s }
        console.log(obj);

        saveButton.addEventListener("click", function () {
            let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
            let downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", "data.json");
            document.body.appendChild(downloadAnchorNode); // required for firefox
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        });
    }
});