testPortalApp.controller('createEventCtrl', function($scope, $state, $http) {
	
	$scope.event = {};

	$scope.cancelCreateEvent = function() {
		//Go back to parent state
	    $state.go('^');
	}

	$scope.createNewEvent = function() {
		$http.post('/createEvent', $scope.event).success(function(res) {
			console.log(res);
			//Go back to parent state
	    	$state.go('^');
		}).error(function(err) {console.log(err)});
	}
});