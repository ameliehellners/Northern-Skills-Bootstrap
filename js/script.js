$(function (){

  // Toogle class for header and nav on button click
  $("#menuIcon").click(function() {
    $("#head").toggleClass("active");
    $("#nav").toggleClass("active");
  });

  // Toogle class on header when page is scrolled down
  $(window).scroll(function() {
  	if($(this).scrollTop()>=20){
  	  $("#head").toggleClass("scrolled", true);
  	}
  	else {
  	  $("#head").toggleClass("scrolled", false);
  	}
  });

	// Bootstrap columns same height
	$( document ).ready(function() {
		var $items = $('.item-inner'), // Items
			heights; // Heights array

		// Store all item heights
		heights = $items.map(function() {
	        return $(this).height();
	    }).get(),

		// Get max height of all the items
	    maxHeight = Math.max.apply(null, heights);

	    // Apply new height
	    $items.height(maxHeight);
	});
});
