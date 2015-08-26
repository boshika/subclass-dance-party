var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.$node.on('click', function(event){
  //   alert("time to dance");
  // })
};

//import the methods of Dancer parent class
makeBlinkyDancer.prototype = Object.create(Dancer.prototype);

//establish blinkyDancer's constructor class
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//repeatedly call the step method
makeBlinkyDancer.prototype.step = function(){
   // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };

  makeBlinkyDancer.prototype.linethem = function() {
    this.setPosition('center', 2000);
  }


  

//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

// //   return blinkyDancer;
// // };