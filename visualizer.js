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

const filterData = audioBuffer => {
  const rawData = audioBuffer.getChannelData(0);
  const samples = 70;
  const blockSize = Math.floor(rawData.length / samples);
  const filteredData = [];
  for(let i = 0; i < samples; i++){
    filteredData.push(rawData[i * blockSize]);
  }
  return filteredData
}

console.log(filterData(visualizeAudio(url)))