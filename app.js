let analyser,
    audio,
    audioContext,
    distortion,
    source;

audio = new Audio("pornograffiti_the-day.mp3");
audioContext = new AudioContext();
distortion = audioContext.createOscillator();
source = audioContext.createMediaElementSource(audio);

function handlePlay(){
  audio.play();
}

function handlePause(){
  audio.pause();
}

analyser = audioContext.createAnalyser();

source.connect(analyser);
analyser.connect(audioContext.destination);