define( ['jquery'], function () {

	var next = $(".next"),
		prev = $(".prev"),
		indicators = $(".portfolio__indicators"),
		indicators_el = $(".portfolio__indicator"),
		gallery = $(".circle-portfolio_list");


	function _getCurrent() {
			return gallery.find(".active");

	};

	function _showNext() {

		var current_el = _getCurrent(),
			next = current_el.next("li");

			current_el.removeClass("active");

			if ( next.length > 0 ) {
				next.addClass("active");
			} else {
				gallery.find("li").first().addClass("active");
			}
			_setActiveIndicator();

	};

	function _showPrev() {

		var current_el = _getCurrent(),
			prev = current_el.prev("li");

			current_el.removeClass("active");

			if ( prev.length > 0 ) {
				prev.addClass("active");
			} else {
				gallery.find("li").last().addClass("active");
			}

		_setActiveIndicator();

	};

	function _show( index ) {

		gallery.find("li").removeClass("active").eq(index).addClass("active");
		_setActiveIndicator()

	};

	function _getActive() {

		return gallery.find(".active").index();

	};

	function _setActiveIndicator() {

		indicators.find("li").removeClass("active").eq(_getActive()).addClass("active");

	};

	function _generateIndicators() {

		var elements_num = gallery.children("li").length,
			class_active = '',
			i = 0;


		for( i;i<elements_num;i++) { 

			if ( i == _getActive() ) {
				class_active = 'active';
			} else {
				class_active = '';
			};
			indicators.append("<li class='portfolio__indicator circle circle--xxs "+class_active+"'></li>");
		};

		_setActiveIndicator();
	};

	function init() {

		_generateIndicators();

		next.on("click", _showNext );
		prev.on("click", _showPrev );

		$(document).on("click", '.portfolio__indicator', function( event ) {

			_show( $(this).index() );

		});

		$("#circlePortfolioContent").hover(function( event ) {

			$(".portfolio__content").eq(_getActive()).toggleClass("visible");
		});

		$(document).keydown(function(e){

		    if (e.keyCode == 37) { 

		       _showPrev();
		       return false;

		    } else if (e.keyCode == 39) { 

		       _showNext();
		       return false;

		    }
		});


	};

	return {
		init: init
	}
});