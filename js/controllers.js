'use strict';

/* Controllers */
var myAppControllers = angular.module('myAppControllers', []);

 myAppControllers.controller('employeeListCtrl', ['$scope', '$http', '$filter',
    function($scope, $http, $filter) {
      $http.get('employees/employees.json').success(function(data) {
        $scope.employee = data;
      });    
      $scope.types = {dp1: false, dp2: false, dp3:false};
      $scope.orderProp = 'name';    
    }]);

myAppControllers.controller('employeeDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('employees/' + $routeParams.employeeId + '.json').success(function(data) {
      $scope.employeeInfo = data;
    });
  }]);
