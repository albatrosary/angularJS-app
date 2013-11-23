'use strict';

angular.module('angularJSAppApp', ['ngCookies','angularLocalStorage', 'ngGrid','ngWebsocket'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/main', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
            .when('/main2', { templateUrl: 'views/main2.html', controller: 'MainCtrl2' })
			.when('/show', {templateUrl:'views/show.html', controller : 'ShowCtrl'})
			.otherwise({ redirectTo: '/main' });
	})
	.directive('mymenu', function(){
		return {
			restrict:'E',
			templateUrl : 'template/mymenu.html'
		}
	})
    .directive('myfooter', function(){
        return {
            restrict : 'E',
            templateUrl : 'template/myfooter.html'
        }
    })
    .directive('ngEnterfocus', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        angular.element("#" + attrs.ngEnterfocus).focus();
                    });
                    event.preventDefault();
                }
            });
        };
    })
    .directive('myitems', function(){
        return {
            restrict : 'E',
            template : '<ul class="notes-lists" >' +
                '<li class="notes-entry" ng-repeat="todo in items" ng-click="selector(todo)">' +
                '{{todo.title}}' +
                '<span class="bnt-delete" ng-click="delete(todo)">x</span>' +
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
