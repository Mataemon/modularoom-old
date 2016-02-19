'use strict';

describe('Directive: dragclone', function () {

  // load the directive's module
  beforeEach(module('modularoomApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dragclone></dragclone>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dragclone directive');
  }));
});
