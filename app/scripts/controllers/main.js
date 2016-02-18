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
  grille avec index du type :
  1 2 3
  6 5 4
  7 8 9
 
  for (var i = 0; i < total;i++) {  
      var k;
      var row = Math.floor(i / cellsPerRow) + 1;
      if (row % 2 == 0)
        k = row * cellsPerRow - (i % 5) - 1;
      else
        k = i;
        
      grid.push({
        index: k,
        type: "empty"
      });
  }
   */
  /*
  grille avec index du type :
  1 2 3
  4 5 6
  7 8 9
    */
  for (var i = 0; i < total; i++) {
    grid.push({
      index: i,
      type: "empty"
    });
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
    $scope.grid[dropped.index].type = dragged.type;
    $scope.$apply();
  });

}]);

