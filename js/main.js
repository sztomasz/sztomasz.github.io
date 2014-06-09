requirejs.config({
    "paths": {
      "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min"
    }
});

require(["jquery", "app.min", "portfolio"], function($, App, Portfolio) {

	App.init();
	Portfolio.init();

});