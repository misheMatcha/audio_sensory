window.onload = function(){
  var analyser,
      audio,
      audioCtx,
      canvas,
      canvasCtx,
      buffer,
      dataArray,
      sliceWidth,
      source,
      velocity,
      x,
      y;

  function init(){
    audioSetup();
    canvasSetup();
    dataSetup();
    audio.volume = .3
  }

  
  function audioSetup(){
    audio = new Audio("pornograffiti_the-day.mp3")
    audioCtx = audioCtx || new AudioContext();
    analyser = analyser || audioCtx.createAnalyser();
    source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
  }
  
  function canvasSetup(){
    canvas = document.getElementById("canvas");
    canvasCtx = canvas.getContext("2d");
  }
  
  function dataSetup(){
    buffer = analyser.frequencyBinCount;
    dataArray = new Uint8Array(buffer);
  }

  // player functionality
  function handlePlay(){
    audio.play();
  }

  function handlePause(){
    audio.pause();
  }

  function volumeUp(){
    if(audio.volume < 1){
      audio.volume += .1;
    }
  }
  
  function volumeDown(){
    if(audio.volume > 0){
      audio.volume -= .1;
    }
  }

  // event listeners
  document.getElementsByClassName("player-container")[0].addEventListener("click", init());

  document.getElementsByClassName("play-btn")[0].addEventListener("click", handlePlay);

  document.getElementsByClassName("pause-btn")[0].addEventListener("click", handlePause);

  document.getElementsByClassName("vol-up-btn")[0].addEventListener("click", volumeUp);

  document.getElementsByClassName("vol-down-btn")[0].addEventListener("click", volumeDown);

  function visualizer(){
    requestAnimationFrame(visualizer);
    analyser.getByteTimeDomainData(dataArray);
    canvas.width = 750;
    canvas.height = 750;

    canvasCtx.fillStyle = "#e8b923";
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
    canvasCtx.lineWidth = 1;
    canvasCtx.strokeStyle = "black";
    canvasCtx.beginPath();

    canvasCtx.arc(canvas.width/2, canvas.height/2, 150, 0, 2 * Math.PI);
    canvasCtx.stroke();
    
    sliceWidth = canvas.width * 1.0 / buffer;
    x = 0;
    
    for(var i = 0; i < buffer; i++){
      velocity = dataArray[i] / 128.0;
      y = velocity * canvas.height / 2;

      if(i === 0){
        canvasCtx.moveTo(x, y);
      } else{
        canvasCtx.lineTo(x, y)
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
  }

  visualizer();
}