testPortalApp.controller('homeCtrl', function($scope, $window, $http, $state) {

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

	$scope.generateCalendar = function() {

		$scope.uiConfig = {
	      calendar:{
	        height: 650,
	        editable: true,
	        header:{
	          left: 'month basicWeek basicDay agendaWeek agendaDay',
	          center: 'title',
	          right: 'today prev,next'
	        }
	      }
	    }

		$http.get('/getAllEvents').success(function(res) {			

			let events = [];
			
			//Format date object
			_.forEach(res, function(value, key) {

				value.startDate = moment(value.startDate).format("YYYY-MM-DD");
				value.endDate = moment(value.endDate).format("YYYY-MM-DD");

				events.push({
					title: value.title,
					start: value.startDate,
					end: value.endDate,
					allDay: value.allDay,
					url: value.url
				});
			});

			$scope.eventSource = {
		        textColor: '#fff',
		    	events: events
			}

			$scope.eventSources = [$scope.eventSource];

		}).error(function(res) {console.log(err)});
	
	}

	$scope.generateCalendar();

	//Reload to fix ui-calendar
	setTimeout(function() {$state.reload()}, 3000);
});
