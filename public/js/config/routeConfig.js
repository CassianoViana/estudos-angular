app
.config(function($locationProvider) {
  $locationProvider.hashPrefix('');
})
.config(function ($routeProvider) {
	$routeProvider
	.when('/dashboard', {
		templateUrl: 'view/dashboard.html',
		controller: 'DashboardCtrl'
	})
	.when('/login', {
		templateUrl: 'view/login.html',
		controller: 'LoginCtrl'
	})
	
});