$(function (){


	
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