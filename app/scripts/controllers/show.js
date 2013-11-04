'use strict';

angular.module('angularJSAppApp')
	.controller('ShowCtrl', function ($scope, todos) {
		$scope.items = todos.get();
	});
