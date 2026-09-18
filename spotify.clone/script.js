console.log("Let's write JavaScript");

let songs = [
    "https://samplelib.com/mp3/sample-6s.mp3",
    "https://samplelib.com/mp3/sample-9s.mp3",
    "https://samplelib.com/mp3/sample-12s.mp3",
    "https://samplelib.com/mp3/sample-15s.mp3",
    
    "https://samplelib.com/mp3/sample-6s.mp3",
    "https://samplelib.com/mp3/sample-9s.mp3",
    "https://samplelib.com/mp3/sample-12s.mp3",
    "https://samplelib.com/mp3/sample-15s.mp3",
    
];

console.log("Songs:");
console.log(songs);

let currentSong = new Audio();

currentSong.src = songs[0];

let play = document.getElementById("play");

    play.addEventListener("click", () => {

    if (currentSong.paused) {
        currentSong.play();
    } else {
        currentSong.pause();
    }

});
let next = document.getElementById("next");

next.addEventListener("click", () => {

    currentSong.src = songs[1];

    currentSong.play();

});
// Previous button
let prev = document.getElementById("prev");

prev.addEventListener("click", () => {

    currentSong.src = songs[0];

    currentSong.play();

});
let playButtons = document.querySelectorAll(".play-btn");

playButtons.forEach((button, index) => {
    button.addEventListener("click", () => {

        if (currentSong.src !== songs[index]) {
            currentSong.src = songs[index];
            currentSong.play();
        }
        else if (currentSong.paused) {
            currentSong.play();
        }
        else {
            currentSong.pause();
        }

    });
});
// Seekbar
let seekbar = document.querySelector(".seekbar");

currentSong.addEventListener("timeupdate", () => {
    let percent = (currentSong.currentTime / currentSong.duration) * 100;

    document.querySelector(".circle").style.left = percent + "%";
});

seekbar.addEventListener("click", (e) => {
    let width = seekbar.clientWidth;
    let clickPosition = e.offsetX;

    let percent = (clickPosition / width) * 100;

    currentSong.currentTime =
        (currentSong.duration * percent) / 100;
});
let menu = document.getElementById("menu");
let left = document.querySelector(".left");

menu.addEventListener("click", () => {
    left.classList.toggle("show");
});
let volumeBar = document.getElementById("volumeBar");

volumeBar.addEventListener("input", () => {
    currentSong.volume = volumeBar.value;
});
let songtime = document.querySelector(".songtime");

currentSong.addEventListener("timeupdate", () => {
    let minutes = Math.floor(currentSong.currentTime / 60);
    let seconds = Math.floor(currentSong.currentTime % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    songtime.innerText = minutes + ":" + seconds;
});