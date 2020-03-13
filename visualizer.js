window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
let currentBuffer = null;

const url = 'https://audio-viz.s3-us-west-1.amazonaws.com/pornograffiti_the-day.mp3';

// #e8b923