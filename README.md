# Audio Sensory
[Live site](http://michellevong.com/audio_sensory)

An audio visualizer designed to use audio frequnecies to render animations with the beat.

## Features
### Modal
To [comply with web audio changes within Chrome](https://developers.google.com/web/updates/2018/11/web-audio-autoplay), a modal was implemented to ensure a user gesture to setup the audio context for audio play.

![modal_demo](https://user-images.githubusercontent.com/52799217/78419298-439eab80-75f9-11ea-9817-9134444ff76b.gif)
### Animated background
The background is animated using keyframes in order to accompany the frequencies with a more visual experience.

```css
.animated-bg{
  position: absolute;
  width: .01vmin;
  height: .01vmin;
  border-radius: 10rem;
  z-index: -1;
  overflow: hidden;
}
  .animated-bg.one{
    box-shadow: 0 0 45vmax 45vmax rgba(227, 94, 57, 0.776);
    animation: move1 15s linear 0s infinite, hue 7s linear 0s infinite;
  }
  
@keyframes hue{
  0%{
    filter: hue-rotate(0deg);
  }
  25%{
    filter: hue-rotate(45deg);
  }
  50%{
    filter: hue-rotate(90deg);
  }
  750%{
    filter: hue-rotate(45deg);
  }
  100%{
    filter: hue-rotate(0deg);
  }
}

@keyframes move1{
  0%{
    top: 0vh;
    left: 50vw;
  }
  25%{
    left: 0vw;
  }
  50%{
    top: 100vh;
  }
  75%{
    left: 100vw;
  }
  100%{
    top: 0vh;
    left: 50vw;
  }
}
```

![background_demo](https://user-images.githubusercontent.com/52799217/78419295-41d4e800-75f9-11ea-8d7c-e14604d4e7ea.gif)
### Canvas visuals
Once the user clicks the play button, visuals will display bouncing on the screen.

![visual_demo](https://user-images.githubusercontent.com/52799217/78419260-f15d8a80-75f8-11ea-9be3-b3e36a5963a4.gif)

## Technologies
* JavaScript
* Web Audio API
* Canvas

## Feature Roadmap
* Oscillator - Users have an option to view and toggle the oscillator display
* More robust visuals - Add functionality to display visuals based on the low, mid, and highs of audio frequencies
* Custom colors - Users can choose colors for the visuals
