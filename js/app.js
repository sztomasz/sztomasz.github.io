define(function () {

	function init() {

		$(".about__container").addClass("normal");
		$(".tooltip_el").on("click", show_circle );

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