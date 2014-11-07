var app = angular.module("form",[]);

	
app.controller('signupController', ['$scope','$http', function($scope,$http) {
		  $scope.submitted = false;
		  $scope.signupForm = function() {
		    if ($scope.signup_form.$valid) {
		      // Submit as normal
		      alert($scope.signup.name);
			   $scope.namess = [
				      	{
				      		"name":"ram",
				      		"email": "ram@gmail.com"
				      	},
				      	{
				      	"name" : "ajay",
				      	"email" :"ajay@gmail.com"
				      	},
					];

              $scope.namess.push({"name":$scope.signup.name,"email":$scope.signup.email});
			 var dataobj = {
              	"name":$scope.signup.name,
              	"email" : $scope.signup.email
              };

              		var res = $http.post('/post/json', dataobj);
              		res.success(function(data, status, headers, config){
              			$scope.message =  data;
              		});


              		res.error(function(data, staus, headers, config){
              				alert("failure message " + JSON.stringify({data:data}));
              		});

		   //    $http({
					//     method: 'POST',
					//     url: '/post',
					//     data: "message=" + $scope.signup.name,
					//     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					// });
					} else {
		      $scope.signup_form.submitted = true;
		    }
		  };

		}]);


		// app.directive('ngFocus', [function() {
		// 	  var FOCUS_CLASS = "ng-focused";
		// 	  return {
		// 	    restrict: 'A',
		// 	    require: 'ngModel',
		// 	    link: function(scope, element, attrs, ctrl) {
		// 	      ctrl.$focused = false;
		// 	      element.bind('focus', function(evt) {
		// 	        element.addClass(FOCUS_CLASS);
		// 	        scope.$apply(function() {ctrl.$focused = true;});
		// 	      }).bind('blur', function(evt) {
		// 	        element.removeClass(FOCUS_CLASS);
		// 	        scope.$apply(function() {ctrl.$focused = false;});
		// 	      });
		// 	    }
		// 	  }
		// 	}]);

	// app.directive('ensureUnique', ['$http', function($http) {
		//   return {
		//     require: 'ngModel',
		//     link: function(scope, ele, attrs, c) {
		//       scope.$watch(attrs.ngModel, function() {
		//         $http({
		//           method: 'POST',
		//           url: '/api/check/' + attrs.ensureUnique,
		//           data: {'field': attrs.ensureUnique}
		//         }).success(function(data, status, headers, cfg) {
		//           c.$setValidity('unique', data.isUnique);
		//         }).error(function(data, status, headers, cfg) {
		//           c.$setValidity('unique', false);
		//         });
		//       });
		//     }
		//   }
		// }]);