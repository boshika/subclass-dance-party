//Tyson dancer: evolution, need I say more!

var Tyson = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class= "Tyson"></div>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
  console.log(this);

};

Tyson.prototype = Object.create(Dancer.prototype);
Tyson.prototype.constructor = Tyson;
Tyson.prototype.step = function() {
  // this.height = Math.random() * 100;
  // this.width = Math.random() * 100;
  this.$node.css({'height': 100, 'width': 160});  
}

 