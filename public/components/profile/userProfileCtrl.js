
testPortalApp.controller('userProfileCtrl', function($scope, $window, $http, userProfile) {
	
	$scope.getUserProfile = function() {

		let token = $window.sessionStorage.getItem('token');

		$http.get('/api/getAllUsers', { headers: {'x-access-token': token} }).success(function(res) {

			if (res.success == false) {

				$window.location.href = '/login.html';
				
			} else {

				$scope.users = res;

				//Pagination
				$scope.totalItems = res.length;
				
			}

		}).error(function(err) {

			$("#userProfileErrorModal").modal();
			
		});
	}

	$scope.getUserDetail = function(data) {

		userProfile.setData(data);
		
	}

	$scope.getUserProfile();

	//Pagination
	$scope.itemsPerPage = 8;
	$scope.currentPage = 1;
});