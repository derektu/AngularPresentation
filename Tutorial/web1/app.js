/**
 * Created by Derek on 2014/10/16.
 */

var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {

    $scope.value_C = 30;
    $scope.value_F = 0;

    $scope.c2f = function() {
        $scope.value_F = $scope.value_C * 9 / 5 + 32;
    };

    $scope.f2c = function() {
        $scope.value_C = ($scope.value_F - 32) * 5 / 9;
    };

    $scope.c2f();

});

