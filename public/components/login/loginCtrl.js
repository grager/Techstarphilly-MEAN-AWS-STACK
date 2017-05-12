
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

			} else {

				$("#signinErrorModal").modal();
			}
		
		}).error(function(err) {

			$("#loginErrorModal").modal();
		});
	}

	//Sign up for the admin portal
	$scope.singupInfo = {};

	$scope.signup = function() {

		$http.post('/signup', $scope.singupInfo).success(function(res) {

			$("#signupModal").modal();

		}).error(function(err) {

			$("#loginErrorModal").modal();
		});
	}

	//Reset Password
	$scope.updateUserInfo = {};

	$scope.updatePassword = function() {

		$http.put('/updatePassord', $scope.updateUserInfo).success(function(res) {
			
			$("#forgotPasswordModal").modal();
			
		}).error(function(err) {

			$("#loginErrorModal").modal();
		});
	}

	$scope.reloadState = function(state) {
		$state.go(state);

		//Remove modal backdrop
	    $('.modal-backdrop').remove();
	}

	$scope.removeOverlay = function() {

		//Remove modal backdrop
	    $('.modal-backdrop').remove();
	}

});
