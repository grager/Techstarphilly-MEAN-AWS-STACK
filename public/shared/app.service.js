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

//Update
testPortalApp.factory("updateQuestion", function($http) {

    var myFactory = {};
    
    myFactory.updateQuestionList = function(serviceUrl, obj){ 
        return $http.put(serviceUrl, obj);
    }

    return myFactory;
    
});

//Delete
testPortalApp.factory("deleteQuestion", function($http) {

    var myFactory = {};
    
    myFactory.deleteQuestionLists = function(serviceUrl){ 
        return $http.delete(serviceUrl);
    }

    return myFactory;
    
});