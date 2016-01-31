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

// controllers
myApp.controller('mainController', ['$scope', '$filter', '$http', '$location', '$log',function($scope, $filter, $http, $location, $log) {
    
    $scope.name = "jason";
}]);
myApp.controller('secondController', ['$scope', '$filter', '$routeParams',function($scope, $filter, $routeParams) {
    
    $scope.num = $routeParams.num || 1;
}]);



