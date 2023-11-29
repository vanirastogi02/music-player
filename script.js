let currentAudio = null;
let currentPlayButton = null;
let currentPlaylist = null;
let currentIndex = 0;

function initializePlayer(playButtonId, repeatButtonId, nextButtonId, audio, playlist) {
  const play = document.getElementById(playButtonId);
  const repeat = document.getElementById(repeatButtonId);
  const next = document.getElementById(nextButtonId);

  function playSong(index) {
    audio.src = playlist[index];
    audio.currentTime = 0;
    audio.play();
    play.innerHTML = '<img src="images/btns/pause.png" alt="Pause" id="playIcon">';
    // Set the currently playing audio and play button
    currentAudio = audio;
    currentPlayButton = play;
    currentIndex = index;
  }

  function playRandomSong() {
    let randomIndex = Math.floor(Math.random() * playlist.length);
    playSong(randomIndex);
  }

  function playMusic() {
    // Pause the currently playing audio (if any)
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentPlayButton.innerHTML = '<img src="images/btns/play.png" alt="play" id="playIcon">';
    }

    if (audio.paused) {
      if (audio.src === "") {
        playRandomSong();
      } else {
        audio.play();
        play.innerHTML = '<img src="images/btns/pause.png" alt="Pause" id="playIcon">';
        // Set the currently playing audio and play button
        currentAudio = audio;
        currentPlayButton = play;
      }
    } else {
      audio.pause();
      play.innerHTML = '<img src="images/btns/play.png" alt="play" id="playIcon">';
    }
  }

  function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
    play.innerHTML = '<img src="images/btns/play.png" alt="play" id="playIcon">';
  }

  function repeatMusic() {
    audio.currentTime = 0;
    audio.play();
    play.innerHTML = '<img src="images/btns/pause.png" alt="Pause" id="playIcon">';
    // Set the currently playing audio and play button
    currentAudio = audio;
    currentPlayButton = play;
  }

  function nextMusic() {
    currentIndex = (currentIndex + 1) % playlist.length;
    playSong(currentIndex);
  }

  play.addEventListener("click", playMusic);
  repeat.addEventListener("click", repeatMusic);
  next.addEventListener("click", nextMusic);
}

// Example usage for Arijit Singh
let arijitAudio = new Audio();
let arijitPlaylist = [
  "audio1.mp3",
  "audio2.mp3",
  // Add more songs as needed
];
initializePlayer("play1", "repeat1", "next1", arijitAudio, arijitPlaylist);

// Example usage for Sunidhi Chauhan
let sunidhiAudio = new Audio();
let sunidhiPlaylist = [
  "scaudio1.mp3",
  "scaudio2.mp3",
  // Add more songs as needed
];
initializePlayer("play2", "repeat2", "next2", sunidhiAudio, sunidhiPlaylist);

// Example usage for Atif Aslam
let atifAudio = new Audio();
let atifPlaylist = [
  "aaudio1.mp3",
  "aaudio2.mp3",
  "auudio3.mp3",
  // Add songs for Atif Aslam as needed
];
initializePlayer("play3", "repeat3", "next3", atifAudio, atifPlaylist);

let shreyaAudio=new Audio();
let shreyaPlaylist=[
  "sgaudio1.mp3",
  "sgaudio2.mp3",
];

initializePlayer("play4", "repeat4", "next4", shreyaAudio, shreyaPlaylist);

let uditAudio=new Audio();
let uditPlaylist=[
  "unaudio1.mp3",
  "unaudio2.mp3",
];
initializePlayer("play5", "repeat5", "next5", uditAudio, uditPlaylist);

let nehaAudio=new Audio();
let nehaPlaylist=[
  "nkaudio1.mp3",
  "nkaudio2.mp3",
];
initializePlayer("play6", "repeat6", "next6", nehaAudio, nehaPlaylist);



