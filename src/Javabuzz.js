var Javabuzz = function() {};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.says = function(number) {
  if (this._isDivisibleBy(number, 15)) {
    return "Javabuzz";
  };

  if (this._isDivisibleBy(number, 5)) {
    return "Buzz";
  };

  if (this._isDivisibleBy(number, 3)) {
    return "Java";
  };
  return number;
};