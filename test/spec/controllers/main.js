'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('angularJSAppApp'));

    var MainCtrl,
    scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
            MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));
    describe('Basic functions.', function(){
        describe('Check whether the insert safe. ',function(){
            it('make a single data.', function(){
                scope.inTitle = 'testTitle1';
                scope.inText = 'testText1';
                scope.insert();
                expect(scope.items.length).toEqual(1);
                expect(scope.items[0].title).toBe('testTitle1');
                expect(scope.items[0].text).toBe('testText1');
            });
            it('make a Continuous data.', function(){

                scope.inTitle = 'testTitle1';
                scope.inText = 'testText1';
                scope.insert();
                expect(scope.items.length).toEqual(1);
                expect(scope.items[0].title).toBe('testTitle1');
                expect(scope.items[0].text).toBe('testText1');

                scope.inTitle = 'testTitle2';
                scope.inText = 'testText2';
                scope.insert();
                expect(scope.items.length).toEqual(2);
                expect(scope.items[1].title).toBe('testTitle2');
                expect(scope.items[1].text).toBe('testText2');

                scope.inTitle = 'testTitle3';
                scope.inText = 'testText3';
                scope.insert();
                expect(scope.items.length).toEqual(3);
                expect(scope.items[2].title).toBe('testTitle3');
                expect(scope.items[2].text).toBe('testText3');
            });
        })

        it('I can successfully update ', function(){
        });
        it('I can successfully delete ', function(){
        });
        it('I can successfully selector ', function(){
        });
    });

    // After Test
    /*
    afterEach(inject(function($controller, $rootScope){
        $scope.items=[];
    }));*/
});
