requirejs.config({
    "paths": {
      "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
});

require(["jquery", "app", "portfolio"], function($, App, Portfolio) {

	App.init();
	Portfolio.init();

});