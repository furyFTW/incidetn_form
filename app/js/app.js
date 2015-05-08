angular.module('app', ['ngRoute'])

    .controller('GeneralController', function ($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })

    .controller('CorrectController', function ($scope, $routeParams) {
        $scope.name = "CorrectController";
        $scope.params = $routeParams;
    })

    .controller('ReviewSubmitController', function ($scope, $routeParams) {
        $scope.name = "ReviewSubmitController";
        $scope.params = $routeParams;
    })

    .config(function ($routeProvider) {
        $routeProvider
            .when('/general', {
                templateUrl: 'app/partials/general.html',
                controller: 'GeneralController'
            }).when('/correct', {
                templateUrl: 'app/partials/correct.html',
                controller: 'CorrectController'
            }).when('/submit', {
                templateUrl: 'app/partials/review_submit.html',
                controller: 'ReviewSubmitController'
            })
    });