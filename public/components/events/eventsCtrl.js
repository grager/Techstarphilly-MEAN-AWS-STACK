testPortalApp.controller('eventsCtrl', function($scope, $window, $http, $uibModal) {

	$scope.getAllEvents = function() {

		$http.get('/getAllEvents').success(function(res) {			

			//Format date object
			_.forEach(res, function(value, key) {
				value.startDate = moment(value.startDate).format("YYYY-MM-DD");
				value.endDate = moment(value.endDate).format("YYYY-MM-DD");
			});

			$scope.events = res;

			//Pagination
			$scope.totalItems = res.length;

		}).error(function(res) {console.log(err)});
	}

	//Get all events
	$scope.getAllEvents();

	//Pagination
	$scope.itemsPerPage = 6;
	$scope.currentPage = 1;
	
});