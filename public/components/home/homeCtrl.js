testPortalApp.controller('homeCtrl', function($scope, $window, $http) {

	$scope.user = JSON.parse($window.sessionStorage.getItem('authenticatedUser'));

	$scope.verifyToken = function() {

		let token = $window.sessionStorage.getItem('token');

		if (!token) {
			$window.location.href = '/login.html';
		}
	}

	$scope.verifyToken();
});
