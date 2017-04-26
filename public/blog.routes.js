var blogApp = angular.module('blogApp', ['ui.router']);

blogApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/posts');
    
    $stateProvider
        
        // HOME STATES  ========================================
        .state('posts', {
            url: '/posts',
            templateUrl: 'components/blog/posts.html'
        })

        .state('collections', {
            url: '/collections',
            templateUrl: 'components/blog/collections.html'
        })

    $locationProvider.html5Mode(true);
                
});

