describe('Thermostat',function() {
  var thermostat = new Thermostat();

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it('displays default temperature', function(){
    expect('#temperature').toContainText(20);
  });

  it('up button should increase temperature', function() {
    $('#up').click();
    expect('#temperature').toContainText(21);
  });

  it('down button should decrease temperature', function() {
    $('#down').click();
    expect('#temperature').toContainText(19);
  });

  it('should have a minimum temperature of 10', function() {
    for(i = 1; i < 15; i ++) {
      $('#down').click();
    };
    expect('#temperature').toContainText(10);
  });

  it('should have power saver on by default', function() {
    expect($('input[type=checkbox]')).toBeChecked();
  });

  it('should have a max temperature of 25 if power saver is on', function() {
    for(i = 1; i < 10; i ++) {
      $('#up').click();
    };
    expect('#temperature').toContainText(25);
  });

  it('should have a max temperature of 32 if power saver is off', function() {
    $('input[type=checkbox]').click();
    console.log($('input[type=checkbox]').prop('checked'));
    for(i = 1; i < 20; i ++) {
      $('#up').click();
    };
    expect('#temperature').toContainText(32);
  });

});