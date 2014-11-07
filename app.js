/*global angular*/
var app = angular.module('form', []);

app.controller('signupController', ['$scope', '$http',
  function($scope, $http) {
    $scope.submitted = false;
    $scope.person = {};
    $scope.address = {};
    $scope.person.addresses = [$scope.address];
    $scope.signupForm = function() {
      console.log($scope.person, $scope.signup_form.$valid);
      if ($scope.signup_form.$valid) {
        $http.post('/api/subscriptions', $scope.person).success(function(data) {
          console.log('ok?', data);
        });
      } else {
        $scope.submitted = true;
      }
    };
  }
]);
