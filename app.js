window.onload = function(){
  var analyser,
      audio,
      audioCtx,
      canvas,
      canvasCtx,
      buffer,
      dataArray,
      source;

  function init(){
    audioSetup();
    canvasSetup();
    dataSetup();
    audio.volume = .3
  }
  
  function audioSetup(){
    audio = new Audio("aeriths_theme.mp3")
    audioCtx = audioCtx || new AudioContext();
    analyser = analyser || audioCtx.createAnalyser();
    source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
  }
  
  function canvasSetup(){
    canvas = document.getElementById("canvas");
    canvasCtx = canvas.getContext("2d");
    canvas.width = 750;
    canvas.height = 750;
  }
  
  function dataSetup(){
    buffer = analyser.frequencyBinCount;
    dataArray = new Uint8Array(buffer);
  }

  // player functionality
  function handlePlay(){
    audio.play();
    visualizer();
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
  
  function visualizer(){
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height)
    analyser.getByteTimeDomainData(dataArray);
    // x = 0;
    for(var i = 0; i < dataArray.length; i++){
      var point = dataArray[i];
      var randX = Math.floor(Math.random() * 750) + 1;
      var randY = Math.floor(Math.random() * 750) + 1;
      var key = i % 2 === 0 ? 2 : i % 3 === 0 ? 3 : i % 4 === 0 ? 4 : i % 5 === 0 ? 5 : i % 6 === 0 ? 6 : i % 7 === 0 ? 7 : i % 8 === 0 ? 8 : i % 9 === 0 ? 9 : false;

      switch (key) {
        // case 2:
        //   drawVisuals(point, i + 2, i + 4,);
        //   break;
        case 3:
          drawVisuals(point, i + 3, i + 6, 120);
          break;
        case 4:
          drawVisuals(point, i + 4, i + 8, 160);
          break;
        case 5:
          drawVisuals(point, i + 5, i + 10, 180);
          break;
        case 6:
          drawVisuals(point, i + 6, i + 10, 200);
          break;
        case 7:
          drawVisuals(point, i + 7, i + 10, 210);
          break;
        case 8:
          drawVisuals(point, i + 8, i + 10, 220);
          break;
        case 9:
          drawVisuals(point, i + 9, i + 10, 230);
          break;
      }
    }
    requestAnimationFrame(visualizer);
  }
  
  function drawVisuals(point, x, y, size){
    canvasCtx.beginPath();
    canvasCtx.arc(x, y, Math.abs(point-size), 0, Math.PI*2);
    // canvasCtx.fill()
    canvasCtx.stroke()
    canvasCtx.shadowColor = "blue"
    canvasCtx.fillStyle = "blue"
    canvasCtx.lineWidth = 2;
  }

  document.getElementsByClassName("player-container")[0].addEventListener("click", init());
  document.getElementsByClassName("play-btn")[0].addEventListener("click", handlePlay);
  document.getElementsByClassName("pause-btn")[0].addEventListener("click", handlePause);
  document.getElementsByClassName("vol-up-btn")[0].addEventListener("click", volumeUp);
  document.getElementsByClassName("vol-down-btn")[0].addEventListener("click", volumeDown);
}