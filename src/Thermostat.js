var Thermostat = function() {

  this.temperature = 20;
  this.increment = 1;
  this.powerSavingMode = true;
  this.colour;

  Thermostat.prototype.up = function() {
    if(this.powerSavingMode === true && this.temperature < 25) {
      this.temperature = this.temperature + this.increment;
    };
    if(this.powerSavingMode === false && this.temperature < 32) {
      this.temperature = this.temperature + this.increment;
    };
  };

  Thermostat.prototype.down = function() {
    if(this.temperature > 10) {
      this.temperature = this.temperature - this.increment;
    };
  };

  Thermostat.prototype.powerSaverOff = function() {
    this.powerSavingMode = false;
  };

  Thermostat.prototype.powerSaverOn = function() {
    this.powerSavingMode = true;
  };

  Thermostat.prototype.reset = function () {
    this.temperature = 20;
  };

  Thermostat.prototype.colour = function () {
    if(this.temperature < 18) {
      this.colour = "green"
      return this.colour
    };
    if(this.temperature < 25) {
      this.colour = "yellow"
      return this.colour
    };
    if(this.temperature >= 25) {
      this.colour = "red"
      return this.colour
    };
  };

  Thermostat.prototype.showTemperature = function() {
    return this.temperature
  };

};
