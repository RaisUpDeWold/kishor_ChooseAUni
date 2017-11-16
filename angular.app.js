(function () {
    var app = angular.module('myApp', ['ngTagsInput']);

    app.controller('TagCtrl', function ($scope, $http) {
        $scope.tags = [
        ];

        $scope.loadTags = function (query) {
            return $http.get('/Json/subjects.json');
        };
    });
})();




