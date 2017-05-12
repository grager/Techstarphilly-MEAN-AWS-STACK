testPortalApp.controller('editEventCtrl', function($scope, $state, $http) {
	
	$scope.cancelEditEvent = function() {
		//Go back to parent state and reload
	    $state.go('^');
	}

	$scope.getSingleEvent = function() {

		$http.get('/getSingleEvent/' + $scope.id).success(function(res){

			res.startDate = new Date(moment(res.startDate).format("YYYY-MM-DD"));
			res.endDate = new Date(moment(res.endDate).format("YYYY-MM-DD"));

			$scope.event = res;

		}).error(function(err) {

			$("#saveErrorModal").modal();
		});
	}

	$scope.saveEditEvent = function() {

		let id = $scope.id;
		
		$http.put('/updateEvent/' + id, $scope.event).success(function(res) {

			//Confirmation modal
			$("#saveEventModal").modal();

		}).error(function(err) {
			$("#saveErrorModal").modal();
		});
	}

	$scope.getSingleEvent();
});