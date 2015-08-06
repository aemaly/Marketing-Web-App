/**
 * Created by Antonina_Malyarenko on 8/3/2015.
 */
var marketingApp = angular.module('marketingApp', [
    'ngRoute',
    'marketingControllers'
]);

marketingApp.config(['$routeProvider',
function($routeRovider){
    $routeProvider.
        when('/user',
        {
            templateUrl:'partials/user-info.html',
            controller: 'userController'
        }).
        when('/positions',
        {
            templateUrl:'partials.open_positions.html',
            controller: 'peopleController'

        }).
        otherwise({
            redirectTo:'/'
        })
}]);

