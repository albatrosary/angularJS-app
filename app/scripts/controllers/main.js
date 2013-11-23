'use strict';
angular.module('angularJSAppApp')
	.controller('MainCtrl', function ($scope, storage, wsFact) {
        var defAry=[];
        storage.bind($scope,'items', {defaultValue: defAry ,storeName: 'todoAPP'});

		$scope.update=function(){
            console.log('update!');
            $scope.items.some(function(v){
                if (v.title === $scope.inTitle){
                    v.text = $scope.inText;
                }
            });
		};
		$scope.insert=function(){
            console.log('insert!');
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
		};
        $scope.deleteALL=function(todo){
            $scope.items=[];
        };

        /* web socket Factory */
        $scope.connect=function(){
            wsFact.connect('ec2-user@ec2-54-238-124-222.ap-northeast-1.compute.amazonaws.com', 8080);
        };

        wsFact.subscribe(function(msg){
            var data = JSON.parse(msg);
            console.log('subscribe ctrl fact:',msg, data);

            if(data.sect){$scope.section=data.sect;}
            if(data.type=='view'){
                $scope.heCnt=data.hCnt;
            }
            $scope.$apply();
        });

        var send = function(msg){
            wsFact.send(JSON.stringify({
                type:'console',
                ctrl:msg
            }));
        }
    });
