var loginApp = angular.module('loginApp', []);

loginApp.controller('loginCtrl', function($scope, $http, $window) {

	$scope.userInfo = {};

	$scope.signin = function() {

		$http.post('/authenticate', $scope.userInfo).success(function(res) {
			$window.location.href = '/main.html';
		}).error(function(err) {console.log(err)});
	}

});