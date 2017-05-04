var loginApp = angular.module('loginApp',[]);

loginApp.controller('loginCtrl', function($scope, $http, $window) {

	$scope.userInfo = {};

	$scope.signin = function() {

		$http.post('/authenticate', $scope.userInfo).success(function(res) {

			if (res.success) {
				//Set token to session storage
	    		$window.sessionStorage.setItem('token',res.token);

	    		$window.sessionStorage.setItem('authenticatedUser', JSON.stringify(res.user));

	    		$window.location.href = '/main.html';
			}
		
		}).error(function(err) {console.log(err)});
	}

	$scope.signup = function() {
		$http.get('/signup').success(function(res) {
			console.log(res);
		}).error(function(err) {console.log(err)});
	}

});
