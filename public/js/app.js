angular.module('PropertyApp', ['ngRoute', 'ngResource'])
	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/properties', {
				templateUrl: 'views/list.html',
				controller: 'PropertyListCtrl'
			}).
			when('/properties/new', {
				templateUrl: 'views/create.html',
				controller: 'PropertyCreateCtrl'
			}).
			when('/properties/:id/edit', {
				templateUrl: 'views/create.html',
				controller: 'PropertyEditCtrl'
			}).
			when('/properties/:id', {
				templateUrl: 'views/details.html',
				controller: 'PropertyDetailsCtrl'
			}).
			otherwise({
				redirectTo: '/properties'
			});
		}]);