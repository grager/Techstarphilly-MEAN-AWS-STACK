
loginApp.controller('loginCtrl', function($scope, $http, $window, $state, $uibModal) {

	//Sign in authentication
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

	//Sign up for the admin portal
	$scope.singupInfo = {};

	$scope.signup = function() {

		$http.post('/signup', $scope.singupInfo).success(function(res) {

			$state.go('signin');

		}).error(function(err) {console.log(err)});
	}

	//Reset Password
	$scope.updateUserInfo = {};

	$scope.updatePassword = function() {

		$http.put('/updatePassord', $scope.updateUserInfo).success(function(res) {
			
			$window.location.href = '/login.html';
			
		}).error(function(err) {console.log(err)});
	}

});
