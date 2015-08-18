describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
    temperature = 20;
    powerSavingMode = true;
  });

  describe('temperature', function() {
    it('starts at 20 degrees', function() {
      expect(temperature).toBe(20);
    });

    it('can be increased by pressing up', function() {
      thermostat.up();
      expect(temperature).toBe(21);
    });

    it('can be decreased by pressing down', function() {
      thermostat.down();
      expect(temperature).toBe(19);
    });

    it('cannot go below 10 degrees', function() {
      temperature = 10;
      thermostat.down();
      expect(temperature).toBe(10);
    });

    it('cannot go above 25 degrees if power saving mode is on', function() {
      powerSavingMode = true;
      temperature = 25;
      thermostat.up();
      expect(temperature).toBe(25);
    });

    it('cannot go above 32 degrees if power saving mode is off', function() {
      powerSavingMode = false;
      temperature = 32;
      thermostat.up();
      expect(temperature).toBe(32);
    });

    it('can increase from 25 to 32 degrees if power saving mode is off', function() {
      powerSavingMode = false;
      temperature = 29;
      thermostat.up();
      expect(temperature).toBe(30);
    });

    it('returns to 20 when thermostat is reset', function() {
      temperature = 25;
      thermostat.reset();
      expect(temperature).toBe(20);
    });
  });

  describe('powerSavingMode', function() {
    it('defaults to true', function() {
      expect(powerSavingMode).toBe(true)
    });

    it('can be turned off', function() {
      thermostat.powerSaverOff();
      expect(powerSavingMode).toBe(false);
    });

    it('can be turned on', function() {
      powerSavingMode = false;
      thermostat.powerSaverOn();
      expect(powerSavingMode).toBe(true);
    });
  });

  describe('colour', function() {
    it('is green when temperature is under 18', function() {
      temperature = 17;
      expect(thermostat.colour(temperature)).toBe("green");
    });

    it('is yellow when temperature is under 25', function() {
      temperature = 24;
      expect(thermostat.colour(temperature)).toBe("yellow");
    });

    it('is red when temperature is over 25', function() {
      temperature = 25;
      expect(thermostat.colour(temperature)).toBe("red");
    });
  });

});
