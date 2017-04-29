var loginApp = angular.module('loginApp', []);

loginApp.controller('loginCtrl', function($scope, $http, $window) {

	$scope.userInfo = {};

	$scope.signin = function() {

		$http.post('/authenticate', $scope.userInfo).success(function(res) {

		//Set token to session storage
    	$window.sessionStorage.setItem('token',res.token);

    	$window.location.href = '/main.html';

		}).error(function(err) {console.log(err)});
	}

	$scope.getListOfUsers = function() {

		let token = $window.sessionStorage.getItem('token');

		$http.get('/api/getAllUsers', { headers: {'x-access-token': token} }).success(function(res) {
			console.log(res);
		}).error(function(err) {console.log(err)});
	}

});