window.onload = function(){
  var audio,
      audioContext,
      analyser,
      source,
      frequencyArray;

  function init(){
    setup();
    if(audioContext.state === "suspended"){
      audioContext.resume();
    }
  }
  
  function setup(){
    audio = new Audio("pornograffiti_the-day.mp3");
    audioContext = audioContext || new AudioContext();
    analyser = audioContext.createAnalyser();
    source = audioContext.createMediaElementSource(audio)
  }
  
  document.getElementsByName("player-container")[0].addEventListener("click", init());

  function handlePlay() {
    audio.play();
  }
  function handlePause() {
    audio.pause();
  }

  console.log(source)

  document.getElementsByName("play-button")[0].addEventListener("click", handlePlay)
  document.getElementsByName("pause-button")[0].addEventListener("click", handlePause)
}