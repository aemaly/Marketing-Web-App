/**
 * Created by Antonina_Malyarenko on 8/3/2015.
 */
var marketingApp = angular.module('marketingApp', [
    'ngRoute'
]);

marketingApp.config(['$routeProvider',
function($routeProvider){
    $routeProvider.
        when('/user',
        {
            templateUrl:'partials/user-info.html',
            controller: 'new-userController'
        }).
        when('/user/userlist',
        {
            templateUrl:'partials/user-list.html',
            controller: 'userController'

        }).
        when('/home',
        {
            templateUrl:'partials/home_page.html',
            controller:'homeController'
        }).
        when('/positions',
        {
            templateUrl:'partials/open_positions.html',
            controller:'positionController'
        }).
        otherwise({
            redirectTo:'/home'
        });
}]);

