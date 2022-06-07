console.log("Welcome to BeatBox");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Aa Jao Na - Arijit Singh",
    filePath: "1.mp3",
    coverPath: "1.jpg",
  },
  {
    songName: "Aashiq Hai Ye Chor Nahi Hai",
    filePath: "2.mp3",
    coverPath: "2.jpg",
  },
  {
    songName: "Bechari - Afsana Khan",
    filePath: "3.mp3",
    coverPath: "3.jpg",
  },
  {
    songName: "Chand Baliye",
    filePath: "4.mp3",
    coverPath: "4.jpg",
  },
  {
    songName: "Choco - Emiway Bantai",
    filePath: "5.mp3",
    coverPath: "5.jpg",
  },
  {
    songName: "De Taali - Yo Yo Honey Singh",
    filePath: "6.mp3",
    coverPath: "6.jpg",
  },
  {
    songName: "High Rated Gabru - Guru Randhawa ",
    filePath: "7.mp3",
    coverPath: "7.jpg",
  },
  {
    songName: "Jug Jug Jeeve - Shiddat",
    filePath: "8.mp3",
    coverPath: "8.jpg",
  },
  {
    songName: "KGF 2 Theme Remake",
    filePath: "9.mp3",
    coverPath: "9.jpg",
  },
  {
    songName: "Kudiyan Lahore Diyan",
    filePath: "10.mp3",
    coverPath: "10.jpg",
  },
  {
    songName: "Main Ki Karaan - Laal Singh Chaddha",
    filePath: "11.mp3",
    coverPath: "11.jpg",
  },
  {
    songName: "Na Na Re Kgf",
    filePath: "12.mp3",
    coverPath: "12.jpg",
  },
  {
    songName: "Pasoori - Shae Gill",
    filePath: "13.mp3",
    coverPath: "13.jpg",
  },
  {
    songName: "Patola - Guru Randhawa",
    filePath: "14.mp3",
    coverPath: "14.jpg",
  },
  {
    songName: "Sapna - Parmanu - Arijit Singh",
    filePath: "15.mp3",
    coverPath: "15.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle master play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

//change the pause button to play whenever this fuction is called
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

//To play the song by clicking  the play button on each song
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

//Next button
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

//Previous button
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
