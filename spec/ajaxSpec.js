var TestResponses = {
  search: {
    success: {
      status: 200,
      responseText: '{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"cmc stations","main":{"temp":24.67,"pressure":1020,"humidity":57,"temp_min":22,"temp_max":27.4},"wind":{"speed":4.1,"deg":190},"clouds":{"all":40},"dt":1440159199,"sys":{"type":1,"id":5091,"message":0.0055,"country":"GB","sunrise":1440132942,"sunset":1440184225},"id":2643743,"name":"London","cod":200}'
    }
  }
};

beforeEach(function() {
  loadFixtures('index.html');
  jasmine.Ajax.install();
});

foursquare.search('40.019461,-105.273296', {
  onSuccess: onSuccess,
  onFailure: onFailure
});

request = jasmine.Ajax.requests.mostRecent();

describe("on success", function() {
  beforeEach(function() {
    request.respondWith(TestResponses.search.success);
  });
});

describe("FoursquareVenueSearch", function() {
  var foursquare, request;
  var onSuccess, onFailure;

  beforeEach(function() {
    jasmine.Ajax.install();

    onSuccess = jasmine.createSpy('onSuccess');
    onFailure = jasmine.createSpy('onFailure');

    foursquare = new FoursquareVenueSearch();

    foursquare.search('40.019461,-105.273296', {
      onSuccess: onSuccess,
      onFailure: onFailure
    });

    request = jasmine.Ajax.requests.mostRecent();
    expect(request.url).toBe('venues/search');
    expect(request.method).toBe('POST');
    expect(request.data()).toEqual({latLng: ['40.019461, -105.273296']});
  });

  describe("on success", function() {
    beforeEach(function() {
      request.respondWith(TestResponses.search.success);
    });

    it("calls onSuccess with an array of Locations", function() {
      expect(onSuccess).toHaveBeenCalled();

      var successArgs = onSuccess.calls.mostRecent().args[0];

      expect(successArgs.length).toEqual(1);
      expect(successArgs[0]).toEqual(jasmine.any(Venue));
    });
  });
});