'use strict';

/**
 * @ngdoc directive
 * @name modularoomApp.directive:dragclone
 * @description
 * # dragclone
 */
angular.module('modularoomApp')
  .directive('dragclone', ["$rootScope", function($rootScope) {

  function dragStart(evt, element, dragStyle) {
    element.addClass(dragStyle);
	console.log(evt);
	console.log(element);
	console.log($rootScope.draggedElement);
    //evt.dataTransfer.setData("id", evt.target.id);
    //evt.dataTransfer.effectAllowed = 'move';
  };

  function dragEnd(evt, element, dragStyle) {
    element.removeClass(dragStyle);
  };

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      attrs.$set('draggable', 'true');
      scope.dragData = scope[attrs["dragclone"]];

      scope.dragStyle = attrs["dragstyle"];
      element.bind('dragstart', function(evt) {
        $rootScope.draggedElement = scope.dragData;
		$rootScope.draggedElement.clone = true;
        dragStart(evt, element, scope.dragStyle);
      });
      element.bind('dragend', function(evt) {
        dragEnd(evt, element, scope.dragStyle);
      });
    }
  }
}]);
