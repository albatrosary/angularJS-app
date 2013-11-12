'use strict';
angular.module('angularJSAppApp')
	.controller('MainCtrl', function ($scope, storage) {
        var defAry=[];
        storage.bind($scope,'items', {defaultValue: defAry ,storeName: 'todoAPP'});

		$scope.update=function(){
            $scope.items.some(function(v){
                if (v.title === $scope.inTitle){
                    v.text = $scope.inText;
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
		$scope.delete=function(todo){
			$scope.items.some(function(v, i){
				if(v.title === todo.title) {
                    $scope.items.splice(i, 1);
                }
			});
		}
	});
