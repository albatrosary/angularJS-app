'use strict';

angular.module('angularJSAppApp')
	.controller('MainCtrl', function ($scope, todos) {
		$scope.items = todos.get();
		
		$scope.update=function(){
			$scope.items.forEach(function(item){
				if(item.title === $scope.inTitle){
					item.text = $scope.inText;
				}
			});
		};
		$scope.insert=function(){
			$scope.items.push({ title : $scope.inTitle, text : $scope.inText });
		};
		$scope.selector=function(todo){
			$scope.inTitle =  todo.title;
			$scope.inText  =  todo.text;
		};
	});
