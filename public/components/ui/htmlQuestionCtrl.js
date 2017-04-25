
testPortalApp.controller('htmlQuestionCtrl', function($scope, $state, createQuestions, fetchQuestions, updateQuestion, deleteQuestion) {
	
	$scope.addEntry = false;

	$scope.isEdit = true;

	$scope.addAnotherList = function() {
		$scope.addEntry = true;
	};

	$scope.cancelEditForm = function() {
		$scope.addEntry = false;
	};

	$scope.editForm = function() {
		$scope.isEdit = false;
	};

	$scope.cancelEdit = function() {
		$scope.isEdit = true;
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