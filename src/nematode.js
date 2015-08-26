//Nematode dancer: it crawls

var Nematode = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class= "Nematode"></div>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
  console.log(this);

};

Nematode.prototype = Object.create(Dancer.prototype);
Nematode.prototype.constructor = Nematode;
Nematode.prototype.step = function() {
  // this.height = Math.random() * 100;
  // this.width = Math.random() * 100;
  // Dancer.prototype.step.call(this);
  // this.$node.toggle();
  this.$node.css({'height': 100, 'width': 160});  
}

 