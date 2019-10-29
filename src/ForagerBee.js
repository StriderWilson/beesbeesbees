var ForagerBee = function(age, color, job) {
  Bee.call(this, age || 10, color || 'yellow', job || 'find pollen');
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
}