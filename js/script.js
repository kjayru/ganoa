
$(document).ready(function() {
	$('figure a').hover(function(){
			$(this).find('img').stop().animate({top:'10%', left:'10%', width:'80%', height:'80%'})
		}, function(){
			$(this).find('img').stop().animate({top:'0%', left:'0%', width:'100%', height:'100%'})
		}
	)
	// for lightbox
	if ($("a[rel^='prettyPhoto']").length) {
			$(document).ready(function() {
				// prettyPhoto
				$("a[rel^='prettyPhoto']").prettyPhoto({theme:'facebook'});
			});
	}
	// for gallery
	$('.next').find('.img_act').css({opacity:'0'});
	$('.prev').find('.img_act').css({opacity:'0'});
	$('.next').hover(function(){
			$(this).find('.img_act').stop().animate({opacity:'1'})	
			$(this).find('.img').stop().animate({opacity:'0'})	
		},function(){
			$(this).find('.img_act').stop().animate({opacity:'0'})
			$(this).find('.img').stop().animate({opacity:'1'})	
		}
	)
	$('.prev').hover(function(){
			$(this).find('.img_act').stop().animate({opacity:'1'})	
			$(this).find('.img').stop().animate({opacity:'0'})						 
		},function(){
			$(this).find('.img_act').stop().animate({opacity:'0'})
			$(this).find('.img').stop().animate({opacity:'1'})	
		}
	)
	$('#slideshow').cycle({
			fx:    'scrollVert',
			timeout: 999999, // milliseconds between slide transitions (0 to disable auto advance)
			speed: 1000, // speed of the transition (any valid fx speed value)
			after:	function(){$('.pagination .active').stop().animate({height:'100%', width:'100%',top:'0px', left:'0px'},400);},  // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
			before:	function(){$('.pagination a').stop().animate({height:'0', width:'0',top:'191px', left:'191px'},400)},
			pager: '.pagination', // selector for element to use as pager container
			activePagerClass: 'active', // class name used for the active pager link
   			prev: '.prev',  // selector for element to use as event trigger for previous slide 
    		next: '.next'  // selector for element to use as event trigger for next slide 
		});
	$('.pagination .active').css({height:'100%', width:'100%',top:'0px', left:'0px'})	
	$('#contact_form').css({opacity:'1'});
	var h;
	setInterval(setMargTop,60)
	function setMargTop(){
		var new_h=$(window).height();
		if (h!=new_h) {
			h=new_h;
			if (h<750) {
				$('.main').css({marginTop:-(~~(h/2))})} 
			else {
				$('.main').css({marginTop:-375})
			}
		}
	}
 });