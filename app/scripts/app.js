'use strict';

angular.module('angularJSAppApp', ['ngCookies','angularLocalStorage', 'ngGrid'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
			.when('/show', {templateUrl:'views/show.html', controller : 'ShowCtrl'})
			.otherwise({ redirectTo: '/' });
	})
	.directive('mymenu', function(){
		return {
			restrict:'E',
			template :  '<div class="menu">' +
				'<a class="menu-item" href="#/show">一覧</a>' +
				'<a class="menu-item" href="#/">作成</a>' +
				'</div>'
		}
	})
	.directive('myitems', function(){
		return {
			restrict : 'E',
			template : '<ul class="notes-lists" >' +
				'<li class="notes-entry" ng-repeat="todo in items" ng-click="selector(todo)">' +
				'{{todo.title}}' +
				'<span ng-click="delete(todo)">[X]</span>' +
				'</li>' +
				'</ul>'
		}
	})
	.directive('mylist', function(){
		return {
			restrict : 'E',
			template : '</br><div class="gridStyle" ng-grid="grids"></div>'
		}
	});
