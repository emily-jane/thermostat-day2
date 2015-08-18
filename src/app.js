thermostat = new Thermostat();

var updateTemp = function() {
  var temperature = document.getElementById('temperature');
  temperature.innerHTML = thermostat.temperature;
  thermostat.setColour();
  temperature.style.color = thermostat.colour;
};

updateTemp();

var temperatureUp = document.getElementById('up');
  temperatureUp.onclick = function() {
    thermostat.up();
    updateTemp();
  };

var temperatureDown = document.getElementById('down');
  temperatureDown.onclick = function() {
    thermostat.down();
    updateTemp();
  };

var thermostatReset = document.getElementById('reset');
  thermostatReset.onclick = function() {
    thermostat.reset();
    updateTemp();
  };

var powerSaverMode = document.getElementById('powersavingmode');
  powerSaverMode.onchange = function() {
    if(thermostat.powerSavingMode === true) {
      thermostat.powerSaverOff();
      updateTemp();
    } else {
      thermostat.powerSaverOn();
      updateTemp();
    };
  };
