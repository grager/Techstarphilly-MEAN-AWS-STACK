
testPortalApp.controller('fileCtrl', function($scope, $window, $http) {

	$scope.getAllFiles = function() {

		$http.get('/getListOfFiles/' + $scope.week).success(function(res) {

			$scope.files = res.Contents;

			$scope.totalItems = res.Contents.length;
			
		}).error(function(err) {console.log(err)});
	}

	$scope.getSignedUrl = function(data) {

		let fileName = {"fileName": data};

		$http.post('/getSignedUrl/' + $scope.week, fileName).success(function(res) {

			$window.open(res, '_blank');

		}).error(function(err) {console.log(err)});
	}

	$scope.getAllFiles();

	//Pagination
	$scope.itemsPerPage = 7;
	$scope.currentPage = 1;
});