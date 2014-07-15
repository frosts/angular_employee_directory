'use strict';

/* App Module */
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',    
  'myAppControllers',
  'department',
  'ui.bootstrap',    
]);

myApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/employee-list.html',
        controller: 'employeeListCtrl'
      }).
      when('/employees/:employeeId', {
        templateUrl: 'partials/employee-detail.html',
        controller: 'employeeDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

myApp.filter('departmentFilter', function() {
    return function( items, types) {
    var filtered = [];
    angular.forEach(items, function(item) {
       if(types.dp1 == false && types.dp3 == false && types.dp2 == false) {
          filtered.push(item);
        }
        else if(types.dp1 == true && types.dp3 == false && types.dp2 == false && item.departmentBool.dp1 == true){
          filtered.push(item);
        }
        else if(types.dp3 == true && types.dp1 == false && types.dp2 == false && item.departmentBool.dp3 == true){
          filtered.push(item);
        }
        else if(types.dp2 == true && types.dp1 == false && types.dp3 == false && item.departmentBool.dp2 == true){
          filtered.push(item);
        }
    });
    return filtered;
  };
});