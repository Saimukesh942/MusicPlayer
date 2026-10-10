let songindex = localStorage.getItem('songindex') ? parseInt(localStorage.getItem('songindex')) : 0;
let lastTime = localStorage.getItem("lastTime") ? parseFloat(localStorage.getItem("lastTime")) : 0;
let masterPlay = document.getElementById("Masterplay");
let myProgress = document.getElementById("myProgress");
let songItems = Array.from(document.getElementsByClassName("songList"));
let songCover = document.getElementById('current-song-cover'); 
let songName = document.getElementById('currentSongName'); 

let songs = [
    {songName:"Fein Travis-Coot " ,  filepath: "musicplayersongs/1.mp3", coverPath:"musicplayerCover/cover1.jpg"},
    {songName:"Believer" ,filepath:"musicplayersongs/2.mp3" , coverPath:"musicplayerCover/cover2.jpg"},
    {songName:"Vive le rap" ,filepath:"musicplayersongs/19.mp3" , coverPath:"musicplayerCover/cover17.webp"},
    {songName:"Dirty Little Secret Zack" ,filepath:"musicplayersongs/3.mp3" , coverPath:"musicplayerCover/cover3.jpg"},
    {songName:"Electric Katy Perry" ,filepath:"musicplayersongs/4.mp3" , coverPath:"musicplayerCover/cover4.jpg"},
    {songName:"Lucifer_Astronaut" ,filepath:"musicplayersongs/22.mp3" , coverPath:"musicplayerCover/cover20.jpg"},
    {songName:"Go Down Deh Spice" ,filepath:"musicplayersongs/5.mp3" , coverPath:"musicplayerCover/cover5.jpg"},
    {songName:"Bulletproof Flow" ,filepath:"musicplayersongs/23.mp3" , coverPath:"musicplayerCover/cover21.webp"},
    {songName:"Lil Mama " ,filepath:"musicplayersongs/6.mp3" , coverPath:"musicplayerCover/cover6.jpg"},
    {songName:"Play Date Lilly Brooks" ,filepath:"musicplayersongs/8.mp3" , coverPath:"musicplayerCover/cover8.jpg"},
    {songName:"Too Much Dimitri " ,filepath:"musicplayersongs/9.mp3" , coverPath:"musicplayerCover/cover9.jpg"},
    {songName:"No Way Back" ,filepath:"musicplayersongs/24.mp3" , coverPath:"musicplayerCover/cover22.webp"},
    {songName:"Tears in the Rain" ,filepath:"musicplayersongs/25.mp3" , coverPath:"musicplayerCover/cover23.webp"},
    {songName:"Salute" ,filepath:"musicplayersongs/26.mp3" , coverPath:"musicplayerCover/cover24.png"},
    {songName:"Butterflys" ,filepath:"musicplayersongs/16.mp3" , coverPath:"musicplayerCover/cover14.jpg"},
    {songName:"Synth RNB" ,filepath:"musicplayersongs/17.mp3" , coverPath:"musicplayerCover/cover15.jpg"},
    {songName:"Illegal" ,filepath:"musicplayersongs/18.mp3" , coverPath:"musicplayerCover/cover16.jpg"},
    {songName:"Shadow of Night" ,filepath:"musicplayersongs/20.mp3" , coverPath:"musicplayerCover/cover18.webp"},
    {songName:"Your Power Billie Eilish" ,filepath:"musicplayersongs/10.mp3" , coverPath:"musicplayerCover/cover10.jpg"},
    {songName:"No Short Kings" ,filepath:"musicplayersongs/27.mp3" , coverPath:"musicplayerCover/cover25.webp"},
    {songName:"Aaya Re Toofan" ,filepath:"musicplayersongs/21.mp3" , coverPath:"musicplayerCover/cover19.jpg"},
    {songName:"Keep Running" ,filepath:"musicplayersongs/28.mp3" , coverPath:"musicplayerCover/cover26.png"},
    {songName:"Freaky Trap" ,filepath:"musicplayersongs/29.mp3" , coverPath:"musicplayerCover/cover27.webp"},
    {songName:"Sippin" ,filepath:"musicplayersongs/30.mp3" , coverPath:"musicplayerCover/cover28.webp"},
    {songName:"Black Box" ,filepath:"musicplayersongs/31.mp3" , coverPath:"musicplayerCover/cover29.jpg"},
    {songName:"Warm Happy" ,filepath:"musicplayersongs/32.mp3" , coverPath:"musicplayerCover/cover30.jpg"},
    {songName:"Rap City" ,filepath:"musicplayersongs/33.mp3" , coverPath:"musicplayerCover/cover31.png"},
    {songName:"Groove" ,filepath:"musicplayersongs/34.mp3" , coverPath:"musicplayerCover/cover32.png"},
    {songName:"Ghost" ,filepath:"musicplayersongs/35.mp3" , coverPath:"musicplayerCover/cover33.jpg"},
    {songName:"Paro Nej" ,filepath:"musicplayersongs/7.mp3" , coverPath:"musicplayerCover/cover7.jpg"},
];

let audioElement = new Audio(songs[songindex].filepath);

songItems.forEach((Element, i) => {
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    Element.getElementsByClassName("songItemPlay")[0].id = i;
});

const updateControls = () => {
    songCover.src = songs[songindex].coverPath;
    songName.textContent = songs[songindex].songName;
    audioElement.src = songs[songindex].filepath;
    localStorage.setItem("songindex", songindex);
};

window.addEventListener("load", () => {
    updateControls();
    audioElement.currentTime = lastTime; 
    audioElement.pause(); 
    myProgress.value = 0.0000;
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
});

