describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toBe(20);
    });

    it('can be increased by pressing up', function() {
      thermostat.up();
      expect(thermostat.temperature).toBe(21);
    });

    it('can be decreased by pressing down', function() {
      thermostat.down();
      expect(thermostat.temperature).toBe(19);
    });

    it('cannot go below 10 degrees', function() {
      thermostat.temperature = 10;
      thermostat.down();
      expect(thermostat.temperature).toBe(10);
    });

    it('cannot go above 25 degrees if power saving mode is on', function() {
      thermostat.powerSavingMode = true;
      thermostat.temperature = 25;
      thermostat.up();
      expect(thermostat.temperature).toBe(25);
    });

    it('cannot go above 32 degrees if power saving mode is off', function() {
      thermostat.powerSavingMode = false;
      thermostat.temperature = 32;
      thermostat.up();
      expect(thermostat.temperature).toBe(32);
    });

    it('can increase from 25 to 32 degrees if power saving mode is off', function() {
      thermostat.powerSavingMode = false;
      thermostat.temperature = 29;
      thermostat.up();
      expect(thermostat.temperature).toBe(30);
    });

    it('returns to 20 when thermostat is reset', function() {
      thermostat.temperature = 25;
      thermostat.reset();
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe('powerSavingMode', function() {
    it('defaults to true', function() {
      expect(thermostat.powerSavingMode).toBe(true)
    });

    it('can be turned off', function() {
      thermostat.powerSaverOff();
      expect(thermostat.powerSavingMode).toBe(false);
    });

    it('can be turned on', function() {
      thermostat.powerSavingMode = false;
      thermostat.powerSaverOn();
      expect(thermostat.powerSavingMode).toBe(true);
    });
  });

  describe('colour', function() {
    it('is green when temperature is under 18', function() {
      thermostat.temperature = 17;
      thermostat.setColour();
      expect(thermostat.colour).toBe("green");
    });

    it('is yellow when temperature is under 25', function() {
      thermostat.temperature = 24;
      thermostat.setColour();
      expect(thermostat.colour).toBe("yellow");
    });

    it('is red when temperature is over 25', function() {
      thermostat.temperature = 25;
      thermostat.setColour();
      expect(thermostat.colour).toBe("red");
    });
  });

});
