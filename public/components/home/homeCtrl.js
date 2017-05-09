testPortalApp.controller('homeCtrl', function($scope, $window, $http) {

	$scope.user = JSON.parse($window.sessionStorage.getItem('authenticatedUser'));

	$scope.verifyToken = function() {

		let token = $window.sessionStorage.getItem('token');

		if (!token) {
			$window.location.href = '/login.html';
		}
	}

	$scope.getListOfAnnouncements = function() {

		let user = JSON.parse($window.sessionStorage.getItem('authenticatedUser'));
		
		$http.post('/getFilteredAnnouncement', {mapId: user.email}).success(function(res) {

			$scope.announcements = res;
		}).error(function(err) {console.log(err)});
	}

	$scope.signout = function() {
		//Clear token when logout
		sessionStorage.clear();

		//Todo: Logout Page
		$window.location.href = '/login.html';
	}

	$scope.verifyToken();
	$scope.getListOfAnnouncements();
});
