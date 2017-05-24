testPortalApp.controller('homeCtrl', function($scope, $window, $http, $state, $compile) {

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
		}).error(function(err) {

			$("#homeErrorModal").modal();
		});
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

		 /* Render Tooltip */
	    $scope.eventRender = function( event, element, view ) { 
	        element.attr({'tooltip': event.title,
	                     'tooltip-append-to-body': true});
	        $compile(element)($scope);
	    };

	    /*Go to Event Detail Page*/
	    $scope.eventClick = function() {
	    	$state.go('events');
	    }

		$scope.uiConfig = {
	      calendar:{
	        height: 650,
	        editable: true,
	        header:{
	          left: 'month basicWeek basicDay agendaWeek agendaDay',
	          center: 'title',
	          right: 'today prev,next'
	        },
	        eventRender: $scope.eventRender,
	        eventClick: $scope.eventClick
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

		}).error(function(res) {

			$("#homeErrorModal").modal();
		});
	
	}

	$scope.generateCalendar();

	//Reload to fix ui-calendar
	setTimeout(function() {$state.reload()}, 3000);

	$scope.reloadState = function(state) {

		//Go back to parent state and reload
		state != undefined ? $state.go(state, {}, { reload: true }) : $window.location.href = '/main.html';

	    //Remove modal backdrop
	    $('.modal-backdrop').remove();
	}
});
