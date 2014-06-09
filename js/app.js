define(function () {

	

	function init() {

		var circleBig = $(".circle--big");

		fit_circle();

		$(".about__container").addClass("normal");
		$(".tooltip_el").on("click", show_circle );
		$( window ).resize( fit_circle );


		function fit_circle() {

			var bodyWidth = $("body").outerWidth() - 40;

			if ( bodyWidth < 400 ) {
				circleBig.width(bodyWidth).height(bodyWidth);
			} else {
				circleBig.width(null).height(null);
			}
		};

		function show_circle( event ) {

			event.preventDefault();
			var element = $(this).attr("id")+"Content",
				elementExtra = $(this).attr("id")+"Extr";

			$(".tooltip_el").not(this).removeClass("clicked");
			$(this).addClass("clicked");

			$(".circle-about").addClass("hidden");
			$(".circle__content").not("#"+element).addClass("hidden").removeClass("shown");

			setTimeout(
			  function() 
			  {
			    $("#"+element).removeClass("hidden").addClass("shown");
			  }, 250);
			
			$(".circleExtr").removeClass("shown");
			$("."+elementExtra).addClass("shown");
			 
		};

			
	};

	return {
		init: init
	}
});