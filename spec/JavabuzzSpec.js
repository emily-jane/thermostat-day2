describe('Javabuzz', function() {
  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz._isDivisibleBy(3, 3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(javabuzz._isDivisibleBy(1, 3)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 5', function() {
      expect(javabuzz._isDivisibleBy(5, 5)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 5', function() {
      expect(javabuzz._isDivisibleBy(1, 5)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 3 and 5', function() {
      expect(javabuzz._isDivisibleBy(15, 15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3 and 5', function() {
      expect(javabuzz._isDivisibleBy(1, 15)).toBe(false);
    });
  });

  describe('when playing, says ', function() {
    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });
  });

  describe('when playing, says ', function() {
    it('number when a number is NOT divisible by 3', function() {
      expect(javabuzz.says(1)).toEqual(1);
    });
  });

  describe('when playing, says ', function() {
    it('"Java" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });
  });

  describe('when playing, says ', function() {
    it('number when a number is divisible by 3 and 5', function() {
      expect(javabuzz.says(15)).toEqual("Javabuzz");
    });
  });

});

