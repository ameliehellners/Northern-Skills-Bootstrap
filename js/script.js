$("#menuIcon").click(function() {
  $("#head").toggleClass("active");
  $("#nav").toggleClass("active");
});

$(window).scroll(function() {
	if($(this).scrollTop()>=20){
	  $("#head").toggleClass("scrolled", true);
	}
	else {
	  $("#head").toggleClass("scrolled", false);
	}
});
