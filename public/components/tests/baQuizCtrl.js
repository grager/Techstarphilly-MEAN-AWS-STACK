testPortalApp.controller('baQuizCtrl', function($scope, $window, $http) {

	$scope.index = 0;

	$scope.anwser = [];

	$scope.quizContent = [];

	$scope.getQuizSession = function() {

		$http.get('/getBaQuizSession/' + $scope.session).success(function(res) {
			
			$scope.lists = res;
			$scope.length = res.length;

			//Set the state
			$scope.questions = $scope.lists[$scope.index];

		}).error(function(req, res) {console.log(err)});
	}

	$scope.incrementIndex = function() {

		//Get quiz content
		$scope.quizContent[$scope.index] = {
			title: $scope.lists[$scope.index].question,
			anwser: $scope.anwser[$scope.index]
		}

		$scope.index ++;

		//Set the state
		$scope.questions = $scope.lists[$scope.index];
		
	}

	$scope.decrementIndex = function() {
		$scope.index --;

		//Set the state
		$scope.questions = $scope.lists[$scope.index];
				
	}

	$scope.previewQuiz = function() {
		console.log($scope.quizContent);
	}

	$scope.getQuizSession();
});