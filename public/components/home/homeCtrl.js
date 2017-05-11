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
        //eventResize: $scope.alertOnResize
      }
    }

    //Load events to Calendar
    let date = new Date(),
     	d = date.getDate(),
     	m = date.getMonth(),
     	y = date.getFullYear();

    $scope.eventSource = {
    	//color: '#f00',
        textColor: '#fff',
    	events:[
	      {title: 'All Day Event',start: "2017-05-11", end: "2017-05-12"},
	      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
	      {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
	      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
	      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
	      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
	    ]
	}

    $scope.eventSources = [$scope.eventSource];
});
