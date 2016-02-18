'use strict';

/**
 * @ngdoc function
 * @name modularoomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modularoomApp

angular.module('modularoomApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
 */
  
angular.module('modularoomApp').controller('appCtrl', ["$scope", "$rootScope", function($scope, $rootScope) {
  var total = 25;
  var cellsPerRow = 5;
  var grid = [];
  /*
  true : grille avec index du type :
  1 2 3
  4 5 6
  7 8 9
  false : grille avec index du type :
  1 2 3
  6 5 4
  7 8 9
  */
  var isMatrix = false;

  for (var i = 0; i < total; i++) {
    var j = getIndex(i);
    grid.push({
      index: j,
      type: "empty"
    });
  }

  function getIndex(i) {
    if (isMatrix)
      return i;
    var row = Math.floor(i / cellsPerRow) + 1;
    if (row % 2 == 0)
      return row * cellsPerRow - (i % 5) - 1;
    else
      return i;
  }

  
  $scope.grid = grid;

  $scope.furnitures = [{
    title: "Chaise",
    type: "chair"
  }, {
    title: "Bureau",
    type: "desk"
  }];

  $rootScope.$on('dropEvent', function(evt, dragged, dropped) {
    $scope.grid[getIndex(dropped.index)].type = dragged.type;
    $scope.$apply();
  });

}]);

