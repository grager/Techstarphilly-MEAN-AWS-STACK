testPortalApp.controller('notificationCtrl', function($scope, $state, $http) { 

	$scope.notification = {};

	$scope.notification.mapId = $scope.email;

	$scope.sendNotification = function() {

		//Get pre-signed url and upload file to S3
		let file = document.getElementById('file-attachment').files[0];

		$http.post('/uploadFiletoBucket',{ fileName: file.name, fileType: file.type }).success(function(url) {
			
			let preSignedUrl = url;

			$http.put(preSignedUrl, file, {headers: {'Content-Type': file.type}}).success(function(res) {
	         
	            //Set file name and url to notification model
				$scope.notification.fileName = file.name;
				$scope.notification.fileUrl = 'https://s3.amazonaws.com/admin-portal-notification/'+ file.name;

	          	//Save announcement to db after upload file to S3
	          	$scope.saveNotification();

	   		}).error(function(err) {

	   			$("#notificationErrorModal").modal();
	   		});

		}).error(function(err) {

			$("#notificationErrorModal").modal();
		});
	}

	$scope.saveNotification = function() {

		//Save announcement entry to db
		$http.post('/createAnnouncement', $scope.notification).success(function(res) {
			//Send email after create notification
			$scope.sendEmailNotification($scope.notification);

		}).error(function(err) {

			$("#notificationErrorModal").modal();
		});
	}

	$scope.cancelNotification = function() {		
		//Go back to parent state
	 	$state.go('^');
	}

	$scope.sendEmailNotification = function(data) {

		//Send email from techstarphillyinfo@gmail.com
		$http.post('/sendEmailNotification', data).success(function(res) {
			
			$("#sendNotificationModal").modal();

		}).error(function(err) {
			
			$("#notificationErrorModal").modal();
		});
	}
});
