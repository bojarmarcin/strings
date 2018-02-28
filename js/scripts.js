var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var velociraptor = 'Velociraptor';
var dinosaurUpperCased = dinosaur.toUpperCase();

var velociraptor = 'Velociraptor';
var textFixed = text.replace(new RegExp(velociraptor, 'g'), dinosaurUpperCased);
var halfText = textFixed.slice(0,text.length/2);
document.write(halfText);
