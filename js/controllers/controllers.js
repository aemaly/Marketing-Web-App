/**
 * Created by Antonina_Malyarenko on 8/6/2015.
 */

marketingApp.controller('userController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('json/users.json').success(function(data) {
            $scope.users = data;
        });

    }]);

marketingApp.controller('positionController', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('json/open_positions.json').success(function(data) {
            $scope.positions = data;
        });

    }]);

marketingApp.controller('new-userController',function($scope, $http){
    $scope.list = [];
    $scope.formData = {};
    $scope.firstName='';
    $scope.lastName='';
    $scope.school='';
    $scope.major='';
    $scope.universityRank='';
    $scope.age='';
    $scope.submit = function(){
        if($scope.formData.firstName && $scope.formData.lastName && $scope.formData.school
        && $scope.formData.major && $scope.formData.universityRank && $scope.formData.age){
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

marketingApp.controller('homeController', function($scope, $http){

});