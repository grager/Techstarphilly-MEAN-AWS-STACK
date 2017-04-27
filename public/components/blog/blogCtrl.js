blogApp.controller('blogCtrl', function($scope, $http, $state) {

	$scope.allPosts = {};

	//Create Post
	/*$scope.createSinglePost = function() {

		$http.post('/savePost', data).success(function(res) {
			$scope.response = res;
			$state.reload();
		});
	};*/

	$scope.getFilteredPosts = function(category) {
		$scope.category = category;
		$http.get('/getAllPosts/' + category).success(function(res) {
			$scope.filteredPosts = res;
		});
	};

	$scope.getAllPosts = function() {
		$http.get('/getAllPosts').success(function(res) {
			$scope.allPosts = res;

			//set total post counts
			$scope.totalItems = $scope.allPosts.length;
		});
	};

	$scope.getAllPosts();

	//Pagination for all posts	
	$scope.itemsPerPage = 5;
	$scope.currentPage = 1;

	$scope.pageChanged = function() {
	   console.log("page changed.")
	};

});
