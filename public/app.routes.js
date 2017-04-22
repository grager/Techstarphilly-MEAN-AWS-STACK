var complianceApp = angular.module('complianceApp', ['homeModule', 'trainingModule', 'ui.router', 'ui.grid.exporter', 'ui.bootstrap']);

complianceApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES  ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'components/home/home.html'
        })

        .state('training', {
            url: '/training',
            templateUrl: 'components/training/trainingView.html'
        })

        .state('training.create', {
            
            url: '/create',
            templateUrl: 'components/training/createTraining.html'
        })

        .state('training.edit', {
            
            url: '/edit/{referenceId}',
            templateUrl: 'components/training/viewTraining.html',
            controller: function($scope, $stateParams) {
                // get the id
                $scope.id = $stateParams.referenceId;
   
            }
        })

        .state('awareness', {
            url: '/awareness',
            templateUrl: 'components/awareness/awarenessView.html'
        })

        .state('curriculum', {
            url: '/curriculum',
            templateUrl: 'components/curriculum/curriculumView.html'
        })

        .state('entitlements', {
            url: '/entitlements',
            templateUrl: 'components/entitlements/entitlements.html'
        })

        .state('reports', {
            url: '/reports',
            templateUrl: 'components/reports/reports.html'
        })

    $locationProvider.html5Mode(true);
                
});

complianceApp.controller('appCtrl', function($scope, $state) {
    //$state.transitionTo('training.create');
});