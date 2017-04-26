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

        .state('consulting', {
            url: '/consulting',
            templateUrl: 'components/blog/consulting.html'
        })

        .state('businessAnalyst', {
            url: '/businessAnalyst',
            templateUrl: 'components/blog/businessAnalyst.html'
        })

        .state('uiDeveloper', {
            url: '/uiDeveloper',
            templateUrl: 'components/blog/uiDeveloper.html'
        })

    $locationProvider.html5Mode(true);
                
});

