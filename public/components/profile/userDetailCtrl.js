testPortalApp.controller('userDetailCtrl', function($scope, $window, $state, $http, userProfile) {
	$scope.getUserDetail = function() {

		let email = {email: userProfile.getData()};

		$http.post('/getUserDetail', email).success(function(res) {
			
			$scope.userDetail = res;
		
		}).error(function(err) {console.log(err)});
	}

	$scope.getUserDetail();

	$scope.sendNotification = function() {

		let email = userProfile.getData();

		$state.go('userDetail.sendNotification', {myParam: email});

		console.log(email)

	}

	
});