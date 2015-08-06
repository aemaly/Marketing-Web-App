/**
 * Created by Antonina_Malyarenko on 8/6/2015.
 */
var marketingControllers = angular.module('marketingControllers', []);

marketingControllers.controller('positionController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('json/users.json').success(function(data) {
            $scope.users = data;
        });

    }]);

marketingControllers.controller('userController',function($scope, $http){
    $scope.list = [];
    $scope.formData = {};
    $scope.firstName='';
    $scope.lastName='';
    $scope.submit = function(){
        if($scope.formData.firstName && $scope.formData.lastName){
            $scope.list.push(this.formData);
        }
        $http({
            method: 'POST',
            url: '/user',
            data: $.param($scope.formData),
            headers: {'ContentType': 'application/x-www-form-urlencoded'}
        })
            .success(function(data) {

            });

    };
});