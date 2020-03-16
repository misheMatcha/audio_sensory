var audio,
    audioContext,
    analyser,
    source;

window.onload = function(){
  function init(){
    setup();
    setupConnect();
  }

  function setup(){
    audio = new Audio("pornograffiti_the-day.mp3")
    audioContext = audioContext || new AudioContext();
    analyser = analyser || audioContext.createAnalyser();
    source = audioContext.createMediaElementSource(audio);
  }

  function setupConnect(){
    source.connect(analyser);
    analyser.connect(audioContext.destination);
  }

  function handlePlay(){
    audio.play();
  }
  function handlePause(){
    audio.pause();
  }
  
  document.getElementsByClassName("player-container")[0].addEventListener("click", init());
  document.getElementsByClassName("play-btn")[0].addEventListener("click", handlePlay);
  document.getElementsByClassName("pause-btn")[0].addEventListener("click", handlePause);

  console.log(audio)
}