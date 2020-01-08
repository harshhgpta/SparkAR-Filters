const n = require("NativeUI");
const m = require("Materials");

// values 0 - 1
var val = 0.5;
var mat = m.get('Nose');
const slider = n.slider;

slider.value.monitor({fireOnInitialValue:false}).subscribe((mod)=>{
val = mod.newValue;
mat.opacity = val;
});

slider.value = 0.5;
slider.visible = true;
