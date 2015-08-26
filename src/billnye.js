//Drosophila dancer: it divides

var Bill = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class= "Bill"></div>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
  console.log(this);

};

Bill.prototype = Object.create(Dancer.prototype);
Bill.prototype.constructor = Bill;
Bill.prototype.step = function() {
  // Dancer.prototype.step.call(this);
  // this.$node.toggle();
  this.height = Math.random() * 100;
  this.width = Math.random() * 100;
  this.$node.css({'height': 200, 'width': 400});  
}
