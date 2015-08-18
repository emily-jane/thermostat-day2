var Thermostat = function() {};

var temperature = 20;
var increment = 1;
var powerSavingMode = true;

Thermostat.prototype.up = function() {
  if(powerSavingMode === true && temperature < 25) {
    temperature = temperature + increment;
  };
};

Thermostat.prototype.down = function() {
  if(temperature > 10) {
    temperature = temperature - increment;
  };
};

Thermostat.prototype.powerSaverOff = function() {
  powerSavingMode = false;
};

Thermostat.prototype.powerSaverOn = function() {
  powerSavingMode = true;
};