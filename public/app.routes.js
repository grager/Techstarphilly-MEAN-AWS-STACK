var testPortalApp = angular.module('testPortalApp', ['ui.router', 'ui.bootstrap', 'ui.calendar']);

testPortalApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES  ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'components/home/home.html'
        })

        .state('mockInterview', {
            url: '/mockInterview',
            templateUrl: 'components/mockInterview/home.html'
        })

        .state('baHome', {
            url: '/baHome',
            templateUrl: 'components/ba/home.html'
        })

        .state('uiHome', {
            url: '/uiHome',
            templateUrl: 'components/ui/home.html'
        })

        .state('htmlQuestions', {
            url: '/htmlQuestions',
            templateUrl: 'components/ui/htmlQuestions.html'
        })

        .state('cssQuestions', {
            url: '/cssQuestions',
            templateUrl: 'components/ui/cssQuestions.html'
        })

        .state('javascriptQuestions', {
            url: '/javascriptQuestions',
            templateUrl: 'components/ui/javascriptQuestions.html'
        })

        .state('jqueryQuestions', {
            url: '/jqueryQuestions',
            templateUrl: 'components/ui/jqueryQuestions.html'
        })

        .state('angularjsQuestions', {
            url: '/angularjsQuestions',
            templateUrl: 'components/ui/angularjsQuestions.html'
        })

        .state('otherQuestions', {
            url: '/otherQuestions',
            templateUrl: 'components/ui/otherQuestions.html'
        })

        .state('files', {
            url: '/files',
            templateUrl: 'components/files/home.html'
        })

        .state('filesba', {
            url: '/filesba',
            templateUrl: 'components/files/ba.html'
        })

        .state('filesui', {
            url: '/filesui',
            templateUrl: 'components/files/ui.html'
        })

        .state('userProfile', {
            url: '/userProfile',
            templateUrl: 'components/profile/userProfile.html'
        })

        .state('userProfile.sendGroupNotification', {
            url: '/sendGroupNotification',
            templateUrl: 'components/profile/sendNotification.html'
        })

        .state('userDetail', {
            url: '/userDetail',
            templateUrl: 'components/profile/userDetail.html'
        })

        .state('userDetail.sendNotification', {
            url: '/sendNotification/{email}',
            templateUrl: 'components/profile/sendNotification.html',
            controller: function($scope, $stateParams) {
                // get the email
                $scope.email = $stateParams.email;   
            }
        })

        .state('events', {
            url: '/events',
            templateUrl: 'components/events/events.html'
        })

        .state('events.createEvent', {
            url: '/createEvent',
            templateUrl: 'components/events/createEvent.html'
        })

        .state('events.editEvent', {
            url: '/editEvent/{id}',
            templateUrl: 'components/events/editEvent.html',
            controller: function($scope, $stateParams) {
                // get the id
                $scope.id = $stateParams.id;   
            }
        })

        .state('tests', {
            url: '/tests',
            templateUrl: 'components/tests/home.html'
        })

        .state('baQuiz', {
            url: '/baQuiz',
            templateUrl: 'components/tests/baQuiz.html'
        })

        .state('baQuizTemplate', {
            url: '/baQuizTemplate/{session}',
            templateUrl: 'components/tests/baQuizTemplate.html',
            controller: function($scope, $stateParams) {
                // get the id
                $scope.session = $stateParams.session;   
            }
        })

        .state('uiQuiz', {
            url: '/uiQuiz',
            templateUrl: 'components/tests/uiQuiz.html'
        })

        .state('uiQuizTemplate', {
            url: '/uiQuizTemplate/{session}',
            templateUrl: 'components/tests/uiQuizTemplate.html',
            controller: function($scope, $stateParams) {
                // get the id
                $scope.session = $stateParams.session;   
            }
        })


    $locationProvider.html5Mode(true);
                
});

