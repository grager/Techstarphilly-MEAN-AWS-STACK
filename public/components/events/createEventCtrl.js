testPortalApp.controller('createEventCtrl', function($scope, $state, $http) {
	
	$scope.event = {};

	$scope.cancelCreateEvent = function() {
		//Go back to parent state
	    $state.go('^');
	}

	$scope.createNewEvent = function() {
		$http.post('/createEvent', $scope.event).success(function(res) {
			
			$("#createEventModal").modal();

		}).error(function(err) {

			$("#createErrorModal").modal();
		});
	}
});