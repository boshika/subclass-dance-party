//Evolution dancer: evolution, need I say more!

var Evolution = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class= "Evolution"></div>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
  console.log(this);

};

Evolution.prototype = Object.create(Dancer.prototype);
Evolution.prototype.constructor = Evolution;
Evolution.prototype.step = function() {
  // this.height = Math.random() * 100;
  // this.width = Math.random() * 100;
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  this.$node.css({'height': 100, 'width': 160});  
}

 