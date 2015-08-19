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
    expect($('#powersavingmode')).toBeChecked();
  });

  it('should have a max temperature of 25 if power saver is on', function() {
    for(i = 1; i < 10; i ++) {
      $('#up').click();
    };
    expect('#temperature').toContainText(25);
  });

  it('should have a max temperature of 32 if power saver is off', function() {
    $('#powersavingmode').click();
    for(i = 1; i < 20; i ++) {
      $('#up').click();
    };
    expect('#temperature').toContainText(32);
  });

  it('should go back to 20 degrees if reset button is clicked', function() {
    for(i = 1; i < 6; i ++) {
      $('#down').click();
    };
    $('#reset').click();
    expect('#temperature').toContainText(20);
  });

  it('should be green if temperature is less than 18', function() {
    for(i = 1; i < 6; i ++) {
      $('#down').click();
    };
    expect($('#temperature').css('color')).toEqual('rgb(0, 128, 0)')
  });

  it('should be yellow if temperature is between 18 and 24', function() {
    expect($('#temperature').css('color')).toEqual('rgb(255, 255, 0)')
  });

  it('should be red if temperature is more than or equal to 25', function() {
    for(i = 1; i < 10; i ++) {
      $('#up').click();
    };
    expect($('#temperature').css('color')).toEqual('rgb(255, 0, 0)')
  });

});