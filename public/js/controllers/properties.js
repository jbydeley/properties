angular.module('PropertyApp')
	.controller('PropertyListCtrl', function ($scope, $http) {
		$http.get('/properties').success(function(properties) {
			$scope.properties = properties;
		});
	});