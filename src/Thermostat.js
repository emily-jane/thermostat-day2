var Thermostat = function() {};

var temperature = 20;
var increment = 1;
var powerSavingMode = true;
var colour

Thermostat.prototype.up = function() {
  if(powerSavingMode === true && temperature < 25) {
    temperature = temperature + increment;
  };
  if(powerSavingMode === false && temperature < 32) {
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

Thermostat.prototype.reset = function () {
  temperature = 20;
};

Thermostat.prototype.colour = function (temperature) {
  if(temperature < 18) {
    colour = "green"
    return colour
  };
  if(temperature < 25) {
    colour = "yellow"
    return colour
  };
  if(temperature >= 25) {
    colour = "red"
    return colour
  };
};
