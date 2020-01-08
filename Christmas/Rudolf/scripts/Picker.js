//copy and paste this
const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

// Find your objects
const rectangle = Scene.root.find('particles');

// Set an index of 0
const index = 0;

// Create a configuration object
const configuration = {

    // The index of the selected item in the picker
    selectedIndex: index,

    // The image textures to use as the items in the picker
    // Make sure these textures are set to uncompressed or this *will not work*
    items: [
        {image_texture: Textures.get('SnowFlake1')},
        {image_texture: Textures.get('SnowFlake2')},
        {image_texture: Textures.get('SnowFlake3')}
    ],

    // OPTIONAL:
    // In this example we are switching materials
    // so I have included an object of materials
    // that matches the order of the textures above
    mats: [
        {material: Materials.get("SF1")},
        {material: Materials.get("SF2")},
        {material: Materials.get("SF3")},
    ]
};

// Create our picker
const picker = NativeUI.picker;

// Load the configuration
picker.configure(configuration);

// Set the visibility to true
picker.visible = true;

// When the user selects an item form the picker, pass the index
// so we can select the materials to switch out
picker.selectedIndex.monitor().subscribe(function(val) {

    // Set the material to the first rectangle
    rectangle.material = configuration.mats[val.newValue].material;


});
