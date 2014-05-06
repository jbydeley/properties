angular.module('PropertyApp')
	.controller('PropertyCreateCtrl', function ($scope, $routeParams, $http) {
		$scope.message = 'Create New Property';

		$scope.save = function() {
			console.log($scope.property);
			$http.post('/properties', $scope.property)
				.success(function() {
					console.log('Success?');
				})
		}
	});