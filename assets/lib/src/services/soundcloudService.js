app.factory('soundcloudConnect', [
	function() {
		SC.initialize({
			client_id: 'bda4ada8694db06efcac9cf97b872b3e',
			redirect_uri: '/'
		});
	}
]);

