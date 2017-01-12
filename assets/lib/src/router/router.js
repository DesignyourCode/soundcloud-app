app.config(['$routeProvider','$locationProvider',
	function($routeProvider, $locationProvider) {
    	$routeProvider
			.when("/", {
			    templateUrl : "views/welcome.html"
			})
			.when("/user", {
			    templateUrl : "views/user.html"
			})
			.when("/settings", {
			    templateUrl : "views/settings.html"
			})
			.when("/search", {
			    templateUrl : "views/search.html"
			})
		
		$locationProvider.html5Mode(true);
	}
]);
