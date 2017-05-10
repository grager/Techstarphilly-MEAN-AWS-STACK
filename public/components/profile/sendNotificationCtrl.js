testPortalApp.controller('notificationCtrl', function($scope, $state, $http) { 

	$scope.notification = {};

	$scope.notification.mapId = $scope.email;

	$scope.sendNotification = function() {

		$http.post('/createAnnouncement', $scope.notification).success(function(res) {
			console.log($scope.notification);
			//Go back to parent state
	 		$state.go('^');
		}).error(function(err) {console.log(err)});

	}

	$scope.cancelNotification = function() {
		
		//Go back to parent state
	 	$state.go('^');
	}
});