const playNextSong = () => {
    songindex = (songindex + 1) % songs.length;
    audioElement.src = songs[songindex].filepath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  
};

audioElement.addEventListener("ended", () => {
    songindex = (songindex + 1) % songs.length; 
    localStorage.setItem("songindex", songindex); 
    const currentSong = songs[songindex];
    document.getElementById("currentSongName").innerText = currentSong.songName;
    document.getElementById("current-song-cover").src = currentSong.coverPath;
    audioElement.src = currentSong.filepath;
    audioElement.load(); 
    audioElement.oncanplaythrough = () => {
        audioElement.play();
    };
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    makeAllPlays();
    document.getElementById(songindex).classList.remove("fa-play-circle");
    document.getElementById(songindex).classList.add("fa-pause-circle");
});

let wasPlaying = localStorage.getItem('wasPlaying') === 'true'; 
document.addEventListener("DOMContentLoaded", () => {
    const currentSong = songs[songindex];
    audioElement.src = currentSong.filepath;
    document.getElementById("currentSongName").innerText = currentSong.songName;
    document.getElementById("current-song-cover").src = currentSong.coverPath;
    if (wasPlaying) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    }
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("songindex", songindex); 
    localStorage.setItem("wasPlaying", !audioElement.paused); 
});


masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        const currentSongButton = document.getElementById(songindex);
        if (currentSongButton) {
            document.getElementById("currentSongName").innerText = songs[songindex].songName;
            currentSongButton.classList.remove("fa-play-circle");
            currentSongButton.classList.add("fa-pause-circle");
        }
        } else {
            audioElement.pause();
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");
            const currentSongButton = document.getElementById(songindex);
            if (currentSongButton) {
                currentSongButton.classList.remove("fa-pause-circle");
                currentSongButton.classList.add("fa-play-circle");
            }
        }
});

audioElement.addEventListener("timeupdate", () => {
    localStorage.setItem("lastTime", audioElement.currentTime);
    let progress = ((audioElement.currentTime / audioElement.duration) * 100);
    myProgress.value = progress;
});

myProgress.addEventListener("input", () => {
    if (audioElement.src) {
        audioElement.currentTime = myProgress.value * audioElement.duration / 100;
    }
});

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        let clickedSongIndex = parseInt(e.target.id);
        if (songindex === clickedSongIndex && !audioElement.paused) {
            audioElement.pause();
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");
        } else {
            makeAllPlays();
            songindex = clickedSongIndex;
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            audioElement.src = songs[songindex].filepath;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
            document.getElementById("currentSongName").innerText = songs[songindex].songName;
            document.getElementById("current-song-cover").src = songs[songindex].coverPath;
        }
    });
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add("fa-play-circle");
    });
};

const playSong = (index) => {
    songindex = index;
    localStorage.setItem("songindex", songindex);
    const currentSong = songs[songindex];
    document.getElementById("currentSongName").innerText = currentSong.songName;
    document.getElementById("current-song-cover").src = currentSong.coverPath;
    audioElement.pause(); 
    audioElement.src = currentSong.filepath;
    audioElement.load(); 
    audioElement.oncanplaythrough = () => {
        audioElement.play().catch((error) => console.error("Playback failed:", error));
    };
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    document.getElementById(songindex).classList.remove("fa-play-circle");
    document.getElementById(songindex).classList.add("fa-pause-circle");
};

document.getElementById("next").addEventListener("click", () => {
    songindex = (songindex + 1) % songs.length;
    playSong(songindex);
});

document.getElementById("previous").addEventListener("click", () => {
    songindex = (songindex - 1 + songs.length) % songs.length;
    playSong(songindex);
});

myProgress.addEventListener("click", () => {
    audioElement.currentTime = myProgress.value * audioElement.duration / 100;
});

const volumeIcon = document.getElementById("volume-icon");
const volumeSlider = document.getElementById("volume-slider");
const audioElements = document.querySelector("audio"); 

volumeSlider.style.display="none";

volumeIcon.addEventListener("click", () => {
    volumeSlider.style.display = volumeSlider.style.display === "block" ? "none" : "block";
});


volumeSlider.addEventListener("input", () => {
    audioElement.volume = volumeSlider.value;
    updateVolumeIcon(volumeSlider.value);
});


function updateVolumeIcon(volume) {
    if (volume == 0) {
        volumeIcon.className = "fa fa-volume-mute";
    } else if (volume < 0.5) {
        volumeIcon.className = "fa fa-volume-down";
    } else {
        volumeIcon.className = "fa fa-volume-up";
    }
}

let homeButton = document.querySelector('.Navbarbuttons:nth-child(2)');
let aboutButton = document.querySelector('.Navbarbuttons:nth-child(3)');
let contactButton = document.querySelector('.Navbarbuttons:nth-child(4)');
let container = document.querySelector('.Container');
let controls = document.querySelector('.controls');


homeButton.addEventListener('click', () => {
    location.reload();
});

aboutButton.addEventListener('click', () => {
    container.innerHTML = '';
    controls.innerHTML = '';
    controls.style.backgroundColor = 'transparent';
    let aboutText = document.createElement('h1');
    aboutText.textContent = "musicplayer Clone: Discover new music, create playlists, and enjoy personalized recommendations.";
    container.appendChild(aboutText);
});

contactButton.addEventListener('click', () => {
    container.innerHTML = '';
    controls.innerHTML = '';
    controls.style.backgroundColor = 'transparent';
    let contactText = document.createElement('h1');
    contactText.textContent = "Contact us at: contact@musicplayerclone.com";
    container.appendChild(contactText);
});
