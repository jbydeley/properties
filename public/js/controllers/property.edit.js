angular.module('PropertyApp')
	.controller('PropertyEditCtrl', function ($scope, $routeParams, $http) {
		$scope.message = 'Editing';

		$http.get('/properties/' + $routeParams.id).success(function(property) {
			$scope.property = property;
		});

		$scope.save = function() {
			console.log($scope.property);
			$http.put('/properties/' + $routeParams.id, $scope.property)
				.success(function() {
					console.log('Success?');
				})
		}
	});