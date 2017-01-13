app.controller('UserCtrl', ['$scope', 
	function($scope) {
		SC.initialize({
			client_id: 'bda4ada8694db06efcac9cf97b872b3e',
			redirect_uri: '/'
		});

		$scope.user = {
			id: 123,
			name: 'person who does not exist!',
			email: 'mmellows1@gmail.com',
			completion:70,
			color:'#323232',
			tracks:{},
			// genres: 
		}

		console.log(SC);

		SC.get('/users/' + $scope.user.id).then(function(user) {
			$scope.user.name = user.first_name;
		})

		SC.get('/users/' + $scope.user.id + '/tracks').then(function(tracks) {
			$scope.user.tracks = tracks;
			console.log($scope.user.tracks)
		})
	}
])
