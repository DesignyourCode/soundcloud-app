app.factory('soundcloudConnect', [
	function() {
		SC.initialize({
			client_id: 'bda4ada8694db06efcac9cf97b872b3e',
			redirect_uri: '/'
		});

        return SC;
	}
]);



// ========================================
// -- User
// ========================================
app.factory('User', ['soundcloudConnect',
    function(soundcloudConnect)
    {
        return {
            get : function(id) {
                return SC.get('/users/' + id);
            }
        }
    }
]);

// ========================================
// -- Tracks
// ========================================
app.factory('Tracks', ['soundcloudConnect',
    function(soundcloudConnect)
    {
        return {
            get : function(id) {
                return SC.get('/users/' + id + '/tracks');
            }
        }
    }
]);