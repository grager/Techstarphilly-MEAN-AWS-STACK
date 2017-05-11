testPortalApp.controller('eventsCtrl', function($scope, $window, $http) {

	$scope.getAllEvents = function() {

		$http.get('/getAllEvents').success(function(res) {			

			//Format date object
			_.forEach(res, function(value, key) {
				value.startDate = moment(value.startDate).format("YYYY-MM-DD");
				value.endDate = moment(value.endDate).format("YYYY-MM-DD");
			});

			$scope.events = res;


		}).error(function(res) {console.log(err)});
	}

	//Get all events
	$scope.getAllEvents();
	
});