
testPortalApp.controller('uiQuestionCtrl', function($scope, createQuestions, fetchQuestions) {

	$scope.questionDetails = {
		"title": "doctype",
		"question": "what is doctype",
		"anwser": "testtestanwser",
		"code": "testcodecode"
	};

	$scope.createHtmlQuestion = function() {
		createQuestions.fetchQuestionList('/saveHtmlQuestion', $scope.questionDetails).success(function(res) {
			console.log(res)
		});
	}

	$scope.getHtmlQuestion = function() {
		fetchQuestions.fetchQuestionLists('/getHtmlQuestion').success(function(res) {
			$scope.htmlQuestions = res;
		});
	}

	$scope.getHtmlQuestion();
	
});