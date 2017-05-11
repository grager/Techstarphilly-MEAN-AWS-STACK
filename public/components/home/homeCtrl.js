testPortalApp.controller('homeCtrl', function($scope, $window, $http) {

	$scope.user = JSON.parse($window.sessionStorage.getItem('authenticatedUser'));

	$scope.verifyToken = function() {

		let token = $window.sessionStorage.getItem('token');

		if (!token) {
			$window.location.href = '/login.html';
		}
	}

	$scope.getListOfAnnouncements = function() {

		let user = JSON.parse($window.sessionStorage.getItem('authenticatedUser'));
		
		$http.post('/getFilteredAnnouncement', {mapId: user.email}).success(function(res) {

			$scope.announcements = res;
			$scope.totalItems = res.length;
		}).error(function(err) {console.log(err)});
	}

	$scope.signout = function() {
		//Clear token when logout
		sessionStorage.clear();

		//Todo: Logout Page
		$window.location.href = '/login.html';
	}

	$scope.verifyToken();
	$scope.getListOfAnnouncements();

	//Pagination
	$scope.itemsPerPage = 4;
	$scope.currentPage = 1;

	var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

	//Calendar
	$scope.uiConfig = {
      calendar:{
        height: 650,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        }
        //eventClick: $scope.alertEventOnClick,
        //eventDrop: $scope.alertOnDrop,
       // eventResize: $scope.alertOnResize
      }
    }

    $scope.eventSources = [{
		events: [
			{
				title: 'From',
				start: '2015-01-31',
				allDay: true,
				rendering: 'background',
				backgroundColor: '#f26522',
			},
		],
	}];
});
