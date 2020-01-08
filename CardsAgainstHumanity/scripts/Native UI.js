//copy and paste this
const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

// Find your objects
const rectangle = Scene.root.find('question');

// Set an index of 0
const index = 0;

// Create a configuration object
const configuration = {

    // The index of the selected item in the picker
    selectedIndex: index,

    // The image textures to use as the items in the picker
    // Make sure these textures are set to uncompressed or this *will not work*
    items: [
        {image_texture: Textures.get('q')},
        {image_texture: Textures.get('a')}
    ],

    // OPTIONAL:
    // In this example we are switching materials
    // so I have included an object of materials
    // that matches the order of the textures above
    mats: [
        {material: Materials.get("material0")},
        {material: Materials.get("material1")}
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
