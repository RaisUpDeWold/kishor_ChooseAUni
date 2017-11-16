(function () {
 
    var ResultsApp = angular.module('showresultsApp', ['ngTagsInput', 'mm.foundation']);

ResultsApp.controller('ResultListCtrl', function ($scope, $http, $filter) {
    var orderBy = $filter('orderBy');
    $http.get("uni4.json").success(function (data) {
        $scope.results = data;
    });


    $scope.dynamicTooltip = "This is dynamic tooltip text";
   

    $scope.order = function (predicate, reverse) {
        $scope.results = orderBy($scope.results, predicate, reverse);
    };

    //$scope.multipleChoicesComparator = function (expected, actualInCompactForm) {
    //     Get a list of predicates
    //    var listActual = actualInCompactForm.split(' ');
    //    var mustBeIncluded = false;

    //    angular.forEach(listActual, function (actual) {
    //         Search a substring in the object value which match one of the predicate,
    //         in a case-insensitive manner
    //        if (angular.lowercase(expected).indexOf(angular.lowercase(actual)) !== -1) {
    //            mustBeIncluded = true;
    //        }
    //    });

    //    return mustBeIncluded;
    //};


    $scope.myFilter = function (expected, actualInCompactForm) {

      
        var listActual = actualInCompactForm.toLowerCase().split(' ');
        var mustBeIncluded = false;

        var count = 0;
        angular.forEach(listActual, function (actual) {
            
            if (angular.lowercase(expected).indexOf(angular.lowercase(actual)) !== -1) {
                count++;
            }

            if (count == listActual.length) {

                mustBeIncluded = true;
            } 
        });

        return mustBeIncluded;
        
    };

    $scope.tags = [];


    $scope.loadTags = function (query) {
        return $http.get('/Json/subjects.json');
    };



});



})();