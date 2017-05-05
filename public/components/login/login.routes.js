var loginApp = angular.module('loginApp',['ui.router', 'ui.bootstrap']);

loginApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/signin');
    
    $stateProvider
        
        // HOME STATES  ========================================
        .state('signin', {
            url: '/signin',
            templateUrl: 'components/login/signin.html'
        })

        .state('signup', {
            url: '/signup',
            templateUrl: 'components/login/signup.html'
        })

        .state('forgotPassword', {
            url: '/forgotPassword',
            templateUrl: 'components/login/forgotPassword.html'
        })

    $locationProvider.html5Mode(true);
                
});