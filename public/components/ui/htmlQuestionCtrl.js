
testPortalApp.controller('htmlQuestionCtrl', function($scope, $state, createQuestions, fetchQuestions, updateQuestion, deleteQuestion) {
	
	let originalList = {};

	$scope.addEntry = false;

	//Add another question list
	$scope.addAnotherList = function() {
		$scope.addEntry = true;
	};

	$scope.cancelEditForm = function() {
		$scope.addEntry = false;
	};

	//Set the flag within the ng-repeat list
	$scope.editForm = function(index) {
		let temp = {};
		$scope.htmlQuestions[index].isEdit = false;
		angular.copy($scope.htmlQuestions[index], temp);
		originalList = temp;
	};

	$scope.cancelEdit = function(index) {
		$scope.htmlQuestions[index] = originalList;
		$scope.htmlQuestions[index].isEdit = true;
	};

	$scope.reloadState = function() {
		$state.reload();
	};

	$scope.questionDetails = {};

	$scope.htmlQuestions = {};

	$scope.response;

	//CRUD for HTML Questions
	$scope.createHtmlQuestion = function() {
		createQuestions.fetchQuestionList('/saveHtmlQuestion', $scope.questionDetails).success(function(res) {
			$scope.response = res;
			$state.reload();
		});
	};

	$scope.getHtmlQuestions = function() {
		fetchQuestions.fetchQuestionLists('/getHtmlQuestion').success(function(res) {
			$scope.htmlQuestions = res;
		});
	};

	$scope.updateHtmlQuestion = function(id, index) {
		updateQuestion.updateQuestionList('/updateHtmlQuestion/' + id, $scope.htmlQuestions[index]).success(function(res) {
			$scope.htmlQuestions[index] = res;
			$state.reload();
		});
	};

	$scope.deleteHtmlQuestion = function(id) {

		deleteQuestion.deleteQuestionLists('/deleteHtmlQuestion/' + id).success(function(res) {
			$scope.response = res;
			$state.reload();
		});
	}

	$scope.getHtmlQuestions();
	
});