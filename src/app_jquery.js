$( document ).ready(function() {

var thermostat = new Thermostat();

var updateTemperature = function() {
  $('#temperature').html(thermostat.temperature);
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

});