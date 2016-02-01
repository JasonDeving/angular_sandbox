var myApp = angular.module('myApp', ['ngMessages', 'ngResource', 'ngRoute']);

// routes
myApp.config(function($routeProvider){
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/second/', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

// service
myApp.service('nameService', function(){
    
    var self  = this;
    this.name = 'John Doe';
    
    this.namelength = function(){
        
        return self.name.length;
    };
    
});

// controllers
myApp.controller('mainController', ['$scope', '$filter', '$http', '$location', '$log', 'nameService', function($scope, $filter, $http, $location, $log, nameService) {
    
    $scope.name = nameService.name;
    // adding watch saves the singleton to changing pages
    $scope.$watch('name', function() {
       nameService.name = $scope.name; 
    });
    
    $log.log(nameService.name);
    $log.log(nameService.namelength());
}]);
myApp.controller('secondController', ['$scope', '$filter', '$routeParams', 'nameService',function($scope, $filter, $routeParams, nameService) {
    
    
    $scope.num = $routeParams.num || 1;
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
       nameService.name = $scope.name; 
    });
}]);



