console.log("welcome to my javascript");
//Initialize the variales
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongNames = document.getElementById('masterSongNames');
let songItems = Array.from(document.getElementsByClassName('songItems'));
let songs = [
    { songName: "justein-bieber", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },/*identified*/
    { songName: "Alen-walker", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "hello-name", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "song-name-4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "song-name-5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "song-name-6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "song-name-7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "song-name-8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "song-name-9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "song-name-10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },

]
songItems.forEach((element, i) => {
    console.log(element, i);

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})




// audioElement.play();
// handle play/pause clickable icons
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }

})


//listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    // update the  seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); /*formula*/
    // console.log(progress);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})

const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
    })
}



Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e)

        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongNames.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        /*adding the play pause in masterplay icon*/
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongNames.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');


})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;

    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongNames.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
})