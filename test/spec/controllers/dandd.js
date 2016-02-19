'use strict';

describe('Controller: DanddCtrl', function () {

  // load the controller's module
  beforeEach(module('modularoomApp'));

  var DanddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DanddCtrl = $controller('DanddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DanddCtrl.awesomeThings.length).toBe(3);
  });
});
