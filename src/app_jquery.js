$( document ).ready(function() {

var thermostat = new Thermostat();

function updateTemperature() {
  $('#temperature').html(thermostat.temperature);
  checkColour();
};

function checkColour() {
  thermostat.setColour();
  $('#temperature').css('color', thermostat.colour);
};

updateTemperature();

$('#up').click(function() {
  thermostat.up();
  updateTemperature();
});

$('#down').click(function() {
  thermostat.down();
  updateTemperature();
});

$('#powersavingmode').click(function() {
  if(thermostat.powerSavingMode === true) {
    thermostat.powerSaverOff();
    updateTemperature(); 
  } else {
    thermostat.powerSaverOn();
    updateTemperature();
  };
});

$('#reset').click(function() {
  thermostat.reset();
  updateTemperature();
});

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk', function(data) {
  console.log(data.weather[0].main)
  $('#showdata').html(data.weather[0].main)
});

});