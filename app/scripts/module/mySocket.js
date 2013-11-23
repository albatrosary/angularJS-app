'use strict';

angular.module('ngWebsocket', [])
    .factory('wsFact', function(){
        var service = {};
        console.log('angular ws ');
        service.connect = function(server, port){
            console.log('socket connect');
            if (service.ws){return;}
            var ws = new WebSocket('ws://'+server+':'+port+'/');
            ws.onopen=function(){
                service.callback(JSON.stringify({ msg : 'open connection'}));
            }
            ws.onerror=function(e){
                service.callback(JSON.stringify(e));
            }
            ws.onmessage=function(msg){
                service.callback(msg.data);
            }
            service.ws=ws;
        };
        service.send = function(msg){
            service.ws.send(msg);
        };
        service.subscribe = function(callback){
            service.callback=callback;
        };
        return service;
    })
    .provider('connProv',function(){
        var config = {
            server : "",
            port  : 80
        };
        return {
            init  : function(server, port){
                config.server =server;
                config.port = port;
            },
            $get :function($log){
                var service = {};
                console.log('angular ws ');
                service.connect = function(server, port){
                    console.log('socket connect');
                    if (service.ws){return;}
                    var ws = new WebSocket('ws://'+config.server+':'+ config.port+'/');
                    ws.onopen=function(){
                        service.callback(JSON.stringify({ msg : 'open connection'}));
                    }
                    ws.onerror=function(){
                        service.callback(JSON.stringify({ msg : 'ws error'}));
                    }
                    ws.onmessage=function(msg){
                        service.callback(msg.data);
                    }
                    service.ws=ws;
                };
                service.send = function(msg){
                    service.ws.send(msg);
                };
                service.subscribe = function(callback){
                    service.callback=callback;
                };
                return service;
            }
        }
    })
    .config(function(connProvProvider){
        connProvProvider.init('ec2-user@ec2-54-238-124-222.ap-northeast-1.compute.amazonaws.com',8080);
    });