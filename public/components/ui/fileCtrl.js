
testPortalApp.controller('fileCtrl', function($scope, $window, $http) {

	$scope.getAllFiles = function() {

		$http.get('/getListOfFiles').success(function(res) {

			$scope.files = res.Contents;
			
		}).error(function(err) {console.log(err)});
	}

	$scope.getSignedUrl = function(data) {

		let fileName = {"fileName": data};

		$http.post('/getSignedUrl', fileName).success(function(res) {

			$window.open(res, '_blank');

		}).error(function(err) {console.log(err)});
	}

	$scope.getAllFiles();
});