var Dancer = function(top, left, timeBetweenSteps){
  // var dancer = {};
  // use jQuery to create an HTML <span> tag
  this.$node = this.$node || $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps; 
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(top, left);
};

 Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

 Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    // var styleSettings = {
    //   top: top,
    //   left: left
    // };

    this.$node.css({'top':top, 'left':left});
    // this.top = top;
    // this.left = left;
  };

  Dancer.prototype.lineUp = function() {
    var styleSettings = {
      left: 0,
    };
    this.$node.css(styleSettings);
  };

  Dancer.prototype.breakThem = function() {
    this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
  }