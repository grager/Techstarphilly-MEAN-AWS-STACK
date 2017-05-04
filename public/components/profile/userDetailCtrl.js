testPortalApp.controller('userDetailCtrl', function($scope, $window, $http, userProfile) {
	$scope.getUserDetail = function() {

		let email = {email: userProfile.getData()};

		$http.post('/getUserDetail', email).success(function(res) {
			
			$scope.userDetail = res;
		
		}).error(function(err) {console.log(err)});
	}

	$scope.getUserDetail();
});