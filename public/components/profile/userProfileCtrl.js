
testPortalApp.controller('userProfileCtrl', function($scope, $window, $http) {
	$scope.getUserProfile = function() {

		let token = $window.sessionStorage.getItem('token');

		$http.get('/api/getAllUsers', { headers: {'x-access-token': token} }).success(function(res) {
			console.log(res);
			$scope.users = res;
		}).error(function(err) {console.log(err)});
	}

	$scope.getUserProfile();
});