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
		$http.get('/getAllPosts/' + category).success(function(res) {
			$scope.filteredPosts = res;
		});
	};

	$scope.getAllPosts = function() {
		$http.get('/getAllPosts').success(function(res) {
			$scope.allPosts = res;
		});
	};

	$scope.getAllPosts();

	//Pagination for all posts

	$scope.totalItems = $scope.allPosts.length;
	$scope.itemsPerPage = 5;
	$scope.currentPage = 1;

	$scope.pageChanged = function() {
	   console.log("page changed.")
	};

});
