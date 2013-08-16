$( 'document' ).ready(function() {
	/* to protect against unloaded script */
	function load(src, callback) {
		var script = document.createElement('script');
		script.setAttribute('type', "text/javascript");
		script.setAttribute('src', src);
		var loaded = false;
		if(callback) {
			script.onload = function() {
				if(!loaded) {
					callback();
				}
				loaded = true;
			};
		}
		document.getElementsByTagName('head')[0].appendChild(script);
	}
	
	function initialize() {
		$( '.bxSlider' ).bxSlider({
			slideWidth: 960
		});
	}
	
	load('html5lightbox/html5lightbox.js');
	load('bxslider/jquery.bxslider.min.js', initialize);
});