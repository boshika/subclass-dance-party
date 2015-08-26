//Drosophila dancer: it divides

var Drosophila = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class= "Drosophila"></div>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.setPosition(top, left);
  console.log(this);

};

Drosophila.prototype = Object.create(Dancer.prototype);
Drosophila.prototype.constructor = Drosophila;
Drosophila.prototype.step = function() {
  this.height = Math.random() * 100;
  this.width = Math.random() * 100;
  this.$node.css({'height': 200, 'width': 400});  
  this.$node.fadeIn( "fast", function() {
    // Animation complete
  });
}
