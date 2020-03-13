window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
let currentBuffer = null;

// allows for cors for the s3 link
const url = "https://cors-anywhere.herokuapp.com/" + "https://audio-viz.s3-us-west-1.amazonaws.com/pornograffiti_the-day.mp3";

const visualizeAudio = url => {
  fetch(url)
    .then(res => res.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    .then(audioBuffer => visualizeAudio(audioBuffer))
};