var HoneyMakerBee = function() {
  Bee.call(this, 10, 'yellow', 'make honey');
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Grub.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
