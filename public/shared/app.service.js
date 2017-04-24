//CREATE
testPortalApp.factory("createQuestions", function($http) {

    var myFactory = {};
    
    myFactory.fetchQuestionList = function(serviceUrl, obj){ 
        return $http.post(serviceUrl, obj);
    }

    return myFactory;
    
});

//READ
testPortalApp.factory("fetchQuestions", function($http) {

    var myFactory = {};
    
    myFactory.fetchQuestionLists = function(serviceUrl){ 
        return $http.get(serviceUrl);
    }

    return myFactory;
    
});