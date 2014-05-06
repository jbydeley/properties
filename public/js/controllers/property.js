angular.module('PropertyApp')
	.controller('PropertyDetailsCtrl', function ($scope, $routeParams, $http) {
		$http.get('/properties/' + $routeParams.id).success(function(property) {
			$scope.property = property;
		});
	});