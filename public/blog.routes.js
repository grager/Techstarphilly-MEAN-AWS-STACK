var blogApp = angular.module('blogApp', ['ui.router','ui.bootstrap']);

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

        .state('filteredPosts', {
            url: '/filteredPosts',
            templateUrl: 'components/blog/filteredPosts.html'
        })

    $locationProvider.html5Mode(true);
                
});

