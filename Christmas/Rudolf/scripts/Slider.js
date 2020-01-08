const NUI = require("NativeUI");
const M = require('Materials');
// const Time = require('Time');

// Slider
var lastSliderValue = 1;
const mat = M.get('Nose');
const nativeUISlider = NativeUI.slider;

nativeUISlider.value.monitor({fireOnInitialValue: false}).subscribe(function(val) {
    lastSliderValue = val.newValue;

    let sliderData = { 'sliderVal': lastSliderValue };

    mat.opacity = lastSliderValue;
  });

  function configureSlider(){
      nativeUISlider.value = lastSliderValue;
  }

  function init()
  {
    configureSlider();
    nativeUISlider.visible = true;
  }

  init();
