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
  var isMatrix = true;

  for (var i = 0; i < total; i++) {
    var j = getIndex(i);
	
    grid.push({
	  title: "Vide",
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

   $scope.getMyIndex = function(items, i, index) {
	  console.log(items);
	  console.log(i);
	  console.log(index);
      return index;
  }
  
  $scope.grid = grid;
  $scope.dataGrid = [];

  $scope.furnitures = [{
    title: "Chaise",
    type: "chair"
  }, {
	title: "Bureau",
    type: "desk"
  }];
  
   $scope.startCallback = function(event, ui, title, index) {
    //console.log('You started draggin: ' + title.type);
	//console.log($scope.grid);
	//console.log('index: ' + index);
    $scope.draggedTitle = title.type;
  };
  $scope.dropCallback = function(event, ui, i, index) {

    console.log($scope.grid);
		  console.log(i);
		  console.log(index);
  };
/*
  $rootScope.$on('dropEvent', function(evt, dragged, dropped) {
    $scope.grid[getIndex(dropped.index)].type = dragged.type;
    $scope.$apply();
  });
*/
}]);

