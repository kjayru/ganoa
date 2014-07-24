// JavaScript Document
$(function(){
	$('#menu').animate({top:'88px'}, 1800, 'easeOutBounce')
	$('#content #page_0').stop().animate({opacity:'show'},400);
	var act;
	$('a').click(function(){
		page=$(this).attr('href');
		if (page.substr(page.indexOf('.'),5)=='.html') { return true}
		if (page.substr(page.indexOf('#'),6)=='#page_') {
			if (page=='#page_0') {
				
			} else {
			if (act!=page) {
				$('#content article').stop().animate({opacity:'hide'},400)
				$('#menu2 li').removeClass('active');
				if (act) {
					$(act).stop().animate({opacity:'hide'},400,function(){	
							$('.nav'+page.substr(6)).addClass('active');
							Cufon.refresh();
							$(page).animate({opacity:'show'},400)
							act=page;
					});
				} else {
					$('#menu').stop().animate({opacity:'hide'},400,function(){
						$('#page_0').stop().animate({opacity:'hide'},400,function(){	
							$('header').animate({paddingTop:'32'}, 600, 'easeOutCirc');
							$('#contats').animate({paddingRight:'2'}, 600, 'easeOutCirc');
							$('#menu2').stop().animate({opacity:'show'},400);
							$('.nav'+page.substr(6)).addClass('active');
							Cufon.refresh();
							$('#content').animate({height:'580'}, 600, 'easeOutCirc', function(){
								$(page).animate({opacity:'show'},400)
								act=page;
							});
						});
					});
				}
			}}
				return false;
			} else {return true}
	})
})