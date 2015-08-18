thermostat = new Thermostat();

var temperature = document.getElementById('temperature');
temperature.innerHTML = thermostat.temperature;

var temperatureUp = document.getElementById('up');
  temperatureUp.onclick = function() {
    thermostat.up();
    temperature.innerHTML = thermostat.temperature;
  };

var temperatureDown = document.getElementById('down');
  temperatureDown.onclick = function() {
    thermostat.down();
    temperature.innerHTML = thermostat.temperature;
  };

var thermostatReset = document.getElementById('reset');
  thermostatReset.onclick = function() {
    thermostat.reset();
    temperature.innerHTML = thermostat.temperature;
  };

  var powerSaverMode = document.getElementById('powersavingmode');
    powerSaverMode.onchange = function() {
      if(thermostat.powerSavingMode === true) {
        thermostat.powerSaverOff();
        temperature.innerHTML = thermostat.temperature;
      } else {
        thermostat.powerSaverOn();
        temperature.innerHTML = thermostat.temperature;
      };
    };
