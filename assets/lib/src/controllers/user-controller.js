app.controller('UserCtrl', ['$scope', 'User', 'Tracks',
	function($scope, User, Tracks) {

		$scope.user = {
			id: 123,
			name: 'person who does not exist!',
			email: 'mmellows1@gmail.com',
			completion:70,
			color:'#323232',
			tracks:{},
			// genres: 
		}

		User.get($scope.user.id).then(function(res) {
			console.log(res);
		});

		Tracks.get($scope.user.id).then(function(res) {
			// $scope.user.tracks = tracks;
			console.log(res);
		})
	}
])
